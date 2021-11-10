import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const BasicSelect = (props) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Date</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedDate}
          label="Date"
          onChange={(e) => props.setSelectedDate(e.target.value)}
        >
          {props.dates && props.dates.map((val) => <MenuItem key={val} value={val}>{val}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
};

BasicSelect.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  setSelectedDate: PropTypes.func.isRequired,
  dates: PropTypes.array
};

export default BasicSelect;
