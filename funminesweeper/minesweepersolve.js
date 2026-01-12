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

// Automaticaly solve a minesweeper game (of Object type Minesweeper).
function MinesweeperSolve(mines) {
    let o = {};

    const MAX_FREES_AMOUNT = 25;

    function xyKey(xy) {
        return xy.x + "," + xy.y;
    }

    function countBits(n) {
        let count = 0;
        while (n != 0) {
            n = n & (n - 1);
            count++;
        }
        return count;
    }

    function preparePermutes(infoXys) {
        let frees = [];
        let freesToIndex = {};
        let constraints = [];
        for (const infoXy of infoXys) {
            if (mines.dug(infoXy)) {
                const info = mines.info(infoXy);
                if (info.empty >= 1) {
                    let infoXyFreeIndices = [];
                    for (const xy of mines.neighbors(infoXy)) {
                        if (mines.free(xy)) {
                            if (!(xyKey(xy) in freesToIndex)) {
                                frees.push(xy);
                                freesToIndex[xyKey(xy)] = frees.length - 1;
                            }
                            infoXyFreeIndices.push(freesToIndex[xyKey(xy)]);
                        }
                    }
                    if (infoXyFreeIndices.length >= 1) {
                        let constraint = {};
                        constraint["expects"] = info.mined - info.flagged;
                        constraint["andNumber"] = 0;
                        for (const index of infoXyFreeIndices) {
                            constraint["andNumber"] += 1 << index;
                        }
                        constraints.push(constraint);
                    }
                }
            }
        }
        return { frees:frees, constraints:constraints };
    }

    function doPermutes(frees, constraints, doNotCheckMinesLeft) {
        if (frees.length > MAX_FREES_AMOUNT) {
            throw "Too many frees";
        }

        const minesNumberMax = 1 << frees.length;
        let indexIsMineCounts = [];
        let indexIsNotMineCounts = [];
        for (let i = 0; i < frees.length; i++) {
            indexIsMineCounts[i] = 0;
            indexIsNotMineCounts[i] = 0;
        }

        let maxMinesSeen = 0;
        for (let minesNumber = 0; minesNumber < minesNumberMax; minesNumber++) {
            let valid = true;
            for (const constraint of constraints) {
                if (countBits(minesNumber & constraint["andNumber"]) != constraint["expects"]) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                let minesSeen = 0;
                for (let i = 0; i < frees.length; i++) {
                    if ((minesNumber & (1 << i)) > 0) {
                        minesSeen++;
                    }
                }
                if (doNotCheckMinesLeft || minesSeen <= mines.minesLeft()) {
                    if (minesSeen > maxMinesSeen) {
                        maxMinesSeen = minesSeen;
                    }
                    for (let i = 0; i < frees.length; i++) {
                        if ((minesNumber & (1 << i)) > 0) {
                            indexIsMineCounts[i]++;
                        } else {
                            indexIsNotMineCounts[i]++;
                        }
                    }
                }
            }
        }
        let xyToMineProbability = {};
        for (let i = 0; i < frees.length; i++) {
            xyToMineProbability[xyKey(frees[i])] = {
                "xy": frees[i],
                "isMine": indexIsMineCounts[i]
                    / (indexIsMineCounts[i] + indexIsNotMineCounts[i])};
        }
        return xyToMineProbability;
    }

    function addAllFrees(frees) {
        let freesMap = {}
        for (const free of frees) {
            freesMap[xyKey(free)] = true;
        }
        for (const xy of mines.all()) {
            if (mines.free(xy) && !(xyKey(xy) in freesMap)) {
                frees.push(xy);
            }
        }
    }
    o.permutes = function(infoXys, doNotCheckMinesLeft, includeAllFrees) {
        let prepare = preparePermutes(infoXys);
        let frees = prepare.frees;
        let constraints = prepare.constraints;

        if (includeAllFrees) {
            o.addAllFrees(frees);
        }

        return doPermutes(frees, constraints, doNotCheckMinesLeft);
    };

    o.allInfoXys = function() {
        let infoXys = [];
        for (const xy of mines.all()) {
            if (mines.dug(xy) && mines.info(xy).empty >= 1) {
                infoXys.push(xy);
            }
        }
        return infoXys;
    }


    o.permuteAll = function(maxFreesAmount, doNotCheckMinesLeft) {
        maxFreesAmount = maxFreesAmount || MAX_FREES_AMOUNT
        let allInfoXys = o.allInfoXys();
        let prepare = preparePermutes(allInfoXys);
        let frees = prepare.frees;
        let constraints = prepare.constraints;

        if (!doNotCheckMinesLeft) {
            addAllFrees(frees);
        }

        if (frees.length > maxFreesAmount) {
            return {};
        }
        return doPermutes(frees, constraints, doNotCheckMinesLeft);
    }

    function subsetsOfSize(subsetSize) {
        let possibles = [];
        for (const xy of mines.all()) {
            if (mines.dug(xy) && mines.info(xy).empty >= 1) {
                possibles.push(xy);
            }
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

        return subsets(possibles, 0, subsetSize);
    };

    o.permutesSubsetSize = function(subsetSize, doNotCheckMinesLeft, addAllFrees) {
        for (let subset of subsetsOfSize(subsetSize)) {
            let xyToMineProbability = o.permutes(subset, doNotCheckMinesLeft, addAllFrees);
            for (xySolution of Object.values(xyToMineProbability)) {
                if (xySolution.isMine == 0.0 || xySolution.isMine == 1.0) {
                    return xyToMineProbability;
                }
            }
        }
        return {};
    };

    function filterInfoXys(xys) {
        let output = [];
        for (let xy of xys) {
            if (mines.dug(xy) && mines.info(xy).empty >= 1) {
                output.push(xy);
            }
        }
        return output;
    }

    // whether the guess probability of freeXy block is correct.
    // true: guess is current
    // false: guess is incorrect
    // undefined: 50/50 guess that a user would not make
    o.guessIsCorrect = function(freeXy, radius) {
        if (!mines.free(freeXy)) {
            throw "expects free blocks";
        }
        radius = radius || 3;
        let infoXys = filterInfoXys(mines.circleSearchXy(freeXy, radius));
        let xyToMineProbability = o.permutes(infoXys, true, false);
        let mineProbability = xyToMineProbability[xyKey(freeXy)];
        if (mineProbability > 0.45 && mineProbability < 0.55) {
            return undefined;
        } else {
            let isMine = mines.mined(freeXy);
            return mineProbability > 0.5 == isMine;
        }
    };
    // whether the guess probbilities of all free blocks are correct
    o.allGuessesAreCorrect = function(fillWithCorrectGuessXys, radius) {
        let seenTrue = false;
        for (let xy of mines.all()) {
            if (mines.free(xy)) {
                let guess = guessIsCorrect(xy, radius);
                if (guess == false) {
                    return false;
                } else if (guess == true) {
                    seenTrue = true;
                    fillWithCorrectGuessXys.push(xy);
                }
            }
        }
        return seenTrue;
    }

    o.applySolution = function(xyToMineProbability) {
        let moves = 0;
        for (xySolution of Object.values(xyToMineProbability)) {
            if (xySolution.isMine == 0.0) {
                mines.dig(xySolution.xy);
                moves++;
            }
            if (xySolution.isMine == 1.0) {
                mines.flag(xySolution.xy);
                moves++;
            }
        }

        return moves;
    };

    o.solveScore = function(maxFreesAmount, guess, doNotCheckMinesLeft) {
        scores = {};
        scores.permute1 = 0;
        scores.permute2 = 0;
        scores.permute3 = 0;
        scores.permuteAll = 0;
        scores.guessable = 0;
        scores.unsolveable = 0;
        scores.steps = 0;
        scores.numbersCounts = [];

        while (true) {
            scores.steps++;
            let moves = o.applySolution(o.permutesSubsetSize(1, doNotCheckMinesLeft));
            if (moves) {
                scores.permute1 += moves;
                continue;
            }
            moves = o.applySolution(o.permutesSubsetSize(2, doNotCheckMinesLeft));
            if (moves) {
                scores.permute2 += moves;
                continue;
            }
            moves = o.applySolution(o.permutesSubsetSize(3, doNotCheckMinesLeft));
            if (moves) {
                scores.permute3 += moves;
                continue;
            }
            moves = o.applySolution(o.permuteAll(maxFreesAmount, doNotCheckMinesLeft));
            if (moves) {
                scores.permuteAll += moves;
                continue;
            }


            if (guess) {
                let guesses = 0;
                for (const xy of mines.all()) {
                    if (mines.dug(xy) && mines.info(xy).empty >= 1) {
                        for (const xy2 of mines.neighbors(xy)) {
                            if (mines.free(xy2)) {
                                if (mines.mined(xy2)) {
                                    mines.flag(xy2);
                                } else {
                                    mines.dig(xy2);
                                }
                                guesses++;
                            }
                        }
                        if (guesses >= 1) {
                            break;
                        }
                    }
                }
                if (guessed) {
                    scores.unsolveable += guesses;
                    continue;
                } else {
                    let guessed2 = false;
                    for (const xy of mines.all()) {
                        if (mines.free(xy)) {
                            if (mines.mined(xy2)) {
                                mines.flag(xy2);
                            } else {
                                mines.dig(xy2);
                            }
                            guessed2 = true;
                            break;
                        }
                    }
                    if (guessed2) {
                        scores.unsolveable++;
                        continue;
                    }
                }
            } else {
                let frees = 0;
                for (const xy of mines.all()) {
                    if (mines.free(xy)) {
                        frees++;
                    }
                }
                scores.unsolveable += frees;
            }

            break;
        }

        for (let i = 0; i <= 8; i++) {
            scores.numbersCounts[i] = 0;
        }
        for (let xy of mines.all()) {
            scores.numbersCounts[mines.number(xy)]++;
        }

        return scores;
    };

    o.solve = function() {
        return o.solveScore(maxFreesAmount).unsolveable == 0;
    };

    o.solveSubsetSize =  function(subsetSize) {
        let didWork = true;
        while (didWork) {
            didWork = false;
            for (let i = 1; i <= subsetSize; i++) {
                if (o.applySolution(o.permutesSubsetSize(i))) {
                    didWork = true;
                    break;
                }
            }
        }
        return mines.won();
    }

    return o;
}
