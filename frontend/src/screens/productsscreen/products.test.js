import React from "react";
import { render } from "@testing-library/react";
import ProductsScreen from "./ProductsScreen";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("With React Testing Library", () => {
  const initialState = {
    userSignin: "test",
    productList: { loading: true, products: [{ id: 123 }] },
    cart: {
      cartItems: ["item1", "item2"],
      shipping: { address: "test" },
      payment: { paymentMethod: true },
    },
    product: { success: true, productSaveSuccess: true },
    productReviewSave: { success: true },
    productDelete: { loading: true },
    productSave: { save: true },
  };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  it("shows cart", () => {
    store = mockStore(initialState);
    const props = {
      match: {
        params: { id: 1234 },
      },
      location: {
        search: false,
      },
      category: "category",
    };
    const { queryByTestId } = render(
      <Provider store={store}>
        <ProductsScreen {...props} />
      </Provider>
    );
    expect(queryByTestId("productsComponent")).toBeTruthy();
  });
});
