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

// Object defining a Minesweeper game. How to dig/flag, when game is won/lost.
function Minesweeper(args) {
    this.args = args || {};
    seed = this.args.seed || Math.floor(Math.random() * 2147483647);
    seed = seed % 2147483647;
    if (seed <= 0) {
        seed += 2147483646;
    }
    function rand() {
        return seed = seed * 16807 % 2147483647;
    }

    this.width = this.args.width || 16;
    this.height = this.args.height || 16;
    this.mines = this.args.mines || 40;
    this.blocks = this.args.blocks || 0;
    this.seed = seed;
    this._mined = [];
    this._flagged = [];
    this._dug = [];
    this._blocked = [];
    this.initialDugs = this.args.initialDugs;
    this.initialFlags = this.args.initialFlags;
    this.initialMined = this.args.initialMined;

    // Initializes/clears game
    this.clear = function() {
        for (var x = 0; x < this.width; x++) {
            this._mined[x] = [];
            this._flagged[x] = [];
            this._dug[x] = [];
            this._blocked[x] = [];
            for (var y = 0; y < this.height; y++) {
                this._mined[x][y] = false;
                this._flagged[x][y] = false;
                this._dug[x][y] = false;
                this._blocked[x][y] = false;
            }
        }
    }

    this.clearDugAndFlagged = function() {
        for (var x = 0; x < this.width; x++) {
            this._dug[x] = [];
            this._flagged[x] = [];
            for (var y = 0; y < this.height; y++) {
                this._dug[x][y] = false;
                this._flagged[x][y] = false;
            }
        }
    }

    this.clearMined = function() {
        for (var x = 0; x < this.width; x++) {
            this._mined[x] = [];
            for (var y = 0; y < this.height; y++) {
                this._mined[x][y] = false;
            }
        }
    }

    this.clearBlocked = function() {
        for (var x = 0; x < this.width; x++) {
            this._blocked[x] = [];
            for (var y = 0; y < this.height; y++) {
                this._blocked[x][y] = false;
            }
        }
    }

    // Places mines randomly
    this.placeMines = function() {
        this.clearMined();

        if (this.args.initialMined) {
            this.mines = 0;
            for (let xy of this.args.initialMined) {
                this._mined[xy.x][xy.y] = true;
                this.mines++;
            }
            return;
        }
        
        var count = 10000;
        for (let blocksLeft = this.blocks; blocksLeft > 0;) {
            var x = rand() % this.width;
            var y = rand() % this.height;
            if (!this._blocked[x][y]) {
                this._blocked[x][y] = true;
                blocksLeft--;
            }
            if (count-- <= 0) {
                return;
            }
        }
        for (var minesLeft = this.mines; minesLeft > 0;) {
            var x = rand() % this.width;
            var y = rand() % this.height;
            if (!this._mined[x][y] && !this._blocked[x][y]) {
                this._mined[x][y] = true;
                minesLeft--;
            }
            if (count-- <= 0) {
                this.mines -= minesLeft;
                return;
            }
        }
    };

    this.copyArgs = function() {
        return JSON.parse(JSON.stringify(this.args));
    };

    function subsetsMaxSize(elements, picksLeft) {
        let out = [];
        for (let i = 1; i <= picksLeft; i++) {
            for (let subset of subsetsEqualSize(elements, i)) {
                out.push(subset);
            }
        }
        return out;
    }
    function subsetsEqualSize(elements, picksLeft) {
        return subsets(elements, 0, picksLeft);
    }
    function subsets(elements, fromI, picksLeft) {
        if (picksLeft == 0) {
            return [];
        }
        let out = [];
        for (let i = fromI; i < elements.length; i++) {
            let set = [ elements[i] ];
            if (picksLeft == 1) {
                out.push(set);
            } else {
                for (let subset of subsets(elements, i + 1, picksLeft - 1)) {
                    out.push(set.concat(subset));
                }
            }
        }
        return out;
    }

    this.copy = function() {
        let args2 = this.copyArgs();
        args2.dontInit = true;
        let copy = new Minesweeper(args2);
        for (let x = 0; x < this.width; x++) {
            for (let y = 0; y < this.height; y++) {
                copy._mined[x][y] = this._mined[x][y];
                copy._flagged[x][y] = this._flagged[x][y];
                copy._dug[x][y] = this._dug[x][y];
                copy._blocked[x][y] = this._blocked[x][y];
            }
        }
        copy.initialDugs = this.initialDugs ? this.initialDugs.splice() : undefined;
        copy.initialFlags = this.initialFlags ? this.initialFlags.splice() : undefined;
        return copy;
    };

    this.allMinePlacements = function() {
        let xys = this.all();
        let out = [];
        for (const placement of subsetsEqualSize(xys, this.mines)) {
            let mines = this.copy();
            mines.clearMined();
            for (xy of placement) {
                mines._mined[xy.x][xy.y] = true;
            }
            out.push(mines);
        }

        return out;
    };

    this.allBlockPlacements = function() {
        let xys = this.all();
        let out = [];
        for (const placement of subsetsEqualSize(xys, this.blocks)) {
            let mines = this.copy();
            mines.clearBlocked();
            for (xy of placement) {
                mines._blocked[xy.x][xy.y] = true;
            }
            out.push(mines);
        }

        return out;
    }

    // List of {x:x, y:y} of all unconnected '0' blocks.
    this.allInitialDugs = function() {
        let out = [];
        for (const xy of this.zeroNumbersGroups()) {
            let mines = this.copy();
            mines.initialDugs = [ xy ];
            mines.restart();
            out.push(mines);
        }
        return out;
    }

    // List of all subsets of allInitialDugs()
    this.allInitialDugsSubsets = function() {
        let initialDugs = this.zeroNumbersGroups();

        let out = [];
        for (const subset of subsetsMaxSize(initialDugs, initialDugs.length)) {
            let mines = this.copy();
            mines.initialDugs = subset;
            mines.restart();
            out.push(mines);
        }
        return out;
    }

    this.dug = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        return this._dug[x][y];
    };

    this.flagged = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        return this._flagged[x][y];
    };

    this.mined = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        return this._mined[x][y];
    };

    this.blocked = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        return this._blocked[x][y];
    };

    this.free = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        return !this.dug(x, y) && !this.flagged(x, y) && !this.blocked(x, y);
    };

    // List of {x:x,y:y} blocks neighboring the given block.
    this.neighbors = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        var out = [];
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                if (x+dx >= 0 && x+dx < this.width
                    && y+dy >= 0 && y+dy < this.height
                    && !(dx == 0 && dy == 0)
                    && !this.blocked(x+dx, y+dy)) {
                    out.push({x:x+dx, y:y+dy});
                }
            }
        }
        return out;
    }
    this.circleSearchXy = function(xy, radius) {
        return circleSearch(xy.x, xy.y, radius);
    }
    this.circleSearch = function(x, y, radius) {
        let output = [{x:x, y:y}];
        let seenSet = {};

        let queue = [{x:x, y:y}];
        let queueNext = [];
        for (let r = 1; r <= radius; r++) {
            for (let xy of queue) {
                let xy = queue.pop();
                for (let xy2 of this.neighbors(xy)) {
                    let key = xyKey(xy2);
                    if (!seenSet[key]) {
                        seenSet[key] = true;
                        output.push(xy2);
                        queueNext.push(xy2);
                    }
                }
            }
            queue = queueNext;
            queueNext = [];
        }
        return output;
    }

    this.forAll = function(fun) {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                if (!this.blocked(x, y)) {
                    fun(x, y);
                }
            }
        }
    }
    this.all = function() {
        var out = [];
        this.forAll((x,y) => out.push({x:x, y:y}));
        return out;
    };

    this.dig = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        if (!this.dug(x, y) && !this.flagged(x, y) && !this.blocked(x, y)) {
            this._dug[x][y] = true;

            if (!this.mined(x, y) && this.number(x, y) == 0) {
                for (var n of this.neighbors(x, y)) {
                    this.dig(n.x, n.y);
                }
            }
        }
    };

    this.flag = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        if (!this.dug(x, y) && !this.blocked(x, y)) {
            this._flagged[x][y] = !this._flagged[x][y];
        }
    }
    this.lost = function() {
        for (var p of this.all()) {
            if (this.dug(p.x, p.y) && this.mined(p.x, p.y)) {
                return true;
            }
        }
        return false;
    }
    this.won = function() {
        for (var p of this.all()) {
            if (!this.dug(p.x, p.y) && !this.mined(p.x, p.y)) {
                return false;
            }
        }
        return !this.lost();
    }
    this.minesLeft = function() {
        var flagged = 0;
        this.forAll((x,y) => {
            if (this.flagged(x, y)) {
                flagged++;
            }});
        return this.mines - flagged;
    }
    this.info = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        var out = {};
        out.neighbors = 0;
        out.mined = 0;
        out.dug = 0;
        out.flagged = 0;
        out.empty = 0;
        for (var n of this.neighbors(x, y)) {
            out.neighbors++;
            if (this.mined(n.x, n.y)) {
                out.mined++;
            }
            if (this.dug(n.x, n.y)) {
                out.dug++;
            }
            else if (this.flagged(n.x, n.y)) {
                out.flagged++;
            }
            else {
                out.empty++;
            }
        }
        return out;
    }
    // Number of mines around given block.
    this.number = function(x, y) {
        if (y === undefined) {
            y = x.y;
            x = x.x;
        }
        return this.info(x, y).mined;
    }

    this.matrix = function() {
        var matrix = [];
        for (var x = 0; x < this.width; x++) {
            matrix[x] = [];
        }
        out = {};
        out.set = function(x, y) {
            if (y === undefined) {
                y = x.y;
                x = x.x;
            }
            matrix[x][y] = true;
        }
        out.get = function(x, y) {
            if (y === undefined) {
                y = x.y;
                x = x.x;
            }
            return matrix[x][y];
        }
        return out;
    }

    this.zeroNeighbors = function(x, y, marked) {
        if (!marked) {
            marked = this.matrix();
        }
        if (marked.get(x, y)) {
            return 0;
        }
        marked.set(x, y);
        if (!this.mined(x, y) && this.number(x, y) == 0) {
            zeros = 1;
            for (var n of this.neighbors(x, y)) {
                zeros += this.zeroNeighbors(n.x, n.y, marked);
            }
            return zeros;
        } else {
            return 0;
        }
    };

    this.highestZeroNeighbors = function() {
        var highest = { x:-1, y:-1, zeros:0 };
        this.forAll((x,y) => {
            var zeros = this.zeroNeighbors(x, y);
            if (zeros > highest.zeros) {
                highest.x = x;
                highest.y = y;
                highest.zeros = zeros;
            }
        });
        if (highest.x == -1) {
            return null;
        } else {
            return highest;
        }
    };

    this.zeroNumbersGroups = function() {
        let groups = [];
        let marked = this.matrix();
        for (const xy of this.all()) {
            if (!marked.get(xy)) {
                if (this.zeroNeighbors(xy.x, xy.y, marked) >= 1) {
                    groups.push(xy);
                }
            }
        }
        return groups;
    }

    this.start = function() {
        if (this.initialDugs || this.initialFlags) {
            if (this.initialDugs) {
                for (let xy of this.initialDugs) {
                    this.dig(xy);
                }
            }
            if (this.initialFlags) {
                for (let xy of this.initialFlags) {
                    this.flag(xy);
                }
            }
        } else {
            highest = this.highestZeroNeighbors();
            if (highest) {
                this.dig(highest.x, highest.y);
            }
        }
    }

    this.restart = function() {
        this.clearDugAndFlagged();
        this.start();
    }

    this.clear();
    if (!this.args.dontInit) {
        if (!this.args.mined) {
            this.placeMines();
        }
        this.start();
    }

    return this;
}
