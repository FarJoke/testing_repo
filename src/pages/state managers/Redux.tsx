import { configureStore, createSlice } from "@reduxjs/toolkit";

export default function Redux (){

    const counterSlice = createSlice({
        name: "counter",
        initialState: { value: 0 },
        reducers: {
            increment: (state) => { state.value += 1; },
            decrement: (state) => { state.value -= 1; },
        },
    });

    return(
        <>
        Hello World!
        </>
    )
}