import axios from "axios";

const BASE_URL = "https://food-boutique.b.goit.study/api";


// Перелік категорій продуктів

export async function getProductsCategories() {
    try {
        const categories = await axios.get(`${BASE_URL}/products/categories`)
        return categories;
    }
    catch (error) {
        console.log(error.message);
    }
}
getProductsCategories().then(categories => console.log(categories));

// Детальна інформація про продукт (ID)

export async function getProductById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/products/${id}`);
        return response.data;
    }
    catch (error) {
        console.log(error.message);
    }
}
let productId = "640c2dd963a319ea671e3676";
getProductById(productId).then(product => console.log(product));

// Перелік популярних продуктів

export async function getPopularProduct() {
    try {
        const popularProducts = await axios.get(`${BASE_URL}/products/popular?limit=5`)
        return popularProducts;
    }
    catch (error) {
        console.log(error.message);
    }
}
getPopularProduct().then(product => console.log(product));

// Перелік продуктів зі знижкою

export async function getDiskountProduct() {
    try {
        const diskountProduct = await axios.get(`${BASE_URL}/products/discount`);
        return diskountProduct;
    }
    catch (error) {
        console.log(error.message);
    }
}
getDiskountProduct().then(product => console.log(product));

