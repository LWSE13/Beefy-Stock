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

    it ('should update a category', async () => {
        const category = await Category.findOne({ where: { category_name: 'Test Category' } });

        category.category_name = 'New Category';
        await category.save();

        const updatedCategory = await Category.findOne({ where: { category_name: 'New Category' } });

        expect(updatedCategory.category_name).toBe('New Category');
    })

    it ('should delete a category', async () => {
        const category = await Category.findOne({ where: { category_name: 'New Category' } });

        await category.destroy();

        const deletedCategory = await Category.findOne({ where: { category_name: 'New Category' } });

        expect(deletedCategory).toBeNull();
    })
})