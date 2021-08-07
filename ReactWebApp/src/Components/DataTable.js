import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Sha256Hash,AESEncrypt } from '../Global/Crypto-Helper';
import data from '../Data/users.json';
import { Link } from 'react-router-dom';
export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: data
        };        
    }
    
    render() {
        console.log(data)
        return (
            <div className="container">
                <Grid container>
                    <Grid xs={1}></Grid>
                    <Grid xs={10}>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                <TableRow>
                                    <TableCell >Action</TableCell>
                                    <TableCell >ID</TableCell>
                                    <TableCell >Hash (first name - id - last name)</TableCell>
                                    <TableCell >Name</TableCell>
                                    <TableCell  align="right">Email</TableCell>                            
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {this.state.users.map((row, i) => (
                                    
                                    <TableRow  key={i}>
                                        <TableCell  align="left"><Button variant="outlined" color="primary" component={Link} to={`details/${AESEncrypt(row.id)}/${Sha256Hash(row.id, row.first, row.last)}`}>View</Button> </TableCell>
                                        <TableCell  component="th" scope="row">
                                        {row.id}
                                        </TableCell>                            

                                        <TableCell  component="th" scope="row">
                                        {Sha256Hash(row.id, row.first, row.last)}
                                        </TableCell>                            

                                        <TableCell  component="th" scope="row">
                                        {row.first} {row.last}
                                        </TableCell>                            
                                        <TableCell  align="right">{row.email}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    </Grid>
            </div>
        );
    }
}
