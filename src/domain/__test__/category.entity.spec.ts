import { Category } from '../category.entity';

describe('Category Unit Tests', () => {
  it('should create a category with valid values', () => {
    const category = new Category({
      name: 'Category Name',
      description: 'Category Description',
      is_active: true,
    });

    expect(category.name).toBe('Category Name');
    expect(category.description).toBe('Category Description');
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBeInstanceOf(Date);
  });

  it('should create a category with default values', () => {
    const category = new Category({ name: 'Category Name' });

    expect(category.name).toBe('Category Name');
    expect(category.description).toBeNull();
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBeInstanceOf(Date);
  });

  it('should change the name of the category', () => {
    const category = new Category({ name: 'Initial Name' });
    category.changeName('New Name');
    expect(category.name).toBe('New Name');
  });

  it('should change the description of the category', () => {
    const category = new Category({ name: 'Name', description: 'Old Description' });
    category.changeDescription('New Description');
    expect(category.description).toBe('New Description');
  });

  it('should activate the category', () => {
    const category = new Category({ name: 'Name', is_active: false });
    category.activate();
    expect(category.is_active).toBe(true);
  });

  it('should deactivate the category', () => {
    const category = new Category({ name: 'Name', is_active: true });
    category.deactivate();
    expect(category.is_active).toBe(false);
  });

  it('should convert the category to a JSON object', () => {
    const category = new Category({
      name: 'Category Name',
      description: 'Category Description',
      is_active: true,
    });

    const json = category.toJSON();

    expect(json.name).toBe('Category Name');
    expect(json.description).toBe('Category Description');
    expect(json.is_active).toBe(true);
    expect(json.created_at).toBe(category.created_at);
  });
});

describe("create command", () => {
    test("should create a category", () => {
      const category = Category.create({
        name: "Movie",
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBe(true);
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should create a category with description", () => {
      const category = Category.create({
        name: "Movie",
        description: "some description",
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBe("some description");
      expect(category.is_active).toBe(true);
      expect(category.created_at).toBeInstanceOf(Date);
    });

    test("should create a category with is_active", () => {
      const category = Category.create({
        name: "Movie",
        is_active: false,
      });
      expect(category.category_id).toBeUndefined();
      expect(category.name).toBe("Movie");
      expect(category.description).toBeNull();
      expect(category.is_active).toBe(false);
      expect(category.created_at).toBeInstanceOf(Date);
    });
  });

  //TODO - testes do category_id

  test("should change name", () => {
    const category = new Category({
      name: "Movie",
    });
    category.changeName("other name");
    expect(category.name).toBe("other name");
  });

  test("should change description", () => {
    const category = new Category({
      name: "Movie",
    });
    category.changeDescription("some description");
    expect(category.description).toBe("some description");
  });

  test("should active a category", () => {
    const category = Category.create({
      name: "Filmes",
      is_active: false,
    });
    category.activate();
    expect(category.is_active).toBe(true);
  });

  test("should disable a category", () => {
    const category = Category.create({
      name: "Filmes",
      is_active: true,
    });
    category.deactivate();
    expect(category.is_active).toBe(false);
  });