import { configureStore } from "@reduxjs/toolkit";
import ContactsSlice from "./routes/contacts/ContactsSlice";

const store = configureStore({
  reducer: {

    contacts: ContactsSlice,
    
  }

})

export default store