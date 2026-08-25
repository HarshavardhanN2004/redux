import products from "../../assets/data/products.json";

const initialState = {
  products: products
};

const productReducer = (state = initialState, action) => {

  switch (action.type) {

    default:
      return state;

  }

};

export default productReducer;