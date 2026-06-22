
const achievements_sections = [
	{
		name: 'Projects',
		backgroundColor: '#b49ed940',
		entries: [
			{ type: 'interval', title: 'CANIS', subtitle: 'Contest Administration, Notifications, and Information System', backgroundColor: 'rgba(64, 32, 128, 0.3)', start: '2022-06', end: '2023-05', urls: [{url: "https://jasonfeng365.github.io/scpe/", title: "Sierra Competitive Programming Exhibition"}, {url: "https://jasonfeng365.github.io/challenges/?name=scpe", title: "Original SCPE Problems"}, {url: "https://jasonfeng365.github.io/scpe/past-events/", title: "SCPE Past Events and Gallery"}], description: "I was the founder and", imageUrls: ["images/academia/scpe-goofy.jpg"] },
			{ type: 'point', title: 'CANIS', subtitle: 'Contest Administration, Notifications, and Information System', backgroundColor: 'rgba(64, 32, 128, 0.3)', start: '2022-06', end: '2023-05', urls: [{url: "https://www.hackerrank.com/contests/scpe-fall-2023/challenges", title: "SCPE Fall 2023 Problemset"}], description: "Our first ever SCPE was a huge success! Over 30 participants took part in the contest, with 64 total problem submissions. This was a huge opportunity for contestants to practice their critical thinking and problem-solving skills, along with being a huge opportunity for Sierra’s Coding Club officers to practice leadership.\n\nAll 10 problems are originals written by myself over the course of around 5 months. Give them a try!", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/f2023/1.jpg","https://jasonfeng365.github.io/scpe/past-events/f2023/4.jpg"] },
		],
	},
	{
		name: 'Accolades',
		backgroundColor: '#b49ed940',
		entries: [
			{ type: 'interval', title: 'CANIS', subtitle: 'Contest Administration, Notifications, and Information System', backgroundColor: 'rgba(64, 32, 128, 0.3)', start: '2022-06', end: '2023-05', urls: [{url: "https://jasonfeng365.github.io/scpe/", title: "Sierra Competitive Programming Exhibition"}, {url: "https://jasonfeng365.github.io/challenges/?name=scpe", title: "Original SCPE Problems"}, {url: "https://jasonfeng365.github.io/scpe/past-events/", title: "SCPE Past Events and Gallery"}], description: "I was the founder and", imageUrls: ["images/academia/scpe-goofy.jpg"] },
			{ type: 'point', title: 'CANIS', subtitle: 'Contest Administration, Notifications, and Information System', backgroundColor: 'rgba(64, 32, 128, 0.3)', start: '2022-06', end: '2023-05', urls: [{url: "https://www.hackerrank.com/contests/scpe-fall-2023/challenges", title: "SCPE Fall 2023 Problemset"}], description: "Our first ever SCPE was a huge success! Over 30 participants took part in the contest, with 64 total problem submissions. This was a huge opportunity for contestants to practice their critical thinking and problem-solving skills, along with being a huge opportunity for Sierra’s Coding Club officers to practice leadership.\n\nAll 10 problems are originals written by myself over the course of around 5 months. Give them a try!", imageUrls: ["https://jasonfeng365.github.io/scpe/past-events/f2023/1.jpg","https://jasonfeng365.github.io/scpe/past-events/f2023/4.jpg"] },
		],
	},
];







const achievements = new Vue({
  el: '#achievements',
  data: {
		sections: achievements_sections,
  },
  created() {
  },
  methods: {
	zoomOut() {
	},



	},
	mounted: function() {
		
	}
});
