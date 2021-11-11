import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Plugin } from '@devexpress/dx-react-core';
import { withStyles } from '@material-ui/core/styles';
// Material-UI: The `fade` color utility was renamed to `alpha` to better describe its functionality.
// You should use `import { alpha } from '@material-ui/core/styles'
// https://github.com/mui-org/material-ui-pickers/issues/2200
import { Stack, Animation } from '@devexpress/dx-react-chart';
import PropTypes from 'prop-types';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);

const BarChart = (props) => {
 
  if(!props.data.length){
    return <h1>Please select a student ID</h1>;
  }
  return (
    <Paper>
      <Chart
        data={props.data}
      >
        <ArgumentAxis />
        <ValueAxis />
        <Plugin name="ser">
          <BarSeries
            name="Correct"
            valueField="correct"
            argumentField="subject"
            color="#34a3d7"
          />
          <BarSeries
            name="InCorrect"
            valueField="incorrect"
            argumentField="subject"
            color="#c0c0c0"
          />
        </Plugin>
        <Animation />
        <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
        <Title text="Student Results" />
        <Stack />
      </Chart>
    </Paper>
  );
};

BarChart.propTypes = {
  data: PropTypes.array,
};

export default BarChart;
