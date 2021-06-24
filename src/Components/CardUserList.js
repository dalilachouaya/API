
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './CardUser.css';
import { VscLocation} from "react-icons/vsc";
import {AiOutlinePhone,AiOutlineMail} from "react-icons/ai";
import {CgWebsite}  from "react-icons/cg";
import { IconContext } from "react-icons";




const CardUserList = ({user}) => {


                        /*********First method********/
  /*
  const initials =(fullName)=> {
        // Create a array from fullName
        let arrName = fullName.split(" ");
  
        // Select the first letter of the name
        let iniName = fullName.charAt(0);
  
        // Select the first letter of the lastname
        let iniLname = arrName[arrName.length - 1].charAt(0);
  
        // Return the initials
        return iniName + iniLname;
      } */

                                    /*********** Second one */
    
    const initials =(fullName)=> {
        const arrName = fullName.split(' ');
        const initials = arrName.shift().charAt(0) + arrName.pop().charAt(0);
        return initials.toUpperCase();
    }

                                          /**************** */

    return (
        <>
        <Flippy  flipOnHover={true} flipDirection="horizontal" className='card' >
    <FrontSide >
        <div className="container">
        <div className='avatar'>  { initials(user.name)} </div>

            <h3>{user.name}</h3>
            <h4>  {user.username}</h4>
            <h5>company: {user.company.name}</h5>
            <h5>{user.company.catchPhrase}</h5>
            <h5>{user.company.bs}</h5>

        </div>

        </FrontSide>
        <BackSide >
            <div className="container">
            <IconContext.Provider value={{ color: "#aab8c2",size:"1.6rem"}}>
                <ul>
            <li> <AiOutlineMail /> {user.email} </li>
            <li><VscLocation/>  {user.address.street}-{user.address.suite}-{user.address.city}-{user.address.zipcode} </li>
            <li>{user.address.geo.lat}/{user.address.geo.lng}</li>
            <li><AiOutlinePhone/>{user.phone} </li>
            <li>  <CgWebsite/>  {user.website}  </li>
            </ul>
            </IconContext.Provider>
            </div>

        </BackSide>
    </Flippy>
        </>
    )
}

export default CardUserList
