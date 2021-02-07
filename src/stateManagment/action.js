import { createAsyncThunk } from "@reduxjs/toolkit"

export const increaseAction = (actionPayload) => {
    return {
        type: "INCREASE",
        payload: actionPayload.value
    }
}

export const decreseAction = (decresePayload) => {
    return {
        type: "SUBSTARC",
        payload: decresePayload.value
    }
}
export const dynamicInput = (inputPayload) => {
    return {
        type: "USERINPUT",
        payload: inputPayload.value
    }
}

// export const fetchApiGetProductsByCategoryAction = createAsyncThunk(
//     "Get_Men_Clothing", async (url, thunkoption) => {
//         const { dispatch } = thunkoption
//         const res = await fetch('https://fakestoreapi.com/products/category/jewelery');
//         const changejson = await res.json();
//         dispatch(yechizi(res));
//         console.log(changejson)
//         console.log("omadam to action")
//     });


export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
    //   const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`)
      return {
      }
    }
    // 'users/fetchById',
    // async (userId, thunkAPI) => {
    //   const response = await fetch(`https://fakestoreapi.com/products/category/jewelery`, {
    //     signal: thunkAPI.signal,
    //   })
    //   return {}
    // }
  )

export const yechizi = (payload) => {
    return {
        type: "yechizi",
        payload
    }
}


