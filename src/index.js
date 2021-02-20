import './sass/styles.scss';
import loadMoreBtn from './js/load-more-button';
import refs from './js/refs';
import findImages from './js/apiService';
import updateArticlesMuarkup from './js/update-articles-markup';

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function searchFormSubmitHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;
    findImages.query = form.elements.query.value

    clearArticlesContainer();
    findImages.resetPage();
    form.reset();  
    fetchImages();
}

function fetchImages() {

    loadMoreBtn.disable();

    findImages.fetchImages().then(articles => {
        updateArticlesMuarkup(articles);
        loadMoreBtn.show();
        loadMoreBtn.enable();

        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: "smooth"
        });
    })
};

function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';
}