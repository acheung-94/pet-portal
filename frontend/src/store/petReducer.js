import { getPet, getUserPets, postPet, putPet, deletePet } from "../utils/petApiUtils"
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
export const fetchPets = (userId) => dispatch => (
    getUserPets(userId)
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

export const createPet = petInfo => async dispatch => {
    const res = await postPet(petInfo)

    if (res.ok) {
        return dispatch(receivePet(await res.json()))
    } else if (res.status === 422) {
        return await res.json()
    } else {
        throw res
    }
}

export const updatePet = (petInfo, petId) => async dispatch => {
    if (! petId) {
        //console.error('attempted to update a pet without an id')
        return petInfo
    }
    const res = await putPet(petInfo, petId)
    if (res.ok) {
        return dispatch(receivePet(await res.json()))
    } else if (res.status === 422) {
        return await res.json()
    } else {
        throw res
    }
}

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
            
     
        return (action.pets.reduce((a, e)=> {
                a[e._id] = e
                return a
            }, {}))
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