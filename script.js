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
    const exchangeRate = 0.028; // อัตราแลกเปลี่ยน (1 บาท = 0.028 ดอลลาร์)
    const priceElements = document.querySelectorAll(".price");

    priceElements.forEach(priceElement => {
        const text = priceElement.innerText; // เช่น "ราคา: 1500 บาท"
        const bahtPrice = parseFloat(text.match(/\d+/)[0]); // ดึงตัวเลขจากข้อความ
        const usdPrice = (bahtPrice * exchangeRate).toFixed(2);
        priceElement.innerText = `ราคา: $${usdPrice}`;
    });
}

console.log("Price conversion function added.");
