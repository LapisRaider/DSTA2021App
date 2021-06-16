import {
  getAsyncStorage,
  setAsyncStorage
} from '../../utils/AsyncStorageHelper';

export const CLEAR_STORE = 'CLEAR_STORE';
export const CREATE_SHOP = 'CREATE_SHOP';
export const GET_SHOPS = 'GET_SHOPS';

export const clearStore = dispatch => {
  dispatch({ type: CLEAR_STORE });
};

export const createShop = shop => dispatch => {
  getAsyncStorage('shops')
    .then(data => {
      if (data) {
        console.log('Storing (data)');

        let jsonData = JSON.parse(data);

        let newData = [...jsonData];
        newData.push(shop);

        setAsyncStorage('shops', JSON.stringify(newData))
          .then(() => {
            dispatch({ type: CREATE_SHOP, shop: newData });
          })
          .catch(err => {
            console.log('set (data)', err);
          });
      } else {
        console.log('Storing (!data)');

        setAsyncStorage('shops', JSON.stringify([shop]))
          .then(() => {
            dispatch({ type: CREATE_SHOP, shop: shop });
          })
          .catch(err => {
            console.log('set', err);
          });
      }
    })
    .catch(err => {
      console.log('get', err);
    });
};

export const getShops = () => dispatch => {
  getAsyncStorage('shops')
    .then(data => {
      dispatch({ type: GET_SHOPS, shops: JSON.parse(data) });
    })
    .catch(err => {
      console.log('get', err);
    });
};
