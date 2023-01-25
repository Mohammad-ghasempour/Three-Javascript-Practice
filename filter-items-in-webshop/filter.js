const data = [
  {
    id: 1,
    name: "Electronic dartboard",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-Dartskap-m-Elektronisk-dartskive-og-dartpiler-CB-90-Dart-skap-Karella_800x.jpg?v=1650450666",
    price: 100,
    cat: "Darts Board",
  },
  {
    id: 2,
    name: "BULL'S Success Steel Darts | Black",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Success-Staldart-Svart-23g-Dartpiler-Bulls_800x.jpg?v=1659023767",
    price: 35,
    cat: "Hard Tip",
  },
  {
    id: 3,
    name: "Tufflex soft tips - 100",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Tufflex-soft-tips-100-og-1000-stk-Dartpiler-Bulls_800x.jpg?v=1650623761",
    price: 3,
    cat: "Soft Tip",
  },
  {
    id: 4,
    name: "BULL'S Ballista Steel dart, 70% Tungsten",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Ballista-Staldart-70-Tungsten-Dartpiler-Bulls_72eddf32-6d62-4600-b7cb-f7e06ebf5ddf_800x.jpg?v=1665915409",
    price: 50,
    cat: "Hard Tip",
  },
  {
    id: 5,
    name: "BULL'S Simplex Aluminium",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Simplex-Aluminium-bakstykke-Sett-av-3-Dart-bakstykker-Bulls_800x.jpg?v=1659022800",
    price: 10,
    cat: "Accessories",
  },
  {
    id: 6,
    name: "BULL'S Dot D2 90% Tungsten",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Dot-D2-90-Tungsten-Soft-Dart-Dartpiler-Bulls-2_b5206943-b566-4036-9170-b7d927bcd0e5_800x.jpg?v=1665915270",
    price: 60,
    cat: "Soft Tip",
  },
  {
    id: 7,
    name: "BULL'S Blizzard Soft Dart",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Blizzard-Soft-Dart-Dartpiler-Bulls-2_51ce0707-1e14-48f0-a455-162ae7c71028_800x.jpg?v=1665915309",
    price: 25,
    cat: "Soft Tip",
  },
  {
    id: 8,
    name: "BULL's Protection ring / wall protector",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLs-Beskyttelsesring-veggbeskytter-til-dart-Dart-veggbeskyttere-Bulls_800x.jpg?v=1651486900",
    price: 20,
    cat: "Accessories",
  },
  {
    id: 9,
    name: "Unicorn Eclipse HD2 - TV Edition Professional",
    img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-Unicorn-Eclipse-HD2-TV-Edition-Profesjonell-Bristle-Dartskive-Dartskiver-Unicorn_800x.jpg?v=1652091580",
    price: 85,
    cat: "Darts Board",
  },
];

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categorise = document.querySelector(".cats");
const range = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");

const loadProducts = (filteredProducts) => {
  productsContainer.innerHTML = filteredProducts
    .map(
      (item) =>
        ` <div class="product">
        <img src=${item.img} alt=${item.name}/>
        <span class="name">${item.name}</span>
        <span class="priceText">$ ${item.price}</span>
    </div>`
    )
    .join("");
};

searchInput.addEventListener("keyup", (e) => {
  const keyword = e.target.value.toLowerCase();
  loadProducts(
    data.filter((item) => item.name.toLowerCase().indexOf(keyword) !== -1)
  );
});

loadProducts(data);

const setCategories = () => {
  const allCats = data.map((item) => item.cat);
  allCats.unshift("All");
  const unicCats = allCats.filter((item, index) => {
    return allCats.indexOf(item) === index;
  });
  categorise.innerHTML = unicCats
    .map((item) => `<span class="cat">${item}</span>`)
    .join("");

  categorise.addEventListener("click", (e) => {
    const selectedCategory = e.target.textContent;

    selectedCategory === "All"
      ? loadProducts(data)
      : loadProducts(data.filter((item) => item.cat === selectedCategory));
  });
};

const setPrice = () => {
  const priceList = data.map((item) => item.price);
  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);
  range.min = minPrice;
  range.max = maxPrice;
  range.value = maxPrice;
  priceValue.innerHTML = "$" + range.value;
  console.log(
    range.addEventListener("input", (e) => {
      priceValue.innerHTML = "$" + e.target.value;
      loadProducts(data.filter((item) => item.price <= e.target.value));
    })
  );
};

setCategories();
setPrice();
