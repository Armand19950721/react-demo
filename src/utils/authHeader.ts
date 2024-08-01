export const getAuthHeader = (token: string) => {
    return {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    };
  };

  export const getBasicHeader = () => {
    return {
      'Content-Type': 'multipart/form-data',
    };
  };