import { getPopularProduct } from './api.js';
async function getPopularProduct() {
  try {
    const popularProducts = await axios.get(
      `${BASE_URL}/products/popular?limit=5`
    );
    return popularProducts;
  } catch (error) {
    console.log(error.message);
  }
}
// --перевірка запита
getPopularProduct().then(product => console.log(product));
