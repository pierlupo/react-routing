import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


const ContactDisplay = ({contactId}) => {
    const contact = useSelector(state => state.contacts.contacts)
    //const setSelectedContactAndFormMode = props.setSelectedContactAndFormMode
  
  
    return (
      <div className="m-2 border border-info rounded p-3 row">
        {/* <div className="col-4 d-flex justify-content-center">
          <img src={contact.avatarURL} alt="Contact Avatar" style={{width: "250px", height: "250px", objectFit: "contain", borderRadius: "50%"}} />
        </div> */}
        <div className="col-8">
          <div className="d-flex align-items-center">
            <h3>{contact.firstName} {contact.lastName}</h3>
            <Link to={`/contacts/edit/${contactId}`} className="ms-auto btn btn-warning" ><i className="bi bi-pencil-square"></i></Link>
            <Link to={`/contacts/delete/${contactId}`} className="ms-2 btn btn-danger" ><i className="bi bi-trash"></i></Link>
          </div>
          <hr />
          <ul>
            <li><b>Email: </b> {contact.email}</li>
            <li><b>Phone Number: </b> {contact.tel}</li>
          </ul>
          <hr />
        </div>
      </div>
    )
  }
  
  export default ContactDisplay