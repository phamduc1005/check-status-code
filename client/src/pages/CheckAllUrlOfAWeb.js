import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CheckLastOfAWeb from '../components/CheckLastOfAWeb'

const CheckAllUrlOfAWeb = ({handleFollowReTest}) => {

    let {id} = useParams()
    let [check, setCheck] = useState([])

    useEffect(() => {
        getCheck()
    }, [])

    const getCheck = async () => {
        const {data: response} = await axios.get(`/checkStatus/allCheckOfAWebsite/${id}`)
        setCheck(response)
        
        handleFollowReTest(true)
    }   
    
    return (
        <div>
            <div>
                <CheckLastOfAWeb check={check}/>
            </div>
        </div>
    )
}

export default CheckAllUrlOfAWeb


// let getCheck = async () => {
    //     let response = await fetch(`/checkStatus/allCheckOfAWebsite/${name}`)
    //     let data = await response.json()
    //     setCheck(data)
    // }   
