import axios from 'axios';

export const graphicCardService = {
  async getAll() {
    const response = await axios.get('http://localhost:3000/graphicCards');

    return response.data;
  },

  async getById(id) {
    const response = await axios.get(
      `http://localhost:3000/graphicCards?id=${id}`
    );

    return response.data[0];
  },

  async create(data) {
    return axios.post('http://localhost:3000/graphicCards', data);
  },
};
