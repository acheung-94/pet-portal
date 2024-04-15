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