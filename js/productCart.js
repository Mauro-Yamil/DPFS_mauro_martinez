// Función para inicializar el carrito
function initCart() {
    setupQuantitySelectors();
    setupRemoveButtons();
    setupCheckoutButton();
    updateCartCount();
}

// Configurar selectores de cantidad
function setupQuantitySelectors() {
    const minusBtns = document.querySelectorAll('.qty-btn.minus');
    const plusBtns = document.querySelectorAll('.qty-btn.plus');
    const qtyInputs = document.querySelectorAll('.qty-input');
    
    minusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(qtyInputs[index].value);
            if (currentValue > 1) {
                qtyInputs[index].value = currentValue - 1;
                updateCartTotal();
            }
        });
    });
    
    plusBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let currentValue = parseInt(qtyInputs[index].value);
            if (currentValue < 10) {
                qtyInputs[index].value = currentValue + 1;
                updateCartTotal();
            }
        });
    });
    
    qtyInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.value < 1) input.value = 1;
            if (input.value > 10) input.value = 10;
            updateCartTotal();
        });
    });
}

// Configurar botones de eliminar
function setupRemoveButtons() {
    const removeBtns = document.querySelectorAll('.btn-remove');
    
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateCartTotal();
            updateCartCount();
            
            // Mostrar mensaje si el carrito está vacío
            if (document.querySelectorAll('.cart-item').length === 0) {
                document.querySelector('.cart-items').innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>Tu carrito está vacío</p>
                        <a href="index.html" class="btn">Volver a la tienda</a>
                    </div>
                `;
            }
        });
    });
}

// Configurar botón de pago
function setupCheckoutButton() {
    const checkoutBtn = document.querySelector('.btn-checkout');
    
    checkoutBtn.addEventListener('click', function() {
        alert('Redirigiendo al proceso de pago...');
        // Aquí iría la lógica para redirigir al checkout
    });
}

// Actualizar total del carrito
function updateCartTotal() {
    const items = document.querySelectorAll('.cart-item');
    let subtotal = 0;
    
    items.forEach(item => {
        const priceText = item.querySelector('.price').textContent;
        const price = parseFloat(priceText.replace('$', '').replace(',', ''));
        const quantity = parseInt(item.querySelector('.qty-input').value);
        subtotal += price * quantity;
    });
    
    const shipping = 500; // Costo fijo de envío
    const total = subtotal + shipping;
    
    document.querySelector('.summary-row:nth-child(1) span:last-child').textContent = `$${subtotal.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    document.querySelector('.summary-row.total span:last-child').textContent = `$${total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    
    updateCartCount();
}

// Actualizar contador del carrito
function updateCartCount() {
    const items = document.querySelectorAll('.cart-item');
    let totalItems = 0;
    
    items.forEach(item => {
        totalItems += parseInt(item.querySelector('.qty-input').value);
    });
    
    document.querySelector('.cart-count').textContent = totalItems;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initCart);