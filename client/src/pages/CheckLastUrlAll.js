import axios from 'axios'
import React, {useState, useEffect} from 'react'
import CheckLastUrl from '../components/CheckLastUrl'

const CheckLastUrlAll = ({checkReload, handleReTest, handleFollowReTest}) => {
    let[name, setName] = useState([])  

    useEffect(() => {
        fetchData()
    }, [checkReload])
    
    const fetchData = async () => {
        const {data : response} = await axios.get('/checkStatus/checkLastUrlAll/')
        response.sort((a,b) => (a.createdAt < b.createdAt) ? 1 : -1)        
        setName(response)

        handleFollowReTest(false)
    }

    return (
        <div>
            <div>
                <CheckLastUrl name={name} handleReTest={handleReTest}/>
            </div>
        </div>
    )
}

export default CheckLastUrlAll


// let getName = async () => {
    //     let response = await fetch('/checkStatus/checkLastUrlAll/')
    //     let data = await response.json()
    //     setName(data)
    // }
