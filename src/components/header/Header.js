import React, {useContext} from 'react';
import {Context} from "../../index";
import "./header.css"
import {NavLink} from "react-router-dom";
import {CONTACT_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, USER_ROUTE} from "../../utils/consts"
import Mainlogo from "./logo.bmp";
import {observer} from "mobx-react-lite";


const Header = observer(() => {
    const {user} = useContext(Context)
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
    window.onclick = function(e) {
        if (!e.target.matches('.dropbtn')) {
            let myDropdown = document.getElementById("myDropdown");
            if (myDropdown.classList.contains('show')) {
                myDropdown.classList.remove('show');
            }
        }
    }
    const {course} = useContext(Context)
    return (
        <div className="header">
                <div className="header__preview">
                    <img className="header__logo" src={Mainlogo}/>
                    <NavLink to={SHOP_ROUTE} className="header__title">Lilac</NavLink>
                </div>
                <div className="header__navigation">
                    <div className="dropdown">
                        <button onClick={myFunction} className="dropbtn">Курсы</button>
                        <div className="dropdown-content" id="myDropdown">
                            {course.categories.map(category =>
                                <a
                                    onClick={() => course.setSelectedCategory(category)}
                                    key={category.id}
                                >
                                    {category.name}
                                </a>
                            )}
                        </div>
                    </div>
                    <NavLink to={CONTACT_ROUTE} className="butheader">Контакты</NavLink>
                    {user.isAuth ?
                        <NavLink to={USER_ROUTE} className="butheader">"Ава"</NavLink>
                        :
                        <NavLink to={LOGIN_ROUTE} className="butheader">Войти</NavLink>
                    }
                </div>

        </div>
    );
});

export default Header;