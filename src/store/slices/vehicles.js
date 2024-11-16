import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS, ACTION_TYPES, MESSAGES } from '../../constants'

export const fetchVehicles = createAsyncThunk(ACTION_TYPES.FETCH_VEHICLES, async () => {
  const response = await fetch(ENDPOINTS.VEHICLES)
  if (!response.ok) {
    throw new Error(MESSAGES.FETCH_VEHICLES_ERROR)
  }
  return await response.json()
})

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: {
    vehicles: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.isLoading = false
        state.vehicles = action.payload
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export default vehiclesSlice.reducer
