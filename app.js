const menu = [
    { 
        img: "./images/item-1.jpeg",
        name: "deluxe pizza",
        category: "pizza",
        price: 4200,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img:"./images/item-2.jpeg",
        name: "cheeseburger",
        category: "desserts",
        price: 900,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-3.jpeg",
        name: "pork BBQ",
        category: "desserts",
        price: 400,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-4.jpeg",
        name: "french bread",
        category: "bread",
        price: 700,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-5.jpeg",
        name: "coca cola",
        category: "drinks",
        price: 450,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-6.jpeg",
        name: "pizza cheese",
        category: "pizza",
        price: 3500,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-7.jpeg",
        name: "peanut butter",
         category: "desserts",
        price: 800,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-8.jpeg",
        name: "BBQ sausage",
         category: "desserts",
        price: 450,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-9.jpeg",
        name: "wheat bread",
         category: "bread",
        price: 1000,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
     },
    { 
        img: "./images/item-10.jpeg",
        name: "pepsi",
         category: "drinks",
        price: 350,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem.",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-11.jpeg",
        name: "brazillian pizza",
         category: "pizza",
        price: 3000,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem.",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-12.jpeg",
        name: "chocolate brownies",
         category: "desserts",
        price: 400,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem.",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-13.jpeg",
        name: "strawberry shakes",
         category: "drinks",
        price: 1200,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem.",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    },
    { 
        img: "./images/item-14.jpeg",
        name: "margherita pizza",
         category: "pizza",
        price: 3999,
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem.",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid labore possimus magni adipisci sint corrupti cumque? Debitis, nulla quidem."
    }
]

const menuCenter = document.querySelector(".menu-center")
const btnContainer = document.querySelector(".btn-container")

// Display Items and Buttons
window.addEventListener("DOMContentLoaded", function(){
   displayMenuItems(menu)
   displayMenuBtns()
})

// Display Menu Item
function displayMenuItems(items){
    let displayMenu = items.map((item) =>
         `<article class="menu-item">
          <img src="${item.img}" class="photo"/>
          <div class="item-info">
            <header>
              <h4>${item.name}</h4>
              <h4 class="price">N${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.text}
            </p>
          </div>
        </article>`
    )
    menuCenter.innerHTML = displayMenu.join("")
}

// Display Buttons
function displayMenuBtns(){
    // get categories
    const categories = Array.of("all", ...new Set(menu.map((items)=> items.category)))

    // display buttons
    const categoryBtns = categories.map((item)=>
         `<button class="filter-btn" data-id="${item}">${item}</button>`
    ).join("")

    btnContainer.innerHTML = categoryBtns

    // filter function
    const filterBtns = document.querySelectorAll(".filter-btn")
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
          const category = e.currentTarget.dataset.id
          if(category === "all"){
            return displayMenuItems(menu)
          }
          const menuCategory = menu.filter((item)=> item.category === category)
          displayMenuItems(menuCategory)
        })
    })
}

// ---- Preloader
const preloader = document.querySelector(".preloader")
window.addEventListener("load", function(){
    preloader.classList.add("hide-preloader")
})