import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const user = useSelector(state => state.auth.user)
  //const navigate = useNavigate()

  // const maFonction = () => {
  //   console.log("Je navigue")
  //   navigate("/auth")
  // }

  if (user && user.role === props.roleChecked) {
    return (

      <>

        {props.children}

      </>
    )
  } else {
    // Pour mettre des espaces dans une route, il faut utiliser le caractère '+'
     return <Navigate to={`/`} />
    //return navigate("/admin")
  }
}


export default ProtectedRoute