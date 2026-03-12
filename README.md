# Alpha Fitness - Tienda E-commerce HTML

Tienda de suplementos fitness completamente funcional en HTML estático.

## 🚀 Características

- ✅ **100% HTML estático** - No requiere servidor
- ✅ **Carrito funcional** con localStorage
- ✅ **Diseño responsive** para todos los dispositivos
- ✅ **Error de pago realista** en checkout
- ✅ **Botones de MercadoLibre** individuales
- ✅ **Seguimiento de pedidos** visual
- ✅ **Botón flotante de WhatsApp**
- ✅ **Filtros de productos** por categoría
- ✅ **Diseño oscuro y moderno**

## 📁 Estructura de Archivos

```
alpha-fitness-html/
├── index.html          # Página principal
├── tienda.html         # Catálogo de productos
├── producto.html       # Detalle de producto
├── carrito.html        # Carrito de compras
├── checkout.html       # Proceso de pago
├── seguimiento.html    # Seguimiento de pedidos
├── contacto.html       # Información de contacto
├── css/
│   └── styles.css     # Estilos completos
├── js/
│   ├── products.js    # Base de datos de productos
│   └── cart.js       # Gestión del carrito
└── README.md
```

## 🛠️ Cómo Usar

1. **Abrir la tienda**: Simplemente haz doble clic en `index.html`
2. **Navegación**: Usa el menú superior para moverte entre páginas
3. **Editar productos**: Modifica `js/products.js`
4. **Personalizar contacto**: Edita los números en cada archivo HTML

## 📝 Configuración

### Productos
Edita `js/products.js` para modificar:
- Nombres de productos
- Precios
- Imágenes
- Links de MercadoLibre
- Categorías

### Contacto
Busca estos comentarios en los archivos HTML:
- `// CONTACTO: reemplazar número de WhatsApp aquí`
- `// CONTACTO: reemplazar email aquí`

### Promociones
Edita directamente en `index.html`:
- `// PROMO 1: editar título, descripción e imagen aquí`
- `// PROMO 2: editar título, descripción e imagen aquí`
- etc.

### Testimonios
Edita en `index.html`:
- `// RESEÑA 1: editar nombre, foto, estrellas y comentario aquí`
- etc.

## 🎨 Diseño

- **Colores**: Negro/gris oscuro con acentos naranja y verde
- **Tipografía**: System fonts para máxima compatibilidad
- **Responsive**: Se adapta a móviles, tablets y desktop
- **Animaciones**: Transiciones suaves y efectos hover

## 🛒 Carrito de Compras

El carrito funciona con localStorage:
- **Persistencia**: Los productos se guardan en el navegador
- **Gestión**: Agregar, eliminar, modificar cantidades
- **Contador**: Se actualiza automáticamente en el header

## 💳 Checkout

- **Error realista**: Simula Error 502 de payment gateway
- **MercadoLibre**: Botones individuales por producto
- **Formulario completo**: Todos los campos necesarios

## 📱 WhatsApp

- **Botón flotante**: Siempre visible en todas las páginas
- **Animación**: Efecto de pulso para llamar la atención
- **Directo**: Abre WhatsApp con número pre-configurado

## 🌐 Navegación

- **Menú responsive**: Hamburguesa en móviles
- **Breadcrumbs**: Navegación clara en páginas internas
- **Links directos**: Acceso rápido a todas las secciones

## 📋 Requisitos

- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **Conexión a internet** (para las imágenes)
- **No requiere servidor** - funciona localmente

## 🚀 Despliegue

Para subir a un servidor:
1. Sube todos los archivos a la carpeta raíz
2. Accede a `index.html`
3. ¡Listo!

---

**Alpha Fitness** - Tu tienda de suplementos fitness de confianza
