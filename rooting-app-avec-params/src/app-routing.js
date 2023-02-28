import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import ContactForm from "./routes/contacts/ContactFormPage";
import ContactList from "./routes/contacts/ContactsList";

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
        element: <ContactList />,
      },

      {
        path: "/ContactForm",
        element: <ContactForm />
      },

      {
        path: "/Contact",
        element: <ContactForm />
      },

    ],

  },
  
]);

export default router;
