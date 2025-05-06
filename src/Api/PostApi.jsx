import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getpost = () => axios.get(BASE_URL);

export const addPost = (data) => axios.post(BASE_URL, data);

export const updatePost = (id, data) => axios.put(`${BASE_URL}/${id}`, data);

export const detetePost = (id) => axios.delete(`${BASE_URL}/${id}`);
