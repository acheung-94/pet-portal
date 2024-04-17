import jwtFetch from "./jwt";

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
    jwtFetch(`/api/pets`, {
        method: 'POST',
        body: JSON.stringify(petInfo)
    })
)

export const putPet = petInfo => (
    jwtFetch(`/api/pets/${petInfo._id}`, {
        method: 'PUT',
        body: JSON.stringify(petInfo) 
    })
)

export const deletePet = petId => (
    jwtFetch(`/api/pets/${petId}`, {
        method: 'DELETE',
    })
)