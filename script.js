document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is ready!");
    
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.addEventListener('click', () => {
            alert(`You clicked on ${product.querySelector('h3').innerText}`);
        });
    });
});
function convertAllPrices() {
    const exchangeRate = 0.028; 
    const priceElements = document.querySelectorAll(".price");

    priceElements.forEach(priceElement => {
        const text = priceElement.innerText; 
        const bahtPrice = parseFloat(text.match(/\d+/)[0]); 
        const usdPrice = (bahtPrice * exchangeRate).toFixed(2);
        priceElement.innerText = `ราคา: $${usdPrice}`;
    });
}

console.log("Price conversion function added.");
