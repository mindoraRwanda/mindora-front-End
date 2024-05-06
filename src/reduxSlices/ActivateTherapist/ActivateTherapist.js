import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const ActivateTherapist = (token,id) => async (dispatch) => {
  const response = await axios
    .patch(
      `https://mental-health-vd45.onrender.com/api/therapist/admin/activetherapy/${id}`,
      {
        Active: "true",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(Activated(res.data));
      console.log(res);
    });
  return response;
};

const ActivateTherapistSlice = createSlice({
  name: "activateTherapist",
  initialState: {
    activated: false,
  },
  reducers: {
    pending: (state) => {
      state.isLoading = false;
    },
    Activated: (state, action) => {
      state.data = action.payload;
      state.activated = Math.random();
    },
  },
});

export const { pending, Activated } = ActivateTherapistSlice.actions;
export default ActivateTherapistSlice.reducer;
