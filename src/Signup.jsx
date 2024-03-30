import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleFormAction } from './quizSlice';

export default function Signup() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            dispatch(handleFormAction({username:username,password:password}))
        }}>
            <label htmlFor="user"></label>
            <input onChange={(e)=>setUsername(e.target.value)} type="text" />
            <label htmlFor="pass"></label>
            <input onChange={(e)=>setPassword(e.target.value)} type="password" />
            <input type="submit" value="sign in" />
        </form>
    )
}
