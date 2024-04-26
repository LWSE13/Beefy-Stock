const   { Category } = require('../../models');

describe('Category model', () => {
    it ('should create a new category', async () => {
        const newCategory = {
            category_name: 'Test Category'
        };

        const category = await Category.create(newCategory);

        expect (category.category_name).toBe(newCategory.category_name);
    })

    it ('should retrieve a category', async () => {
        const category = await Category.findOne({ where: { category_name: 'Test Category' } });

        expect(category.category_name).toBe('Test Category');
    })
})