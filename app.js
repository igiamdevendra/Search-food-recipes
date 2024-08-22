const recipeForm = document.getElementById('input-form');
const recipeNameInput = document.getElementById('search');
const listRecipies = document.querySelector('.recipies');
const recipeDialog = document.getElementById('showRecipy')
const recipeDetail = document.getElementById('recipy');
const contentText = document.getElementById('content-text')


recipeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  recipeApiCall();
})

function recipeApiCall() {
  const serchedValue = recipeNameInput.value;
  const url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${serchedValue}`;

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      renderMeals(data.meals);
    })
    .catch((error) => {
      contentText.innerText = "Maybe typo or Maybe recipe not available"
    })
}

function renderMeals(meals) {
  listRecipies.innerHTML = "";

  meals.forEach(meal => {
     listRecipies.innerHTML += `
     <div class="recipy-card">
     <img src="${meal.strMealThumb}">
     <h1>${meal.strMeal}</h1>
     <h2>${meal.strCategory}</h2>
     <button onclick="showDialog(event)" data = "${meal.strInstructions}">Show recipe</button>
     </div>
     `
  });
  contentText.style.display = 'none';
}

function showDialog(e) {
  recipeDetail.innerText = e.target.getAttribute('data');
  recipeDialog.showModal();
}
