const createStore = (initialState = {}) => {
  let state = initialState;

  const get = () => state;

  const set = (setState) => {
    state = setState(state);
    document.dispatchEvent(new Event('stateChange'));
  };

  /**
   * executes a function each time the store changes
   * @param {(state)=>void} listener
   * @param {boolean} cleanup remove listener when the page changes
   */
  const subscribe = (listener, cleanup = true) => {
    const helperFun = () => listener(state);
    document.addEventListener('stateChange', helperFun);

    const unsubscribe = () =>
      document.removeEventListener('stateChange', helperFun);

    if (cleanup) window.addEventListener('locationChange', unsubscribe);

    return unsubscribe;
  };

  return {
    get,
    set,
    subscribe,
  };
};

export default createStore;
