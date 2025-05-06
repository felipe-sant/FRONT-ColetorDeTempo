import { Provider } from "react-redux";
import Routers from "./routers/Router";
import "./styles/global.css";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
