import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProfileScreen from "./ProfileScreen";
import { BrowserRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("With React Testing Library", () => {
  const initialState = {
    cart: { cartItems: ["test", "test2"] },
    productList: { products: ["test", "test2"] },
  };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  let store;

  it("shows cart", () => {
    const initialState = {
      userSignin: "test",
      userUpdate: { loading: true },
      myOrderList: { loading: ["orders"] },
      productList: { products: ["test", "test2"] },
    };
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
    const { queryByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ProfileScreen {...props} />
        </BrowserRouter>
      </Provider>
    );
    expect(queryByTestId("profileComponent")).toBeTruthy();
  });
});
