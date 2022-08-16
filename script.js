
image = document.getElementById("image");
title = document.getElementById("title");

text = document.getElementById("text");

category = document.getElementById("category");
area = document.getElementById("area");

specification = document.getElementById("specification");
preparation = document.getElementById("preparation");

document.getElementById("getMeal").addEventListener("click", function(){



    console.log("Devam aslanım")



    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);

        
	});
   
    

    const createMeal = (meal) => {
        const ingredients = [];
        // Get all ingredients from the object. Up to 20
        for(let i=1; i<=20; i++) {
            if(meal[`strIngredient${i}`]) {
                ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
                // console.log(meal)

                // console.log(ingredients)
                specification.innerHTML = `Ingredients: <br> <br> <ul>
                ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>`

                
                
              
                title.innerHTML = meal.strMeal
                text.innerHTML = meal.strInstructions
                // console.log(meal.strMealThumb)

                category.innerHTML = `Category: ${meal.strCategory}`;



                area.innerHTML = `Area: ${meal.strArea}`;






               

                preparation.innerHTML = `<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>`








    
    
                 image.innerHTML = `<img src="${meal.strMealThumb}" alt="Meal Image">`
            } else {
                // Stop if no more ingredients
                break;
            }


           
        }
    }



    



})

