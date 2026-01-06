const vue = new Vue({
  el: '#minesweeper',
  data: {
        initBoard: genBoard()
  },
  created() {
    this.processTimelines();
    this.generateAxisLabels();
  },
  methods: {
	getIntervals(org) {
		const intervals = org.entries.filter(entry => entry.type === 'interval');
		intervals.sort((a, b) => new Date(a.start) - new Date(b.start));
		return intervals;
	},
	getPoints(org) {
		const points = org.entries.filter(entry => entry.type === 'point');
		points.sort((a, b) => new Date(a.date) - new Date(b.date));
		return points;
	},
	processTimelines() {
		const allEntries = this.timelines.flatMap(org => org.entries);
		const allDates = [];

		// Collect all dates from both intervals and points
		allEntries.forEach(entry => {
			if (entry.type === 'interval') {
				allDates.push(new Date(entry.start));
				allDates.push(entry.end === 'present' ? this.curDate : new Date(entry.end));
			} else if (entry.type === 'point') {
				allDates.push(new Date(entry.date));
			}
		});

		// Find the earliest and latest dates across all entries
		const earliest = new Date(Math.min(...allDates.map(d => d.getTime())));
		let latest = new Date(Math.max(...allDates.map(d => d.getTime())));
		if (latest < this.curDate) {
			latest = this.curDate;
		}
		const totalDuration = latest - earliest;

		

		// Percentage of timeframe that's in the future = (latest - current date) / all
		this.percentOfFuture = 100*(latest.getTime() - this.curDate.getTime()) / totalDuration
		// console.log(this.percentOfFuture)

		// Process each entry (interval or point)
		this.timelines.forEach(org => {
			org.entries.forEach(entry => {
			if (entry.type === 'interval') {
				const start = new Date(entry.start);
				const end = entry.end === 'present' ? latest : new Date(entry.end);
				entry.startPercent = ((start - earliest) / totalDuration) * 100;
				entry.widthPercent = ((end - start) / totalDuration) * 100;
			} else if (entry.type === 'point') {
				const date = new Date(entry.date);
				entry.datePercent = ((date - earliest) / totalDuration) * 100;
			}
			});
		});
	},

    generateAxisLabels() {
		const allEntries = this.timelines.flatMap(org => org.entries);
		const dates = [];

		// Collect all dates from intervals and points
		allEntries.forEach(entry => {
			if (entry.type === 'interval') {
				dates.push(new Date(entry.start));
				dates.push(entry.end === 'present' ? this.curDate : new Date(entry.end));
			} else {
				dates.push(new Date(entry.date));
			}
		});

		// Remove duplicates and sort
		const uniqueDates = [...new Set(dates)].sort((a, b) => a - b);

		// Generate 10 evenly spaced labels
		const earliest = uniqueDates[0];
		const latest = Math.max(...uniqueDates);
		const totalDuration = latest - earliest;

		// One year
		const step = 31536000000;

		const axisLabels = [];
		let i=0;
		while (1) {
			const date = new Date(earliest);
			date.setTime(earliest.getTime() + i * step);
			if (date > latest) break;
			
			const monthLabel = `${months[date.getMonth()]} ${date.getFullYear()}`;
			const percent = ((date - earliest) / totalDuration) * 100;
			axisLabels.push({ label: monthLabel, percent });
			i++;
		}

		// // Add unique dates as additional labels
		// uniqueDates.forEach(date => {
		// 	const monthLabel = `${months[date.getMonth()]} ${date.getFullYear()}`;
		// 	const percent = ((date - earliest) / totalDuration) * 100;
		// 	axisLabels.push({ label: monthLabel, percent });
		// });

		// Deduplicate and sort
		const uniqueLabels = [...new Set(axisLabels.map(l => l.label))].map(label => {
			const percent = axisLabels.find(l => l.label === label).percent;
			return { label, percent };
		});

		// Update the axis labels in the DOM
		const axisLabelsDiv = document.querySelector('.timeline-axis-labels');
		axisLabelsDiv.innerHTML = uniqueLabels
			.map(label => `<div style="position: absolute; left: ${label.percent}%;">${label.label}</div>`)
			.join('');
		},

		toggleSelect(entry) {
			if (entry.type === 'interval') {
				// entry.selected = !entry.selected;
				console.log('Selected interval:', entry.start, entry.end);
			} else {
				// Handle point selection logic
				console.log('Selected point:', entry.date);
			}
		},

		genFormattedDate(date, includeDay) {
			// console.log(date)
			if (date=="present") return date

			const options = {month: 'long', year: 'numeric', timeZone: 'UTC' }
			// const options = includeDay ? { month: 'long', year: 'numeric', day: 'numeric' } : { month: 'long', year: 'numeric' };
			if (includeDay) options['day'] = 'numeric'
			return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
		},

		genTimeframeText(entry) {
			return entry.type==='interval' ? 
				`${this.genFormattedDate(entry.start, false)} through ${this.genFormattedDate(entry.end, false)}` :
				this.genFormattedDate(entry.date, true)
		},

		// { type: 'interval', backgroundColor: '#AF2124', start: '2021-06', end: '2023-05', caption: 'Sierra College', urls: [], title: 'Computer Science, A.S.', description: 'Associate\'s for transfer to UC Davis through TAG program.', imageUrls: [] }
		// { type: 'point', backgroundColor: '#FFBF00', date: '2025-05', caption: 'CSE Outstanding Senior Award', urls: [{url: "https://cs.ucdavis.edu/news/outstanding-senior-spotlight-jason-feng", title: "Outstanding Senior Spotlight: Jason Feng"}], title: 'Given award for outstanding performance in Computer Science and Engineering', description: "", imageUrls: ["https://cs.ucdavis.edu/sites/g/files/dgvnsk8441/files/styles/sf_profile/public/media/images/54538346560_40da6ecca0_k.jpg"] },
		genPopoverTemplate(entry) {
			// let imageUrls = '';
			// if (entry.imageUrls && entry.imageUrls.length > 0) {
			// 	// imageUrls = `<button>Open Modal</button>`
			// 	// `<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open Modal</button>`
			// 	imageUrls = `<a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Open Modal</a>`

			// 	imageUrls+=`<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			// 		<div class="modal-dialog">
			// 			<div class="modal-content">
			// 			<div class="modal-header">
			// 				<h5 class="modal-title" id="myModalLabel">Modal Title</h5>
			// 				<button type="button" class="btn btn-secondary" aria-label="Close">Close</button>
			// 			</div>
			// 			<div class="modal-body">
			// 				${this.getCurrentImageCarousel()}
			// 			</div>
			// 			<div class="modal-footer">
			// 				<button type="button" class="btn btn-secondary" aria-label="Close">Close</button>
			// 			</div>
			// 			</div>
			// 		</div>
			// 	</div>`
			// }

			// console.log(imageUrls)

			// let regularUrls = ''
			// if (entry.urls && entry.urls.length > 0) {

			// 	regularUrls = 
			// 		`<div class="card-footer text-muted">
			// 		${entry.urls ? entry.urls.map(url => `<div class="card-link"><a href="${url.url}" target="_blank">${url.title}</a></div>`).join('\n') : 'None'}
			// 	</div>`
			// }

			
			// ${imageUrls}
			// ${regularUrls}

			const timeframe = this.genTimeframeText(entry)

			const res = `
			<div class="card card-body">
				<h5 class="card-title">${entry.caption}</h5>
				<h6 class="card-title">${entry.title}</h6>
				<p class="card-text">${timeframe}</p>
			</div>
			`;

			// Also, handle multiple cards

			// console.log(res)
			return res
		},

		selectEntry(entry) {
			this.selectedEntry = entry
			console.log(this.selectedEntry)
		},
		getCurrentImageCarousel() {
			return makeCarousel(this.selectedEntry)
		}

	},
	mounted: function() {
		console.log("In mounted")
		console.log(genBoard())
	}
});


// Vue.component('entry-dropdown', {
// 	props: ['entry'],
// 	template: `
// 		<h1>123123</h1>
// 	`,
// 	data() {
// 		return {
			
// 		};
// 	},
// 	methods: {
// 		toggle() {
// 			this.open = !this.open;
// 			console.log(this.getName())
// 		},
// 		getName() {
// 			// return '='+this.itemname+'='
// 			if (this.customPrefix) return this.customPrefix + "/" + this.itemname;
// 			return ""+this.itemname;
// 		}
// 	}
// });