import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import { useSearchParams } from 'react-router-dom';
import './profile.scss'
import axios from 'axios';
import Loader from '../../components/Loader/Loader';

const ProfileIndex = () => {
    let [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");
    const [selectedTab, setSelectedTab] = useState('Profile')
    const [userData, setUserData] = useState({})
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${userId}`).then((response) => {
            setUserData(response.data)
            setLoading(false)
        })
    }, [])

    return (
        <>
           {loading?<Loader/>:
            <Profile selectedTab={selectedTab} setSelectedTab={setSelectedTab} userData={userData} />}
        </>
    )
}

export default ProfileIndex
