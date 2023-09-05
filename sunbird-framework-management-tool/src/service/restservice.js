import axios from 'axios';

const BASE_URL = 'https://dev.knowlg.sunbird.org/api';

const apiKey = "API key";
// Replace <API Key> with your actual API key

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
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
  };

  const requestData = {
    request: {
      filters: {
        objectType: "category",
      },
    },
  };

  return axios.post(`${BASE_URL}/composite/v1/search`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to fetch Category list:', error);
      return [];
    });
};

export const fetchTermList = () => {
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
  };

  const requestData = {
    request: {
      filters: {
        objectType: "term",
      },
    },
  };

  return axios.post(`${BASE_URL}/composite/v1/search`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to fetch term list:', error);
      return [];
    });
};

export const CreateFramework = (name, code) => {
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
    'X-Channel-Id': 'c4gt-test', // Replace with your desired channel identifier
  };

  const requestData = {
    request: {
      framework: {
        name,
        code,
        channels: [
          {
            identifier: 'c4gt-test',
          },
        ],
      },
    },
  };

  return axios.post(`${BASE_URL}/framework/v1/create`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to create framework:', error);
      return null;
    });
};


export const CreateCategory = (name, code) => {
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
    'X-Channel-Id': 'c4gt-test', // Replace with your desired channel identifier
  };

  const requestData = {
    request: {
      category: {
        name,
        code,
      },
    },
  };

  return axios.post(`${BASE_URL}/framework/v1/category/create`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to create category:', error);
      return null;
    });
};

export const CreateTerm = (name, code) => {
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
    'X-Channel-Id': 'c4gt-test', // Replace with your desired channel identifier
  };

  const requestData = {
    request: {
      term: {
        code,
        name,
      },
    },
  };

  return axios.post(`${BASE_URL}/framework/v1/term/create`, requestData, { headers })
    .then(response => response.data)
    .catch(error => {
      console.log('Failed to create term:', error);
      return null;
    });
};

// restservice.js


export const fetchFrameworkDetailsById = (identifier) => {
  const headers = {
    Authorization: apiKey,
    'Content-Type': 'application/json',
  };

  return axios.get(`${BASE_URL}/framework/v1/read/${identifier}`)
      .then(response => response.data.result.framework) // Assuming the response contains the framework details as an array
  .catch(error => {
    console.log('Failed to fetch framework details:', error);
    return {};
  });
  };

  // export const updateFrameworkDescription = (identifier, description) => {
  //   const headers = {
  //     Authorization: apiKey,
  //     'Content-Type': 'application/json',
  //   };
  
  //   const requestData = {
  //     framework: {
  //       description: description,
  //     },
  //   };
  
  //   return axios.put(`${BASE_URL}/framework/v1/update/{ID}`, requestData, { headers })
  //     .then(response => response.data.result.framework)
  //     .catch(error => {
  //       console.log('Failed to update framework details:', error);
  //       return {};
  //     });
  // };


  // export const updateFramework = (identifier, updatedData) => {
  //   const headers = {
  //     Authorization: apiKey,
  //     'Content-Type': 'application/json',
  //   };
  
  //   const requestData = {
  //     framework: {
  //       // Include all the fields you want to update
  //       name: updatedData.name,
  //       description: updatedData.description,
  //       channel: updatedData.channel,
  //       owner: updatedData.owner,
  //       type: updatedData.type,
  //       // Add more fields here
  //     },
  //   };
    
  //   return axios.PATCH(`${BASE_URL}/framework/v1/category/update${identifier}`, requestData, { headers })
  //     .then(response => response.data.result.framework)
  //     .catch(error => {
  //       console.log('Failed to update framework details:', error);
  //       return {};
  //     });
  // };



  export const updateFramework = (identifier, updatedData) => {
    const headers = {
      Authorization: apiKey,
      'Content-Type': 'application/json',
    };
  
    const requestData = {
      framework: {
        // Include all the fields you want to update
        name: updatedData.name,
        description: updatedData.description,
        channel: updatedData.channel,
        owner: updatedData.owner,
        type: updatedData.type,
        // Add more fields here
      },
    };
    console.log(updatedData);
  
    return axios.patch(`${BASE_URL}/framework/v1/update/${identifier}`, {request: requestData}, { headers })
      .then(response => { 
        console.log('success',response);
        return response.data.result})
      .catch(error => {
        console.log('Failed to update framework details:', error);
        return {};
      });
  };
  
  
// Other existing functions for fetching category, term, etc.
// ...