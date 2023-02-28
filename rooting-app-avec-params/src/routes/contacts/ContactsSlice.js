import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_DB_URL } from "../../fireBaseConfig";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const response = await fetch(`${BASE_DB_URL}contacts.json`)

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des contacts !")
    }

    const data = await response.json()

    const tmpArray = []

    for (const key in data) {
      tmpArray.push({id: key, ...data[key]})
    }

    return tmpArray
  }
)

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (ContactValues) => {
    
    
      const response = await fetch(`${BASE_DB_URL}contacts.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ContactValues)
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'ajout d'un contact !")
      }

      const data = await response.json()

      return {id: data.name, ...ContactValues}
    
  }
)

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({id, ...ContactValues}) => {
    
    
      const response = await fetch(`${BASE_DB_URL}contacts/${id}.json`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ContactValues)
      })

      if (!response.ok) {
        throw new Error("Erreur lors de l'édition d'un contact !")
      }

      const data = await response.json()

      return {id, ...data}
    
  }
)

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    
    
      const response = await fetch(`${BASE_DB_URL}contacts/${id}.json`, {
        method: "DELETE"
      })

      if (!response.ok) {
        throw new Error("Erreur lors de la suppression d'un contact !")
      }

      return id
    
  }
)

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  }, 
  extraReducers : (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.contacts = []
      state.isLoading = true
      state.error = null
    })

    builder.addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false
      state.contacts = action.payload
    })

    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.push(action.payload)
    })

    builder.addCase(deleteContact.fulfilled, (state, action) => {
      const contactFound = state.contacts.find(c => c.id === action.payload)
      if (contactFound) {
        state.contacts = state.contacts.filter(c => c !== contactFound)
      }
    })

    builder.addCase(editContact.fulfilled, (state, action) => {
      const { id } = action.payload
      const contactFound = state.contacts.find(c => c.id === id)
      if (contactFound) {
        state.contacts = [...state.contacts.filter(c => c !== contactFound), action.payload]
      }
    })
  }
})

export default contactsSlice.reducer