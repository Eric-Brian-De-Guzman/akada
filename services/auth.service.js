import strapi from '@/services/strapi.service.js';
import jwt_decode from 'jwt-decode';

export default {
  async login(email, password) {
    const response = await strapi.login(email, password);
    localStorage.setItem('jwtToken', response.jwt);
    return jwt_decode(response.jwt);
  },

  logout() {
    localStorage.removeItem('jwtToken');
  },

  getCurrentUser() {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      return jwt_decode(jwtToken);
    }
    return null;
  },

  isAuthenticated() {
    return this.getCurrentUser() !== null;
  },
};
