fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayCocktail(data) {
    const cocktail = data.drinks[0];
    const cocktailDiv = document.getElementById("cocktail");  

    const cocktailName = cocktail.strDrink;
    const heading = document.createElement("h1");
    heading.innerHTML = cocktailName;
    cocktailDiv.appendChild(heading);

    const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);
  document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";

  const cocktailIngredients = document.createElement("ul");
  cocktailDiv.appendChild(cocktailIngredients);  
  
  const getIngredients = Object.keys(cocktail)
  .filter(function (b) {
    return b.indexOf("strIngredient") == 0;
  })
    .reduce(function (a, b) {
        if (cocktail[b] != null) {
          a[b] = cocktail[b];
        }
        return a;
      }, {});
  
    for (let key in getIngredients) {
      let value = getIngredients[key];
      listItem = document.createElement("li");
      listItem.innerHTML = value;
      cocktailIngredients.appendChild(listItem);
    }

 

  } 
  