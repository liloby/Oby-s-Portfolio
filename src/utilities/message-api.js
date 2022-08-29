import sendRequest from './send-request';
const BASE_URL = '/api/messages'

export function getAll() {
    return sendRequest(BASE_URL)
}

export function newMessage(formData) {
    console.log(formData, "FORM DATA IN API")
    return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}