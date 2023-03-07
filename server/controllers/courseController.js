const {Course, CourseMaterials} = require("../models/models")
const ApiError = require('../errors/ApiErrors')
const uuid = require('uuid')
const path = require('path');

class CourseController{
    async create(req, res, next){
        try{
            const {name, description, price, categoryId, masterId, materials} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const course = await Course.create({name, description, price, categoryId, masterId, img: fileName});

            if (materials) {
                let materials = JSON.parse(materials)
                materials.forEach(i =>
                    CourseMaterials.create({
                        filename: i.filename,
                        title: i.title,
                        description: i.description,
                        courseId: course.id
                    })
                )
            }
            return res.json(course)

        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getAll(req, res){
        let {categoryId, masterId, limit, page} = req.query
        page = page || 1
        limit = limit || 20
        let offset = page * limit - limit
        let courses;
        if (!categoryId && !masterId){ //не указано ничего
            courses = await Course.findAndCountAll({limit, offset})
        }
        if (categoryId && !masterId){ //указана только категория
            courses = await Course.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if (!categoryId && masterId){ //указан только мастер
            courses = await Course.findAndCountAll({where:{masterId}, limit, offset})
        }
        if (categoryId && masterId){ //указано всё
            courses = await Course.findAndCountAll({where:{categoryId, masterId}, limit, offset})
        }
        return res.json(courses)
    }
    async getOne(req, res){
        const {id} = req.params
        const course = await Course.findOne(
            {where: {id}},
        )
        return res.json(course)
    }
}

module.exports = new CourseController()