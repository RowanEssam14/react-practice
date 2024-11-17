import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS, ACTION_TYPES, MESSAGES } from '../../constants'

export const fetchSpecies = createAsyncThunk(ACTION_TYPES.FETCH_SPECIES, async () => {
  const response = await fetch(ENDPOINTS.SPECIES)
  if (!response.ok) {
    throw new Error(MESSAGES.FETCH_SPECIES_ERROR)
  }
  return await response.json()
})

const speciesSlice = createSlice({
  name: 'species',
  initialState: {
    species: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpecies.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchSpecies.fulfilled, (state, action) => {
        state.isLoading = false
        state.species = action.payload
      })

      .addCase(fetchSpecies.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export default speciesSlice.reducer
