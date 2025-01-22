import axios from 'axios';

export const fetchCarsData = async () => {
  try {
    const response = await axios.get('https://xd63m7jl.api.sanity.io/v2024-12-24/data/query/production?query=*%5B_type+%3D%3D+%27product%27%5D+');
    return response.data; 
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
