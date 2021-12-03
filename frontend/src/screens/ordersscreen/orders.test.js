import React from "react";
import { render } from "@testing-library/react";
import OrdersScreen from "./OrdersScreen";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("With React Testing Library", () => {
  const initialState = {
    orderPay: { loading: true },
    orderDelete: { success: true, error: false },
    orderList: { orders: ["test", "test2"], loading: true },
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
    const { getByText, queryByTestId } = render(
      <Provider store={store}>
        <OrdersScreen {...props} />
      </Provider>
    );
    expect(queryByTestId("loadingComponent")).toBeTruthy();
  });
});
