import './js/footer';
import './js/header';
import './js/hero';
import './js/filters';
import './js/prodacts-list';
import './js/popular-prodacts';
import './js/discount';
import './js/api';
import './js/modal';
// import './js/cart';

function waitForElements(selector) {
    return new Promise((resolve, reject) => {
        const elements = document.querySelectorAll(selector);

        if (elements.length > 0) {
            resolve(elements);
        } else {
            const observer = new MutationObserver(() => {
                const updatedElements = document.querySelectorAll(selector);
                if (updatedElements.length > 0) {
                    observer.disconnect();
                    resolve(updatedElements);
                }
            });

            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        }
    });
}

{/* // Очікуємо на появу всіх елементів з класом inBascet */}
waitForElements('.inBascet')
    .then((elements) => {
        elements.forEach((element) => {
            element.addEventListener('click', (e) => {
                const id={
                    id: e.currentTarget.id,
                    pieces: "1",
                }
                // console.log(id);
                // localStorage.setItem('data', JSON.stringify(id));


                let myArray = JSON.parse(localStorage.getItem('cart')) || [];
console.log(myArray);
                // Об'єкт, який потрібно додати до масиву
                const newCart = { id: e.currentTarget.id, pieces: '1' };

                // Додавання нового об'єкта до масиву
                myArray.push(newCart);

                // Оновлення масиву об'єктів у localStorage
                localStorage.setItem('cart', JSON.stringify(myArray));


            });
        });
    })
    .catch((error) => {
        console.error(error.message);
    });