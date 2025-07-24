const productos = {
    '1': {
        id: '1',
        nombre: 'Milanesas de Soja',
        codigo: 'GB-MS-001',
        descripcion: 'Deliciosas milanesas vegetales elaboradas con proteína de soja texturizada de alta calidad. Perfectas para una alimentación saludable, ricas en proteínas y bajas en grasas saturadas.',
        precio: 1200,
        precioAnterior: 1500,
        imagenes: [
            'Imagenes/Milanesasdesoja.png',
            'Imagenes/Milanesasdesoja2png.png',
        ],
        caracteristicas: [
            'Alto contenido proteico (18g por porción)',
            'Sin colesterol',
            'Fuente de fibra',
            'Sin conservantes artificiales'
        ],
        variantes: [
            { nombre: '4 unidades', precio: 1200 },
            { nombre: '6 unidades', precio: 1700 },
            { nombre: '12 unidades', precio: 3200 }
        ],
        descripcionCompleta: `<p>Nuestras milanesas de soja son la alternativa perfecta para quienes buscan reducir el consumo de carne sin sacrificar el sabor.</p>`,
        preparacion: [
            'Cocinar en aceite caliente durante 3-4 minutos por lado hasta dorar',
            'Para horno: 180°C durante 15-20 minutos'
        ],
        ingredientes: 'Proteína de soja texturizada (65%), agua, cebolla, harina de garbanzo, especias.',
        alergenos: 'Contiene soja. Puede contener trazas de gluten.',
        infoNutricional: {
            tamañoPorcion: '100g',
            datos: [
                { nombre: 'Valor energético', valor: '180 kcal' },
                { nombre: 'Proteínas', valor: '18g' }
            ]
        },
        reseñas: [
            {
                autor: 'María G.',
                rating: 5,
                comentario: '¡Las milanesas son increíbles! Mi familia no notó la diferencia con las de carne.'
            }
        ],
        relacionado: ['2', '3']
    },
    '2': {
        id: '2',
        nombre: 'Medallones de Zapallo',
        codigo: 'GB-MZ-002',
        descripcion: 'Medallones vegetales a base de zapallo y quinoa, ideales para una comida rápida y saludable.',
        precio: 950,
        precioAnterior: 1100,
        imagenes: [
            'Imagenes/medallonzapallo.png',
            'Imagenes/medallonzapallo2.png'
        ],
        caracteristicas: [
            'Fuente de vitamina A',
            'Bajo en calorías',
            'Sin gluten',
            'Apto para veganos'
        ],
        variantes: [
            { nombre: '2 unidades', precio: 950 },
            { nombre: '4 unidades', precio: 1800 }
        ],
        descripcionCompleta: `<p>Nuestros medallones de zapallo son una opción deliciosa y nutritiva para cualquier comida.</p>`,
        preparacion: [
            'Cocinar en sartén con poco aceite 3 minutos por lado',
            'Para horno: 200°C durante 10 minutos'
        ],
        ingredientes: 'Zapallo (50%), quinoa (20%), cebolla, harina de arroz, especias.',
        alergenos: 'Puede contener trazas de apio.',
        infoNutricional: {
            tamañoPorcion: '100g',
            datos: [
                { nombre: 'Valor energético', valor: '150 kcal' },
                { nombre: 'Proteínas', valor: '5g' }
            ]
        },
        reseñas: [],
        relacionado: ['1', '4']
    },
    '3': {
        id: '3',
        nombre: 'Barritas Energéticas',
        codigo: 'GB-BE-003',
        descripcion: 'Pack x 5 unidades - Sin azúcar añadido, ingredientes naturales',
        precio: 1500,
        precioAnterior: 1800,
        imagenes: [
            'Imagenes/barraenergetica.png',
            'Imagenes/barraenergetica2.png'
        ],
        caracteristicas: [
            'Sin azúcares añadidos',
            'Fuente de energía natural',
            'Ingredientes orgánicos'
        ],
        variantes: [
            { nombre: '5 unidades', precio: 1500 },
            { nombre: '10 unidades', precio: 2800 }
        ],
        descripcionCompleta: `<p>Barritas energéticas elaboradas con ingredientes 100% naturales. Perfectas para un snack saludable.</p>`,
        preparacion: [
            'Consumir directamente del empaque',
            'Guardar en lugar fresco y seco'
        ],
        ingredientes: 'Dátiles, almendras, avena, coco rallado, miel natural.',
        alergenos: 'Contiene frutos secos.',
        infoNutricional: {
            tamañoPorcion: '1 barra (40g)',
            datos: [
                { nombre: 'Valor energético', valor: '160 kcal' },
                { nombre: 'Proteínas', valor: '4g' }
            ]
        },
        reseñas: [
            {
                autor: 'Carlos P.',
                rating: 4,
                comentario: 'Perfectas para llevar al gimnasio. Buen sabor y textura.'
            }
        ],
        relacionado: ['1', '4']
    },
    '4': {
        id: '4',
        nombre: 'Superfood Mix',
        codigo: 'GB-SM-004',
        descripcion: 'Bolsa 250g - Quinoa, chía y amaranto. Fuente de nutrientes esenciales',
        precio: 1800,
        precioAnterior: 2000,
        imagenes: [
            'Imagenes/mix.png',
            'Imagenes/mix2.png'
        ],
        caracteristicas: [
            'Mezcla de superalimentos',
            'Rico en omega-3',
            'Alto contenido en fibra'
        ],
        variantes: [
            { nombre: '250g', precio: 1800 },
            { nombre: '500g', precio: 3200 }
        ],
        descripcionCompleta: `<p>Mezcla de superalimentos cuidadosamente seleccionados para brindarte nutrientes esenciales.</p>`,
        preparacion: [
            'Agregar a smoothies o yogures',
            'Usar como topping para ensaladas'
        ],
        ingredientes: 'Quinoa orgánica, semillas de chía, amaranto, semillas de lino.',
        alergenos: 'Puede contener trazas de sésamo.',
        infoNutricional: {
            tamañoPorcion: '30g',
            datos: [
                { nombre: 'Valor energético', valor: '120 kcal' },
                { nombre: 'Proteínas', valor: '5g' }
            ]
        },
        reseñas: [],
        relacionado: ['2', '3']
    }
};

