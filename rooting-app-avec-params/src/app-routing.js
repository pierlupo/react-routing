import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import ContactForm from "./routes/contacts/ContactForm";
import ContactsList from "./routes/contacts/ContactsList";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./routes/admin/adminPage";
import SignForm from "./routes/SignFormPage";

// const authCheck = (roleChecked) => {
//   const role = localStorage.getItem('role')

//   if (role === roleChecked) {
//     return true
//   } else {
//     return redirect(`/auth?mode=Sign+In`)
//   }
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/contacts",
        element: <ContactsList />,
      },
      {
        path: "/contacts/add",
        element: <ContactForm />,
      },
      {
        path: "/contacts/edit/:contactId",
        element: <ContactForm />,
      },
      {
        path: "/contacts/delete/:contactId",
        element: <ContactForm />,
      },
      {
        path: "/Sign+Up",
        element: <SignForm />,
        // element: <ProtectedRoute roleChecked={"user"}><SignForm /></ProtectedRoute>
      },
      {
        path: "/Sign+In",
        element: <SignForm />,
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute roleChecked={"Admin"}>
            <AdminPage />
          </ProtectedRoute>
        ),
        // element: <AdminPage />
        // loader: () => authCheck('Admin')
      },
      // {
      //   path: "/signIn",
      //   element: <ProtectedRoute roleChecked={"Users"}><SignForm /></ProtectedRoute>
      // },
    ],
  },
]);

export default router;
