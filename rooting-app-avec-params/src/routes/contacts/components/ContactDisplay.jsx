import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ContactDisplay = ({ contactId }) => {
  const contact = useSelector((state) => state.contacts.contacts).find(
    (c) => c.id === contactId
  );
  const user = useSelector((state) => state.auth.user);
  //const setSelectedContactAndFormMode = props.setSelectedContactAndFormMode

  return (
    <div className="col-12 my-3 border border-info rounded p-3">
      {/* <div className="col-4 d-flex justify-content-center">
          <img src={contact.avatarURL} alt="Contact Avatar" style={{width: "250px", height: "250px", objectFit: "contain", borderRadius: "50%"}} />
        </div> */}
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-center">
          <h3  >
            {contact.firstName} {contact.lastName}
          </h3>
          {user && (
            <>
              <Link
                to={`/contacts/edit/${contactId}?mode=edit`}
                className="ms-auto btn btn-warning"
              >
                <i className="bi bi-pencil-square"></i>
              </Link>
              <Link
                to={`/contacts/delete/${contactId}?mode=delete`}
                className="ms-2 btn btn-danger"
              >
                <i className="bi bi-trash"></i>
              </Link>
            </>
          )}
        </div>
        <hr />
        <ul>
          <li className="">
            <b>Email:</b> {contact.email}
          </li>
          <li className="">
            <b>Phone Number:</b> {contact.tel}
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default ContactDisplay;
