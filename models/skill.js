const skills = [
    {id: 125223, skill: 'Debug', have: true},
    {id: 127904, skill: 'Code', have: false},
    {id: 139608, skill: 'Refactor', have: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }