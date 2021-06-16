import { CLEAR_STORE, CREATE_SHOP, GET_SHOPS } from '../actions/actions';

const initialState = {
  shops: [
    {
      shopName: '',
      description: '',
      items: [],
      collectionPoint: '',
      collectionTime: '',
      orderFormClosing: '',
      currentMoney: 0,
      goalMoney: 0
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_STORE:
      return initialState;
    case CREATE_SHOP: {
      const shopData = action.shop;

      let newShops = [...state.shops];
      newShops.concat(shopData);

      return {
        shops: newShops
      };
    }
    case GET_SHOPS: {
      return { shops: action.shops };
    }
    default:
      return state;
  }
};
