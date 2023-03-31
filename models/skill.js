const skills = [
    {id: 125223, skill: 'Debug', have: true},
    {id: 127904, skill: 'Code', have: false},
    {id: 139608, skill: 'Refactor', have: false}
  ];
	
  module.exports = {
    getAll,
    getOne,
    create
  };

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.have = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }