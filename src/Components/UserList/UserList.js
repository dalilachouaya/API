
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import CardUserList from '../CardUser/CardUserList';
//import Spinner from './Spinner';
import './useList.css'

const UserList = () => {

const [listOfUSe, setListOfUSe] = useState([]);
//const [isLoading, setIsLoading] = useState(true)


 /************************** Axios *********************/

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then ((res) => res.data)
        .then(listOfUSe=> setListOfUSe(listOfUSe))
        .catch(console.error());
        
    }, []) ;

    return (
      
        <div className="useList">
        { listOfUSe.map((user, index)=> (
            <div key={index} >
                <CardUserList user={user}/>
            </div>
            ))}
        </div>
       
    )
}

export default UserList
