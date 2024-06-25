const { createSlice } = require("@reduxjs/toolkit");

const usersData = {
  profession: "",
  name: "",
  email: "",
};

const userRegisteSlicer = createSlice({
  name: "usersData",
  initialState: usersData,
  reducers: {
    addUserData: (state, action) => {
      if (action.payload?.profession) {
        state.usersData.profession = action.payload.profession;
      }

      if (action.payload.name) {
        state.usersData.name = action.payload.name;
      }

      if (action.payload.email) {
        state.usersData.email = action.payload.email;
      }
    },
  },
});

export const { addUserData } = userRegisteSlicer.actions;
export default userRegisteSlicer.reducer;
