import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { initialStore } from './_initial'

// export const asyncDeviceTokenDelete = createAsyncThunk(
//   'user/asyncDeviceTokenDelete',
//   async (data: IDeviceTokenDelete, { rejectWithValue }) => {
//     const res = await api_deviceTokenDelete(data)
//     if (res.status !== 200 || !res.data.success) return rejectWithValue('device token delete error')
//     return true
//   }
// )

export const sessionSlice = createSlice({
  name: 'session',
  initialState: initialStore.session,
  reducers: {
    // clearPush: () => initialStore.push
  },
  extraReducers(builder) {
    builder
      // .addCase(asyncDeviceTokenCreate.pending, () => {
      //   //00
      // })
      // .addCase(asyncDeviceTokenCreate.fulfilled, () => {
      //   //00
      // })
      // .addCase(asyncDeviceTokenCreate.rejected, () => {
      //   //00
      // })
  }
})

export const {
  // clearPush
} = sessionSlice.actions

export default sessionSlice.reducer
