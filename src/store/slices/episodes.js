import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchEpisodes = createAsyncThunk('episodes/fetchEpisodes', async () => {
  const response = await fetch('http://localhost:3004/films')
  if (!response.ok) {
    throw new Error('Failed to fetch episodes')
  }
  return await response.json()
})

const episodesSlice = createSlice({
  name: 'episodes',
  initialState: {
    episodes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisodes.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchEpisodes.fulfilled, (state, action) => {
        state.loading = false
        state.episodes = action.payload
      })
      .addCase(fetchEpisodes.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export default episodesSlice.reducer
