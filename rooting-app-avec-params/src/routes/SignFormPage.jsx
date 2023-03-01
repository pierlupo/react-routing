import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

const SignForm = (props) => {
  const{credentials} = useParams()
  // const contact = useSelector(state => state.contacts.contacts).find(c => c.id === contactId)
  // const user = useSelector(state => state.auth.user)
  const [searchParams] = useSearchParams()
 // const mode = searchParams.get('mode') 

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const mode = props.mode

  const emailRef = useRef()
  const passwordRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    const credentials = {
      email,
      password,
      returnSecureToken: true
    }

    emailRef.current.value = ""
    passwordRef.current.value = ""

    props.onSubmit(credentials)
  }

  return (
    <>
    <div className="col-6 offset-3 bg-dark rounded">
    <form onSubmit={submitFormHandler}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email: </label>
        <input type="email" id="email" required ref={emailRef} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password: </label>
        <input type="password" id="password" required ref={passwordRef} className="form-control" />
      </div>
      <div className="text-end">
        {/* <button className={`btn btn-${mode === 'Sign In' ? 'primary' : 'secondary'}`}>{mode}</button> */}
        <Link to={mode === 'Sign In' ? `/auth?mode=Sign+In` : `/auth?mode=Sign+Up`  } className={`btn btn-${mode === 'Sign In' ? 'primary' : 'secondary'}`}>{mode}</Link>
       
      </div>
    </form>
    </div>
    </>
  )
}

export default SignForm