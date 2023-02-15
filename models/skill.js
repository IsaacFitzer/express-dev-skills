const skills = [
    {id: 14, skill: 'JavaScript'},
    {id: 12, skill: 'CSS'},
    {id: 13, skill: 'HTML'}
]

module.exports = {
    getAll,
    getOne
}

function getAll() {
    return skills
}

function getOne(id) {
    return skills.find(skill => skill.id === Number(id))
}