import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { removeUser } from "./routes/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./routes/contacts/ContactsSlice";

function App() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="App">
      <header>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              eWebsite
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav w-100">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/contacts">
                  Contacts List
                </NavLink>
                {/* <NavLink className="nav-link" to={`/admin`}>Administration</NavLink> */}

                {user ? (
                  <NavLink
                    onClick={() => dispatch(removeUser())}
                    className="nav-link ms-auto btn btn-secondary"
                    to="/"
                  >
                    Sign Out
                  </NavLink>
                ) : (
                  <>
                    <NavLink
                      className="nav-link ms-auto btn btn-outline-info"
                      to={`/Sign+Up?mode=up`}
                    >
                      Register
                    </NavLink>
                    <NavLink
                      className="nav-link ms-2 btn btn-primary"
                      to={`/Sign+In?mode=in`}
                    >
                      Sign In
                    </NavLink>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
