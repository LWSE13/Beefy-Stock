$(document).ready(function() {
    var modal = $('#supplierModal');
    var btn = $("#editSupplierButton");
    var close = $(".close");
    var form = $('#supplierForm');
  
    btn.click(function() {
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
  
    form.submit(function(event) {
        event.preventDefault();
      
        var supplierId = $('#supplierId').val();
        var supplierName = $('#supplierName').val();
        var supplierEmail = $('#supplierEmail').val();
        var supplierPhone = $('#supplierPhone').val();
        var supplierAddress = $('#supplierAddress').val();
      
        fetch('/api/suppliers/' + supplierId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            supplierId: supplierId,
            supplierName: supplierName,
            supplierEmail: supplierEmail,
            supplierPhone: supplierPhone,
            supplierAddress: supplierAddress
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
            location.reload();

        })
        .catch((error) => {
          console.error('Error:', error);
        });
      });
  });


  $(document).ready(function() {
    var modal = $('#productModal');
    var btn = $("#editProductButton");
    var close = $(".close");
    var form = $('#productForm');

    btn.click(function() {
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

    form.submit(function(event) {
        event.preventDefault();

        var productId = $('#productId').val();
        var productName = $('#productName').val();
        var productDescription = $('#productDescription').val();
        var productPrice = $('#productPrice').val();
        var inHandStock = $('#inHandStock').val();
        var categoryId = $('#categoryId').val();
        var supplierId = $('#supplierId').val();

        fetch('/api/products/' + productId, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            productId: productId,
            productName: productName,
            productDescription: productDescription,
            productPrice: productPrice,
            inHandStock: inHandStock,
            categoryId: categoryId,
            supplierId: supplierId
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
            location.reload();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
      });
  }); 