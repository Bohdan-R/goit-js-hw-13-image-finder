import articlesTpl from '../templates/articles.hbs';
import refs from './refs';

function updateArticlesMuarkup(articles) {
    const markup = articlesTpl(articles)
    refs.articlesContainer.insertAdjacentHTML('beforeend', markup);  
}

export default updateArticlesMuarkup;