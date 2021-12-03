import React from "react";
import { render } from "@testing-library/react";
import PaymentScreen from "./PaymentScreen";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("With React Testing Library", () => {
  const initialState = {
    orderPay: { loading: true },
    orderDetails: { loading: true, order: { shippingAddress: "test" } },

    productList: { products: ["test", "test2"] },
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
      category: "",
    };
    const { queryByTestId } = render(
      <Provider store={store}>
        <PaymentScreen {...props} />
      </Provider>
    );
    expect(queryByTestId("paymentComponent")).toBeTruthy();
  });
});
