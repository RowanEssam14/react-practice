import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS, ACTION_TYPES, MESSAGES } from '../../constants'

export const fetchCharacters = createAsyncThunk(ACTION_TYPES.FETCH_CHARACTERS, async () => {
  const response = await fetch(ENDPOINTS.CHARACTERS)
  if (!response.ok) {
    throw new Error(MESSAGES.FETCH_CHARACTERS_ERROR)
  }
  return await response.json()
})

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false
        state.characters = action.payload
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export default charactersSlice.reducer
