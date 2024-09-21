function filterProducts(category) {
    var products = document.querySelectorAll('.instrument'); 
    console.log(products);
    if (category === 'all') {
        products.forEach(function(product) {
            product.style.display = 'block';
        });
    } else {
        products.forEach(function(product) {
            if (product.classList.contains(category)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    }
}

function mostrarEmail() {
    document.getElementById('cardContainer').style.display = 'block';
    // document.getElementById('overlay').style.display = 'block';
}

document.getElementById('cardContainer').addEventListener('click', function(event) {
    event.stopPropagation();
});

function hideCard() {
    document.getElementById('cardContainer').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera convencional
    const email = document.getElementById('email').value;
    //console.log('Email capturado:', email);
    hideCard(); // Oculta la tarjeta después de capturar el correo electrónico
});
