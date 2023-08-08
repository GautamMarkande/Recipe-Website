let products = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": true,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]


function searchItems(listOfCards) {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    listOfCards.forEach(card => {
        const productName = card.querySelector(".product_head").textContent.toLowerCase();

        if (productName.includes(searchInput)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const listofcards = document.querySelectorAll(".card");
    searchItems(listofcards);
});
 



// creating dynamic card and adding dynamic values;

const above4Rating = document.getElementById("Above4");
const below4Rating = document.getElementById("Below4")
function allRecipe(){
    const rightGrid = document.querySelector(".right_grid");
    rightGrid.innerHTML = "";
     
    if((!above4Rating.checked && !below4Rating.checked) || (above4Rating.checked && below4Rating.checked)){
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
            card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
                          `
                     rightGrid.appendChild(card);
            })
            const listofcards = document.querySelectorAll(".card");
           searchItems(listofcards);


    }else if(above4Rating.checked){
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
            rating>=4 && (card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
                          `)&&
                     rightGrid.appendChild(card);
            })
            const listofcards = document.querySelectorAll(".card");
            searchItems(listofcards);
 

    }else{
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
            rating<4 && (card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
                          `)&&
                     rightGrid.appendChild(card);
            })
            const listofcards = document.querySelectorAll(".card");
            searchItems(listofcards);
 

    }
}


// Veg Recipes
function vegRecipes(){
    const rightGrid = document.querySelector(".right_grid");
    rightGrid.innerHTML = "";
    if((!above4Rating.checked && !below4Rating.checked) || (above4Rating.checked && below4Rating.checked)){
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
    
           type==="veg" && (card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
        `) &&  rightGrid.appendChild(card);
        
                    
        })
        const listofcards = document.querySelectorAll(".card");
        searchItems(listofcards);


    }else if(above4Rating.checked){
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
    
           type==="veg" && rating>=4 && (card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
        `) &&  rightGrid.appendChild(card);
                    
        })
        const listofcards = document.querySelectorAll(".card");
        searchItems(listofcards);


    }
    else{
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
    
           type==="veg" && rating<4 && (card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
        `) &&  rightGrid.appendChild(card);
                    
        })
        const listofcards = document.querySelectorAll(".card");
        searchItems(listofcards);


    }

}

//non-veg Recipes

function NonVegRecipes(){
    const rightGrid = document.querySelector(".right_grid");
    rightGrid.innerHTML = "";
    if((!above4Rating.checked && !below4Rating.checked) || (above4Rating.checked && below4Rating.checked)){
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
    
          type==="non-veg" && (card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
        `) &&  rightGrid.appendChild(card);
                    
        })
        const listofcards = document.querySelectorAll(".card");
        searchItems(listofcards);


    }else if(above4Rating.checked){
        products.forEach(item=>{
            let {name, imageSrc,time,type,isLiked,rating} = item;
            const card = document.createElement("div");
            card.className = "card"
    
          type==="non-veg" && rating>=4 && (card .innerHTML= `
                            <div class="image_container">
                                <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                            </div>
                                
                            <span class="Veg_or_non_veg">${type}</span>
                            <div class="product_name_and_rating">
                                <span class="product_head">${name}</span>
                                <div class="rating">
                                     <img src="star.png" alt="img">
                                    <p>${rating}</p>
                                </div>
                            </div>
                            <div class="time-and-likes">
                                <p class="time">${time}</p>
                               <div class="like-comments">
                                    <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                    <img src="commentLogo.png" alt="img"> 
                               </div>
                            </div>
        
        `) &&  rightGrid.appendChild(card);
                    
        })
        const listofcards = document.querySelectorAll(".card");
        searchItems(listofcards);


    }else{

    products.forEach(item=>{
        let {name, imageSrc,time,type,isLiked,rating} = item;
        const card = document.createElement("div");
        card.className = "card"

      type==="non-veg" && rating <4 && (card .innerHTML= `
                        <div class="image_container">
                            <img class="image_radius" src=${imageSrc} alt="" width="30px" height= "30">
                        </div>
                            
                        <span class="Veg_or_non_veg">${type}</span>
                        <div class="product_name_and_rating">
                            <span class="product_head">${name}</span>
                            <div class="rating">
                                 <img src="star.png" alt="img">
                                <p>${rating}</p>
                            </div>
                        </div>
                        <div class="time-and-likes">
                            <p class="time">${time}</p>
                           <div class="like-comments">
                                <img src=${isLiked ? "likeBlacklogo.png" : "likeRedlogo.png"} alt="img">
                                <img src="commentLogo.png" alt="img"> 
                           </div>
                        </div>
    
    `) &&  rightGrid.appendChild(card);
                
    })
    const listofcards = document.querySelectorAll(".card");
    searchItems(listofcards);

}

}
//all type of recipes button
const allRecipeBtn = document.querySelector(".all-recipe");
const VegRecipeBtn = document.querySelector(".veg-recipe");
const NonVegRecipeBtn = document.querySelector(".non-veg-recipe");
 allRecipeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    allRecipe();
 });


//only veg type recipes button

VegRecipeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    vegRecipes();
});

//only non-veg recipes are present here
NonVegRecipeBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    NonVegRecipes();
});
allRecipe();