// Central API configuration — points the frontend at the deployed Laravel backend.
// Override by setting REACT_APP_API_BASE_URL / REACT_APP_IMAGE_BASE_URL in frontend/.env
const API_BASE = (process.env.REACT_APP_API_BASE_URL || 'https://phone-shop-2.onrender.com/api').replace(/\/+$/, '');
const IMAGE_BASE = (process.env.REACT_APP_IMAGE_BASE_URL || 'https://phone-shop-2.onrender.com').replace(/\/+$/, '');

export { API_BASE, IMAGE_BASE };
