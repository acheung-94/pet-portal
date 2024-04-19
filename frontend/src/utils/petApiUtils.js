import jwtFetch from "./jwt";
import { getCookie } from "./jwt";

const jwtToken = localStorage.getItem("jwtToken");

export const getPets = () => (
    jwtFetch(`/api/pets`, {
        method: 'GET'
    })
)

export const getPet = petInfo => (
    jwtFetch(`/api/pets/${petInfo._id}`, {
        method: 'GET'
    })
)

export const postPet = petInfo => (
    fetch(`/api/pets`, {
        method: 'POST',
        body: petInfo,
        headers: {
            'CSRF-TOKEN' : getCookie("CSRF-TOKEN"),
            'Accept' : 'application/json',
            "Authorization": 'Bearer ' + jwtToken
        }
    })
)

export const putPet = (petInfo, id) => (
    fetch(`/api/pets/${id}`, {
        method: 'PUT',
        body: petInfo,
        headers: {
            'CSRF-TOKEN' : getCookie("CSRF-TOKEN"),
            'Accept' : 'application/json',
            "Authorization": 'Bearer ' + jwtToken
        }
    })
)

export const deletePet = petId => (
    jwtFetch(`/api/pets/${petId}`, {
        method: 'DELETE',
    })
)