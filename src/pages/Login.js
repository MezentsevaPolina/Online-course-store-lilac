import React from 'react';
import {NavLink} from "react-router-dom";
import {REGISTRATION_ROUTE, USER_ROUTE} from "../utils/consts";
import "../components/styles/login.css"

const Login = () => {
    return <>
        <p className="g_title">Вход</p>
        <p className="g_title2">войдите в систему или <NavLink to={REGISTRATION_ROUTE} className="registration">Загеристрируйтесь!</NavLink>
        </p>
        <div className="login-form">
            <label>Логин:</label> <input type="text" /><br/>
            <label>Пароль:</label> <input type="password" /><br/>
        </div>
        <p style={{textAlign: "center"}}><NavLink to={USER_ROUTE} className="button__log">войти</NavLink></p>
    </>
};

export default Login;