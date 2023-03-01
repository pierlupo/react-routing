import './App.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect, useState, useNavigate  } from 'react';
import { removeUser, signIn, signUp } from "./routes/auth/authSlice";
//import { user } from "./components/ProtectedRoute"
// import SignForm from './routes/SignFormPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './routes/contacts/ContactsSlice';

function App() {

 const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchContacts())
  },[dispatch])

  const [signFormMode, setSignFormMode] = useState("")

  const onSigningHandler = async (credentials) => {
    if (signFormMode === "Sign In") {
      await dispatch(signIn(credentials))
    } else if (signFormMode === "Sign Up") {
      await dispatch(signUp(credentials))
    }

    setSignFormMode("")
  }

  return (
          <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">eWebsite</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/contacts">Contacts List</NavLink>
              {/* <NavLink className="nav-link" to={`/admin`}>Administration</NavLink> */}
              
             {user ? (
              <NavLink className="nav-link ms-auto btn btn-secondary" to="/">Sign Out</NavLink>
              ) : ( 
              <>
                <NavLink className="nav-link ms-auto btn btn-outline-info" to={`/Sign+Up`}>Register</NavLink>
                <NavLink className="nav-link ms-2 btn btn-primary" to={`/Sign+In`}>Sign In</NavLink>
              </>
             )} 
          
            </div>
          </div>
        </div>
      </nav>
      </header>
      <main>
        <Outlet />
        {/* <div className="col-10 offset-1 bg-dark rounded text-light p-3">
            <div className="d-flex align-items-center">
              <h3>Contacts List</h3>
              <hr />
             <button onClick={() => setSelectedContactAndContactFormMode({mode: "add"})} className="ms-2 btn btn-outline-success"><i className="bi bi-plus-circle"></i> Add</button>
            </div>
              <hr />
              {contacts.length === 0 ?
              <p>Il n'y a pas de contact dans la base de données !</p> : 
              (
                <div className="mx-auto row row-cols-2 row-cols-md-3 row-cols-xl-4">
                  {contacts.map(a => <ContactDisplay contactId={contacts.id} key={contacts.id} setSelectedContactAndContactFormMode={setSelectedContactAndContactFormMode} />)}
                </div>
              )}
          </div> */}
      </main>
    </div>
  );
}

export default App;
