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
  
  // Function to render low quantity products on the page
  const renderLowQuantityProducts = (lowQuantityProducts) => {
    const lowQuantityProductsContainer = document.getElementById('low-quantity-products-container');
    const h2Element = lowQuantityProductsContainer.querySelector('h2');
    
    // Clear previous content of the container
    lowQuantityProductsContainer.innerHTML = '';
  
    // Re-append the <h2> element
    lowQuantityProductsContainer.appendChild(h2Element);
  
    // Iterate over low quantity products and create list items
    lowQuantityProducts.forEach(product => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <a class="product-name" href="/api/products/${product.id}">${product.product_name}</a>
          <span class="product-quantity">Quantity left: ${product.in_hand_stock}</span>
         
        `;
        lowQuantityProductsContainer.appendChild(listItem);
      });
    };
  // Call the fetchLowQuantityProducts function when the page loads
  window.addEventListener('load', fetchLowQuantityProducts);