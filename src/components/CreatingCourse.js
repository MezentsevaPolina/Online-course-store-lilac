import React, {useContext, useState} from 'react';
import {NavLink} from "react-router-dom";
import {MASTER_ROUTE} from "../utils/consts";
import Img1 from "../pages/example-certificate.jpg";
import Img2 from "../pages/avatartest.bmp";
import Img3 from "../pages/example-certificate2.jpg";
import {Context} from "../index";

const CreatingCourse = () => {
    const {course} = useContext(Context)
    const [materials, setMaterials] = useState([])
    const [skills, setSkills] = useState([])
    const addMaterials = () =>{
        setMaterials([...materials, {filename: '', title: '', description: '', number: Date.now()}])
    }
    const removeMaterial = (number) =>{
        setMaterials(materials.filter(i => i.number !== number))
    }
    const addSkills = () =>{
        setSkills([...skills, {description: '', number: Date.now()}])
    }
    const removeSkill = (number) =>{
        setSkills(skills.filter(i => i.number !== number))
    }
    return <>
        <NavLink to={MASTER_ROUTE} className="back">Назад</NavLink>
            <h1 className="m_panel_title">Создайте свой курс!</h1>
        <div className="creating-panel">
            <label>Название:</label><input type="text"/> <br/>
            <label>Описание:</label><textarea/> <br/>
            <label>Выберите категорию:</label><br/>
            <div>
                {course.categories.map(category =>
                    <div style={{marginLeft: "50px"}}>
                        <input type="radio" name="rb" id={category.id}/>
                        <label
                            htmlFor={category.id}
                            onClick={() => course.setSelectedCategory(category)}
                            key={category.id}
                        >
                            {category.name}
                        </label>
                    </div>
                )}
            </div>
            <div className="line-div">
                <label>Опишите навыки, которые смогут приобрести ученики после прохождения курса:</label><br/>
                <button onClick={addSkills}>Добавить навык</button><br/>
                {skills.map(i =>
                    <div key={i.number}>
                        <input type="text" placeholder="Введите текст"/>
                        <button onClick={() => removeSkill(i.number)}>удалить</button>
                    </div>)
                }
            </div>

            <label>Длительность:</label><input type="text"/><br/>
            <label>Стоимость:</label><input type="text"/><br/>
            <label>Выберите изображение на фон карточки курса</label><br/>
            <div style={{marginLeft: "50px"}} className="images">
                <input type="radio" name="rb" id={Img1}/><label htmlFor={Img1}><img src={Img1} alt=""/></label>
                <input type="radio" name="rb" id={Img2}/><label htmlFor={Img2}><img src={Img2} alt=""/></label>
                <input type="radio" name="rb" id={Img3}/><label htmlFor={Img3}><img src={Img3} alt=""/></label> <br/>
            </div>
            <div className="line-div">
                <label>Добавьте фото, видео-материалы, файлы. Эти материалы будут доступны пользователям только после оплаты.</label><br/>
                <button onClick={addMaterials}>Добавить новый материал</button><br/>
                {materials.map(i =>
                    <div key={i.number}>
                        <input type="text" placeholder="Введите название"/><br/>
                        <input type="text" placeholder="Введите описание"/><br/>
                        <input type="file"/>
                        <button onClick={() => removeMaterial(i.number)}>удалить</button>
                    </div>)
                }
            </div>

            <button style={{margin: "0 auto", display: "block"}}>Создать</button>
        </div>

    </>
};

export default CreatingCourse;