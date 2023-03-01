import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { addContact, deleteContact, editContact } from "./ContactsSlice";

const ContactForm = ()=> {
    const{contactId} = useParams()
    const contact = useSelector(state => state.contacts.contacts).find(c => c.id === contactId)
    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode') ?? 'add'

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const telRef = useRef()

    const submitFormHandler = async (e) => {
        e.preventDefault()

        if (mode === 'delete') {
            await dispatch(deleteContact(contactId))
          } else {

        const firstName = firstNameRef.current.value
        const lastName = lastNameRef.current.value
        const email = emailRef.current.value
        const tel = telRef.current.value

        const ContactValues = {

            firstName,
            lastName,
            email,
            tel
        }

        console.log(ContactValues);

        if (mode === 'add') {
          await dispatch(addContact(ContactValues))
          } else if (mode === 'edit') {
            await dispatch(editContact({id: contactId, ...ContactValues}))
          }
        }

        navigate('/contacts')
    }

    return (
        <>
        <div className="col-4 offset-4 rounded bg-dark text-light p-3 mt-5">
        <h3>{mode.substring(0, 1).toUpperCase() + mode.substring(1).toLowerCase()}Contact</h3>
        <hr />
        <form onSubmit={submitFormHandler}>

        <div className="mb-3">

            <label htmlFor="firstName" className="form-label">Firstname:</label>
            <input type="text" disabled={mode === 'delete'} name="firstName" id="firstName" required={mode !== 'delete'} className="form-control" ref={firstNameRef} defaultValue={contact?.firstName} />
            </div>
            <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Lastname:</label>
            <input type="text" disabled={mode === 'delete'} name="lastName" id="lastName" required={mode !== 'delete'} className="form-control" ref={lastNameRef} defaultValue={contact?.lastName} />
            </div>
            <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" disabled={mode === 'delete'} name="email" id="email" required={mode !== 'delete'} className="form-control" ref={emailRef} defaultValue={contact?.email} />
            </div>
            <div className="mb-3">
            <label htmlFor="tel" className="form-label">tel:</label>
            <input type="text" disabled={mode === 'delete'} name="tel" id="tel" required={mode !== 'delete'} className="form-control" ref={telRef} defaultValue={contact?.tel} />
            </div>
            <div className="text-end">
            <button className={`btn btn-${mode === 'delete' ? 'danger' : mode === 'edit' ? 'warning' : 'success'}`}>
            <i className={`bi bi-${mode === 'delete' ? 'trash' : mode === 'edit' ? 'pencil-square' : 'plus-circle'}`}></i> {mode === 'delete' ? 'Confirmer' : mode === 'edit' ? 'Editer' : 'Ajouter'}
            </button>
        </div>

        </form>
        </div>
        
        </>
    )
}


export default ContactForm