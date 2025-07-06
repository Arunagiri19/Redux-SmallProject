import type { UserState } from "../model/studente.model";
import { initialdata } from "../model/studente.model";

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// // const userSlice=createSlice({
// //     name:'student',
// //     initialState:initialdata,
// //     reducers:{
// //         saveuser:(state,action:PayloadAction<UserState>)=>{
// //             state.name=action.payload.name;
// //             state.password=action.payload.password;

// //         }
// //     }
// // })

// // export const { saveuser } = userSlice.actions;
// // export default userSlice.reducer;

// const userSlice=createSlice({
//     name:'user',
//     initialState:initialdata,
//     reducers:{
//         saveuser :(state,action:PayloadAction<UserState>)=>{
//             state.name=action.payload.name;
//             state.password=action.payload.password;

//         }
//     }

// });
// export  const {saveuser}=userSlice.actions;
// export default userSlice.reducer;

const userSlice = createSlice({
  name: "user",
  initialState: initialdata,
  reducers: {
    saveuser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
    },
  },
});

export const { saveuser } = userSlice.actions;
export default userSlice.reducer;
