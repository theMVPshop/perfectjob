fetch('cities.json')
  .then(response => response.json())
  .then(cities => {
    // Get the datalist element
    const datalist = document.getElementById('cities');

    // Loop through the cities array and create an option element for each city
    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city.name;
      datalist.appendChild(option);
    });
  });