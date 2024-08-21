let products={
    data:[
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "Beige Short Skirt.jpeg"
        },
        {
            productName: "Sporty Smartwatch",
            category: "Watch",
            price: "99",
            image: "Smart watch.jpg"
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "Top.jpg"
        },
        {
            productName: "Stylish Pink Trousers",
            category: "Bottomwear",
            price: "89",
            image: "trousers.webp"
        },
        {
            productName: "Brown Men's Jacket",
            category: "Bottomwear",
            price: "189",
            image: "jacket.webp"
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "pants.jpg"
        }

    ],
};

for (let i of products.data){
    let card = document.createElement("div");
    card.classList.add("card", "i.category");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    document.getElementById("products").appendChild(card);
}