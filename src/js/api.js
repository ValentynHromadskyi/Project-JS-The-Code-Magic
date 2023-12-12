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


// Перелік продуктів з фільтрацією

export async function getFilteredProduct({
    keyword,
    category,
    byABC = true,
    byPrice = false,
    byPopularity = false,
    page = 1,
    limit = 6,
}) {
    try {
        const params = new URLSearchParams({
    category,
    byABC: byABC ? "true" : "false",
    byPrice: byPrice ? "true" : "false",
    byPopularity: byPopularity ? "true" : "false",
    page,
    limit,
        })
        if (keyword) {
            params.append("keyword", keyword);
        }
        const response = await axios.get(`${BASE_URL}/products?${params}`);
        return response.data;
    }
    catch (error) {
        console.log(error.message);
    }
}


// Оформлення підписки на розсилку нових продуків

const emailToAdd = {
    email: "ssss@Comment.ua",
};

export async function postSubscription(data) {
    const response = await axios.post(`${BASE_URL}/subscription`, data);
    return response.data;
} 


// Оформлення замовлення продуктів

export async function postOrders(data) {
    const response = await axios.post(`${BASE_URL}/orders`, data);
    return response.data;
}

