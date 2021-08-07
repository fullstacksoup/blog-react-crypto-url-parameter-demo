import React, { useEffect, useState, setState, withState } from 'react'
import { AESDecrypt, Sha256Hash } from '../Global/Crypto-Helper';
import { useParams } from "react-router-dom";
import users from '../Data/users.json';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function Details(props) {
    let { id, hash } = useParams();
    const decryptedId = AESDecrypt(id);    
    const [isOnline, setIsOnline] = useState(null);
    const {user, setUser } = useState([]);
            
    console.log('useEffect');
    let usr = [];
    var rec = users.map(item => {
        if(item.id === decryptedId) {
            console.log(item);                    
            usr=item;
        }
    });
    
    return (
        <div>
            <Grid container >
               <Grid xs={2}></Grid>

               <Grid xs={8}>
                    <Grid container >
                        <Grid xs={12} align="left">
                            <Typography variant="body1">
                                ID: {decryptedId}      
                            </Typography>
                        </Grid>                        
                        <Grid xs={12} align="left">
                            <Typography variant="body1">
                                Name: {usr.first} {usr.last}
                            </Typography>
                        </Grid>                        
                        <Grid xs={12} align="left">
                            <Typography variant="body1">
                                Hash Parameter: {hash}
                            </Typography>
                        </Grid>                        
                        <Grid xs={12} align="left">
                            <Typography variant="body1">
                                Hash Sha256Hash(): {Sha256Hash(usr.id, usr.first, usr.last)}
                            </Typography>
                        </Grid>                        
                        <Grid xs={12} align="left">
                            <Typography variant="body1">
                                {Sha256Hash(usr.id, usr.first, usr.last) === hash? 'Matching Hash' : 'No Match'}
                            </Typography>
                        </Grid>                        
                    </Grid>
               </Grid>

            </Grid>
                
        </div>
    )
}
