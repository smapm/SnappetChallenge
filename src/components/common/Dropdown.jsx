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
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.selectedValue}
          label={props.label}
          onChange={(e) => props.onClickHandler(e.target.value)}
        >
          {props.list && props.list.map((val) => <MenuItem key={val} value={val}>{val}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
};

BasicSelect.propTypes = {
  label: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  list: PropTypes.array
};

export default BasicSelect;
