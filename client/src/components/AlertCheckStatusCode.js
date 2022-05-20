import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import { toast } from 'react-toastify';

const AlertCheckStatusCode = ({handleCheckReload, reTest, followReTest}) => {

  const [open, setOpen] = React.useState(false);
  const [checkStatusName, setCheckStatusName] = React.useState('')
  const [checkStatusType, setCheckStatusType] = React.useState('')
  
  React.useEffect(() => {
    setCheckStatusName(reTest.test)
    setCheckStatusType(reTest.type)
  },[reTest])

  
  const handleChangeName = (event) => {
    setCheckStatusName(event.target.value)
  }

  const handleChangeType = (event) => {
    setCheckStatusType(event.target.value)
  }


  const handleSubmit = async () => {
    handleCheckReload({ name: checkStatusName, onlyMain: checkStatusType })
    handleClose()
    const {data : response} = await axios.post('/checkStatus/check', {
      name: checkStatusName,
      onlyMain: checkStatusType
    })
    // console.log(response)
    handleCheckReload({ name: checkStatusName, onlyMain: checkStatusType })
    
    toast(`🦄 Test ${checkStatusName} done`, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      });    
    
  }


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {followReTest? 'Re-Test': 'New Test' }
      </Button>
      <Dialog open={open} 
        onClose={handleClose}>
      <Stack sx={{ width: 360 }}>
        
        <DialogTitle id="alert-dialog-title">
          {"New Test"}
        </DialogTitle>
        <br/>
        <DialogContent>
          
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Test</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="name"
              value={checkStatusName}
              label="name"
              onChange={handleChangeName}
            >
              <MenuItem value="pmp">pmp</MenuItem>
              <MenuItem value="asvab">asvab</MenuItem>
              <MenuItem value="ged">ged</MenuItem>
              <MenuItem value="servsafe">servsafe</MenuItem>
              <MenuItem value="ptce">ptce</MenuItem>
              <MenuItem value="realestate">realestate</MenuItem>
              <MenuItem value="drivingtheory">drivingtheory</MenuItem>
              <MenuItem value="aws">aws</MenuItem>
              <MenuItem value="cna">cna</MenuItem>
              <MenuItem value="teas">teas</MenuItem>
              
            </Select>

          </FormControl>
        </Box>
        <br/>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="onlyMain"
              value={checkStatusType}
              label="onlyMain"
              onChange={handleChangeType}
            >
              <MenuItem value={true}>Quick</MenuItem>
              <MenuItem value={false}>Full</MenuItem>
              
            </Select>
            
          </FormControl>
        </Box>

        </DialogContent>
        <DialogActions>

            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>

        </DialogActions>
      </Stack>
      </Dialog>
    </div>
  );
}

export default AlertCheckStatusCode