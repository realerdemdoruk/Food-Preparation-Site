
image = document.getElementById("image");


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
                // console.log(meal.strMealThumb)


                 image.innerHTML = `<img src="${meal.strMealThumb}" alt="Meal Image">`
            } else {
                // Stop if no more ingredients
                break;
            }
        }
    }



    



})

