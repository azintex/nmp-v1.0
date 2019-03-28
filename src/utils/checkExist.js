import { checkUrl } from './urls'

const init = {
    method : 'GET'
}

export function checkIsExist(item, itemName) {
    fetch(`${checkUrl}/` + item  + `/` + itemName, init)
    .then((response) => {
        if(!response.ok){
            throw new Error('No response form server')
        }
        return response
    })
    .then((response) => response.json())
    .then((json) => json)
}