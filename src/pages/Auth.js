import React, {useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE} from "../utils/consts";
import "../components/styles/login.css"
import user from "./User";
import {login, registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    let [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        if (isLogin){
            const response = await login();
        } else{
            const response = await registration(name, email, password);
            console.log(response)
        }
    }

    return <>
        <p className="g_title">{isLogin ? "Вход": "Регистрация"}</p>
        {isLogin ?
            <p
                className="g_title2">войдите в систему или <NavLink to={REGISTRATION_ROUTE} className="registration">Загеристрируйтесь!</NavLink>
            </p>
            :
            <p
                className="g_title2">есть аккаунт? <NavLink to={LOGIN_ROUTE} className="registration">Войдите!</NavLink>
                <p style={{color: "darkred", letterSpacing: "2px", textAlign: "center"}}>* - обязательные поля</p>
            </p>
        }
        {isLogin ?
        <div className="login-form">
            <label>Email:</label><input className="the_input" type="text" /><br/>
            <label>Пароль:</label> <input className="the_input" type="password" /><br/>
        </div>
            :
            <div className="login-form">
                <label>Фамилия Имя:
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="the_input" type="text"/>
                    <font color="#8b0000">*</font></label> <br/>
                <label>Email:
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="the_input" type="text"/>
                    <font color="#8b0000">*</font></label> <br/>
                <label>Пароль:
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="the_input" type="password"/>
                    <font color="#8b0000">*</font></label> <br/>
                <label>Повторите пароль: <input className="the_input" type="password"/> <font color="#8b0000">*</font></label> <br/>
            </div>
        }
        <p style={{textAlign: "center"}}><button onClick={signIn} className="button__log">{isLogin ? "войти" : "зарегистрироваться"}</button></p>
    </>
};

export default Auth;