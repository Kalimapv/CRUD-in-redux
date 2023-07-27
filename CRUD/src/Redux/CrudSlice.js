import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';


// Create and display
export const userCreate = createAsyncThunk(
     "userCreate",
     async (userData,{rejectWithValue}) => {
      console.log("userData",userData);
      const response = await fetch( "https://641dd63d945125fff3d75742.mockapi.io/crud",
      {
           method : "POST",
           headers : {
                "content-Type" :"application/json",
                     },
           body : JSON.stringify(userData),
      })
     try {
      const result = await response.json()
      return result;
      }
         catch(error){
           return rejectWithValue(error)
      }
 }       
);

//  read and display
export const readUser = createAsyncThunk(
     "read",
     async(readData,{rejectWithValue}) => {
         
          const response = await fetch("https://641dd63d945125fff3d75742.mockapi.io/crud")  
          console.log("readData",readData);
          try{
          const result = await response.json();
          console.log(result);
          return result;
     }
     catch(error){
          return rejectWithValue(error);
     } 
}
);

//  update and display

export const UpdateUser = createAsyncThunk(
     "update",
     async(updateData,{rejectWithValue}) => {
          console.log("updateData",updateData);
          const response = await fetch(`https://641dd63d945125fff3d75742.mockapi.io/crud/${updateData.id}`,
          {
               method: "PUT",
               headers: {
                        "Content-Type": "application/json",
                        },
               body: JSON.stringify(updateData),
           }
           );  

           try {
               const result = await response.json()
               console.log(result);
               return result;
           } catch (error) {
               return rejectWithValue(error);
           }
}
);

//  Delete and display

export const DeleteUser = createAsyncThunk(
     "update",
     async(id,{rejectWithValue}) => {
          const response = await fetch(`https://641dd63d945125fff3d75742.mockapi.io/crud/${id}`,
          {
               method: "Delete",  
          });  
           try {
               const results = await response.json()
               console.log(results);
               return results;
               } catch (error) {
               return rejectWithValue(error);
          }
}
);

export const userDatas = createSlice ({
     name : "userDetail",
     initialState:{
          user:[],  
               },
     reducers : {},
     extraReducers : {
          [userCreate.fulfilled] : (state,action) => {
           state.user.push(action.payload);
          },
          [userCreate.rejected] : (state,action) => {
          state.error = action.payload;
          },
          [readUser.fulfilled] : (state,action) => {
          state.user = action.payload;
          },
          [readUser.rejected] : (state,action) => {
          state.error = action.payload;
          }, 
          [UpdateUser.fulfilled] : (state,action) => {
          state.user = state.user.map((val) => 
          val.id === action.payload.id ? action.payload : val
          );
          },
          [UpdateUser.rejected] : (state,action) => {
          state.error = action.payload;
          },
          [DeleteUser.fulfilled] : (state,action) => {
               const {id} = action.payload
               if(id) {
                    state.user = state.user.filter((val) => val.id !== id)               }
          },
          [DeleteUser.rejected] : (state,action) => {
               console.log("Rejected")
          }
     },
 })



export default userDatas.reducer;