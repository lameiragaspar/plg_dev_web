import React from 'react'
import { Link } from 'react-router-dom'

export default function LoadingPage(){
    return(
        <>
            <h2>
                Está é a LandingPage!
            </h2>
            <Link to='/' className='a'>Home</Link>
        </>
    )
}