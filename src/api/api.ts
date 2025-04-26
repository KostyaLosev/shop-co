export type Category = {
    slug: string;
    name: string;
    url: string;
}

export type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export const getCategories = async (): Promise<Category[]> => {
    const data = await fetch('https://dummyjson.com/products/categories');
    return await data.json();
}

export const getProductsByCategory = async (category?: string): Promise<Product[]> => {
    const data = await fetch(`https://dummyjson.com/products/category/${category}`);
    const { products } = await data.json();

    const modifiedProducts = products.map((product: Product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        rating: product.rating,
        thumbnail: product.thumbnail,
        images: product.images,
        discountPercentage: product.discountPercentage,
    }));

    return modifiedProducts;
}

export const getProductById = async (id?: string): Promise<Product> => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    return await data.json();
}
