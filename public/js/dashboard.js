
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

//product chart
async function createChart() {
  try {
    // fetch my data
      let response = await fetch('/api/products/data');
      let data = await response.json();
      //reduce function to group products by category and assign any new category to an empty array
      let productsByCategory = data.reduce((groups, product) => {
          // assigns the category of each product to a category variable
          let category = product.category.category_name;
          // if the category does not exist, create an empty array
          if (!groups[category]) {
              groups[category] = [];
          }
          //pushes products that belong to the same category into the same array and finally returns the groups variable
          groups[category].push(product);
          return groups;
      }, {});
      //gets all the keys (in this case categories of the products) and assigns them to a variable called categories
      let categories = Object.keys(productsByCategory);
      //maps through the categories and assigns the total stock of each category to a variable called inventory
      let inventory = categories.map(category => 
          productsByCategory[category].reduce((total, product) => total + product.in_hand_stock, 0)
      );

      let ctx = document.getElementById('productChart').getContext('2d');
      let productChart = new Chart(ctx, {
          type: 'pie',
          data: {
              labels: categories,
              datasets: [{
                  data: inventory,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',

                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                  borderWidth: 1
              }]
          },
          options: {
              responsive: true,
              legend: {
                  position: 'top',
              },
              title: {
                  display: true,
                  text: 'Inventory by Category'
              },
              animation: {
                  animateScale: true,
                  animateRotate: true
              }
          }
      });
  } catch (error) {
      console.error('Error:', error);
  }
}

createChart();