const { Supplier } = require('../../models');

describe('Supplier model', () => {
  // Supplier creation test
  it('should create a new supplier', async () => {
    const newSupplier = {
      supplier_name: 'Test Supplier',
      supplier_address: '123 Test Street, Test City, Test Country',
      supplier_phone: '+1 123 456 7890',
      supplier_email: 'test.supplier@example.com'
    };

    const supplier = await Supplier.create(newSupplier);

    expect(supplier.supplier_name).toBe(newSupplier.supplier_name);
    expect(supplier.supplier_address).toBe(newSupplier.supplier_address);
    expect(supplier.supplier_phone).toBe(newSupplier.supplier_phone);
    expect(supplier.supplier_email).toBe(newSupplier.supplier_email);
  });

  // get previously created supplier test
  it('should retrieve a supplier', async () => {
    const supplier = await Supplier.findOne({ where: { supplier_name: 'Test Supplier' } });
    
    expect(supplier.supplier_name).toBe('Test Supplier');
    expect(supplier.supplier_address).toBe('123 Test Street, Test City, Test Country');
    expect(supplier.supplier_phone).toBe('+1 123 456 7890');
    expect(supplier.supplier_email).toBe('test.supplier@example.com')
  });

  // update previously created supplier test
  it('should update a supplier', async () => {
    const supplier = await Supplier.findOne({ where: { supplier_name: 'Test Supplier' } });
  
    supplier.supplier_name = 'New Supplier';
    supplier.supplier_address = '456 New Street, New City, New Country';
    supplier.supplier_phone = '+1 987 654 3210';
    supplier.supplier_email = 'anotherTest.supplier@exampleAgain.com';
  
    await supplier.save();
  
    const updatedSupplier = await Supplier.findOne({ where: { supplier_name: 'New Supplier' } });
  
    expect(updatedSupplier.supplier_name).toBe('New Supplier');
    expect(updatedSupplier.supplier_address).toBe('456 New Street, New City, New Country');
    expect(updatedSupplier.supplier_phone).toBe('+1 987 654 3210');
    expect(updatedSupplier.supplier_email).toBe('anotherTest.supplier@exampleAgain.com');
  });

  // delete previously updated supplier test
  it('should delete a supplier', async () => {
    const supplier = await Supplier.findOne({ where: { supplier_name: 'New Supplier' } });
  
    await supplier.destroy();
  
    const deletedSupplier = await Supplier.findOne({ where: { supplier_name: 'New Supplier' } });
  
    expect(deletedSupplier).toBeNull();
  });
});