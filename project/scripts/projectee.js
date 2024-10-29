const suit = [
    {
        colorCode: "black",
        imageUrl:"images/silverwatch.jpg",
        suitName: "Original Silver Chronograph",
    },
    {
        colorCode: "shoe",
        imageUrl: "images/blackshoes2.jpg",
        suitName: "Rebels black shoe "
    },

    {
        colorCode: "wrist",
        imageUrl:
            "images/silverwatch2.jpg",
        suitName: "Beneco Silver Chronograph"
    },
    {
        colorCode: "wrist",
        imageUrl:
            "images/silverwatch3.jpg",
        suitName: "Black panther Chronograph"
    },
    {
        colorCode: "wrist",
        imageUrl:
            "images/silverwatch5.jpg",
        suitName: "Black panther Chronograph II"
    },
    {
        colorCode: "other",
        imageUrl:
            "images/shoekit1.jpg",
        suitName: "Cool Man Compelete Kit"
        
    },
    {
        colorCode: "wrist",
        imageUrl: "images/watch1.jpg",
        suitName: "Beneco Edge"
    },
    {
        colorCode: "wrist",
        imageUrl:"images/watch2.jpg",
        suitName: "Vivaco "
    },
    {
        colorCode: "wrist",
        imageUrl: "images/watch3.jpg",
        suitName: "Grand lea, Beneco"
    },
    {
        colorCode: "wrist",
        imageUrl: "images/watch4.jpg",
        suitName: "Beneco Leather wrist Watch"
    },
    {
        colorCode: "wrist",
        imageUrl: "images/watch5.jpg",
        suitName: "Vivaco homme"

    },
    {
        colorCode: "wrist",
        imageUrl: "images/watch6.jpg",
        suitName: "Beneco Vintage wrist Watch"
    },
    {
        colorCode: "wrist",
        imageUrl: "images/leatherwatch1.jpg",
        suitName: "Beneco Grand"
    },
    {
        colorCode: "shoe",
        imageUrl: "images/blackshoes1.jpg",
        suitName: "Rebel black shoe"
    },
    {
        colorCode: "other",
        imageUrl: "images/accessory1.jpg",
        suitName: "Gentle man's Kits"
    },
    {
        colorCode: "shoe",
        imageUrl: "images/brownshoes1.jpg",
        suitName: "Beneco Special footwear"
    },
    {
        colorCode: "shoe",
        imageUrl: "images/brownshoes2.jpg",
        suitName: "Beneco kings footwear "
    },
    {
        colorCode: "shoe",
        imageUrl: "images/brownshoes3.jpg",
        suitName: "Beneco kings footwear "
    },
    {
        colorCode: "shoe",
        imageUrl: "images/brownshoes4.jpg",
        suitName: "Beneco dark kings footwear "
    },




];

// Loop through the array and create "suits cards" for each suits by displaying
function suitsCard(suits) {
    return ` 
            <div class="card">
                <img src="${suits.imageUrl}" loading="lazy" alt="${suits.suitsName}" width="250" min-height="150" />
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
})

document.querySelector("#other").addEventListener("click", () => {
    let oldsuits = suit.filter(suits => suits.colorCode == "other");
    showsuits(oldsuits);
});

document.querySelector("#wrist").addEventListener("click", () => {
    let newsuits = suit.filter(suits => suits.colorCode == "wrist");
    showsuits(newsuits);
});

document.querySelector("#shoe").addEventListener("click", () => {
    let largesuits = suit.filter(suits => suits.colorCode == "shoe");
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