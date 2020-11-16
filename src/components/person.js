import React from 'react'
import './style.css'


function Person({ state, changeShow }) {

return (
    <div className="profil">
        <button className="btn" onClick={changeShow} > My Profil</button>
        {state.booleanShow === true ? 
        <div className="stating">
        <h1> {state.Person.fullName}</h1>
        <h1> {state.Person.bio}</h1>
        <img className="image" src={state.Person.imgSrc} alt="" />
        <h1> {state.Person.profession}</h1> 
        </div>: null }
    </div>
)
}


export default Person