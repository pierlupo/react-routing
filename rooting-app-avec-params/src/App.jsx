import './App.css';
import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from './routes/contacts/ContactsSlice';

function App() {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(fetchContacts())
  },[dispatch])

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
            <div className="navbar-nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/contacts">Contacts List</NavLink>
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
