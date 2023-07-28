// restservice.js
import axios from 'axios';

const BASE_URL = 'https://dev.knowlg.sunbird.org/api';

const apiKey = 'API key'; // Replace <API Key> with your actual API key

export const fetchFrameworkList = () => {
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
  };

  const requestData = {
    request: {
      search: {
        status: 'Live',
      },
    },
  };

  return axios.post(`${BASE_URL}/framework/v1/list`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to fetch framework list:', error);
      return [];
    });
};

export const fetchCategoryList = () => {
  // Implement similar function for fetching categories
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
  };

  const requestData = {
    
        request: {
            filters: {
                objectType: "category",
            }
        }
    
  };

  return axios.post(`${BASE_URL}/composite/v1/search`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to fetch Category list:', error);
      return [];
    });
};

export const fetchTermList = () => {
  // Implement similar function for fetching terms
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
  };

  const requestData = {
    
        request: {
            filters: {
                objectType: "term",
            }
        }
    
  };

  return axios.post(`${BASE_URL}/composite/v1/search`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to fetch term list:', error);
      return [];
    });
};
