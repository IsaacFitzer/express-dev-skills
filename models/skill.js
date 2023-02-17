const skills = [
    {id: 14, skill: 'JavaScript'},
    {id: 12, skill: 'CSS'},
    {id: 13, skill: 'HTML'}
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find(skill => skill.id === Number(id))
}

function create(skill) {
    skill.id = Date.now() % 1000000
    skills.push(skill)
}

function deleteOne(id) {
    id = Number(id)
    skills.splice(skills.findIndex(skill => skill.id === id), 1)
}