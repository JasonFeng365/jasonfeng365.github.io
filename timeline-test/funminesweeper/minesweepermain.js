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


// Fills a div with a minesweeper game and controls to generate fun games.

let MinesweeperMain_maximizers =
    [{ name:"multi blocks",
       description:"more moves that require multiple pieces of information.",
       scorer:function calculateScore(solveScore) {
           return solveScore.permute2 + solveScore.permute3 * 2 + solveScore.permuteAll * 3;
       }
     },
     { name:"2 blocks",
       description:"only moves that require two pieces of information.",
       scorer:function calculateScore(solveScore) {
           return solveScore.permute2;
       },
       doNotCheckMinesLeft:true
     },
     { name:"3 blocks",
       description:"only moves that require three pieces of information.",
       scorer:function calculateScore(solveScore) {
           return solveScore.permute3;
       },
       doNotCheckMinesLeft:true
     },
     { name:">3 blocks",
       description:"only moves that require four or more pieces of information.",
       scorer:function calculateScore(solveScore) {
           return solveScore.permuteAll;
       },
       doNotCheckMinesLeft:true
     },
     { name:"not remaining mines",
       description:`rewards 2-blocks and 3-blocks but
          not &gt;3-blocks. This usually removes the endings requiring
          you to map out 5 remaining mines.`,
       scorer:function calculateScore(solveScore) {
           return solveScore.permute2 + solveScore.permute3 * 2 + solveScore.permuteAll * 3;
       },
       doNotCheckMinesLeft:true
     },
     { name:"steps",
       description:"more iterations of auto-solver needed to solve a game.",
       scorer:function calculateScore(solveScore) {
           return solveScore.steps;
       }
     },
     { name:"high numbers",
       description:"blocks with high numbers have higher scores.",
       scorer:function calculateScore(solveScore) {
           score = 0;
           for (let i = 4; i <= 8; i++) {
               score += solveScore.numbersCounts[i] * solveScore.numbersCounts[i];
           }
           return score;
       }
     },
     { name:"few guesses",
       description:"few number of guesses solver had to make.",
       scorer:function calculateScore(solveScore) {
           return - solveScore.unsolveable;
       },
       guess:true
     },
     // { name:"guessable",
     //   description:"blocks where the calculable mine probability is corrct.",
     //   scorer:function calculateScore(solveScore) {
     //       return solveScore.guessable;
     //   },
     //   guess:true
     // },
    ];



function genBoard(configParams) {
	let config = {
		"width": configParams["width"],
		"height": configParams["height"],
		"mines": configParams["mines"],
		"blocks": 0,
		"iterations": 3,
		"seed": null,
		"canvaswidth": 500,
		"canvasheight": 500,
		"noguessing": true,
		"verbose": false,
		"verbose2": false,
		"maxSelectIndex": 0
	}
	console.log(config)
    const MAX_FREES_AMOUNT = 20;


    let minesweeperui = null;
    let generating = false;


    function getUrlSeed(mines) {
        return "?"
            + mines.width + "_"
            + mines.height + "_"
            + mines.mines + "_"
            + mines.blocks + "_"
            + mines.seed;
    }

    function show(mines) {

        if (minesweeperui) {
            minesweeperui.cleanup();
        }
    }

    function solveScoreString(solveScore, maximizer, noGuessing) {
        return "1s=" + solveScore.permute1
            + ", 2s=" + solveScore.permute2
            + ", 3s=" + solveScore.permute3
            + ", alls=" + solveScore.permuteAll
            + ", steps=" + solveScore.steps
            + ", unsolveables=" + solveScore.unsolveable
            + ", numbers=" + JSON.stringify(solveScore.numbersCounts)
            + ", maximize=" + maximizer.name
            + ", score=" + calculateScore(solveScore, maximizer, noGuessing);
    }

    function calculateScore(solveScore, maximizer, noGuessing) {
        let score = maximizer.scorer(solveScore);
        if (!maximizer.guess && noGuessing && solveScore.unsolveable >= 1) {
            score = -score - 1;
        }
        return score;
    }

    function generate() {
        // if (generating) {
        //     return;
        // }
        generating = true;

        let width = config.width;
        let height = config.height;
        let minesAmount = config.mines;
        let blocks = config.blocks;
        let iterations = config.iterations;
        let seed = config.seed;
        let noGuessing = config.noguessing;
        

        let maximizer = MinesweeperMain_maximizers[config.maxSelectIndex]

        if (seed) {
            let mines = new Minesweeper( { width: width,
                                           height:height,
                                           mines:minesAmount,
                                           blocks:blocks,
                                           seed:seed } );
            mines.restart();
            show(mines);
            generating = false;
        } else {

            let bestSolveScore = null;
            let bestScore = -1;
            let bestMines = null;
            let i = 0;
            let stopped = false;
            function doStop() {
                stopped = true;
            }

            function done(mines) {
                mines.restart();
                show(mines);
                generating = false;

				return mines
            }

            function iterate() {
                if (stopped) {
                    done(bestMines);
                    return bestMines;
                }

                mines = new Minesweeper( { width: width,
                                                 height:height,
                                                 mines:minesAmount,
                                                 blocks:blocks,
                                                 seed:seed } );
                let solveScore = new MinesweeperSolve(mines)
                    .solveScore(MAX_FREES_AMOUNT, maximizer.guess, maximizer.doNotCheckMinesLeft);
                let score = calculateScore(solveScore, maximizer, noGuessing);

                if (bestSolveScore == null || score > bestScore) {
                    bestSolveScore = solveScore;
                    bestScore = score;
                    bestMines = mines;
                }
                i++;
                if (i < iterations) {
                    // setTimeout(iterate, 0);
					return iterate()
                } else {
                    return done(bestMines);
                }
            }

            // setTimeout(iterate, 0);
			return iterate();
        }
    }
    return generate();
}
