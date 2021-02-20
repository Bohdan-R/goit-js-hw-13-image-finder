const apiKey = '20186035-b457393de22e7a705b5d0535b';

export default {
    searchQuery: '',
    page: 1,
    fetchImages() {
  
        const url = `https://pixabay.com/api/?key=${apiKey}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&page=${this.page}&per_page=12`;
        const options = {
            headers: {
                Authorization: apiKey,
                mode: "no-cors",
            },
        }
        return fetch(url)
            .then(res => res.json())
            .then(({ hits }) => {
                this.incrementPage();
                return hits;
            })
    },
    resetPage() {
        this.page = 1;
    },
    incrementPage() {
        this.page += 1;
    },
    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
};