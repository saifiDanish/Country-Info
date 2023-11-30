const countryContainer = document.querySelector('.country-container');
const filterByRegion = document.querySelector('.filter-by-region');
const searchInput = document.querySelector('.search-container input');


let allCountriesData;

fetch("https://restcountries.com/v3.1/all")
.then((res)=> res.json())
.then((data)=>{
    renderCountries(data);
    allCountriesData=data;
})


function renderCountries(data){
    countryContainer.innerHTML='';
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
}
filterByRegion.addEventListener('change',(e)=>{
    // console.log(e.target.value);
    fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
.then((res)=> res.json())
.then((data)=>{
    renderCountries(data);
})
})

searchInput.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    const filterCountry = allCountriesData.filter((country)=>{
        return country.name.common.toLowerCase().includes(e.target.value.toLowerCase());
    })
    renderCountries(filterCountry);
})