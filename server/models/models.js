const sequelize = require('../db')

const {DataTypes} = require('sequelize')


const User = sequelize.define('user', { //пользователь
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    qualification: {type: DataTypes.STRING, defaultValue: "none"}
})

const Favourites = sequelize.define('favourites', { //избранное
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const FavouritesCourses = sequelize.define('favourites_courses', { //избранные курсы
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
})

const Course = sequelize.define('course', { //курс
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    price: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING}
})

const Category = sequelize.define('category', { //категория курса
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Master = sequelize.define('master', { //мастер (юзер с ролью мастер)
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "MASTER"},
    qualification: {type: DataTypes.STRING}
})

const Rating = sequelize.define('rating', { //рейтинг курса
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
})

const CourseMaterials = sequelize.define('course-materials', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    filename: {type: DataTypes.STRING, allowNull: false},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const CourseSkills = sequelize.define('course-skills', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false}
})

const MasterCategory = sequelize.define('master-category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true}
})

User.hasOne(Favourites)     //1 to 1
Favourites.belongsTo(User)

User.hasMany(Rating)    //1 to many
Rating.belongsTo(User)

Favourites.hasMany(FavouritesCourses)   //1 to many
FavouritesCourses.belongsTo(Favourites)

Course.hasOne(FavouritesCourses) //1 to 1
FavouritesCourses.belongsTo(Course)

Course.hasMany(Rating) //1 to many
Rating.belongsTo(Course)

Category.hasMany(Course)    //1 to many
Course.belongsTo(Category)

Master.hasMany(Course)  //1 to many
Course.belongsTo(Master)

Master.hasOne(MasterCategory)
MasterCategory.belongsTo(Master)

Category.hasOne(MasterCategory)
MasterCategory.belongsTo(Category)

module.exports = {
    User,
    Favourites,
    FavouritesCourses,
    Course,
    Rating,
    Category,
    Master,
    MasterCategory,
    CourseMaterials,
    CourseSkills
}