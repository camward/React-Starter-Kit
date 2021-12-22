import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Loader from '../../components/common/Loader';

let container: any = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Component Loader', () => {
  const mockStore = configureStore();

  it('Show component', () => {
    const initialState = { loader: 1 };
    const store = mockStore(initialState);

    act(() => {
      render(
        <Provider store={store}>
          <Loader />
        </Provider>,
        container,
      );
    });
    expect(container.children[0]).toBeTruthy();
  });

  it('Hide component', () => {
    const initialState = { loader: 0 };
    const store = mockStore(initialState);

    act(() => {
      render(
        <Provider store={store}>
          <Loader />
        </Provider>,
        container,
      );
    });
    expect(container.children[0]).toBeFalsy();
  });
});
