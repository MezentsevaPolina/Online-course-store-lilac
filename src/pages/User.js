import React from 'react';
import Avatar from "./avatartest.bmp"
import './user.css'
import {NavLink} from "react-router-dom";
import {CERTIFICATE_ROUTE, FAVOURITES_ROUTE} from "../utils/consts";

const User = () => {
    function saveData() {
        alert("Поздравляем! Данные не сохранены!");
    }

    return <>
        <div className="title__div">
            <a className="user__title">Личный кабинет</a>
        </div>
        <div className="fio__div">
            <img className="avatar" src={Avatar}/><a>Фамилия Имя</a>
        </div>
        <div className="radius"></div>
        <div className="describe__data">
            <label>Фамилия</label><br/>
            <input type="text"/><br/>
            <label>Имя</label><br/>
            <input type="text"/><br/>
            <label>Дата рождения</label><br/>
            <input type="text"/><br/>
            <label>Телефон</label><br/>
            <input type="text"/><br/>
            <label>Город</label><br/>
            <input type="text"/><br/>
            <div>
                <input type="radio" name="rb" id="rb1" checked/> <label htmlFor="rb1">Женский</label>
            </div>

            <div>
                <input type="radio" name="rb" id="rb2"/> <label htmlFor="rb2">Мужской</label>
            </div>

            <button onClick={saveData} className="button__log">сохранить</button>
        </div>
        <div className="describe">
            <a className="contact_title">О себе</a><br/>
            <a className="contact_title2">Данные в Вашем профиле видны только Вам и мастеру.<br/>Вносите корректные данные, они будут отображаться в сертификате.</a>
        </div>
        <div className="menu">
            <p className="menu__btn"><NavLink to="/" >Текущие курсы</NavLink></p><br/>
            <p className="menu__btn"><NavLink to={FAVOURITES_ROUTE} >Избранные курсы</NavLink></p><br/>
            <p className="menu__btn"><NavLink to={CERTIFICATE_ROUTE} >Сертификаты</NavLink></p><br/>
            <p className="menu__btn"><NavLink to="/" >Все вебинары</NavLink></p><br/>
            <p className="menu__btn"><NavLink to="/" >Чек-листы</NavLink></p><br/>
            <p className="menu__btn"><NavLink to="/" >Мои курсы</NavLink></p><br/>
        </div>
    </>
};

export default User;