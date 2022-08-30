import sendRequest from './send-request';
const BASE_URL = '/api/messages'

export function getAll() {
    return sendRequest(BASE_URL)
}

export function newMessage(formData) {
    console.log(formData, "FORM DATA IN API")
    return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}

export function markRead(messageId) {
    console.log(messageId, "MESSAGE ID HERE IN API")
    return sendRequest(`${BASE_URL}/read`, 'PUT', messageId)
}

export function deleteMessage(messageId) {
    return sendRequest(`${BASE_URL}/delete`, 'DELETE', messageId)
}