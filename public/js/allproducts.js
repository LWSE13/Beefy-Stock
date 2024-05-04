$(document).ready(function() {
    var modal = $('#addproducstModal');
    var btn = $("#add-productsbtn");
    var close = $(".close");
    var form = $('#addproductForm');
  
    btn.click(function() {
      // Fetch categories and populate dropdown
      fetch('/api/categories')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch categories');
          }
          return response.json();
        })
        .then(categories => {
          // Populate dropdown with categories
          
          var categoryDropdown = $('#categoryDropdown');
          categories.forEach(category => {
            categoryDropdown.append($('<option>', {
              value: category.id,
              text: category.category_name
            }));
          });
       
          const newCategoryFields = document.getElementById('newCategoryFields');
  
          categoryDropdown.addEventListener('change', () => {
            if (categoryDropdown.value === 'new') {
              newCategoryFields.style.display = 'block';
            } else {
              newCategoryFields.style.display = 'none';
            }
          });
        })
  
        fetch('/api/supplier')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch suppliers');
          }
          return response.json();
        })
        .then(suppliers => {
          // Populate dropdown with categories
          
          var suppliersDropdown = $('#suppliersDropdown');
          suppliers.forEach(supplier => {
            suppliersDropdown.append($('<option>', {
              value: supplier.id,
              text: supplier.supplier_name
            }));
          });
         
          const newsupplierFields = document.getElementById('newsupplierFields');
  
          suppliersDropdown.addEventListener('change', () => {
            if (suppliersDropdown.value === 'new') {
              newsupplierFields.style.display = 'block';
            } else {
              newsupplierFields.style.display = 'none';
            }
          });
        })
        
        .catch(error => {
          console.error('Error fetching suppliers:', error);
        });
  
      modal.show();
    });
  
    close.click(function() {
      modal.hide();
    });
  
    $(window).click(function(event) {
      if (event.target == modal[0]) {
        modal.hide();
      }
    });
  
    // Show category textbox when "Create New Category" is selected
    $('#categoryDropdown').change(function() {
      var selectedOption = $(this).val();
      if (selectedOption === 'new') {
        $('#newCategoryFields').show();
      } else {
        $('#newCategoryFields').hide();
      }
    });
    $('#suppliersDropdown').change(function() {
      var selectedOption = $(this).val();
      if (selectedOption === 'new') {
        $('#newsupplierFields').show();
      } else {
        $('#newsupplierFields').hide();
      }
    });
    form.submit(function(event) {
      event.preventDefault();
      
      // Collect form data
      var productData = {
        product_name: $('#productName').val(),
        description: $('#productDescription').val(),
        price: $('#productPrice').val(),
        inHandStock: $('#inHandStock').val(),
        category_id: $('#categoryDropdown').val(),
        supplier_id: $('#suppliersDropdown').val(),
      };
      console.log(productData.category_id);
      // Check if a new supplier needs to be created
      if ($('#newsupplierFields').is(':visible')) {
        var newSupplierData = {
          supplier_name: $('#newsupplierName').val(),
          supplier_address: $('#newsupplierAddress').val(),
          supplier_phone: $('#newsupplierPhone').val(),
          supplier_email: $('#newsupplierEmail').val(),
        };
        console.log(JSON.stringify(newSupplierData));
  
        // Create new supplier
        fetch('/api/supplier', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newSupplierData)
        })
        .then(response => response.json())
        .then(newSupplier => {
          // Set the supplierId in the product data
          productData.supplier_id = newSupplier.supplierData.id;
          console.log(newSupplier);
          // Post the product data
          postProductData(productData);
        })
        .catch(error => {
          console.error('Error creating new supplier:', error);
        });
      } else {
        // Post the product data
        postProductData(productData);
      }
    });
  
    function postProductData(productData) {
      // Check if a new category needs to be created
      if ($('#newCategoryFields').is(':visible')) {
        var newCategoryData = {
          category_name: $('#newCategoryName').val()
        };
        console.log(JSON.stringify(newCategoryData));
        // Create new category
        fetch('/api/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newCategoryData)
        })
        .then(response => response.json())
        .then(newCategory => {
          // Set the categoryId in the product data
          productData.category_id = newCategory.categoryData.id;
          console.log(newCategory);
          // Post the product data
          postProduct(productData);
        })
        .catch(error => {
          console.error('Error creating new category:', error);
        });
      } else {
        // Post the product data
        postProduct(productData);
      }
    }
  
    function postProduct(productData) {
      // Post the product data
      console.log(JSON.stringify(productData));
      fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create new product');
        }
        return response.json();
      })
      .then(newProduct => {
        console.log('New product created:', newProduct);
        location.reload(); // Reload the page or perform any other action
      })
      .catch(error => {
        console.error('Error creating new product:', error);
      });
    }
  });
  