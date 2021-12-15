import Authorization from "./authorization/Index";
import Contacts from "./contacts/index";
import Header from "./header/Header";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.Auth.login);
  return (
    <div>
      {login ? (
        <div>
          <Header />
          <Contacts />
        </div>
      ) : (
        <Authorization />
      )}
    </div>
  );
}

export default App;
