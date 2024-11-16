import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS, ACTION_TYPES, MESSAGES } from '../../constants'

export const fetchPlanets = createAsyncThunk(ACTION_TYPES.FETCH_PLANETS, async () => {
  const response = await fetch(ENDPOINTS.PLANETS)
  if (!response.ok) {
    throw new Error(MESSAGES.FETCH_PLANETS_ERROR)
  }
  return await response.json()
})

const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    planets: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlanets.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchPlanets.fulfilled, (state, action) => {
        state.isLoading = false
        state.planets = action.payload
      })
      .addCase(fetchPlanets.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export default planetsSlice.reducer
