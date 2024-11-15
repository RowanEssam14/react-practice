import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async () => {
  const response = await fetch('http://localhost:3004/characters')
  if (!response.ok) {
    throw new Error('Failed to fetch characters')
  }
  return await response.json()
})

const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false
        state.characters = action.payload
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default charactersSlice.reducer
