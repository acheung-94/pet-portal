import jwtFetch from "./jwt";


export const postUser = userInfo => (
    jwtFetch('/api/users/register', {
        method: 'POST',
        body: JSON.stringify(userInfo)
    })
) 

export const postSession = sessionInfo => (
    jwtFetch('/api/users/login', {
        method: 'POST', 
        body: JSON.stringify(sessionInfo)
    })
)

export const refreshSession = () => (
    jwtFetch('/api/users/sessionRestore')
)

export const updateValues = ({user, token, issued, expiresSeconds}) =>{
    const issuedAt = new Date(issued)
    const expiresAt = new Date(issuedAt.getTime() + (expiresSeconds * 1000))
    user["sessionExpiration"] = expiresAt.toISOString()
    localStorage.setItem('jwtToken', token)
    localStorage.setItem('currentUser', JSON.stringify(user))
}