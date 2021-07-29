import store from 'context'

export default function createAlert(element) {
  return () => {
    console.log(element)
    const alertBox = document.createElement('div');
    alertBox.textContent = 'Adding to Cart...';

    element.appendChild(alertBox);
    alertBox.setAttribute('class', 'card__alert-added-to-cart');
    setTimeout(() => {
      element.removeChild(alertBox);
      store.set((state) => ({
        ...state,
        cart: [...state.cart, parseInt(element.dataset.pokemonid)],
      }));
      window.localStorage.setItem('cart', JSON.stringify(store.get().cart));

    }, 500);
  }
}