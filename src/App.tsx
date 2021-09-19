import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

// redux 相关
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
