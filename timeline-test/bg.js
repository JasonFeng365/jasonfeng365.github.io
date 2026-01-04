const timelines = [
	{
		name: 'Academia',
		backgroundColor: '#b49ed9', intervalColor: 'brown', pointColor: 'white',
		entries: [
			{ type: 'interval', backgroundColor: '#AF2124', start: '2021-06', end: '2023-05', caption: 'Sierra College', urls: [], title: 'Computer Science, A.S.', description: 'Associate\'s for transfer to UC Davis through TAG program.', imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-05', caption: 'Email Sender', urls: [], title: 'Automation for Sierra\'s Tutor Center', description: '', imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-06', caption: 'Class Search API', urls: [], title: 'REST API wrapper for course search website', description: '', imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-09', caption: 'Started problem writing!', urls: [], title: 'Basic propagation of error calculator', description: '', imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-12', caption: 'Propagatorinator', urls: [], title: 'Basic propagation of error calculator', description: '', imageUrls: [] },
			// { type: 'point', backgroundColor: '#AF2124', date: '2023-05', caption: 'Transfer to UC Davis', urls: [], title: 'Graduated with Associate\'s degrees and 3.8 GPA', description: '', imageUrls: [] },
			

			{ type: 'interval', backgroundColor: '#022851', start: '2023-09', end: '2025-06', caption: 'UC Davis', urls: [], title: 'Computer Science and Engineering, B.S.', description: 'Highest honors, 4.0 GPA; Sole recipient of 2025 Outstanding Senior award', imageUrls: [] },
			{ type: 'point', backgroundColor: '#FFBF00', date: '2024-06', caption: 'Build Your Own Labyrinth', urls: [], title: 'Embedded Systems final project', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#FFBF00', date: '2025-05', caption: 'CSE Outstanding Senior Award', urls: [{url: "https://cs.ucdavis.edu/news/outstanding-senior-spotlight-jason-feng", title: "Outstanding Senior Spotlight: Jason Feng"}], title: 'Given award for outstanding performance in Computer Science and Engineering', description: '', imageUrls: ["https://cs.ucdavis.edu/sites/g/files/dgvnsk8441/files/styles/sf_profile/public/media/images/54538346560_40da6ecca0_k.jpg"] },



			{ type: 'interval', backgroundColor: '#2774AE', start: '2025-09', end: 'present', caption: 'UCLA', urls: [], title: 'Computer Science, M.S.', description: 'Pursuing Master\'s in computer science', imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFD100', date: '2023-05', caption: 'Sierra College', urls: [], title: 'Computer Science, A.S.', description: 'Associate\'s for transfer to UC Davis through TAG program', imageUrls: [] },
			
	// 	],
	// },
	// {
	// 	name: 'Competitive Programming',
	// 	backgroundColor: '#b49ed9', intervalColor: 'pink', pointColor: 'white',
	// 	entries: [
			// Sierra and SCPE
			{ type: 'interval', backgroundColor: '#AF2124', start: '2022-06', end: '2023-09', caption: 'Sierra CS Club', urls: [], title: 'Co-President and Competitive Programming Advisor', description: '', imageUrls: [] },
			// { type: 'interval', backgroundColor: '#AF2124', start: '2023-05', end: '2023-09', caption: 'Advisor', urls: [], title: 'Competitive Programming Advisor', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2023-11', caption: 'SCPE Fall 2023', urls: [], title: 'Lead Organizer + Sole Problemsetter', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2024-04', caption: 'SCPE Spring 2024', urls: [], title: 'Lead Organizer + Sole Problemsetter', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2024-11-20', caption: 'SCPE Fall 2024', urls: [], title: 'Advisor', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2025-04', caption: 'SCPE Spring 2025', urls: [], title: 'Sole Problemsetter', description: '', imageUrls: [] },

			// Davis, DCPC, ACPC
			{ type: 'interval', backgroundColor: '#022851', start: '2024-09', end: '2025-06', caption: 'DCPC', urls: [], title: 'Vice President', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#022851', date: '2025-04-20', caption: 'ACPC', urls: [], title: 'Problemsetter and System Ops', description: '', imageUrls: [] },

			// UCLA, club, CodeSprint

			// ICPC
			{ type: 'point', backgroundColor: '#d18147', date: '2023-02', caption: 'ICPC PacNW', urls: [], title: 'Sierra D2: Mighty Polymorphers', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#d18147', date: '2024-02', caption: 'ICPC PacNW', urls: [], title: 'Sierra D2: Team Lead - Dream Demons', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#d18147', date: '2024-11', caption: 'ICPC PacNW', urls: [], title: 'UC Davis D1: Oneirophages', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#d18147', date: '2025-05', caption: 'ICPC NAC', urls: [], title: 'UC Davis', description: '', imageUrls: [] },
			{ type: 'point', backgroundColor: '#d18147', date: '2025-11', caption: 'ICPC PacNW', urls: [], title: 'Judge', description: '', imageUrls: [] },
			{ type: 'interval', backgroundColor: '#d18147', start: '2025-06', end: 'present', caption: 'PacNW', urls: [], title: 'Judge', description: '', imageUrls: [] },
		],
	},
	{
		name: 'Experience',
		backgroundColor: '#a19ed9', intervalColor: 'orange', pointColor: 'gray',
		entries: [
			{ type: 'interval', backgroundColor: 'black', start: '2021-09', end: '2025-09', caption: 'Code Ninjas', urls: [], title: 'Competitive Programming Sensei', description: '', imageUrls: [] },
			{ type: 'interval', backgroundColor: '#AF2124', start: '2022-01', end: '2023-05', caption: 'Sierra College Tutor Center', urls: [], title: 'Peer Tutor/Academic Support Peer', description: '', imageUrls: [] },
			{ type: 'interval', backgroundColor: 'green', start: '2025-06', end: '2025-09', caption: 'AgScout', urls: [], title: 'Android Development Intern', description: 'Developed automatic file uploader for resumable overnight transfers from Android to Google Cloud Bucket', imageUrls: [] },
			{ type: 'interval', backgroundColor: '#022851', start: '2024-07', end: '2025-02', caption: 'LEPS', urls: [], title: 'Embedded Systems Intern / Research Assistant - Laboratory for Embedded and Programmable Systems', description: 'Refined Qt signal processing GUI for medical fetal oximetry systems', imageUrls: [] },


			{ type: 'interval', backgroundColor: '#C74634', start: '2026-06', end: '2026-09', caption: 'Oracle', urls: [], title: 'Software Engineering Intern', description: '', imageUrls: [] },

			
		],
	},
	{
		name: 'Projects',
		backgroundColor: '#a19ed9', intervalColor: 'blue', pointColor: 'black',
		entries: [
			{ type: 'interval', start: '2024-07', end: 'present', caption: 'CANIS', urls: [], title: 'Contest Administration System', description: 'Fullstack Java Spring app for automating UC Davis and Sierra College contests', imageUrls: [] },
			{ type: 'interval', start: '2025-01', end: '2025-06', caption: 'CycleGuard', urls: [], title: 'Gamified Smart Helmet', description: 'Cross-platform Flutter app with smart helmet interface', imageUrls: [] },
			{ type: 'point', date: '2025-01', caption: 'Backend Development', urls: [], title: 'Spring Backend', description: 'Built and documented Spring backend with clean code principles', imageUrls: [] },
			{ type: 'interval', start: '2024-05', end: '2024-06', caption: 'Build Your Own Labyrinth', urls: [], title: 'TI LaunchPad Project', description: '2.5D isomorphic maze game with C engine and AWS IoT integration', imageUrls: [] },
			{ type: 'point', date: '2024-05', caption: 'Level Editor', urls: [], title: 'Fabric.js', description: 'Connected level editor with Flask backend for full-stack application', imageUrls: [] },
		],
	}
];






const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



function makeCarouselButtons(carouselName, count) {
	let res = '<button type="button" data-bs-target="#'+carouselName+'" data-bs-slide-to="0" class="active"></button>\n'
	for (let i=1; i<count; i++) {
		res += '<button type="button" data-bs-target="#'+carouselName+'" data-bs-slide-to="'+i+'"></button>\n'
	}
	return res
}

function makeCarouselImages(imageUrls) {
	const count = imageUrls.length
	let res = '<div class="carousel-item active"><img loading="lazy" src="'+imageUrls[0]+'" class="d-block" style="width:100%"></div>\n'
	for (let i=1; i<count; i++) {
		res += '<div class="carousel-item"><img loading="lazy" src="'+imageUrls[i]+'" class="d-block" style="width:100%"></div>\n'
	}
	return res
}


function makeCarousel(entry) {
	let carouselName = "custom_carousel_name"
	return '<div id="'+carouselName+'" class="carousel slide" data-bs-ride="carousel">'+

	//Indicators/dots
	'<div class="carousel-indicators">\n'+
	makeCarouselButtons(carouselName, entry.imageUrls.length)+
	"</div>\n"+

	//The slideshow/carousel
	'<div class="carousel-inner">\n'+
	makeCarouselImages(entry.imageUrls)+
	"</div>\n"+

	//Left and right controls
	'<button class="carousel-control-prev" type="button" data-bs-target="#'+carouselName+'" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span></button>\n'+
	'<button class="carousel-control-next" type="button" data-bs-target="#'+carouselName+'" data-bs-slide="next"><span class="carousel-control-next-icon"></span></button>'+

	"</div>"
}



const vue = new Vue({
  el: '#app',
  data: {
        timelines: timelines,
		selectedEntry: timelines[0].entries[0],
		curDate: new Date(),
		percentOfFuture: 0
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
		console.log(this.percentOfFuture)

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

		// { type: 'interval', backgroundColor: '#AF2124', start: '2021-06', end: '2023-05', caption: 'Sierra College', urls: [], title: 'Computer Science, A.S.', description: 'Associate\'s for transfer to UC Davis through TAG program.', imageUrls: [] }
		// { type: 'point', backgroundColor: '#FFBF00', date: '2025-05', caption: 'CSE Outstanding Senior Award', urls: [{url: "https://cs.ucdavis.edu/news/outstanding-senior-spotlight-jason-feng", title: "Outstanding Senior Spotlight: Jason Feng"}], title: 'Given award for outstanding performance in Computer Science and Engineering', description: '', imageUrls: ["https://cs.ucdavis.edu/sites/g/files/dgvnsk8441/files/styles/sf_profile/public/media/images/54538346560_40da6ecca0_k.jpg"] },
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

			const res = `
			<div class="card card-body">
				<h5 class="card-title">${entry.caption}</h5>
				<p class="card-text">${entry.description}</p>
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