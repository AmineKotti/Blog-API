const db = require('../util/database')

module.exports = class post {
    constructor(id,text,date)
    {
        this.id = id,
        this.text = text,
        this.date = date
    }
}