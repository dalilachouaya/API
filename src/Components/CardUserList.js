
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import './CardUser.css';


const useStyles = makeStyles((theme) => ({
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
            verticalAlign: 'middle',
        
    },}));

const CardUserList = ({user}) => {
    const classes = useStyles();
    return (
        <>
        <Flippy
        flipOnHover={true} 
    flipDirection="horizontal" 
    className='card'>
    <FrontSide >
<div className="container">
<Avatar alt="avatar" src="/broken-image.jpg" className={classes.orange}> {user.name[0]} </Avatar>

            <h3>{user.name}</h3>
            <h4>  {user.username}</h4>
            <h5>company: {user.company.name}</h5>
            <h5>{user.company.catchPhrase}</h5>
            <h5>{user.company.bs}</h5>

        </div>

        </FrontSide>
        <BackSide >
            <div className="container">
        <h4>email: {user.email} </h4>
        <h4> address: {user.address.street}-{user.address.suite}-{user.address.city}-{user.address.zipcode}</h4>
        <h5> {user.address.geo.lat}/{user.address.geo.lng}</h5>
        <h4> phone: {user.phone} </h4>
        <h4> website: {user.website} </h4>
            </div>

        </BackSide>
    </Flippy>
        </>
    )
}

export default CardUserList
