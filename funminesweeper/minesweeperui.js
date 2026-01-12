/* 
 * Copyright (c) 2019 danamlund
 * 
 * This program is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU General Public License as published by  
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License 
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

// GUI for minesweeper game given a canvas Element and a Minesweeper Object.
function MinesweeperUi(canvas, mines, args) {
    const MAX_FREES_AMOUNT = 25;

    let o = {};
    args = args || {minWidth:3, minHeight:5, showRight:true, showBottom:true};
    let x = 0;
    let y = 0;
    let ctx = canvas.getContext("2d");
    mines = mines || new Minesweeper();
    let solveXys = {};
    if (args.initialSolves) {
        for (var initialSolve of args.initialSolves) {
            toggleSolve(initialSolve.x, initialSolve.y);
        }
    }
    let leftMouseAction = "dig"; // "dig", "flag", "solve"
    let startTime = new Date();
    let endTime = null;

    let blockWidth = Math.max(args.minWidth, mines.width + (args.showRight ? 1 : 0));
    let blockHeight = Math.max(args.minHeight, mines.height + (args.showBottom ? 1 : 0));
    let size = Math.floor(Math.min(canvas.width / blockWidth, canvas.height / blockHeight));

    function calcFont(ctx, text, width, height) {
        let oldFont = ctx.font;
        for (var i = 50; i > 8; i--) {
            ctx.font = i+"px sans-serif";
            if (ctx.measureText(text).width < width && ctx.measureText("M").width < height) {
                break;
            }
        }
        let font = ctx.font;
        ctx.font = oldFont;
        return font;
    }

    function duration(start, end) {
        function leftPad(string, length, pad) {
            string = "" + string;
            while (string.length < length) {
                string = pad + string;
            }
            return string;
        }
        
        let durationMs = end - start;
        let duration = "";
        if (durationMs >= 60 * 60 * 1000) {
            let hours = (durationMs / (60 * 60 * 1000)).toFixed(0);
            duration += leftPad(hours, 2, "0") + ".";
        }
        if (durationMs >= 60 * 1000) {
            let minutes = ((durationMs % (60 * 60 * 1000)) / (60 * 1000)).toFixed(0);
            duration += leftPad(minutes, 2, "0") + ":";
        }
        let seconds = ((durationMs / 1000) % 60).toFixed(0) ;
        duration += leftPad(seconds, 2, "0") + ",";
        let ms = ((durationMs % 1000) / 10).toFixed(0);
        duration += leftPad(ms, 2, "0");
        return duration;
    }
    function draw(canvas, mines, posx, posy) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var margin = 1;
        var size_wo_margin = size - 2*margin;
        
        let numberFont = calcFont(ctx, "M", size_wo_margin*0.70, size_wo_margin*0.70);
        let probFont = calcFont(ctx, "9.99", size_wo_margin*0.70, size_wo_margin*0.70);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        function posXMiddle(x) {
            return x * size + margin + size_wo_margin/2;
        }
        function posYMiddle(y) {
            return y * size + margin + size_wo_margin/2 + size_wo_margin * 0.1;
        }
        function posXStart(x) {
            return x * size + margin;
        }
        function posYStart(y) {
            return y * size + margin;
        }
        
        ctx.fillStyle = "#000000";
        ctx.fillRect(posXStart(posx) - 2*margin, posYStart(posy) - 2*margin,
                     size + 2*margin, size + 2*margin);
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(posXStart(posx), posYStart(posy), size_wo_margin, size_wo_margin);

        let solution = new MinesweeperSolve(mines).permutes(Object.values(solveXys));

        var flagged = 0;
        mines.forAll((x,y) => {
            let key = x+","+y;
            ctx.fillStyle = "#cccccc";
            var char = false;
            if (mines.flagged(x, y)) {
                flagged++;
                char = "🚩";
            }
            if (mines.dug(x, y)) {
                ctx.fillStyle = "#aaaaaa";
                if (mines.mined(x, y)) {
                    char = "💣";
                } else {
                    char = ""+mines.number(x, y);
                }
            } 
            if (key in solveXys) {
                ctx.fillStyle = "#ffcccc";
            }
            ctx.fillRect(posXStart(x), posYStart(y), size_wo_margin, size_wo_margin);

            ctx.font = numberFont;
            if (key in solution) {
                char = ""+solution[key]["isMine"].toFixed(2)
                ctx.font = probFont;
            }
            
            if (char && char != "0") {
                ctx.fillStyle = "#000000";
                ctx.fillText(char, posXMiddle(x), posYMiddle(y));
            }
        });

        // bottom status
        if (args.showBottom) {
            var text = "Mines: " + mines.mines
                + "  left: " + (mines.mines - flagged)
                + "  time: " + duration(startTime, endTime ? endTime : new Date());
            
            if (mines.won()) {
                text += "  WON";
            }
            if (mines.lost()) {
                text += "  LOST";
            }
            ctx.font = calcFont(ctx, text, blockWidth * size, size * 0.7);
            ctx.fillStyle = "#000000";
            ctx.fillText(text, blockWidth * size / 2, posYMiddle(blockHeight - 1));
        }

        // right column
        if (args.showRight) {
            ctx.font = numberFont;
            ctx.fillStyle = "#000000";
            ctx.fillRect(posXStart(blockWidth - 1) - margin, posYStart(0) - margin, size, 3 * size);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(posXStart(blockWidth - 1), posYStart(0), size_wo_margin, 3*size - 2*margin);
            ctx.fillStyle = "#000000";

            function highlight(x, y) {
                ctx.fillStyle = "#cccccc";
                ctx.fillRect(posXStart(x), posYStart(y), size_wo_margin, size_wo_margin);
                ctx.fillStyle = "#000000";
            }
            
            if (leftMouseAction == "dig") {
                highlight(blockWidth - 1, 0);
            }
            ctx.fillText("⛏", posXMiddle(blockWidth - 1), posYMiddle(0));

            if (leftMouseAction == "flag") {
                highlight(blockWidth - 1, 1);
            }
            ctx.fillText("🚩", posXMiddle(blockWidth - 1), posYMiddle(1));

            if (leftMouseAction == "solve") {
                highlight(blockWidth - 1, 2);
            }
            ctx.fillText("⚙", posXMiddle(blockWidth - 1), posYMiddle(2));
            ctx.fillText("⟳", posXMiddle(blockWidth - 1), posYMiddle(3));
        }
    }

    function digRemaining(x, y) {
        var number = mines.number(x, y);
        if (mines.dug(x, y) && mines.info(x, y).flagged == number) {
            for (var n of mines.neighbors(x, y)) {
                mines.dig(n.x, n.y);
            }
        }
    }
    function toggleSolve(x, y) {
        let key = x+","+y;
        if (key in solveXys) {
            delete solveXys[key];
        } else {
            solveXys[key] = {x:x, y:y};
        }
    }
    function restart() {
        mines.restart();
        startTime = new Date();
        endTime = null;
    }
    function gameover() {
        if (mines.won() || mines.lost()) {
            if (!endTime) {
                endTime = new Date();
            }
            return true;
        }
        return false;
    }
    function keyDownHandler(e) {
        if (e.key == "r") {
            restart();
            draw(canvas, mines, x, y);
            return;
        }
        
        if (gameover()) {
            return;
        }
        if (e.key == "ArrowLeft") {
            if (x > 0) {
                x--;
            }
        } else if (e.key == "ArrowRight") {
            if (x < mines.width - 1) {
                x++;
            }
        } else if (e.key == "ArrowUp") {
            if (y > 0) {
                y--;
            }
        } else if (e.key == "ArrowDown") {
            if (y < mines.height - 1) {
                y++;
            }
        } else if (e.key == "d") {
            digRemaining(x, y);
            mines.dig(x, y);
        } else if (e.key == "f") {
            mines.flag(x, y);
        } else if (e.key == "s") {
            toggleSolve(x, y);
        } else if (e.key == "1") {
            new MinesweeperSolve(mines).solveSubsetSize(1);
        } else if (e.key == "2") {
            new MinesweeperSolve(mines).solveSubsetSize(2);
        } else if (e.key == "3") {
            new MinesweeperSolve(mines).solveSubsetSize(3);
        } else if (e.key == "4") {
            let solve = new MinesweeperSolve(mines);
            solve.applySolution(solve.permuteAll(MAX_FREES_AMOUNT, true));
        } else if (e.key == "5") {
            let solve = new MinesweeperSolve(mines);
            solve.applySolution(solve.permuteAll(MAX_FREES_AMOUNT, false));
        } else {
            return;
        }
        draw(canvas, mines, x, y);
        e.preventDefault();
    }
    var prevLeftClick = 0;
    function onClick(e) {
        var rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;

        var newX = Math.floor(mouseX / size);
        var newY = Math.floor(mouseY / size);

        if (newX == blockWidth - 1) {
            if (newY == 0) {
                leftMouseAction = "dig";
            } else if (newY == 1) {
                leftMouseAction = "flag";
            } else if (newY == 2) {
                leftMouseAction = "solve";
            } else if (newY == 3) {
                restart();
            }
            draw(canvas, mines, x, y);
        }
        
        if (newX < 0 || newX >= mines.width || newY < 0 || newY >= mines.height) {
            return;
        }
        if (gameover()) {
            return;
        }
        x = newX;
        y = newY;
        if (e.which == 2 || e.which == 1 && (new Date().getTime() - prevLeftClick) < 300) {
            // middle-button or 2x click
            digRemaining(x, y);
        }
        prevLeftClick = 0;
        if (e.which == 1) {
            // left button
            if (leftMouseAction == "dig") {
                mines.dig(x, y);
            } else if (leftMouseAction == "flag") {
                mines.flag(x, y);
            } else if (leftMouseAction == "solve") {
                toggleSolve(x, y);
            }
            prevLeftClick = new Date().getTime();
        } else if (e.which == 3) { // right button
            mines.flag(x, y);
            if (mines.dug(x, y)) {
                toggleSolve(x, y);
            }
        }
        draw(canvas, mines, x, y);
        e.preventDefault();
    }

    o.cleanup = function() {
        canvas.removeEventListener("keydown", keyDownHandler);
        canvas.removeEventListener("click", onClick);
        canvas.removeEventListener("contextmenu", onClick);
    };
    
    canvas.addEventListener("keydown", keyDownHandler, false);
    canvas.addEventListener("click", onClick, false);
    canvas.addEventListener("contextmenu", onClick, false);
    draw(canvas, mines, x, y);
    
    return o;
}
