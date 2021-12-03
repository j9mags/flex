import React from "react";
import { render } from "@testing-library/react";
import ProductScreen from "./ProductScreen";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";

describe("With React Testing Library", () => {
  const initialState = {
    userSignin: "test",
    productDetails: { loading: true, product: [{ id: 123 }] },
    cart: {
      cartItems: ["item1", "item2"],
      shipping: { address: "test" },
      payment: { paymentMethod: true },
    },
    product: { success: true, productSaveSuccess: true },
    productReviewSave: { success: true },
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
    const { getByText, queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProductScreen {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(queryByTestId("productComponent")).toBeTruthy();
  });
});
