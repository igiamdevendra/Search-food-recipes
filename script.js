const searchBox = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
const recipiesDiv = document.querySelector('.recipies')
const form = document.querySelector('nav form');
const recipyBox = document.getElementById('showRecipy')
const recipyP = document.getElementById('recipy')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchedValue = searchBox.value;
  getMeals(searchedValue);
})

function getMeals(searchedValue) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`;

  fetch(url)
    .then(response => response.json())
    .then(data => renderMeals(data.meals))
    .catch(error => console.log(error))
}

function renderMeals(meals) {
  meals.forEach(({strMeal, strCategory, strMealThumb, strInstructions}) => {
    recipiesDiv.innerHTML += `
       <div class="recipy-card">
                    <img src=${strMealThumb} />
                    <h1>${strMeal}</h1>
                    <h2>${strCategory}</h2>
                    <button id="recipyBtn" onclick='showRecipy(event)' data='${strInstructions}'> recipe</button>
                  </div>
    `
  })
}
function showRecipy(event){
  recipyP.innerText = event.target.getAttribute('data')
  recipyBox.showModal()
}

function testing(value){
  console.log(value)
}