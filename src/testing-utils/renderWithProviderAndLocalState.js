import { render as rtlRender } from '@testing-library/react'
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import { StateMock } from '@react-mock/state';

const renderWithProviderAndLocalState =(
  ui,
  {
    preloadedState,
    ...renderOptions
  } = {},
  localState
) => {
  const Wrapper = ({ children }) => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const store = mockStore(preloadedState)
    if(localState) {
      return(
        <Provider store={store}>
            <StateMock state={localState}>
              {children}
            </StateMock>
          </Provider>
      )  
    }
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export default renderWithProviderAndLocalState;