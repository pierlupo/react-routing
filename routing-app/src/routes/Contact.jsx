import { useRef } from "react"

const Contact = ()=> {

    const senderRef = useRef()
    const subjectRef = useRef()
    const msgRef = useRef()

    const submitFormHandler = (e) => {
        e.preventDefault()

        const sender = senderRef.current.value
        const subject = subjectRef.current.value
        const msg = msgRef.current.value

        senderRef.current.value = ""
        subjectRef.current.value = ""
        msgRef.current.value = ""

        const formValues = {

            sender,
            subject,
            msg

        }

        console.log(formValues);

    }
    
    return(
        <>
       
        <div className="col-6 offset-3 rounded bg-dark text-light p-3 mt-2">
        <h3>Contact</h3>
        <hr />
        <form onSubmit={submitFormHandler}>

            <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email:</label>
            <input type="email" name="email" id="email" required className="form-control" ref={senderRef} />
            </div>
            <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject:</label>
            <input type="text" name="subject" id="subject" required className="form-control" ref={subjectRef} />
            </div>
            <div className="mb-3">
            <label htmlFor="msg" className="form-label">Message:</label>
            <textarea name="msg" id="msg" required cols={30} rows={10} style={{resize:"none"}} className="form-control" ref={msgRef}></textarea>
            </div>
            <div className="text-end">
            <button className="btn btn-outline-light"> <i className="bi bi-send"></i>  Send</button>
            </div>

        </form>
        </div>
        </>
    )
}

export default Contact