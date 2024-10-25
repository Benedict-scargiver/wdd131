const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];



const productList = document.querySelector("#productNameSelection")

document.addEventListener("DOMContentLoaded", function () {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productList.appendChild(option);

  });  
});


document.addEventListener("DOMContentLoaded", function () {
  let reviewCount = localStorage.getItem('reviewCount');

  if (!reviewCount) {
      reviewCount = 0;
  } else {
      reviewCount = parseInt(reviewCount, 10);
  }

  reviewCount++ ;
  localStorage.setItem('reviewCount', reviewCount);

  document.getElementById('count').textContent = reviewCount;
});

setFooterInformation();