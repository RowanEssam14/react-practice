import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS, ACTION_TYPES, MESSAGES } from '../../constants'

export const fetchEpisodes = createAsyncThunk(ACTION_TYPES.FETCH_EPISODES, async () => {
  const response = await fetch(ENDPOINTS.EPISODES)
  if (!response.ok) {
    throw new Error(MESSAGES.FETCH_EPISODES_ERROR)
  }
  return await response.json()
})

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episodes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.isLoading = false
        state.episodes = action.payload
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export default episodesSlice.reducer
