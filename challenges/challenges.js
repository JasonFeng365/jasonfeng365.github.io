const { createApp } = Vue;

let print = console.log

const vue = createApp({
	data() {
		return {
			vue: null,
			items: [],

			nameFilter: "",
			nameFilterEditingEnabled: true,
			nameFilterValue: true,
			tagsFilter: "",
			tagsFilterEditingEnabled: false,
			tagsFilterValue: true,
			
			sortBy: "path",
			sortAsc: true,

			lastActive: null,
		}
	},
	methods: {
		openLink(link) {
			window.open(link, '_blank')
		},
		getPathWithoutName(item) {
			let idx = item.path.lastIndexOf("/")
			if (idx==-1) return ""
			return item.path.substring(0, idx)
		},
		sortItems(arr) {
			let compare;
			switch (this.sortBy) {
				case 'creation':
					compare = (a, b) => new Date(a.creation) - new Date(b.creation);
					break;
				case 'difficulty':
					compare = (a, b) => a.difficulty - b.difficulty;
					break;
				case 'name':
					compare = (a, b) => (a.name || '').localeCompare(b.name || '');
					break;
				case 'path':
					compare = (a, b) => (a.path || '').localeCompare(b.path || '');
					break;
				default:
					return;
			}
			arr.sort((a, b) => {
				const result = compare(a, b);
				return this.sortAsc ? result : -result;
			});
		},
		filterTags(arr) {
			let tagsArray = this.tagsFilter.toLowerCase().split(/\s+/).filter(Boolean);
			return arr.filter(item => {
				return tagsArray.every(tag => item.tagsText.includes(tag)) == this.tagsFilterValue;
			})
		},
		filterItems () {
			var res = this.items

			if (this.hasGenFilterEnabled) {
				res = res.filter(item => item.hasGen==this.hasGenFilterValue)
			}
			if (this.hasHRInfoFilterEnabled) {
				res = res.filter(item => item.hasHRInfo==this.hasHRInfoFilterValue)
			}
			if (this.doneFilterEnabled) {
				res = res.filter(item => (item.status=="Done")==this.doneFilterValue)
			}

			if (this.nameFilterEditingEnabled && this.nameFilter.trim()) {
				const filter = this.nameFilter.trim().toLowerCase();
				res = res.filter(item =>
					(
						(item.name && item.name.toLowerCase().includes(filter)) ||
						(item.path && item.path.toLowerCase().includes(filter))
					) == this.nameFilterValue
				);
			}

			if (this.tagsFilterEditingEnabled && this.tagsFilter.trim()) {
				res = this.filterTags(res)
			}


			this.sortItems(res)

			return res
		},
	},
	mounted() {
		this.vue = this

		fetch('manifest.json')
			.then(response => response.json())
			.then(data => {
				this.items = data;
				this.items.forEach(item => {
					item.tagsText = item.tags.join(", ")
					item.previousVersion = JSON.parse(JSON.stringify(item));
				});
			})
			.catch(error => print('Error fetching problems:', error));
	}
}).mount('#app');