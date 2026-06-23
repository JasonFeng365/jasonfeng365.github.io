let davis_gradient = ['rgba(4, 80, 160,.25)', 'rgba(255,191,0,.25)'];
let icpc_color = 'rgba(59, 130, 246, 0.25)';


const achievements_sections = [
	{
		name: 'Work Experience',
		entries: [
			{ timeframe: 'June - September 2026', title: 'Software Engineering Intern', subtitle: 'Oracle Fusion AI', backgroundColor: 'rgba(199, 70, 52, 0.2)', urls: [{url: "https://www.oracle.com/applications/fusion-ai/", title: "Oracle AI for Fusion Applications"}], description: "I'm working with Oracle's Fusion AI team during Summer 2026, following a successful interview round in late 2025, and presents an opportunity to study under great mentors from one of the industry's leading enterprise software platforms. Looking forward to contributing to and learning from Oracle!", imageUrls: [] },
			{ timeframe: 'June - September 2025', title: 'Android Development Intern', subtitle: 'AgScout', backgroundGradient: ['rgba(0, 128, 0, 0.25)', 'rgba(177, 154, 68, 0.25)'], urls: [{url: "https://agscout.ai/", title: "AgScout"}], description: "Between my undergraduate and graduate studies, I joined AgScout as a mobile development intern. I was responsible for developing an automatic file uploader for resumable overnight transfers. This role required me to solve complex problems regarding data reliability and throughput, managing up to 300GB of data across multiple devices while working within the resource constraints of the Android platform. With such resource constraints and volatility of a mobile device, I worked hard to ensure absolute reliability and failsafes for data transfer.", imageUrls: [] },
			{ timeframe: 'July 2024 - February 2025', title: 'Embedded Systems Intern / Research Assistant', subtitle: 'UC Davis Laboratory for Embedded and Programmable Systems', backgroundGradient: davis_gradient, urls: [{url: "https://engineering.ucdavis.edu/news/ece-lab-develops-fetal-oximetry-device-prevent-unnecessary-c-sections", title: "ECE Lab Develops Fetal Oximetry Device to Prevent Unnecessary C-sections"}, {url: "https://leps.sf.ucdavis.edu/", title: "Laboratory for Embedded and Programmable Systems"}], description: "My teammate Andrew Hoang and I were given the opportunity to intern and assist in research at LEPS for my exemplary performance in the Embedded Systems course. We were chosen by our TA, Lambert Lihe, to assist in laboratory work over the summer and fall. Over the summer, Andrew and I prototyped a low-latency message-passing interface using AWS cloud sockets to stream data from a QT desktop application to an iPhone app. Andrew and I spent more time in the laboratory throughout Fall 2024, where we worked closely with Lambert to maintain a QT desktop application for transabdominal fetal oxiometry. We worked to generalize a version of the application to function as a signal reader, using Fourier transforms to reliably measure frequencies from a sensor while filtering out noise.", imageUrls: [] },
		],
	},
	{
		name: 'Projects',
		entries: [
			{ timeframe: 'July 2024 - Present', title: 'CANIS', subtitle: 'Contest Administration, Notifications, and Information System', backgroundGradient: ['rgba(107,65,255,.25)', 'rgba(255,179,102,.25)'], urls: [{url: "https://canis.jasonfeng365.top/", title: "CANIS"}], description: "I was inspired by UC Davis's ACPC to make the Contest Administration, Notifications, and Information System. ACPC organizers bring a balloon to contestants who solve a problem successfully - normally, this requires manual tracking in a spreadsheet while constantly reloading Codeforces submissions, but with a Spring server constantly polling Codeforces (or platform of choice) and pushing submissions to client devices, all an organizer has to do is to filter by new accepted submissions, see the team and table location pre-loaded into the system, and deliver a balloon to the happy contestants. CANIS runs on a server and is able to push to multiple clients at a time through the Live Contest Overview websocket service, so multiple organizers can process submissions in parallel on separate devices.\n\nCANIS is aimed at educational school contests where organizers are able to gently nudge contestants in the right direction. As such, the integrated Alerts system allows admins to set up custom notifications that appear when contestants meet some threshold. For example, organizers may want to be alerted by any contestant that hasn't made a successful submission in 20 minutes since the contest began; maybe this contestant wasn't able to set up correctly, or may not know how to read standard input. Or, organizers may want to be alerted to teams that haven't made an AC in the past 45 minutes, who may need some help getting unstuck. Alerts is for helping orgainzers to identify who may need help, and to deliver that assistance promptly.\n\nSo far, I've used CANIS to faciliate UC Davis's and Sierra College's contests. (I've been told that \"ACPC has gotten 100x easier since getting CANIS\" 🥺) One day, I hope it reaches out to more schools to help organizers around the world nurture the art of competitive programming!", imageUrls: ["images/academia/acpc2026_canis.jpg", "images/academia/acpc2025_canis.jpg"] },
			{ timeframe: 'January - June 2025', title: 'CycleGuard', subtitle: 'Gamified smart helmet and mobile app', backgroundColor: 'rgba(219, 198, 142, 0.25)', urls: [{url: "https://github.com/UCD-193AB-ws24/CycleGuardFrontend", title: "Frontend Code"}, {url: "https://github.com/UCD-193AB-ws24/CycleGuardBackend", title: "Backend Code"}], description: "Computer Science and Engineering majors at UC Davis end off their undergraduate with a two-quarter capstone project. My team of three other passionate peers and I developed CycleGuard, a cross-platform gamified fitness app interfacing with a custom-made smart helmet. CycleGuard tracks a user's location through the helmet's integrated GPS, logs the user's past trips, distance, and time, and estimates calories burned. We added multiplayer features so multiple users can join a team (\"pack\") and work together to team goals, and achievements to earn through consistent exercise, to help motivate users to bicycle more.\n\nI served as the backend developer, where I hosted a Spring server on Google Cloud Run to provide an HTTPS endpoint and utilized AWS DynamoDB for persistent NoSQL storage. I also contributed to the Flutter frontend, which includes multiplayer features and achievement systems to motivate users to cycle more.\n\nMy teammates were Andrew Hoang (the 🐐 of embedded systems), Shanu Kota, and Ian O'Connell. I had a ton of fun working together with such a dedicated team!", imageUrls: ["images/projects/cycleguard_group.jpg", "images/projects/cycleguard_poster.jpg"] },
			{ timeframe: 'April 2026 - Present', title: 'GenValGen', subtitle: 'Local LLM-automated generator and validator for competitive programming problem testcases', backgroundGradient: ['rgba(0, 81, 161, 0.25)', 'rgba(75, 190, 93, 0.25)'], urls: [], description: "Work-in-progress open-source tool for problemsetters and judges. Stay tuned for updates!", imageUrls: [] },
		],
	},
	{
		name: 'Accolades and Awards',
		entries: [
			{ timeframe: 'June 2025', title: 'CSE Outstanding Senior Award', subtitle: 'UC Davis Academic Honors', backgroundGradient: davis_gradient, urls: [{url: "https://cs.ucdavis.edu/news/outstanding-senior-spotlight-jason-feng", title: "Outstanding Senior Spotlight: Jason Feng"}], description: "I graduated from UC Davis with a Bachelor's in Computer Science and Engineering, achieving a 4.0 GPA and graduating with highest honors. I was the sole recipient of the CSE 2025 Outstanding Senior award, a distinction recognizing top-tier academic excellence and contribution to learning within the department.\n\nLightwork for the Dream Demon!", imageUrls: ["images/academia/ceremony_all.jpg", "images/academia/ceremony_mom.jpg"] },
			{ timeframe: '2023 - 2025', title: 'ICPC Accomplishments', subtitle: 'International Collegiate Programming Contest', backgroundColor: icpc_color, urls: [], description: "I first heard about the ICPC from my mentor, Lego Haryanto, who encouraged me to participate as a way of challenging myself. I led Sierra College's first ever ICPC teams, then joined UC Davis in one last triumph to the North American Championship in 2025, before being invited by legendary competitive programmer Nick Wu to judge for the Pacific Northwest Regionals. These ICPC shirts make fine additions to my collection...\n\nPlease see the timeline above for my teams!\n\nMay 2025: 2025 ICPC North American Championship in UCF, Orlando\nNovember 2024: 2024 ICPC PacNW Regionals; D1. 6th place in region, qualified for NAC\nFebruary 2024: 2023 ICPC PacNW Regionals; D2. First place in California, second place in region\nFebruary 2023: 2022 ICPC PacNW Regionals; D2", imageUrls: ["images/icpc/nac_point.jpg", "images/icpc/ucd_2024.jpg"] },
		],
	},
	{
		name: 'Problemsetting and Judging',
		entries: [
			{ timeframe: 'November 2025 - present', title: 'Judge', subtitle: 'International Collegiate Programming Contest - Pacific Northwest Regionals', backgroundColor: icpc_color, urls: [{url: "https://jasonfeng365.github.io/scpe/", title: "Sierra Competitive Programming Exhibition"}], description: "I was the founder and\n213123", imageUrls: [] },
			{ timeframe: 'October 2025 - present', title: 'Problemsetter and Interview Prep Lecturer', subtitle: 'CodeSprint / UCLA ACM ICPC Chapter', backgroundGradient: ['rgba(248, 120, 129, 0.25)', 'rgba(249, 156, 224, 0.25)'], urls: [{url: "https://jasonfeng365.github.io/scpe/", title: "Sierra Competitive Programming Exhibition"}], description: "I was the founder and\n213123", imageUrls: [] },
			{ timeframe: 'September 2023 - present', title: 'Vice President, System Ops, and Problemsetter', subtitle: 'Aggie Competitive Programming Contest / Davis Competitive Programming Club', backgroundGradient: davis_gradient, urls: [{url: "https://jasonfeng365.github.io/scpe/", title: "Sierra Competitive Programming Exhibition"}], description: "I was the founder and\n213123", imageUrls: [] },
			{ timeframe: 'September 2023 - April 2025', title: 'Founder, Co-President, and Lead Problemsetter', subtitle: 'Sierra Competitive Programming Exhibition / Sierra Computer Science Club', backgroundGradient: ['rgba(177, 38, 32, 0.25)', 'rgba(200, 200, 200, 0.4)'], urls: [{url: "https://jasonfeng365.github.io/scpe/", title: "Sierra Competitive Programming Exhibition"}], description: "I was the founder and\n213123", imageUrls: [] },
		],
	},
];

// [{url: "https://engineering.ucdavis.edu/news/coding-community-algorithm-davis-competitive-programming-club", title: "Coding with a Community: The Algorithm of the Davis Competitive Programming Club"}, {url: "https://acpc-ucd.com/", title: "Aggie Competitive Programming Contest"}, {url: "https://jasonfeng365.github.io/challenges/?name=acpc", title: "Original ACPC Problems"}]

const achievements = new Vue({
  el: '#achievements',
  data: {
		sections: achievements_sections,
	},
	created() {
	},
	methods: {
		getBg(entry) {
			if (Object.hasOwn(entry, "backgroundGradient")) {
				let grad1 = entry.backgroundGradient[0];
				let grad2 = entry.backgroundGradient[1];
				// return `linear-gradient(247.5deg, ${grad1} 0%, ${grad2} 50%, ${grad1} 100%)`;
				return `linear-gradient(225deg, ${grad1} 0%, ${grad2} 50%, ${grad1} 100%)`;
			} else {
				return entry.backgroundColor;
			}
		},


	},
	mounted: function() {
		
	}
});
