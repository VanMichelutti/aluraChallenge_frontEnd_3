
const createNewProduct = (name, price, image, id) => {
    const newProductBox = document.createElement('li');

    const content = `
        <img src="${image}" alt="${name} "class="product-box_image">
        <h3 class="product-box_name">${name}</h3>
        <p class="product-box_price">${price}</p>
        <a href="./produto/${id}.html" class="product-box_about">Ver produto</a>
        `;

    newProductBox.innerHTML = content;
    newProductBox.classList.add("product-box");

    return newProductBox;
}


const productsDatabase = async () => {
    const data = await fetch(`https://my-json-server.typicode.com/VanMichelutti/database-aluraChallenge/products`);
    return await data.json();
}




function generateProductsSection (){
    productsDatabase()
        .then(data => {
            data.forEach(element => {
                const sectionSelector = document.querySelector(element.dataCategory);
                sectionSelector.appendChild(createNewProduct(element.name, element.price, element.image));
            })
        });
}
generateProductsSection();