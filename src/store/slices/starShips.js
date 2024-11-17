import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS, ACTION_TYPES, MESSAGES } from '../../constants'

export const fetchStarShips = createAsyncThunk(ACTION_TYPES.FETCH_STARSHIPS, async () => {
  const response = await fetch(ENDPOINTS.STARSHIPS)
  if (!response.ok) {
    throw new Error(MESSAGES.FETCH_STARSHIPS_ERROR)
  }
  return await response.json()
})

const starShipsSlice = createSlice({
  name: 'starShips',
  initialState: {
    starShips: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStarShips.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchStarShips.fulfilled, (state, action) => {
        state.isLoading = false
        state.starShips = action.payload
      })
      .addCase(fetchStarShips.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export default starShipsSlice.reducer
