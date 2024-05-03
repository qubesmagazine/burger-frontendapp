
import Navigation from "./Navigations";
import { Provider } from "react-redux";
import { store } from './Store'


export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
