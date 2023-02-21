import React from 'react';
import ProductImage from "../components/styles/example.jpg"
import {NavLink} from "react-router-dom";
import "../components/styles/cours-list.css"
import "../components/styles/product-card.css"
import {COURSE_ROUTE} from "../utils/consts";

const CourseProduct = () => {
    return (
        <div className="card">
            <div className="card__top">
                <a href="#" className="card__image">
                    <img
                        src={ProductImage}
                    />
                </a>
                <div className="card__favor">
                    <div id="heart" className="heart"></div>
                </div>

                <NavLink to={COURSE_ROUTE} className="card__label">Название курса cfeabjkbkjabcjkbab hahdbah</NavLink>
            </div>
            <div className="card__bottom">
                Краткое описание ljfwsjvjks jkshdjs hsijhsdjbv afhkhgoejhrpo fjkvjwsbh ghuregheruj uhgiughur
                <div className="card__prices">
                    <label className="card__price--common">Длительность - <label className="card__price--discount">6 месяцев</label></label><br/>
                    <div className="card__price--common">Стоимость - <label className="card__price--discount">3000р в месяц</label></div>
                </div>
                <button className="card__add">В избранное</button>
            </div>
        </div>
    );
};

export default CourseProduct;