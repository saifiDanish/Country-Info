const countryContainer = document.querySelector('.country-container');

fetch("https://restcountries.com/v3.1/all")
.then((res)=> res.json())
.then((data)=>{
    data.forEach((country)=>{
        // console.log(country)
        const countryCard = document.createElement('a');
        countryCard.classList.add('country-card');
        countryCard.href= `/country.html?name=${country.name.common}`;
        countryCard.innerHTML = `
        <img class="img-container" src="${country.flags.svg}" alt="card-img"/>
        <div class="card-text">
            <h3>${country.name.common}</h3>
            <p><b>Population: </b>${country.population.toLocaleString('hi-IN')  }</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital: </b>${country.capital}</p>
        </div>
        `
        countryContainer.append(countryCard);
    })
})