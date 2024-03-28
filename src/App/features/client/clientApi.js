import axios from "axios"

let baseUrl = "http://localhost:4000/api/client";
export const getClient = ( client) => {
    return (
       axios.get(`${baseUrl}`,client)
    );
 }

export const deleteClient = (id) => {
   return (
      axios.delete(`${baseUrl}/${id}`)
   );
}

export const getClientById = (id) => {
   return (
      axios.get(`${baseUrl}/${id}`)
   );
}
export const addClient = (client) => {
   return (
      axios.post(baseUrl, client)
   );
}