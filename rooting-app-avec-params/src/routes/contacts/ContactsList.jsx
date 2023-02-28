import { useEffect, useState } from "react";
import { addContact, deleteContact, editContact, fetchContacts } from "./ContactsSlice"
import ContactDisplay from "./components/ContactDisplay";
import ContactForm from "./ContactFormPage";
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {

  const contacts = useSelector(state => state.contacts.contacts)
  const [contactFormMode, setContactFormMode] = useState("")
  const [selectedContact, setSelectedContact] = useState(undefined)
  const dispatch = useDispatch()

  const setSelectedContactAndContactFormMode = ({contact, mode}) => {
    setSelectedContact(contact)
    setContactFormMode(mode)
    
  }

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const onAddContactHandler = async (contactValues) => {
    await dispatch(addContact(contactValues))
    setContactFormMode("")
  }

  const onEditContactHandler = async (contactValuesWithId) => {
    await dispatch(editContact(contactValuesWithId))
    setContactFormMode("")
  }

  const onDeleteContactHandler = async (contactId) => {
    await dispatch(deleteContact(contactId))
    setContactFormMode("")
  }
    return (
      <>

<div className="col-10 offset-1 bg-dark rounded text-light p-3">
            <div className="d-flex align-items-center">
              <h3>Contacts List</h3>
              <hr />
            
            {contactFormMode === 'add' && 
            <ContactForm mode='add' onAdd={onAddContactHandler} />}
            
            {contactFormMode === 'edit' && 
            <ContactForm mode='edit' onEdit={onEditContactHandler} contactId={selectedContact.id} />}
            
            {contactFormMode === 'delete' && 
            <ContactForm mode='delete' onDelete={onDeleteContactHandler} contactId={selectedContact.id} />}
            
            
             <button onClick={() => setSelectedContactAndContactFormMode({mode: "add"})} className="ms-2 btn btn-outline-success"><i className="bi bi-plus-circle"></i> Add</button>
            </div>
              <hr />
              {contacts.length === 0 ?
              <p>Il n'y a pas de contact dans la base de données !</p> : 
              (
                <div className="mx-auto row row-cols-2 row-cols-md-3 row-cols-xl-4">
                  {[...contacts].sort((a,b) => a.id.LoclaCompare(b.id)).map(c => <ContactDisplay contactId={c.id} key={c.id} />)}
            </div>
              )}
          </div>
      </>
    )
  }
  
  export default ContactList