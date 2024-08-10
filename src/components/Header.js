import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const dispath = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const logoutHandler = () => {
    dispath(authAction.logout());
    console.log(isAuth);
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
