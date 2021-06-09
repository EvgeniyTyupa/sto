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
import { connect } from 'react-redux';
import { makeOrder } from '../../Redux/commonReducer';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInputAdornment-positionEnd': {
            width: "auto !important"
        },
        '& label.Mui-focused': {
            color: '#35AAF9 !important'
        },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#35AAF9 !important' 
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottom: '2px solid #35AAF9 !important'
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: '0 !important'
        },
        '& .MuiInput-underline:after': {
            borderBottom: '2px solid #35AAF9 !important'
        }
    }
}));


const OrderForm = (props) => {
    const material = useStyles();

    const { register, handleSubmit, watch, reset, errors } = useForm();

    const [date, setDate] = useState(new Date());

    const handleDate = (date) => {
        setDate(date);
    }

    if (locale && locale.options) {
        locale.options.weekStartsOn = 1
    }

    const onSubmit = (data, e) => {
        data.date = date;
        props.makeOrder(data);
        e.target.reset();
    }

    return(
        <form className={classes.main} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.inputsContainer}>
                <div className={classes.block}>
                    <h4>Контактные данные</h4>
                    <div className={classes.field}>
                        <TextField classes={material} error={errors.name ? true : false} label="Ваше имя*" variant="outlined" name="name" inputRef={register({required: true})}/>
                    </div>
                    <div className={classes.field}>
                        <TextField classes={material} error={errors.phone ? true : false} label="Номер телефона*" variant="outlined" name="phone" inputRef={register({required: true})}/>
                    </div>
                </div>
                <div className={classes.block}>
                    <div className={classes.field}>
                        <TextField classes={material} label="Марка и модель авто" variant="outlined" name="auto" inputRef={register}/>
                    </div>
                    <div className={classes.field}>
                        <TextField classes={material} error={errors.email ? true : false} label="Эл. адрес*" variant="outlined" name="email" inputRef={register({required: true})}/>
                    </div>
                </div>
                <div className={classes.block}>
                    <h4>Дата и время</h4>
                    <div className={classes.field}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locale} classes={material}>
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
                        <TextField classes={material} label="Время" type="time" InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300,
                        }}  name="time" inputRef={register}/>
                    </div>
                </div>
            </div>
            <div className={classes.field + " " + classes.textarea}>
                <TextField inputRef={register} multiline rows={5} name="message" label="Ваше сообщение" variant="outlined" classes={material}/>
            </div>
            <Button className={classes.submit} type="submit">Записаться</Button>
        </form>
    );
}

export default connect(null, {makeOrder})(OrderForm);