import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import UsersList from "./components/UsersList";
import MilkContainer from "./components/MilkContainer";

function App() {
  return (
    <Provider>
      <CakeContainer />
      <MilkContainer />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;
