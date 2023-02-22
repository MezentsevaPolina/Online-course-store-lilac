import React from 'react';
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import "../components/styles/login.css"

const Registration = () => {
    return <>
        <p className="g_title">Регистрация</p>
        <p style={{color: "darkred", letterSpacing: "2px", textAlign: "center"}}>* - обязательные поля</p>
        <div className="login-form" >
            <label>Фамилия: <input className="the_input" type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Имя: <input className="the_input" type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Email: <input className="the_input" type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Логин: <input className="the_input" type="text"/> <font color="#8b0000">*</font></label> <br/>
            <label>Пароль: <input className="the_input" type="password"/> <font color="#8b0000">*</font></label> <br/>
            <label>Повторите пароль: <input type="text"/> <font color="#8b0000">*</font></label> <br/>
        </div>
        <p style={{textAlign: "center"}}><NavLink to={SHOP_ROUTE} className="button__log">зарегистрироваться</NavLink></p>
    </>
};

export default Registration;