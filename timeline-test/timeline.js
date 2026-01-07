const timelines = [
	{
		name: 'Academia',
		backgroundColor: '#b49ed9', intervalColor: 'brown', pointColor: 'white',
		entries: [
			{ type: 'interval', backgroundColor: '#AF2124', start: '2021-06', end: '2023-05', caption: 'Sierra College', urls: [], title: 'Computer Science, A.S.', description: "Associate's for transfer to UC Davis through TAG program.", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/f2023/0.jpg"] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-05', caption: 'Email Sender', urls: [], title: 'Automation for Sierra\'s Tutor Center', description: "", imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-06', caption: 'Class Search API', urls: [], title: 'REST API wrapper for course search website', description: "", imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-09', caption: 'Started problem writing!', urls: [], title: 'Basic propagation of error calculator', description: "", imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFFFFF', date: '2022-12', caption: 'Propagatorinator', urls: [], title: 'Basic propagation of error calculator', description: "", imageUrls: [] },
			// { type: 'point', backgroundColor: '#AF2124', date: '2023-05', caption: 'Transfer to UC Davis', urls: [], title: 'Graduated with Associate\'s degrees and 3.8 GPA', description: "", imageUrls: [] },
			

			{ type: 'interval', backgroundColor: '#022851', start: '2023-09', end: '2025-06', caption: 'UC Davis', urls: [{url: "https://cs.ucdavis.edu/news/outstanding-senior-spotlight-jason-feng", title: "Outstanding Senior Spotlight: Jason Feng"}], title: 'Computer Science and Engineering, B.S.', description: "Bachelor's in Computer Science and Engineering. Graduated with highest honors, 4.0 GPA.\n\nSole recipient of CSE 2025 Outstanding Senior award; I'm not CSE Major, I'm Major CSE", imageUrls: ["images/academia/ceremony_all.jpg", "images/academia/ceremony_picture.jpg", "images/academia/ceremony_ghosal.jpg", "images/academia/ceremony_mom.jpg", "images/academia/ceremony_plaque.jpg"] },
			// { type: 'point', backgroundColor: '#FFBF00', date: '2024-06-05', caption: 'Build Your Own Labyrinth', urls: [], title: 'Embedded Systems final project', description: "", imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFBF00', date: '2025-05-28', caption: 'CSE Outstanding Senior Award', urls: [{url: "https://cs.ucdavis.edu/news/outstanding-senior-spotlight-jason-feng", title: "Outstanding Senior Spotlight: Jason Feng"}], title: 'Given award for outstanding performance in Computer Science and Engineering', description: "", imageUrls: ["https://cs.ucdavis.edu/sites/g/files/dgvnsk8441/files/styles/sf_profile/public/media/images/54538346560_40da6ecca0_k.jpg"] },



			{ type: 'interval', backgroundColor: '#2774AE', start: '2025-09', end: 'present', caption: 'UCLA', urls: [], title: 'Computer Science, M.S.', description: "Pursuing Master's in computer science.", imageUrls: [] },
			// { type: 'point', backgroundColor: '#FFD100', date: '2023-05', caption: 'Sierra College', urls: [], title: 'Computer Science, A.S.', description: 'Associate\'s for transfer to UC Davis through TAG program', imageUrls: [] },
			
	// 	],
	// },
	// {
	// 	name: 'Competitive Programming',
	// 	backgroundColor: '#b49ed9', intervalColor: 'pink', pointColor: 'white',
	// 	entries: [
			// Sierra and SCPE
			{ type: 'interval', backgroundColor: '#AF2124', start: '2022-06', end: '2023-09', caption: 'Sierra CS Club', urls: [{url: "https://jasonfeng365.github.io/scpe/", title: "Sierra Competitive Programming Exhibition"}, {url: "https://jasonfeng365.github.io/challenges/?name=scpe", title: "Original SCPE Problems"}, {url: "https://jasonfeng365.github.io/scpe/past-events/", title: "SCPE Past Events and Gallery"}], title: 'Co-President and Competitive Programming Advisor', description: "I was the founder and problemsetter for the Sierra Competitive Programming Exhibition, a beginner-friendly contest for future contestants who want to explore competitive programming! Contests are hosted at Sierra College's campus, and are open to any current college or under student willing to learn. As of the 2023-2025 season, we've hosted 4 SCPE events with 30 original problems.\n\nI hosted the first ever SCPE in November 2023, with 10 problems I wrote myself. Contests are in-person, with an online option for people who cannot make it. Participation is completely free for everyone, and all current students are welcome to attend. Breakfast and lunch will be provided, and prizes are given out at the end of the contest, as well as a problem review session where I explain solutions to every single problem.\n\nUnlike most other contests, I walk around the contest room and give hints to contestants, to help push them along the problem-solving process. The goal of the SCPE is for contestants to not necessarily participate for bragging rights or prizes, but rather to have fun and explore new approaches to problem solving.", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/s2025/0.jpg", "https://jasonfeng365.github.io/scpe/past-events/f2023/3.jpg", "https://jasonfeng365.github.io/scpe/past-events/s2024/5.jpg", "https://jasonfeng365.github.io/scpe/past-events/s2024/7.jpg", "https://jasonfeng365.github.io/scpe/past-events/s2024/9.jpg", "https://jasonfeng365.github.io/scpe/past-events/f2024/11.jpg", "https://jasonfeng365.github.io/scpe/past-events/s2024/2.jpg", "images/academia/scpe-goofy.jpg"] },
			// { type: 'interval', backgroundColor: '#AF2124', start: '2023-05', end: '2023-09', caption: 'Advisor', urls: [], title: 'Competitive Programming Advisor', description: "", imageUrls: [] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2023-11-04', caption: 'SCPE Fall 2023', urls: [{url: "https://www.hackerrank.com/contests/scpe-fall-2023/challenges", title: "SCPE Fall 2023 Problemset"}], title: 'Lead Organizer + Sole Problemsetter', description: "Our first ever SCPE was a huge success! Over 30 participants took part in the contest, with 64 total problem submissions. This was a huge opportunity for contestants to practice their critical thinking and problem-solving skills, along with being a huge opportunity for Sierra’s Coding Club officers to practice leadership.\n\nAll 10 problems are originals written by myself over the course of around 5 months. Give them a try!", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/f2023/1.jpg","https://jasonfeng365.github.io/scpe/past-events/f2023/4.jpg"] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2024-04-06', caption: 'SCPE Spring 2024', urls: [{url: "https://www.hackerrank.com/contests/scpe-spring-2024/challenges", title: "SCPE Spring 2024 Problemset"}], title: 'Lead Organizer + Sole Problemsetter', description: "With a larger and more organized officer team, we were able to divide work between multiple team members. Everyone's teamwork was critical to getting our second contest running smoothly. Even with a minor mishap of donuts not showing up, SCPE 2 overall went great, and all contestants went home with new experience, free food, and a cool SCPE badge!\n\nSCPE Spring 2024 has 10 new original problems, and two \"extra credit\" problems returning from SCPE Fall 2023. Give them a try!", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/s2024/0.jpg", "https://jasonfeng365.github.io/scpe/past-events/s2024/4.jpg"] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2024-11-23', caption: 'SCPE Fall 2024', urls: [{url: "https://www.hackerrank.com/contests/pre-scpe-fall-24/challenges", title: "SCPE Fall 2024 Problemset"}], title: 'Advisor', description: "This semester, the problemset was longer with many more problems focused on beginners. This allowed participants to finish multiple problems, rather than getting stuck on the second or third problem. Club officers sourced problems from HackerRank and other sites, ensuring a stable problemset with a smooth difficulty slope.", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/f2024/1.jpg", "https://jasonfeng365.github.io/scpe/past-events/f2024/2.jpg"] },
			{ type: 'point', backgroundColor: '#AF2124', date: '2025-04-26', caption: 'SCPE Spring 2025', urls: [{url: "https://www.hackerrank.com/contests/scpe-spring-2025/challenges", title: "SCPE Spring 2025 Problemset"}], title: 'Sole Problemsetter', description: "Interestingly enough, my last SCPE welcomed many special guests from all around California to participate virtually. A UCLA CS graduate joined us in-person to represent SoCal. Multiple competitive programmers from UC Davis participated virtually, including one of my ICPC teammates who solved the whole problemset. Finally, we welcomed competitive programming legend Nick Wu to compete virtually, who finished the entire set in 20 minutes!\n\nSCPE Spring 2025 has 10 new original problems, and one \"extra credit\" problem returning from SCPE Spring 2024. Give them a try!", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/s2025/4.jpg", "https://jasonfeng365.github.io/scpe/past-events/s2025/1.jpg"] },

			// Davis, DCPC, ACPC
			{ type: 'interval', backgroundColor: '#022851', start: '2024-09', end: '2025-06', caption: 'DCPC', urls: [{url: "https://engineering.ucdavis.edu/news/coding-community-algorithm-davis-competitive-programming-club", title: "Coding with a Community: The Algorithm of the Davis Competitive Programming Club"}, {url: "https://acpc-ucd.com/", title: "Aggie Competitive Programming Contest"}, {url: "https://jasonfeng365.github.io/challenges/?name=acpc", title: "Original ACPC Problems"}], title: 'Vice President + ACPC Problemsetter/System Ops', description: "", imageUrls: ["images/academia/acpc2025_team.jpg", "images/academia/acpc2024_team.jpg", "images/academia/acpc2023_competing.jpg", "images/academia/dcpc_lecture.jpg" ] },
			{ type: 'point', backgroundColor: '#022851', date: '2024-05-04', caption: 'ACPC 2024', urls: [{url: "https://codeforces.com/group/ANhuR0iBIH/contest/522146", title: "ACPC 2024 Problemset"}, {url: "https://photos.google.com/share/AF1QipMQl6XctF6R_k60AzSZIVFW3ji94XsoM6oJ6a6VahiAbLr-xEUAnP8GBcE8xiXN-A?key=WmJtLThyVzdUakNXR1RtYzlYQVVydG5HZjEyY05B", title: "ACPC 2024 Gallery"}], title: 'Problemsetter', description: "", imageUrls: [] },
			{ type: 'point', backgroundColor: '#022851', date: '2025-04-06', caption: 'ACPC 2025', urls: [{url: "https://codeforces.com/group/Agsm1DY0x3/contest/600925", title: "ACPC 2025 Problemset"}, {url: "https://photos.google.com/share/AF1QipNcQu1fv5a55btmyhCqp0H_3xRwW50jAdwla-4qwvd6dukpyhVGqo3LaJ2cYG5ABA?key=WENrckE4OWZHdDFOVVdvTmNxX21VQzRFcHlSMHF3", title: "ACPC 2025 Gallery"}], title: 'Lead Problemsetter and System Ops', description: "", imageUrls: [] },
			{ type: 'point', backgroundColor: '#022851', date: '2026-05-30', caption: 'ACPC 2026', urls: [{url: "https://acpc-ucd.com/", title: "Aggie Competitive Programming Contest"}], title: 'Problemsetter and System Ops', description: "We're planning for ACPC 2026 to take place in May. As before, I'll be dedicating some of my problems to the contest, and will be on-site running system ops with CANIS. Stay tuned for the official contest announcement!", imageUrls: [] },

			// UCLA, club, CodeSprint
			{ type: 'point', backgroundColor: '#2774AE', date: '2026-05', caption: 'CodeSprint 2026', urls: [{url: "https://codesprintla.uclaacm.com/", title: "CodeSprint"}], title: 'Problemsetter', description: "We're beginning to plan out CodeSprint's 2026 contest. Stay tuned for the official contest announcement!", imageUrls: [] },

			// ICPC
			{ type: 'interval', backgroundColor: '#d18147', start: '2025-06', end: 'present', caption: 'ICPC', urls: [], title: 'Pacific Northwest Regionals Judge', description: "Starting from 2025's Pacific Northwest regional contest, I'm now serving the prestigious International Collegiate Programming Contest as a problemsetter, judge, and livestream commentator. I'll be dedicating my hardest problems to ICPC for the foreseeable future!", imageUrls: [] },
			{ type: 'point', backgroundColor: '#d18147', date: '2023-02-25', caption: 'ICPC PacNW 2022', urls: [], title: 'Mighty Polymorphers (Sierra D2)', description: "I first heard about the ICPC from my mentor, Lego Haryanto, who encouraged me to participate as a way of challenging myself. My teammates and I were Sierra College's first ever ICPC participants. We participated in the lower Division 2, where we scored 22nd place out of 53 teams across the whole Pacific Northwest.\n\nMy teammates were Sam Asbell and Neil Dandekar, led by coach Professor Barry Brown.", imageUrls: ["images/icpc/polymorphers.jpg"] },
			{ type: 'point', backgroundColor: '#d18147', date: '2024-02-24', caption: 'ICPC PacNW 2023', urls: [], title: 'Dream Demons (Sierra D2)', description: "Some complications led to me being unable to compete alongside UC Davis in my first year after transferring. Instead, I led a Sierra College team to victory in Division 2, scoring first place in California and second place in the Pacific Northwest, just in our second year of competing.\n\nMy teammates were Neil Dandekar and Lucas Lek, led by coach Professor Barry Brown.", imageUrls: ["images/icpc/dreamdemons.jpg", "images/icpc/sierra_2023.jpg"] },
			{ type: 'point', backgroundColor: '#d18147', date: '2024-11-16', caption: 'ICPC PacNW 2024', urls: [], title: 'Oneirophages (UC Davis D1)', description: "My team and I crushed my first and last ICPC with UC Davis in Division 1, beating out over 60 other teams for a spot at the ICPC North American Championship. After weeks of grueling 5-hour Saturday practices, we were confident in our abilities, and went on to be UC Davis's second ever team to attend NAC.\n\nMy teammates were Reina Itakura and Jack Xiang, led by coach Dr. Slobodan Mitrovic.", imageUrls: ["images/icpc/oneirophages.jpg", "images/icpc/ucd_2024.jpg"] },
			{ type: 'point', backgroundColor: '#d18147', date: '2025-05-22', caption: 'ICPC NAC 2025', urls: [], title: 'UC Davis', description: "Oneirophages represented UC Davis at the North American Championship in Orlando, Florida from May 22-27. Though we weren't able to advance to World Finals, we had a lot of fun chatting with the celebrities of competitive programming and hanging out with each other. Afterwards, I was invited to judge the Pacific Northwest regional contests, and I'll be dedicating my time and problem repository to PacNW for the foreseeable future. I'm happy with ending my journey as a contestant while representing UC Davis at NAC, and I look forward to serving ICPC as a judge in the future!\n\nMy teammates were Reina Itakura and Jack Xiang, led by co-coach Theodore Pan.", imageUrls: ["images/icpc/nac_team.png", "images/icpc/nac_heart.jpg", "images/icpc/nac_point.jpg", "images/icpc/nac_code.jpg", "images/icpc/nac_post.jpg"] },
			{ type: 'point', backgroundColor: '#d18147', date: '2025-11-15', caption: 'ICPC PacNW 2025', urls: [{url: "https://jasonfeng365.github.io/challenges/?name=pacnw%202025", title: "Original PacNW Problems"}], title: 'Judge', description: "Though I'm staying in Los Angeles from 2025-2027, I'm returning to my home region as a judge, and to encourage more people to participate in the art of competitive programming. My first time judging was quite fun, and I'll keep judging in the coming years!", imageUrls: ["images/icpc/2025_team.jpg", "images/icpc/2025_selfie.jpg", "images/icpc/2025_cow.jpg", "images/icpc/2025_bruh.jpg"] },
		],
	},
	{
		name: 'Experience',
		backgroundColor: '#a19ed9', intervalColor: 'orange', pointColor: 'gray',
		entries: [
			{ type: 'interval', backgroundColor: 'black', start: '2021-09', end: '2025-09', caption: 'Code Ninjas', urls: [], title: 'Competitive Programming Sensei', description: "Throughout my time at Sierra College, I worked part-time at the Rocklin Dojo to teach drag-and-drop and JavaScript game development to elementary and middle schoolers, as well as Unity and competitive programming to our more advanced high schoolers. Our students would go on to achieve high placements at Hewlett-Packard CodeWars, winning trophies for our Dojo in the 2025 season.\n\nI'm very thankful to have worked under my employer and my mentor, legendary ICPC world finalist Lego Haryanto, who introduced me to the world of competitive programming. He's very passionate about competitive programming and gave me the experience needed to lead and problemset for Sierra's and Davis's contests.", imageUrls: [] },
			{ type: 'interval', backgroundColor: '#AF2124', start: '2022-01', end: '2023-05', caption: 'Sierra College Tutor Center', urls: [], title: 'Peer Tutor/Academic Support Peer', description: "", imageUrls: [] },
			{ type: 'interval', backgroundColor: 'green', start: '2025-06', end: '2025-09', caption: 'AgScout', urls: [], title: 'Android Development Intern', description: 'Developed automatic file uploader for resumable overnight transfers from Android to Google Cloud Bucket', imageUrls: [] },
			{ type: 'interval', backgroundColor: '#022851', start: '2024-07', end: '2025-02', caption: 'LEPS', urls: [], title: 'Embedded Systems Intern / Research Assistant - Laboratory for Embedded and Programmable Systems', description: 'Refined Qt signal processing GUI for medical fetal oximetry systems', imageUrls: [] },

			{ type: 'interval', backgroundColor: '#C74634', start: '2026-06', end: '2026-09', caption: 'Oracle', urls: [], title: 'Software Engineering Intern', description: "I'll be joining Oracle's Fusion team as an intern during Summer 2026, after a round of interviews from November-December 2025. Looking forward to contributing to and learning from Oracle!", imageUrls: [] },

			
		],
	},
	{
		name: 'Projects',
		backgroundColor: '#a19ed9', intervalColor: 'blue', pointColor: 'black',
		entries: [
			// Sierra
			{ type: 'interval', backgroundColor: '#efb6d4', start: '2021-06', end: '2022-05', caption: 'Kirby Lore Bot', urls: [], title: 'Multi-purpose Discord bot', description: 'Java Swing implementation of a 2D side-scrolling beat-em-up ', imageUrls: [] },
			{ type: 'interval', backgroundColor: 'lightblue', start: '2022-05', end: '2022-08', caption: 'Cat and Mouse 3', urls: [], title: 'Cat and Mouse 3', description: 'Java Swing implementation of a 2D side-scrolling beat-em-up ', imageUrls: [] },
			{ type: 'interval', backgroundColor: 'lightblue', start: '2023-05', end: '2023-08', caption: 'Cat and Mouse 4', urls: [], title: 'Cat and Mouse 4', description: 'Fullstack Java Spring app for automating UC Davis and Sierra College contests', imageUrls: [] },

			// Davis
			{ type: 'interval', backgroundColor: '#8040FF', start: '2024-07', end: '2025-04', caption: 'CANIS', urls: [], title: 'Contest Administration, Notifications, and Information System', description: 'Fullstack Java Spring app for automating UC Davis and Sierra College contests', imageUrls: [] },
			{ type: 'interval', backgroundColor: '#FF9617', start: '2025-01', end: '2025-06', caption: 'CycleGuard', urls: [], title: 'Gamified smart helmet and mobile app', description: 'Cross-platform Flutter app with smart helmet interface', imageUrls: [] },
			{ type: 'interval', backgroundColor: '#022851', start: '2024-01', end: '2024-06', caption: 'Build Your Own Labyrinth', urls: [], title: 'UC Davis Embedded Systems final project', description: '2.5D isomorphic maze game with C engine and AWS IoT integration.', imageUrls: [] },
			{ type: 'point', backgroundColor: '#31c766', date: '2025-06', caption: 'SeleneHR', urls: [{url: "https://github.com/JasonFeng365/selenehr", title: "GitHub repo"}], title: 'Command-line macros for HackerRank problemsetting', description: "", imageUrls: [] },
			{ type: 'point', backgroundColor: '#007bff', date: '2025-07', caption: 'SCRIBE', urls: [{url: "https://github.com/JasonFeng365/SCRIBE", title: "GitHub repo"}], title: 'Local problemsetting problem organizer', description: "", imageUrls: [] },

			// UCLA
			{ type: 'interval', backgroundColor: '#2774AE', start: '2025-10', end: 'present', caption: 'eSIM Parser', urls: [], title: 'Local web interface for editing eSIM .der files', description: "", imageUrls: [] },
			{ type: 'interval', backgroundColor: '#2774AE', start: '2026-1', end: 'present', caption: 'GenValGen', urls: [], title: '', description: "", imageUrls: [] },
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