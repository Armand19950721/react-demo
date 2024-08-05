export const getAuthHeader = (token: string) => {
  console.log("getAuthHeader",{token})
    return {
      'Content-Type': 'multipart/form-data',
      'authorization': `Bearer ${token}`
    };
  };

  export const getBasicHeader = () => {
    return {
      'Content-Type': 'multipart/form-data',
    };
  };