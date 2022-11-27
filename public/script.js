const inputCityDOM = document.getElementById("floatingInput");
const outputCityDOM = document.querySelector(".weather");
let inputCity="";
console.log(inputCityDOM);
inputCityDOM.addEventListener("change", async (e) => {
  inputCity = e.target.value;
  console.log(inputCity);
  let theCity = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=8abeebfd7cdb70ce4083d73d1faf626c`);
  console.log(theCity.data.main.temp);
  let theCityTemp = theCity.data.main.temp;
  outputCityDOM.innerHTML = `The current temperature in ${inputCity} is ${theCityTemp}°C.`;
});
