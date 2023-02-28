export const baseUrl = process.env.REACT_APP_BASE_URL;


export let status = false;


export const fetchApi = async (url) => {
  try {
    const response = await fetch(baseUrl);
    if(response.status > 400 && response.status < 600){
      return new Error("SERVER FAILED")
    }
    const data = await response.json();
    return data;
  } catch (e) {
      console.log(e);
      status = true;
  }
};
