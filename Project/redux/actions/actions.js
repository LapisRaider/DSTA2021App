export const CLEAR_STORE = 'CLEAR_STORE';
export const CREATE_SHOP = 'CREATE_SHOP';

export const clearStore = dispatch => {
  dispatch({ type: CLEAR_STORE });
};

export const createShop = shop => dispatch => {
  dispatch({ type: CREATE_SHOP, shop: shop });
};
