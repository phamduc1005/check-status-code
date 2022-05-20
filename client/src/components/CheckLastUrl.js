import React from 'react'
import Moment from 'moment';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";

const CheckLastUrl = ({ name, handleReTest }) => {
    let navigate = useNavigate();
    const colorWarning = ({ name }) => {
        let extra_style = null
        
        if (name.percentSuccess < 90 && name.percentSuccess != 0) { 
            return extra_style= {
            backgroundColor:'#ff0000'
        
        }}
        else if (name.percentSuccess >= 90 && name.percentSuccess < 100) {
            return extra_style = {
                backgroundColor: '#ffff00'
            }
        }
        else if (name.percentSuccess == 0){
            return extra_style = {
                backgroundColor: '#00ff00'
            }
        }
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow style={{backgroundColor:'#cce6ff'}}>
                    <TableCell align="left">Web</TableCell>
                    <TableCell align="left">Created&nbsp;at</TableCell>
                    <TableCell align="left">Type</TableCell>
                    <TableCell align="left">Result</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {name.map((name, index) => (
                <TableRow hover key={index} style={{...colorWarning({ name }), cursor:'pointer'}} onClick={() => { 
                    navigate(`/pingTest/${name.id}`);
                    handleReTest({test: `${name.test}`, type: [name.onlyMain]})
                    }}>
                    <TableCell align="left" >{name.test}</TableCell>
                    <TableCell align="left" >{Moment(name.createdAt).format('HH:mm DD/MM/YY')}</TableCell>
                    <TableCell align="left" >{name.onlyMain?"Quick":"Full"}</TableCell>
                    <TableCell align="left" >{name.percentSuccess==0? 'loading...': name.percentSuccess+'%'}</TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CheckLastUrl