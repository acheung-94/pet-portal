
export const deletePet = petId => (
    jwtFetch(`/api/pets/${petId}`, {
        method: 'DELETE',
    })
)