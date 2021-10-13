//search for a location

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.target.search.value;
  fetch(`https://wttr.in/${input}?format=j1`)
    .then((response) => response.json())
    .then((object) => {
      const display = document.querySelector(".display");
      const region = object.nearest_area[0].region[0].value;
      const area = object.nearest_area[0].areaName[0].value;
      const country = object.nearest_area[0].country[0].value;
      const feelsLike = object.current_condition[0].FeelsLikeF;

      display.innerHTML = `
      
      <h2>${area}</h2>
      <ul>
      <li class="display-li"><strong>Area:</strong> ${area} </li>
      <li class="display-li"><strong>Region:</strong> ${region} </li>
      <li class="display-li"><strong>Country:</strong> ${country} </li>
      <li class="display-li"><strong>Currently:</strong> Feels like ${feelsLike}°F
      </ul>
      
      `;

      //user info for next few days

      let displayDiv = document.querySelector(".display-div");
      displayDiv.style.visibility = "visible";

      //   console.log(displayDiv);

      displayDiv.innerHTML = `

    <div class="weather-today">
        <div>
            <h3>Today</h3>
        </div>
        <div>Average Tempretaure: ${object.weather[0].avgtempF} °F</div>
        <div>Max Temperature: ${object.weather[0].maxtempF} °F</div>
        <div>Min Temperature: ${object.weather[0].mintempF} °F</div>
        </div>
        <div class="weather-tomorrow">
        <div>
            <h3>Tomorrow</h3>
        </div>
        <div>Average Tempretaure: ${object.weather[1].avgtempF} °F</div>
        <div>Max Temperature: ${object.weather[1].maxtempF} °F</div>
        <div>Min Temperature: ${object.weather[1].mintempF} °F</div>
        </div>
        <div class="weather-after-tomorrow">
        <div>
          <h3>Day After Tomorrow</h3>
        </div>
        <div>Average Tempretaure: ${object.weather[2].avgtempF} °F</div>
        <div>Max Temperature: ${object.weather[2].avgtempF} °F</div>
        <div>Min Temperature: ${object.weather[2].avgtempF} °F</div>
        </div>`;

      //side bar searches name and feels like temp

      let side = document.querySelector(".fill");
      const grill = (side.innerHTML += `
    <div class="history-of-input">${area} - ${feelsLike}°F</div>
    `);
      const frog = document.querySelector(".history-of-input");
      if (grill !== frog) {
        grill;
      }
      console.log(side, "side");
      console.log(frog, "frog");
      console.log(grill, "grill");
    })
    .catch(console.log);
  event.target.reset();
});

//update main and sidebar of the page

//if sidebar link is clicked main should show up for that input

//do not add the history click to the sidebar if its clicked agian

//
