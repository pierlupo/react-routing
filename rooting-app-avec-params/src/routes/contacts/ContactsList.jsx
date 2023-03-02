import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactDisplay from "./components/ContactDisplay";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contacts.contacts);
  const user = useSelector((state) => state.auth.user);
  return (
    <>  
        
        <div className="col-4 offset-4 bg-dark rounded text-light mt-2 p-3">
        
        <h3>Contacts List</h3>
        <hr />
        {/* <div className="d-flex align-items-center p-3"> */}
        {user && <Link
          to={`/contacts/add`}
          className=" ms-auto btn btn-outline-success rounded-circle p-1 px-2"
        >
          <i className="bi bi-plus"></i>
        </Link>}
        {contacts.length === 0 ? (
          <p>Il n'y a pas de contact dans la base de données !</p>
        ) : (
          [...contacts]
            .sort((a, b) => a.id.localeCompare(b.id))
            .map((c) => <ContactDisplay key={c.id} contactId={c.id} />)
        )}
      {/* </div> */}
      </div>
    </>
  );
};

export default ContactsList;
