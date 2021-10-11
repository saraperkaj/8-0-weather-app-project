document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.search.value;
  fetch(`https://wttr.in/${input}?format=j1`)
    .then((response) => response.json())
    .then((obj) => {
      const display = document.querySelector(".display");
      const region = obj.nearest_area[0].region[0].value;
      const area = obj.nearest_area[0].areaName[0].value;
      const country = obj.nearest_area[0].country[0].value;
      const feelsLike = obj.current_condition[0].FeelsLikeF;

      display.innerHTML = `
      
      <h2>${area}</h2> </li>
      <ul>
      <li class="display-li"><strong>Area:</strong> ${area} </li>
      <li class="display-li"><strong>Region:</strong> ${region} </li>
      <li class="display-li"><strong>Country:</strong> ${country} </li>
      <li class="display-li"><strong>Currently:</strong> Feels like ${feelsLike}°F
      </ul>
      
      `;
    })
    .catch(console.log);
  event.target.reset();
});
