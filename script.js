document.addEventListener("DOMContentLoaded", () => {
    console.log("Website is ready!");
    
    // ตัวอย่างการเพิ่มฟังก์ชันคลิก
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        product.addEventListener('click', () => {
            alert(`You clicked on ${product.querySelector('h3').innerText}`);
        });
    });
});
