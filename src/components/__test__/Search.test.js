import React from "react";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { cleanup, screen, render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Search from "../Search";
import userEvent from "@testing-library/user-event";

describe("<Search />", () => {
  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  afterAll(() => {
    cleanup();
  });

  const reactRedux = { useDispatch };
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

  test("조회 버튼을 클릭했을 때 select option과 input data를 변경하는 dispatch를 사용하는가?", () => {
    const mockStore = configureStore();
    const initialState = {
      searchCondition: "all",
      searchKeyword: "",
    };
    const updatedStore = mockStore(initialState);

    const mockDispatch = jest.fn();
    useDispatchMock.mockReturnValue(mockDispatch);
    updatedStore.dispatch = mockDispatch;

    render(
      <Provider store={updatedStore}>
        <Search />
      </Provider>
    );

    const textInput = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(textInput).toBeInTheDocument();
    expect(updatedStore.dispatch).not.toHaveBeenCalled();

    userEvent.click(button);

    expect(updatedStore.dispatch).toHaveBeenCalledTimes(1);
    expect(updatedStore.dispatch.mock.lastCall[0].type).toMatch("searchEvent/modifySearchEvent");
  });
});
