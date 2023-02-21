import React from 'react';
import "../components/styles/cours-list.css"
import CourseNav from "./CourseNav";
import CourseProduct from "./CourseProduct";

const CourseList = () => {
    return <>
        <CourseNav/>
        <div className="cards">
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
            <CourseProduct/>
        </div>
    </>
};

export default CourseList;