// Obtener el ID del producto de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id') || '1'; // Si no hay ID, muestra el primer producto

// Función principal para cargar los datos del producto
function cargarProducto() {
    const producto = productos[productId];
    
    if (!producto) {
        // Si el producto no existe, redirigir a la página de inicio
        window.location.href = 'index.html';
        return;
    }

    // Actualizar el título de la página
    document.title = `${producto.nombre} | GreenBite`;
    
    document.getElementById('current-product').textContent = producto.nombre;
    
    // Actualizar información básica
    document.getElementById('product-title').textContent = producto.nombre;
    document.getElementById('product-code').textContent = `Código: ${producto.codigo}`;
    document.getElementById('product-description').textContent = producto.descripcion;
    document.getElementById('current-price').textContent = `$${producto.precio}`;
    
    // Mostrar precio anterior y descuento si corresponde
    const oldPriceEl = document.getElementById('old-price');
    const discountEl = document.getElementById('discount-badge');
    
    if (producto.precioAnterior && producto.precioAnterior > producto.precio) {
        const descuento = Math.round((1 - producto.precio / producto.precioAnterior) * 100);
        oldPriceEl.textContent = `$${producto.precioAnterior}`;
        discountEl.textContent = `${descuento}% OFF`;
    } else {
        oldPriceEl.style.display = 'none';
        discountEl.style.display = 'none';
    }
    
    // Cargar características
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';
    producto.caracteristicas.forEach(caracteristica => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="fas fa-check"></i> ${caracteristica}`;
        featuresList.appendChild(li);
    });
    
    // Cargar variantes
    const variantsContainer = document.getElementById('product-variants');
    variantsContainer.innerHTML = '';
    
    producto.variantes.forEach((variante, index) => {
        const button = document.createElement('button');
        button.className = `variant-btn ${index === 0 ? 'active' : ''}`;
        button.textContent = variante.nombre;
        button.dataset.price = variante.precio;
        variantsContainer.appendChild(button);
    });
    
    // Cargar imágenes
    const mainImage = document.getElementById('main-product-image');
    const thumbnailsContainer = document.getElementById('thumbnail-container');
    
    mainImage.src = producto.imagenes[0];
    mainImage.alt = producto.nombre;
    
    thumbnailsContainer.innerHTML = '';
    producto.imagenes.forEach((imagen, index) => {
        const thumb = document.createElement('div');
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.dataset.image = imagen;
        thumb.innerHTML = `<img src="${imagen}" alt="${producto.nombre} - Vista ${index + 1}">`;
        thumbnailsContainer.appendChild(thumb);
    });
    
    // Cargar información adicional (tabs)
    document.getElementById('description-content').innerHTML = producto.descripcionCompleta;
    
    const preparationList = document.getElementById('preparation-steps');
    preparationList.innerHTML = '';
    producto.preparacion.forEach(paso => {
        const li = document.createElement('li');
        li.textContent = paso;
        preparationList.appendChild(li);
    });
    
    document.getElementById('ingredients-content').textContent = producto.ingredientes;
    document.getElementById('allergens-info').textContent = producto.alergenos;
    
    // Cargar reseñas
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';
    
    if (producto.reseñas.length > 0) {
        document.getElementById('review-count').textContent = `(${producto.reseñas.length} reseñas)`;
        
        producto.reseñas.forEach(reseña => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review';
            reviewDiv.innerHTML = `
                <div class="review-header">
                    <div class="review-author">${reseña.autor}</div>
                    <div class="review-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(reseña.rating)}
                    </div>
                </div>
                <div class="review-content">
                    <p>${reseña.comentario}</p>
                </div>
            `;
            reviewsContainer.appendChild(reviewDiv);
        });
    } else {
        document.getElementById('review-count').textContent = '(Sin reseñas aún)';
        reviewsContainer.innerHTML = '<p>Este producto no tiene reseñas todavía. ¡Sé el primero en opinar!</p>';
    }
    
    // Configurar funcionalidades interactivas
    setupImageGallery();
    setupVariants();
    setupQuantitySelector();
    setupTabs();
}

// Configurar la galería de imágenes
function setupImageGallery() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('main-product-image');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.dataset.image;
        });
    });
}

// Configurar selección de variantes
function setupVariants() {
    const variantBtns = document.querySelectorAll('.variant-btn');
    const currentPriceEl = document.getElementById('current-price');
    
    variantBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            variantBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentPriceEl.textContent = `$${this.dataset.price}`;
        });
    });
}

// Configurar selector de cantidad
function setupQuantitySelector() {
    const minusBtn = document.querySelector('.qty-btn.minus');
    const plusBtn = document.querySelector('.qty-btn.plus');
    const qtyInput = document.querySelector('.qty-input');
    
    minusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) qtyInput.value = currentValue - 1;
    });
    
    plusBtn.addEventListener('click', () => {
        let currentValue = parseInt(qtyInput.value);
        if (currentValue < 10) qtyInput.value = currentValue + 1;
    });
}

// Configurar pestañas de información
function setupTabs() {
    const tabHeaders = document.querySelectorAll('.tabs-header li');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabHeaders.forEach(h => h.classList.remove('active'));
            this.classList.add('active');
            
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Configurar botón "Añadir al carrito"
function setupAddToCart() {
    const addToCartBtn = document.querySelector('.btn-add-to-cart');
    
    addToCartBtn.addEventListener('click', function() {
        const qtyInput = document.querySelector('.qty-input');
        const quantity = parseInt(qtyInput.value);
        const variant = document.querySelector('.variant-btn.active').textContent.trim();
        
        alert(`Se agregaron ${quantity} unidad(es) de "${variant}" al carrito`);
    });
}

// Inicializar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    cargarProducto();
    setupAddToCart();
});