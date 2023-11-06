/**
 * A module that provides functions for performing CRUD operations on a collection of notes.
 * @module noteService
 */

import axios from 'axios'

/**
 * Retrieves all notes from the API.
 * @returns {Promise<Array>} A promise that resolves to an array of notes.
 */
const getAll = () => {
  const request = axios.get('/api/notes')
  return request.then(response => response.data)
}

/**
 * Creates a new note.
 * @param {Object} newObject - The new note object to be created.
 * @returns {Promise<Object>} A promise that resolves to the created note object.
 */
const create = newObject => {
  const request = axios.post('/api/notes', newObject)
  return request.then(response => response.data)
}

/**
 * Updates an existing note.
 * @param {string} id - The ID of the note to be updated.
 * @param {Object} newObject - The updated note object.
 * @returns {Promise<Object>} A promise that resolves to the updated note object.
 */
const update = (id, newObject) => {
  const request = axios.put(`/api/notes/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  getAll,
  create,
  update
}
