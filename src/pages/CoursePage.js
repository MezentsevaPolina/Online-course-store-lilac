import React from 'react';
import './styles/coursePage.css'
import {SHOP_ROUTE} from "../utils/consts";
import './styles/certificate.css'
import {NavLink} from "react-router-dom"; //для кнопки Назад
import MasterEx from "./example-certificate.jpg"

const CoursePage = () => {
    function FavouriteClick() {
        alert("Ура! Курс не был добавлен в избранное!")
    }
    function SendMessage() {
        alert("Ура! Сообщение не отправлено!")
    }
    return <>
        <div className="circle" style={{top: "-180px", left: "calc(50% - 25em)", position: "absolute"}}></div>
        <div className="radius" style={{top: "0"}}></div>
        <div className="circle" style={{top: "170%", left: "-10em", position: "absolute", width: "70em", height: "70em"}}></div>
        <div className="c_title"><NavLink to={SHOP_ROUTE} className="back">Назад</NavLink>"Название курса"</div>
        <button className="bt_fav" onClick={FavouriteClick}>добавить в избранное</button>
        <div className="c_title2">Описание курса в общих чертах текст текст текст текст
            текст текст текст текст м м  текст текст текст текст
            текст текст текст текст  текст текст текст текст  текст текст текст текст </div>
        <div className="crs_content_div">
            <h1 style={{color: "rgb(58, 11, 84)"}}>Содержание курса</h1>
            <label className="crs_content_text">Видеоуроки: <label className="count">5</label></label>
            <label className="crs_content_text">Чек-листы*: <label className="count">10</label></label>  <br/>
            <label className="crs_content_text">Мастер-классы: <label className="count">нет</label></label>
            <h1 style={{color: "rgb(58, 11, 84)"}}>Чему вы научитесь</h1>
            <ol role="list">
                <li>При этом для каждой книги будет доступна только одна версия текста.
                    Если вы хотите, чтобы в библиотеке были разные версии одного и того же текста, то вам нужно создать в т</li>
                <li>того же текста, то вам нужно создать в текстовом редакторе несколько версий этого текста, а затем поместить их в одну книгу.
                    Для этого нужно выполнить следующие действия.</li>
                <li>Я смотрел на нее, и у меня перехватило дыхание. Ее волосы были распущены
                    и падали ей на плечи. Она была так прекрасна. Но я помнил, что она сделала с моей ногой, и я не мог сказать ей ни слова.</li>
                <li>Я только смотрел на ее изящную ногу, которая лежала, перекинутая через мою ногу. Я не знал, как
                    мне поступить. Я был не в состоянии двинуться.</li>
            </ol>
        </div>
        <div className="crs_master_div">
            <h1 style={{color: "white"}}>Мастер:</h1>
            <img src={MasterEx} className="crs_img"/><label className="crs_content_text" style={{color: "white", marginLeft: "10px"}}>"Имя Фамилия мастера"</label>
            <h1 style={{color: "white"}}>Квалификация:</h1>
            <label className="crs_content_text" style={{color: "white", fontWeight: "bold"}}>"Квалификация мастера"</label>
            <h1 style={{color: "white"}}>Связаться со специалистом и получить бесплатную консультацию:</h1>
            <input className="the_input" type="text" placeholder="Имя"/> <br/>
            <input className="the_input" type="text" placeholder="Ваша Эл. почта"/> <br/>
            <textarea className="the_input" placeholder="Задайте вопрос" rows="5" cols="80" style={{width: "500px"}}>
            </textarea> <br/>
            <button className="bt_send" onClick={SendMessage}>Отправить</button>
        </div>
        <div className="crs_content_div_price">
            <h2 className="crs_content_title">Стоимость курса</h2>
        </div>
    </>
};

export default CoursePage;