let search_input = document.getElementById("countryInput");
let search_button = document.getElementById("searchButton");
let country_introduction = document.getElementById("introduction");
let country_name = document.getElementById("country_name");
let country_official_name = document.getElementById("official_name");
let country_flag_description = document.getElementById("flag_description");
let country_capital = document.getElementById("capital");
let country_region = document.getElementById("region");
let country_subregion = document.getElementById("subregion");
let country_currency = document.getElementById("currency");
let country_time_difference = document.getElementById("time_difference");
let country_calling_code = document.getElementById("calling_code");
let country_languages = document.getElementById("languages");
let country_location = document.getElementById("location");
let country_area = document.getElementById("area");
let country_climate = document.getElementById("climate");
let country_terrain = document.getElementById("terrain");
let country_highest_point = document.getElementById("highest_point");
let country_bording_countries = document.getElementById("bordering_countries");
let country_population = document.getElementById("population");
let country_population_distribution = document.getElementById("population_distribution");
let country_median_age = document.getElementById("median_age");
let country_major_cities = document.getElementById("major_cities");
let country_life_expectancy = document.getElementById("life_expectancy");
let country_tobacco_use = document.getElementById("tobacco_use");

search_button.addEventListener("click", async function () {
    let term = search_input.value.trim().toLowerCase();
    const response = await fetch(`https://countries.altoal.com/api/v1/name/${encodeURIComponent(term)}.json`);
    const data = await response.json();
    console.log(`https://countries.altoal.com/api/v1/name/${encodeURIComponent(term)}.json`);

    country_introduction.textContent = data.data.introduction.background.value.string;
    country_name.textContent = "COMMON NAME: " + data.data.identity.names.common;
    country_official_name.textContent = "OFFICIAL NAME: " + data.data.identity.names.official;
    country_flag_description.textContent = "FLAG DESCRIPTION: " + data.data.government.flag.value.description.string;
    country_capital.textContent = "CAPITAL: " + data.data.government.capital.value.name.string;
    country_region.textContent = "REGION: " + data.data.identity.classification.region;
    country_subregion.textContent = "SUBREGION: " + data.data.identity.classification.subregion;
    country_currency.textContent = "CURRENCY SYMBOL: " + data.data.identity.currency.symbol;
    country_time_difference.textContent = "TIME DIFFERENCE: " + data.data.government.capital.value.time_difference.string;
    country_calling_code.textContent = "CALLING CODE: " + data.data.identity.communication.calling_code;
    //languages
    country_location.textContent = "LOCATION: " + data.data.geography.location.value.string;
    country_area.textContent = "AREA: " + data.data.geography.area.value.total.measurement + data.data.geography.area.value.total.unit;
    country_climate.textContent = "CLIMATE: " + data.data.geography.climate.value.string;
    country_terrain.textContent = "TERRAIN: " + data.data.geography.terrain.value.string;
    country_highest_point.textContent = "HIGHEST POINT: " + data.data.geography.elevation.value.highest_point.value.measurement + data.data.geography.elevation.value.highest_point.value.unit;
    //bordering countries
    country_population.textContent = "POPULATION: " + data.data.people_and_society.population.value.total.number + " (Year: " + data.data.people_and_society.population.value.total.date.year + ")";
    country_population_distribution.textContent = "POPULATION DISTRIBUTION: " + data.data.people_and_society.population_distribution.value.string;
    country_median_age.textContent = "MEDIAN AGE: " + data.data.people_and_society.median_age.value.total.number;
    //major cities
    country_life_expectancy.textContent = "LIFE EXPECTANCY: " + data.data.people_and_society.life_expectancy_at_birth.value.total.number;
    country_tobacco_use.textContent = "TOBACCO USE: " + data.data.people_and_society.tobacco_use.value.total.percent + "%";
});