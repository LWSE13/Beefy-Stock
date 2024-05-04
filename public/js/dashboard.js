
const fetchLowQuantityProducts = async () => {
  try {
    // Fetch data from the API endpoint
    const response = await fetch('/api/low-quantity-products');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Error fetching low quantity products');
    }
    
    // Parse the JSON response
    const lowQuantityProducts = await response.json();
    
    // Display the low quantity products on the page
    renderLowQuantityProducts(lowQuantityProducts);
  } catch (error) {
    console.error('Error fetching low quantity products:', error);
  }
};

// Call the fetchLowQuantityProducts function when the page loads
window.addEventListener('load', fetchLowQuantityProducts);

const renderLowQuantityProducts = (lowQuantityProducts) => {
  const lowQuantityProductsContainer = document.getElementById('low-quantity-products-container');
  const listContainer = lowQuantityProductsContainer.querySelector('ul');
  
  // Clear previous content of the list container
  listContainer.innerHTML = '';

  // Iterate over low quantity products and create list items
  lowQuantityProducts.forEach(product => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <a class="product-name" href="/products/${product.id}">${product.product_name}</a>
      <span class="product-quantity">Quantity: ${product.in_hand_stock}</span>
     
    `;
    lowQuantityProductsContainer.appendChild(listItem);
  });  
};

