import { render as rtlRender } from '@testing-library/react'
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux'

const renderWithProvider =(
  ui,
  {
    preloadedState,
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    const middlewares = [];
    const mockStore = configureStore(middlewares);
    const store = mockStore(preloadedState)
    return <Provider store={store}>{children}</Provider>
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export default renderWithProvider;