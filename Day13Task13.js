// Sample recipes data
let recipes = [
    { name: "Vada Pav", description: "Vada pav is a vegetarian street food dish native to the central state of Maharashtra, which is home to the city of Mumbai. The popular dish consists of a deep-fried potato dumpling inside a soft bread bun accompanied by chutneys and green chili peppers." },
    { name: "Biryani", description: "Biryani is a classic Indian dish popularized by Muslim communities across India. It is similar to Persian pilaf or pulao. The spiced rice dish can be found with many variations, though generally, it consists of meat, fish and/or vegetables and rice cooked separately before being layered and cooked together so that the gravy can be absorbed into the rice." }
];

// Function to display recipes
function displayRecipes() {
    const recipeList = document.getElementById('recipe-list');
    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(recipeDiv);
    });
}

// Function to add a new recipe
function addRecipe(event) {
    event.preventDefault();

    const recipeName = document.getElementById('recipe-name').value;
    const recipeDescription = document.getElementById('recipe-description').value;

    if (recipeName && recipeDescription) {
        recipes.push({ name: recipeName, description: recipeDescription });
        displayRecipes();
        document.getElementById('recipe-form').reset();
    } else {
        alert("Please provide both recipe name and description.");
    }
}

// Function to edit a recipe
function editRecipe(index) {
    const newName = prompt("Enter the new name for the recipe:");
    const newDescription = prompt("Enter the new description for the recipe:");

    if (newName !== null && newDescription !== null) {
        recipes[index].name = newName;
        recipes[index].description = newDescription;
        displayRecipes();
    }
}


// Function to delete a recipe
function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

// Display initial recipes
displayRecipes();

// Add event listener to the form
document.getElementById('recipe-form').addEventListener('submit', addRecipe);
