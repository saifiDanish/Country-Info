
const countryName =  new URLSearchParams(window.location.search).get('name');

const flagImg = document.querySelector(".country-details img");
const countryElement = document.querySelector(".details-text-container h1");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const capital = document.querySelector(".capital");



fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    console.log();
    flagImg.src = data[0]?.flags?.svg
    countryElement.innerText = data[0]?.name?.common;
    population.innerText = data[0].population.toLocaleString('hi-IN');
    region.innerText=data[0].region;
    subRegion.innerText=data[0]?.subregion;
    capital.innerText=data[0]?.capital[0];
    topLevelDomain.innerText=data[0].tld.join(", ");
    languages.innerText=Object.values(data[0]?.languages).join(", ");
    nativeName.innerText=data[0].name.common || Object.values(data[0].name.nativeName)[0].common
    currencies.innerText=Object.values(data[0]?.currencies)?.map((currency)=>currency.name).join(", ") || "NA Dollar"
  })
