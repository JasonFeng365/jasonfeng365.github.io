const MAX_DIFFICULTY = 12


function getWindowSizeInRem() {
	// Get the computed font size of the root HTML element in pixels
	// This value is 1rem
	const rootFontSizePixels = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Get the current viewport width and height in pixels
	const windowWidthPixels = window.innerWidth;
	const windowHeightPixels = window.innerHeight;

	// Convert pixels to rem
	const windowWidthRem = windowWidthPixels / rootFontSizePixels;
	const windowHeightRem = windowHeightPixels / rootFontSizePixels;

	return {
		width: windowWidthRem,
		height: windowHeightRem
	};
}


var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

function celebrate() {
	fire(0.25, {
		spread: 26,
		startVelocity: 55,
	});
	fire(0.2, {
		spread: 60,
	});
	fire(0.35, {
		spread: 100,
		decay: 0.91,
		scalar: 0.8
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 25,
		decay: 0.92,
		scalar: 1.2
	});
	fire(0.1, {
		spread: 120,
		startVelocity: 45,
	});
}


new Vue({
	el: '#ms',
	data: {
		rows: 0,
		cols: 0,
		mines: 22,
		difficulty: 4,
		grid: [],
		gameStarted: false,
		gameOver: false,
		clickable: false,
		won: false,
		numberColor: ["#000000", "#66a4dd", "#50a050", "#c67", "#b7d", "#a90", "#5aa", "#999", "#ccc"]
	},
	mounted() {
		let resizeTimer;
		const vue = this;

		window.addEventListener('resize', function() {
			clearTimeout(resizeTimer); // Clear the previous timer
			resizeTimer = setTimeout(function() {
				vue.onWindowResize()
			}, 300);
		});

		const btn = document.querySelector('.mouse-cursor-gradient-tracking');

		window.addEventListener('mousemove', e => {
			const x = e.clientX;
			const y = e.clientY;

			btn.style.setProperty('--x', x + 'px');
			btn.style.setProperty('--y', y + 'px');
			btn.style.setProperty('--size', '70rem');

			// console.log(x, y)
		});

		document.addEventListener("mouseleave", (event) => {
			// console.log("Mouse left window!")
			btn.style.setProperty('--size', '0px');
		})


		// this.restartGame();
		this.onWindowResize()
	},
	methods: {
		onWindowResize() {
			const rem = getWindowSizeInRem();
			this.rows = Math.floor(rem.height/5)-1
			this.cols = Math.floor(rem.width/5)

			this.restartGame()
		},
		getIcon(cell, r, c) {
			if (cell.revealed) {
				if (cell.mine) return '💣'
				// return ''
				if (cell.number) return cell.number
				return ""
			}
			if (cell.flag) return '🚩'
		},
		restartGame() {
			this.gameOver = false;
			this.gameStarted = true;
			this.mines = Math.floor(this.rows * this.cols * this.difficulty / 64)
			this.grid = this.generateGrid();
			this.clickable = true;
			this.won = false;
		},
		generateGrid() {
			const curConfig = {
				"width": this.rows,
				"height": this.cols,
				"mines": this.mines
			}
			console.log(curConfig)
			const ms = genBoard(curConfig);
			const mined = ms._mined
			const dug = ms._dug

			const grid = Array(this.rows).fill().map(() => 
				Array(this.cols).fill().map(() => ({
					revealed: false,
					flag: false,
					mine: false,
					number: 0
				}))
			);

			for (let row = 0; row < this.rows; row++) {
				for (let col = 0; col < this.cols; col++) {
					grid[row][col].mine = mined[row][col];
					grid[row][col].revealed = dug[row][col];
				}
			}

			// Calculate numbers
			for (let row = 0; row < this.rows; row++) {
				for (let col = 0; col < this.cols; col++) {
					if (!grid[row][col].mine) {
						let count = 0;
						for (let i = -1; i <= 1; i++) {
							for (let j = -1; j <= 1; j++) {
								const r = row + i;
								const c = col + j;
								if (r >= 0 && r < this.rows && c >= 0 && c < this.cols) {
									if (grid[r][c].mine) count++;
								}
							}
						}
						grid[row][col].number = count;
					}
				}
			}

			return grid;
		},
		leftClick(row, col) {
			if (this.gameOver || this.grid[row][col].flag) return;

			const cell = this.grid[row][col];
			if (cell.mine) {
				this.gameOver = true;
				this.revealAllMines();
				return;
			}
			
			if (cell.revealed) {
				this.chord(row, col);
				return;
			}

			cell.revealed = true;

			if (cell.number === 0) {
				for (let i = -1; i <= 1; i++) {
					for (let j = -1; j <= 1; j++) {
						const r = row + i;
						const c = col + j;
						if (r >= 0 && r < this.rows && c >= 0 && c < this.cols) {
							// this.leftClick(r, c);
							this.floodOpen([[r, c]])
						}
					}
				}
			}

			this.checkWin();
		},
		delay(ms) {
			return new Promise(res => setTimeout(res, ms))
		},
		// starting: array of [[row1, col1], [row2, col2], ...]
		async floodOpen(cur) {
			this.clickable = false;

			for (const coords of cur) {
				const r = coords[0];
				const c = coords[1];

				this.grid[r][c].revealed = true;
			}

			for (const coords of cur) {
				const r = coords[0];
				const c = coords[1];
				if (this.grid[r][c].mine) {
					this.gameOver = true;
					this.revealAllMines();
					return
				}
			}

			const dir = [1,0,-1,0,1];
			while (cur.length>0) {
				await this.delay(40)
				let nxt = [];
				for (const coords of cur) {
					const r = coords[0];
					const c = coords[1];
					if (this.grid[r][c].number>0) continue;

					// for (let i=0; i<4; i++) {
					// 	const dr = dir[i], dc = dir[i+1];
					for (let dr=-1; dr<=1; dr++) {
						for (let dc=-1; dc<=1; dc++) {
							const nr = r+dr, nc = c+dc;

							// Bounds
							if (nr < 0 || nr >= this.rows || nc < 0 || nc >= this.cols) continue;
							const cell = this.grid[nr][nc]
							
							// 
							if (cell.revealed) continue;
							cell.revealed = true

							if (cell.number==0) {
								nxt.push([nr, nc])
							}
								
						}
					}
				}

				cur = nxt;
			}

			this.clickable = true;

			this.checkWin()
		},
		chord(row, col) {
			let flagCount = 0;

			// Check the 3x3 area around the clicked cell
			for (let i = -1; i <= 1; i++) {
				for (let j = -1; j <= 1; j++) {
					const r = row + i;
					const c = col + j;

					if (r >= 0 && r < this.rows && c >= 0 && c < this.cols && this.grid[r][c].flag)
						flagCount++;
				}
			}

			if (this.grid[row][col].number != flagCount) return;

			let toClick = [];
			for (let i = -1; i <= 1; i++) {
				for (let j = -1; j <= 1; j++) {
					const r = row + i;
					const c = col + j;

					if (r >= 0 && r < this.rows && c >= 0 && c < this.cols) {
						if (this.grid[r][c].flag) continue;
						if (this.grid[r][c].revealed) continue;
						toClick.push([r, c])
					}
						
				}
			}

			// console.log(toClick)

			this.floodOpen(toClick);
		
		},
		revealAllMines() {
			for (let row = 0; row < this.rows; row++) {
				for (let col = 0; col < this.cols; col++) {
					if (this.grid[row][col].mine) {
						this.grid[row][col].revealed = true;
					}
				}
			}
		},
		toggleFlag(row, col) {
			if (this.gameStarted && !this.gameOver && !this.grid[row][col].revealed) {
				this.grid[row][col].flag = !this.grid[row][col].flag;
				this.checkWin();
			}
		},
		getRemainingMinesCount() {
			let flagged = 0;

			for (let row = 0; row < this.rows; row++) {
				for (let col = 0; col < this.cols; col++) {
					const cell = this.grid[row][col];
					if (cell.flag) flagged++;
				}
			}

			return this.mines - flagged;
		},
		checkWin() {
			let revealed = 0;
			let flagged = 0;

			for (let row = 0; row < this.rows; row++) {
				for (let col = 0; col < this.cols; col++) {
					const cell = this.grid[row][col];
					if (cell.revealed && !cell.mine) revealed++;
					if (cell.flag && cell.mine) flagged++;
				}
			}

			if (revealed === this.rows * this.cols - this.mines) {
				this.gameOver = true;
				// console.log('Congratulations! You won!');

				this.difficulty++;
				if (this.difficulty>MAX_DIFFICULTY) this.difficulty = MAX_DIFFICULTY;

				this.won = true;

				for (let row = 0; row < this.rows; row++) {
					for (let col = 0; col < this.cols; col++) {
						if (this.grid[row][col].mine) {
							this.grid[row][col].flag = true;
						}
					}
				}
				celebrate()
			}

			// if (revealed + flagged === this.mines + (this.rows * this.cols - this.mines)) {
			//     this.gameOver = true;
			//     alert('Congratulations! You won!');
			// }
		}
	}
});