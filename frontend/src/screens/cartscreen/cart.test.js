import React from "react";
import { render } from "@testing-library/react";
import CartScreen from "./CartScreen";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("With React Testing Library", () => {
  const initialState = { cart: { cartItems: ["test", "test2"] } };
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
      category: "",
    };
    const middlewares = [thunk];
    const { queryByTestId, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <CartScreen {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(queryByTestId("cartComponent")).toBeTruthy();
  });
});
