'use client'
import React, {useEffect, useState} from'react';
import { useAuth } from '../../app/context/AuthContext';
import Spinner from'../../app/components/Spinner'

const page = () => {
    const {user} = useAuth()
    const [loanding, setLoanding] = useState(true)

    useEffect(()=> {
        const checkAuthenticantion = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoanding(false);
        }
        checkAuthenticantion();
    }, [user]);

    return (
        <div className='p-4'>
            {loanding ? (
                <Spinner/>
            ) : user ? (
                <p>Welcome, {user.displayName} - You are  logged in to the profile page - a protected route</p>
            ): (<p>You must be  logged in to view this page - protected route.</p>)}
        </div>    
        )
}

export default page