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
                    rate
                </div>

                <NavLink to={COURSE_ROUTE} className="card__label">"Название курса"</NavLink>
            </div>
            <div className="card__bottom">
                <div className="card__prices">
                    <label className="card__price--common">Длительность: </label><br/>
                    <label className="card__price--discount">6 месяцев</label><br/>
                    <label className="card__price--common">Стоимость:</label><br/>
                    <label className="card__price--discount">3000р в месяц</label>
                </div>
                <button className="card__add">В избранное</button>
            </div>
        </div>
    );
};

export default CourseProduct;