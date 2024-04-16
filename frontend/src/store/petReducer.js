import { getPet, getPets, postPet, putPet, deletePet } from "../utils/petApiUtils"

//CONST TYPES
export const RECEIVE_PETS = 'pets/RECEIVE_PETS'
export const RECEIVE_PET = 'pets/RECEIVE_PET'
export const REMOVE_PET = 'pets/REMOVE_PET'

//ACTION CREATOR
export const receivePets = pets => ({
    type: RECEIVE_PETS,
    pets
})

export const receivePet = pet => ({
    type: RECEIVE_PET,
    pet: pet.pet
})

export const removePet = petId => ({
    type: REMOVE_PET,
    petId
})

//THUNK CREATOR
export const fetchPets = () => dispatch => (
    getPets()
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(pets => dispatch(receivePets(pets)))
)

export const fetchPet = petInfo => dispatch => (
    getPet(petInfo)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(pet => dispatch(receivePet(pet)))
)

export const createPet = petInfo => dispatch => (
    postPet(petInfo)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(pet => dispatch(receivePet(pet)))
        .catch(err => console.error(err))
)

export const updatePet = petInfo => dispatch => (
    putPet(petInfo)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(pet => dispatch(receivePet(pet)))
)

export const destroyPet = petId => dispatch => (
    deletePet(petId)
        .then(res => {
            if (res.ok) {
                dispatch(removePet(petId))
            } else {
                throw res
            }
        })
)

const petReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch(action.type) {
        case RECEIVE_PETS:
            return ({...state,
                ...action.pets.pets.reduce(
                  (a, e) => ({...a, [e._id]: e}), {}
                )
            })
        case RECEIVE_PET:
            return {...state, [action.pet._id]: action.pet}
        case REMOVE_PET:
            delete nextState[action.petId]
            return nextState
        default:
            return state
    }
}

export default petReducer