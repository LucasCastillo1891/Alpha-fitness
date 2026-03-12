class CartManager {
  constructor() {
    this.items = this.loadCart();
    this.updateCartUI();
  }

  loadCart() {
    const savedCart = localStorage.getItem('alpha-fitness-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

  saveCart() {
    localStorage.setItem('alpha-fitness-cart', JSON.stringify(this.items));
    this.updateCartUI();
  }

  addItem(product) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        ...product,
        quantity: 1
      });
    }
    
    this.saveCart();
    this.showNotification('Producto agregado al carrito');
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.saveCart();
  }

  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
        this.saveCart();
      }
    }
  }

  clearCart() {
    this.items = [];
    this.saveCart();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.precio * item.quantity), 0);
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      const totalItems = this.getTotalItems();
      cartCount.textContent = totalItems;
      cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    this.updateCartPage();
  }

  updateCartPage() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const emptyCart = document.getElementById('empty-cart');
    
    if (!cartItemsContainer) return;

    if (this.items.length === 0) {
      if (emptyCart) emptyCart.style.display = 'block';
      if (cartItemsContainer) cartItemsContainer.innerHTML = '';
      if (cartTotal) cartTotal.textContent = '$0';
      return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    
    cartItemsContainer.innerHTML = this.items.map(item => `
      <div class="cart-item">
        <img src="${item.imagen}" alt="${item.nombre}" class="cart-item-image">
        <div class="cart-item-details">
          <h3>${item.nombre}</h3>
          <p class="text-gray-400">${item.categoria}</p>
          <p class="text-orange-500 font-semibold">$${item.precio}</p>
        </div>
        <div class="cart-item-quantity">
          <button onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})" class="quantity-btn">-</button>
          <span>${item.quantity}</span>
          <button onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})" class="quantity-btn">+</button>
        </div>
        <div class="cart-item-subtotal">
          <p>$${item.precio * item.quantity}</p>
          <button onclick="cart.removeItem('${item.id}')" class="remove-btn">🗑️</button>
        </div>
      </div>
    `).join('');

    if (cartTotal) {
      cartTotal.textContent = `$${this.getTotal()}`;
    }
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  }
}

// Inicializar carrito
const cart = new CartManager();
