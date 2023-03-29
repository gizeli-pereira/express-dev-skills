const skills = [
    {id: 125223, skill: 'Debug', done: true},
    {id: 127904, skill: 'Code', done: false},
    {id: 139608, skill: 'Refactor', done: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return skills;
  }