import { createSlice } from "@reduxjs/toolkit";

import {
  setUserToLocalStorage,
  removeUserFromLocalStorage,
  updateEmailAndRole,
} from "../../helpers/setUserLocalStorage";

const initialState = {
  name: localStorage.getItem("name") || "",
  email: localStorage.getItem("email") || "",
  role: localStorage.getItem("role") || "",
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  token: localStorage.getItem("token") || "",
  profilePic: localStorage.getItem("profilePic") || ""
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    addUser: (state, action) => {
      setUserToLocalStorage(
        action.payload.name,
        action.payload.email,
        action.payload.role,
        false,
        action.payload.profilePic
      );
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = false;
      state.profilePic = action.payload.profilePic;
    },
    setEmailAndRole: (state, action) => {
      console.log("In slice ", action);
      updateEmailAndRole(action.payload.email, action.payload.role);
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
    addUserWithToken: (state, action) => {
      setUserToLocalStorage(
        action.payload.name,
        action.payload.email,
        action.payload.role,
        true,
        action.payload.token,
        action.payload.profilePic
      );
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.profilePic = action.payload.profilePic;
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
      state.role = "";
      state.isLoggedIn = false;
      state.profilePic = "";
      removeUserFromLocalStorage();
    },
  },
});

export default authSlice.reducer;
export const { addUser, removeUser, addUserWithToken, setEmailAndRole } =
  authSlice.actions;
