import api from './api-config';

export const getAllcategories = async () => {
    const resp = await api.get('/categories');
    return resp.data;
};