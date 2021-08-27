import api from './api-config';

export const getAllArticles = async (id) => {
    const resp = await api.get('/articles');
    return resp.data;
};

export const getOneArticle = async (id) => {
    const resp = await api.post(`/articles/${id}`);
    return resp.data;
};

export const postArticle = async (articleData) => {
    const resp = await api.post('/articles', { article: articleData});
    return resp.data;
};

export const putArticle = async (id, articleData) => {
    const resp = await api.put(`/articles/${id}`, { article: articleData });
    return resp.data;
};

export const deleteArticle = async (id) => {
    const resp = await api.delete(`/articles/${id}`);
    return resp;
}
