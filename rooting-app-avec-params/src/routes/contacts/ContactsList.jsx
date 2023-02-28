import { useEffect, useState } from "react";
import { addContact, deleteContact, editContact, fetchContacts } from "./ContactsSlice"
import ContactForm from "./ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import ContactDisplay from "./components/ContactDisplay"

const ContactsList = () =>  {

  const contacts = useSelector(state => state.contacts.contacts)
 

   return   (

        <>

            <div className="col-6 offset-3 bg-dark rounded text-light p-3 mt-2">
            <div className="d-flex align-items-center">
              <h3>Contacts List</h3>
              <hr />
              <Link to={`/contacts/add`} className=" ms-auto btn btn-outline-success rounded-circle p-1 px-2"><i className="bi bi-plus"></i></Link>
            
            {/* {contactFormMode === 'add' && 
            <ContactForm mode='add' onAdd={onAddContactHandler} />}
            
            {contactFormMode === 'edit' && 
            <ContactForm mode='edit' onEdit={onEditContactHandler} contactId={selectedContact.id} />}
            
            {contactFormMode === 'delete' && 
            <ContactForm mode='delete' onDelete={onDeleteContactHandler} contactId={selectedContact.id} />} */}
            
            
             {/* <button onClick={() => setSelectedContactAndContactFormMode({mode: "add"})} className="btn btn-outline-success mx-auto "><i className="bi bi-plus-circle"></i> Add</button> */}
             {/* </div>
              <hr /> */}
              
              </div>
              {contacts.length === 0 ? 
              <p>Il n'y a pas de contact dans la base de données !</p> : 
              [...contacts].sort((a, b) => a.id.localeCompare(b.id)).map(c => <ContactDisplay key={c.id} contactId={c.id} />)}
              </div>

        </>
    )
}
  
  export default ContactsList