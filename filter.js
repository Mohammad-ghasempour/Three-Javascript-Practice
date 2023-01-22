const data = [
  { id: 1, name: "Electronic dartboard", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-Dartskap-m-Elektronisk-dartskive-og-dartpiler-CB-90-Dart-skap-Karella_800x.jpg?v=1650450666", price: 900, cat: "dartsBoard" },
  { id: 2, name: "BULL'S Success Steel Darts | Black", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Success-Staldart-Svart-23g-Dartpiler-Bulls_800x.jpg?v=1659023767", price: 35, cat: "hartTip" },
  { id: 3, name: "Tufflex soft tips - 100", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Tufflex-soft-tips-100-og-1000-stk-Dartpiler-Bulls_800x.jpg?v=1650623761", price: 2, cat: "softTip" },
  { id: 4, name: "BULL'S Ballista Steel dart, 70% Tungsten", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Ballista-Staldart-70-Tungsten-Dartpiler-Bulls_72eddf32-6d62-4600-b7cb-f7e06ebf5ddf_800x.jpg?v=1665915409", price: 50, cat: "hardTip" },
  { id: 5, name: "BULL'S Simplex Aluminium", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Simplex-Aluminium-bakstykke-Sett-av-3-Dart-bakstykker-Bulls_800x.jpg?v=1659022800", price: 10, cat: "accessories" },
  { id: 6, name: "BULL'S Dot D2 90% Tungsten", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Dot-D2-90-Tungsten-Soft-Dart-Dartpiler-Bulls-2_b5206943-b566-4036-9170-b7d927bcd0e5_800x.jpg?v=1665915270", price: 60, cat: "softTip" },
  { id: 7, name: "BULL'S Blizzard Soft Dart", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLS-Blizzard-Soft-Dart-Dartpiler-Bulls-2_51ce0707-1e14-48f0-a455-162ae7c71028_800x.jpg?v=1665915309", price: 25, cat: "softTip" },
  { id: 8, name: "BULL's Protection ring / wall protector", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-BULLs-Beskyttelsesring-veggbeskytter-til-dart-Dart-veggbeskyttere-Bulls_800x.jpg?v=1651486900", price: 20, cat: "accessories" },
  { id: 9, name: "Unicorn Eclipse HD2 - TV Edition Professional", img: "https://cdn.shopify.com/s/files/1/2099/9697/products/Kvalitetstid_no-Unicorn-Eclipse-HD2-TV-Edition-Profesjonell-Bristle-Dartskive-Dartskiver-Unicorn_800x.jpg?v=1652091580", price: 85, cat: "dartsBoard" },

];


const products = document.querySelector(".products")

const loadProducts = ()=>{

    products.innerHTML =

    data.map((item , index)=>
         ` <div class="product">
        <img src=${item.img} alt=${item.name}/>
        <span class="name">${item.name}</span>
        <span class="priceText">$ ${item.price}</span>
    </div>`
    ).join("")

}

loadProducts();