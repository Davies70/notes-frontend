/**
 * A module that provides functions for performing CRUD operations on a collection of notes.
 * @module noteService
 */

import axios from 'axios'

/**
 * Retrieves all notes from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of notes.
 *
 */

const baseUrl = '/api/notes'

let token = null

const setToken = (newToken) => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

/**
 * Creates a new note.
 * @param {Object} newObject - The new note object to be created.
 * @returns {Promise<Object>} A promise that resolves to the created note object.
 */
const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

/**
 * Updates an existing note.
 * @param {string} id - The ID of the note to be updated.
 * @param {Object} newObject - The updated note object.
 * @returns {Promise<Object>} A promise that resolves to the updated note object.
 */
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const noteService = {
  getAll,
  create,
  update,
  setToken,
}

export default noteService
