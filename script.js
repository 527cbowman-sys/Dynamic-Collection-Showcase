const starbucks = [
  {
    name: "Caffè Americano",
    type: "Coffee",
    temp: "Hot",
    calories: 15,
    pic: "",
  },
  {
    name: "Toasted Coconut Latte",
    type: "Coffee",
    temp: "Hot",
    calories: 230,
    pic: "",
  },
  {
    name: "Caramel Macchiato",
    type: "Coffee",
    temp: "Hot",
    calories: 250,
    pic: "",
  },
  {
    name: "Vanilla Protein Latte",
    type: "Coffee",
    temp: "Hot",
    calories: 310,
    pic: "",
  },
  {
    name: "White Chocolate Mocha",
    type: "Coffee",
    temp: "Hot",
    calories: 390,
    pic: "",
  },
  {
    name: "Strawberry Açaí Lemonade",
    type: "Refresher",
    temp: "Cold",
    calories: 140,
    pic: "",
  },
  {
    name: "Pink Drink",
    type: "Refresher",
    temp: "Cold",
    calories: 140,
    pic: "",
  },
  {
    name: "Mango Dragonfruit Lemonade",
    type: "Refresher",
    temp: "Cold",
    calories: 140,
    pic: "",
  },
  {
    name: "Mango Strawberry Lemonade",
    type: "Refresher",
    temp: "Cold",
    calories: 130,
    pic: "",
  },
  {
    name: "Blended Strawberry Lemonade",
    type: "Refresher",
    temp: "Cold",
    calories: 190,
    pic: "",
  },
  {
    name: "Chocolate Croissant",
    type: "Food",
    temp: "Warm",
    calories: 300,
    pic: "",
  },
  {
    name: "Cake Pop",
    type: "Food",
    temp: "Cold",
    calories: 140,
    pic: "",
  },
  {
    name: "Iced Lemon Loaf",
    type: "Food",
    temp: "Cold",
    calories: 380,
    pic: "",
  },
  {
    name: "Plain Bagel",
    type: "Food",
    temp: "Warm",
    calories: 280,
    pic: "",
  },
  {
    name: "Cinnamon Coffee Cake",
    type: "Food",
    temp: "Warm",
    calories: 330,
    pic: "",
  },
];

const dunkin = [
  {
    name: "Cold Brew",
    type: "Coffee",
    temp: "Cold",
    calories: 5,
    pic: "",
  },
  {
    name: "Signature Latte",
    type: "Coffee",
    temp: "Hot",
    calories: 300,
    pic: "",
  },
  {
    name: "Macchiato",
    type: "Coffee",
    temp: "Hot",
    calories: 70,
    pic: "",
  },
  {
    name: "Espresso",
    type: "Coffee",
    temp: "Hot",
    calories: 5,
    pic: "",
  },
  {
    name: "Cappuccino",
    type: "Coffee",
    temp: "Hot",
    calories: 120,
    pic: "",
  },
  {
    name: "Strawberry Coolatta",
    type: "Refresher",
    temp: "Cold",
    calories: 350,
    pic: "",
  },
  {
    name: "Blue Raspberry Coolatta",
    type: "Refresher",
    temp: "Cold",
    calories: 350,
    pic: "",
  },
  {
    name: "Vanilla Bean Coolatta",
    type: "Refresher",
    temp: "Cold",
    calories: 590,
    pic: "",
  },
  {
    name: "Mango Pineapple Refresher",
    type: "Refresher",
    temp: "Cold",
    calories: 130,
    pic: "",
  },
  {
    name: "Strawberry Dragonfruit Refresher",
    type: "Refresher",
    temp: "Cold",
    calories: 130,
    pic: "",
  },
  {
    name: "Chocolate Chip Muffin",
    type: "Food",
    temp: "Cold",
    calories: 550,
    pic: "",
  },
  {
    name: "Munchkins",
    type: "Food",
    temp: "Cold",
    calories: 60,
    pic: "",
  },
  {
    name: "Chocolate Frosted Donut",
    type: "Food",
    temp: "Cold",
    calories: 260,
    pic: "",
  },
  {
    name: "Bacon Egg and Cheese",
    type: "Food",
    temp: "Hot",
    calories: 520,
    pic: "",
  },
  {
    name: "Hash Browns",
    type: "Food",
    temp: "Hot",
    calories: 110,
    pic: "",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const starbucksCards = document.getElementById("starbucksCards");
  const dunkinCards = document.getElementById("dunkinCards");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
    displayItems([...starbucks, ...dunkin]);

function displayItems(items) {
    const cards = document.getElementById("cards");
    cards.innerHTML = "";
    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="cards">
                <img src="${item.photo}" alt="${item.name}">
                <h3>Name: ${item.name}</h3>
                <p>Type: ${item.type}</p>
                <p>Temperature: ${item.temp}</p>
                <p>Calories: ${item.calories}</p>
            </div>
        `;
        cards.appendChild(card);
    }
    );
};

function filterItems() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const filteredStarbucks = starbucks.filter(item => item.name.toLowerCase().includes(searchInput));
    const filteredDunkin = dunkin.filter(item => item.name.toLowerCase().includes(searchInput));
    displayItems([...filteredStarbucks, ...filteredDunkin]);
};

});