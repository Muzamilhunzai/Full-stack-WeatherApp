export const fetchWeather = async (city) => {
  try {
    const response = await fetch(`http://localhost:5000/api/weather?city=${city}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};