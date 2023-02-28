import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./routes/AboutPage";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import Contact from "./routes/Contact";
import Projects from "./routes/ProjectsPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
            path: "/My-Projects",
            element: <Projects />
          },
        {
          path: "/about",
          element: <AboutPage />
        },
        {
            path: "/Contact",
            element: <Contact />
          }
      ]
    }  
  ])
  
  export default router