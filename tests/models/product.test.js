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

    it('should retrieve a product', async () => {
        const product = await Product.findOne({ where: { product_name: 'Test Product' } });

        expect(product.product_name).toBe('Test Product');
        expect(product.description).toBe('Test Description');
        expect(Number(product.price)).toBe(1000);
        expect(product.in_hand_stock).toBe(10);
        expect(product.category_id).toBe(testCategory.id);
        expect(product.supplier_id).toBe(testSupplier.id);
    });

    it('should update a product', async () => {
        const product = await Product.findOne({ where: { product_name: 'Test Product' } });

        product.product_name = 'New Product';
        product.description = 'New Description';
        product.price = 2000;
        product.in_hand_stock = 20;
        product.category_id = testCategory.id;
        product.supplier_id = testSupplier.id;

        await product.save();

        const updatedProduct = await Product.findOne({ where: { product_name: 'New Product' } });

        expect(updatedProduct.product_name).toBe('New Product');
        expect(updatedProduct.description).toBe('New Description');
        expect(Number(updatedProduct.price)).toBe(2000);
        expect(updatedProduct.in_hand_stock).toBe(20);
        expect(updatedProduct.category_id).toBe(testCategory.id);
        expect(updatedProduct.supplier_id).toBe(testSupplier.id);
    });

    it('should delete a product', async () => {
        const product = await Product.findOne({ where: { product_name: 'New Product' } });

        await product.destroy();

        const deletedProduct = await Product.findOne({ where: { product_name: 'New Product' } });

        expect(deletedProduct).toBeNull();
    });
});