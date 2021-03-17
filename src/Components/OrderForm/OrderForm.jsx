import 'date-fns';
import { Button, Input, makeStyles, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import locale from 'date-fns/locale/ru'
import classes from './OrderForm.module.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputAdornment-positionEnd': {
            width: "auto !important"
        }
    }
}));


const OrderForm = (props) => {
    const material = useStyles();

    const { register, handleSubmit, watch, errors } = useForm();

    const [date, setDate] = useState(new Date());

    const handleDate = (date) => {
        setDate(date);
    }

    if (locale && locale.options) {
        locale.options.weekStartsOn = 1
    }

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form className={classes.main}>
            <div className={classes.inputsContainer}>
                <div className={classes.block}>
                    <h4>Контактные данные</h4>
                    <div className={classes.field}>
                        <TextField label="Ваше имя" variant="outlined" name="name" ref={register}/>
                    </div>
                    <div className={classes.field}>
                        <TextField label="Номер телефона" variant="outlined" name="phone" ref={register}/>
                    </div>
                </div>
                <div className={classes.block}>
                    <div className={classes.field}>
                        <TextField label="Марка и модель авто" variant="outlined" name="car" ref={register}/>
                    </div>
                <div className={classes.field}>
                        <TextField label="Эл. адрес" variant="outlined" name="email" ref={register}/>
                    </div>
                </div>
                <div className={classes.block}>
                    <h4>Дата и время</h4>
                    <div className={classes.field}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                name="date"
                                variant="dialog"
                                label="Дата"
                                format="dd/MM/yyyy"
                                minDate={new Date()}
                                value={date}
                                onChange={handleDate}
                                classes={material}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                
                            />
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className={classes.field}>
                        <TextField label="Время" type="time" InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300,
                        }}  name="time" ref={register}/>
                    </div>
                </div>
            </div>
            <Button className={classes.submit}>Записаться</Button>
        </form>
    );
}

export default OrderForm;