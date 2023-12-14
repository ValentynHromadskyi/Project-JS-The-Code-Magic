import { postSubscription } from "./api";

const footerForm = document.querySelector('.foot-form');
const modalSubscription = document.querySelector('.modal-subscription');
const modalUnsubscription = document.querySelector('.modal-unsubscription');
const modalBackdrop = document.querySelector('.modal-backdrop');
const body = document.querySelector('.body');
const overflow = document.body.style.overflow;

const closeModal = event => {
  const target = event.target;
  if (target === modalSubscription || target.closest('.close')) {
    modalSubscription.classList.remove('visible-modal');
    setTimeout(() => modalSubscription.classList.add('visually-hidden'), 500);
    modalBackdrop.classList.add('is-hidden');

    document.removeEventListener('keydown', closeModal);
    body.style.overflow = overflow;
  }
  if (target === modalUnsubscription || target.closest('.close')) {
    modalUnsubscription.classList.remove('visible-modal');
    setTimeout(() => modalUnsubscription.classList.add('visually-hidden'), 500);
    modalBackdrop.classList.add('is-hidden');

    document.removeEventListener('keydown', closeModal);
    body.style.overflow = overflow;
  }

  if (event.key === 'Escape') {
    closeModalOption();
  }

  if (target === modalBackdrop) {
    closeModalOption();
  }
};

const openModalSub = () => {
    modalUnsubscription.classList.add('visible-modal');
    modalUnsubscription.classList.remove('visually-hidden');
    modalBackdrop.classList.remove('is-hidden');
    
    document.addEventListener('keydown', closeModal);
    body.style.overflow = 'hidden';
};

const openModalUnsubscription = () => {
    modalUnsubscription.classList.add('visible-modal');
    modalUnsubscription.classList.remove('visually-hidden');
    modalUnsubscription.classList.remove('is-hidden');
    
    document.addEventListener('keydown', closeModal);
    body.style.overflow = 'hidden';
};


const handleSubscription = async email => {
    const body = { email };

    try {
        const emailToAdd = await postSubscription(body);

        openModalSub();
        footerForm.reset();
    } catch (err) {
        if (err.response.data.message === 'Subscription already exists') {
            openModalUnsubscription();
        } else {
            showError();
        }
    }
};

function handleSubmit(e) {
    e.preventDefault();
    const inputEmail = document.querySelector('.form-filed');
    const email = inputEmail.ariaValueMax.trim();
    handleSubscription(email);
} 

function closeModalOption() {
    modalSubscription.classList.remove('visible-modal');
    setTimeout(() => modalSubscription.classList.add('visually-hidden'), 500);
    modalBackdrop.classList.add('is-hidden');

    modalUnsubscription.classList.remove('visible-modal');
    setTimeout(() => modalUnsubscription.classList.add('visually-hidden'), 500);
    modalBackdrop.classList.add('is-hidden');

    document.removeEventListener('keydown', closeModal);
    body.style.overflow = overflow;

    formElem.addEventListener('submit', handleSubmit);
    modalBackdrop.addEventListener('click', closeModal);
}
