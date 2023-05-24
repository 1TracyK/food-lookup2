const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
const searchIcon = document.querySelector('.search');

let searchQuery = '';

const APP_ID = '0e8aff17';
const APP_key = '99996bea447f7f81dc4fdb8f46e11129';
const baseURL =
	'https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}';

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	fetchAPI();
});

async function fetchAPI() {
	searchText = document.querySelector('input[type=text]').value;
	const baseURL = `https://api.edamam.com/search?q=${searchText}&app_id=${APP_ID}&app_key=${APP_key}&to=20`;
	const response = await fetch(baseURL);
	const data = await response.json();

	generateHTML(data.hits ?? []);
}

function generateHTML(results) {
	let generatedHTML = '';
	results.map((result) => {
		console.log(result.recipe.url, result.recipe);
		generatedHTML += `<div class="item">
        <img src="${result.recipe.image}" class="img2" alt="">
        <div class="flex-container">
            <h1 class="title">${result.recipe.label}</h1>
            <a  class="view-button" href="${
							result.recipe.url
						}" target="_blank">View Recipe</a>
        </div>
        <p class="item-data">Calories:${result.recipe.calories.toFixed(2)}</p>
    </div>`;
	});
	searchResultDiv.innerHTML = generatedHTML;
}
