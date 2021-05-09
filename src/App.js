import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const authenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!authenticated && <Auth />}
      {authenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
};

export default App;
