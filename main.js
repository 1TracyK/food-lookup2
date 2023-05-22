const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = '0e8aff17';
const APP_key = 'deb4f4e2a15058983cbb42c28bcac086';	
const baseURL = 'https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}';

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
   });

    async function fetchAPI (){
    const baseURL = 'https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}'
    const response = await fetch(baseURL);
    console.log(response);
   }

