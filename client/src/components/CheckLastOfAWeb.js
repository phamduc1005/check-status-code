import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CheckLastOfAWeb = ({ check }) => {

    const colorWarning = ({ check }) => {
        let exact_style = null
        if (check.loadingTime > 3 || check.status >= 300)
        return exact_style={
            backgroundColor: '#ff0000'
        }
    }

    return (
        
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow style={{backgroundColor:'#cce6ff'}}>
                    <TableCell align="left">Link</TableCell>
                    <TableCell align="left">Loading&nbsp;Time&nbsp;(s)</TableCell>
                    <TableCell align="left">Status</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {check.map((check, index) => (
                <TableRow key={index} hover style={{...colorWarning({ check }), cursor: 'pointer'}} onClick={() => window.open(`${check.url}`)}>
                    <TableCell align="left">{check.url}</TableCell>
                    <TableCell align="center">{check.loadingTime}</TableCell>
                    <TableCell align="center">{check.status}</TableCell>
                </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CheckLastOfAWeb