import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./routes/auth/authSlice";
import ContactsSlice from "./routes/contacts/ContactsSlice";

const store = configureStore({
  reducer: {

    contacts: ContactsSlice,
    auth: authSlice
    
  }

})

export default store