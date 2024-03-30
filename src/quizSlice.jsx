import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    username:'',
    password:'',
    score:0,
    questionsIndex:0,
    signedIn:false,
    finished:false
}
const addScore = (state)=>{
    state.score += 1;
}
const addIndex = (state) =>{
    if (state.questionsIndex == 11){
         state.finished = true
    }
    else{
        state.questionsIndex += 1;
    }
}
const handleForm = (state,action) =>{
    state.username = action.payload.username,
    state.password = action.payload.password,
    state.signedIn = true
}
const quizSlice = createSlice({
    name:"quiz",
    initialState,
    reducers:{
        addScore,
        handleForm,
        addIndex
    }
})
export const {addScore:addScoreAction,handleForm:handleFormAction,addIndex:addIndexAction} = quizSlice.actions;
export default quizSlice.reducer;