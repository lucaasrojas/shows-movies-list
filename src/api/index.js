import axios from "axios";

const api = {
    getAll: () => {
        return axios
            .get("https://api.tvmaze.com/search/shows?q=girls")
            .then(({ data }) => data);
    },
    getById: ({ id }) => {
        return axios
            .get(`https://api.tvmaze.com/shows/${id}`)
            .then(({ data }) => data);
    }
};

export default api;
