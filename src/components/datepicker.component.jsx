import React, {useState} from 'react'
//import Datepicker from 'react-datepicker'
import 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

/*function Datepciker(){
    const [selectedDate, setSelectedDate]= useState(null)
    return(
        <div>
            <Datepciker 
            selected={selectedDate} 
            onchange={date=>setSelectedDate(date)} 
            dateformat="yyyy-MM-dd"
            maxdate={new Date()}
            isClearable
            showYearDropdown
            scrollableYearDropdown/>




            <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          showYearDropdown
        scrollableYearDropdown
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </div>
    )
}*/
function Datepick(){
    const [selectedDate, setSelectedDate]= useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };


    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
      }));
      const classes = useStyles();
    return(
        <div>
        
        <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="Birthday"
            type="date"
            selected={selectedDate}
            onchange={date=>setSelectedDate(date)} 
            dateformat="yyyy-MM-dd"
            maxdate={new Date()} 
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
        
        
        </div>
    )
}
export default Datepick