export const searchCity = async (query) => {
  try {
    const response = await fetch(`http://localhost:5000/api/weather?query=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};