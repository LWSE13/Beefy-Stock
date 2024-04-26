const { Product, Category, Supplier } = require('../../models');

describe('Product model', () => {
    
    let testCategory, testSupplier;

    beforeAll(async () => {
        testCategory = await Category.create({
            category_name: 'Test Category'
        });

        testSupplier = await Supplier.create({
            supplier_name: 'Test Supplier',
            supplier_address: '123 Test Street, Test City, Test Country',
            supplier_phone: '+1 123 456 7890',
            supplier_email: 'test.supplier@example.com'
        });
    });


    it('should create a new product', async () => {
        const newProduct = {
            product_name: 'Test Product',
            description: 'Test Description',
            price: 1000,
            in_hand_stock: 10,
            category_id: testCategory.id,
            supplier_id: testSupplier.id
        };

        const product = await Product.create(newProduct);

        expect(product.product_name).toBe(newProduct.product_name);
        expect(product.description).toBe(newProduct.description);
        expect(Number(product.price)).toBe(newProduct.price);
        expect(product.in_hand_stock).toBe(newProduct.in_hand_stock);
        expect(product.category_id).toBe(newProduct.category_id);
        expect(product.supplier_id).toBe(newProduct.supplier_id);
    });
});