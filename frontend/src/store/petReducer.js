import { getPet, getPets, postPet, putPet, deletePet } from "../utils/petApiUtils"
import { createSelector } from 'reselect'

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
    pet
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

export const fetchPet = petInfo => dispatch => {
    console.log(petInfo)
    return getPet(petInfo)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw res
            }
        })
        .then(pet => dispatch(receivePet(pet)))
    }

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

export const selectPets = createSelector(state => state.pets, pets => Object.values(pets))
export const currentPet = (petId) => state => state.pets[petId]

const petReducer = (state = {}, action) => {
    const nextState = { ...state }

    switch(action.type) {
        case RECEIVE_PETS:
            return ({...state, ...action.pets})
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