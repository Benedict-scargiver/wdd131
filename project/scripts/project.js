const suit = [
    {
        colorCode: "black",
        imageUrl: "images/blacksuit1.jpg",
        about: "Contemporary suits feature modern cuts and fabric patterns, embracing individuality. ",
        suitName: "Black gentleman Suit",
    },
    {
        colorCode: "black",
        imageUrl: "images/blacksuit3.jpg",
        about:"From slim fits to monochrome designs, these suits often showcase unique features such as asymmetrical cuts or textured fabrics",
        suitName: "Black gentleman Suit"
    },
    {
        colorCode: "black",
        imageUrl: "images/blacksuit4.jpg",
        about:"Styling with futuristic accessories, such as statement shoes or unconventional ties, can elevate the overall look to a fashion-forward statement.",
        suitName: "Black gentleman Suit"
    },
    {
        colorCode: "black",
        imageUrl: "images/blacksuit5.jpg",
        about:"The classic black wool suit is a must-have for formal events and business settings. ",
        suitName: "Black gentleman Suit"
    },
    {
        colorCode: "brown",
        imageUrl: "images/flexblazzer1.jpg",
        about:"The three-piece suit, consisting of a jacket, trousers, and a matching waistcoat, is a versatile option for various occasions.",
        suitName: "Brown gentleman Suit"
        
    },
    {
        colorCode: "black",
        imageUrl: "images/blacksuite6.jpg",
        about:"This ensemble adds sophistication and depth to any outfit, allowing for style experimentation with different tie and shirt combinations.",
        suitName: "Black gentleman Suit"
    },
    {
        colorCode: "black",
        imageUrl:"images/blacksuite7.jpg",
        about:"This suit typically features a two-button jacket and straight-leg trousers, providing a timeless silhouette.",
        suitName: "Black gentleman Suit"
    },
    {
        colorCode: "other",
        imageUrl: "images/flexsuit2.jpg",
        about:"Brown suits pair well with a wide range of shirt and tie combinations,As fashion continues to evolve, the gentlemen's suit will undoubtedly retain its status as a timeless symbol of style and dignity.",
        suitName: "gentleman Suit"
    },
    {
        colorCode: "other",
        imageUrl: "images/winesuite1.jpg",
        about:"For warmer climates or summer events, a black linen suit is an excellent choice. ",
        suitName: "Wine gentleman Suit"
    },
    {
        colorCode: "other",
        imageUrl: "images/winesuite2.jpg",
        about:"Linens lightweight and breathable fabric keep you cool while still looking sharp.",
        suitName: "Burgundy gentleman Suit"

    },
    {
        colorCode: "other",
        imageUrl: "images/winesuite3.jpg",
        about:"Ideal for younger professionals or fashion-conscious individuals, it pairs well with both formal and semi-formal shirts.",
        suitName: "Burgundy Suit"
    },
    {
        colorCode: "other",
        imageUrl: "images/flexsuit3.jpg",
        about:"Brown suits pair well with a wide range of shirt and tie combinations,",
        suitName: "Brown Gentleman Suit"
    },
    {
        colorCode: "blue",
        imageUrl: "images/deepblue1.jpg",
        about:"Blue suit conveys professionalism and confidence, making it a popular choice for business settings",                               
        suitName: "Deep navy Gentleman Suit"
    },
    {
        colorCode: "blue",
        imageUrl: "images/deepblue2.jpg",
        about:"This versatility allows them to be suitable for both formal and casual occasions.",
        suitName: "Blue Gentleman Suit"
    },
    {
        colorCode: "blue",
        imageUrl: "images/deepblue3.jpg",
        about:"Blue suit conveys professionalism and confidence, making it a popular choice for business settings, interviews, and networking events.",
        suitName: "Blue Gentleman Suit"
    },
    {
        colorCode: "blue",
        imageUrl: "images/deepblue4.jpg",
        about:"They can be matched with both light and dark colors, enhancing their adaptability.",
        suitName: "Blue Gentleman Suit"
    },
    {
        colorCode: "brown",
        imageUrl: "images/flexblazzer1.jpg",
        about:" Brown suits pair well with a wide range of shirt and tie combinations, allowing for creative styling. ",
        suitName: "Brown Gentleman Suit"
    },

    {
        colorCode: "other",
        imageUrl: "images/greensuit3.jpg",
        about: "Contemporary suits feature modern cuts and fabric patterns, embracing individuality. ",
        suitName: "Forest Green Gentleman Suit"
    },

];

// Loop through the array and create "suits cards" for each suits by displaying
function suitsCard(suits) {
    return ` 
            <div class="card">
    
                <img src="${suits.imageUrl}" loading="lazy" alt="${suits.suitsName}"/>
                <p> ${suits.about}</p>
                <h3>${suits.suitName}</h3>
            </div>`;
}

// mapped on html
function showsuits(suit) {
    const mainContainer = document.querySelector('#container');
    const suitsCards = suit.map(suitsCard).join("");
    mainContainer.innerHTML = suitsCards;
}

showsuits(suit);

document.querySelector("#home").addEventListener("click", () => {
    let homePage = window.location.href = 'index.html';
    showsuits(homePage);
});

document.querySelector("#other").addEventListener("click", () => {
    let oldsuits = suit.filter(suits => suits.colorCode == "other");
    showsuits(oldsuits);
});

document.querySelector("#blue").addEventListener("click", () => {
    let newsuits = suit.filter(suits => suits.colorCode == "blue");
    showsuits(newsuits);
});

document.querySelector("#Black").addEventListener("click", () => {
    let largesuits = suit.filter(suits => suits.colorCode == "black");
    showsuits(largesuits);
});


document.querySelector("#brown").addEventListener("click", () => {
    let smallsuits = suit.filter(suits => suits.colorCode == "brown");
    showsuits(smallsuits);
});



// get the hamburger icon element
const hamburgerIcon = document.getElementById('menu');
const navigation = document.getElementById('navMenu');

hamburgerIcon.addEventListener('click', function () {
    navigation.classList.toggle('show');
    hamburgerIcon.classList.toggle('open');
});