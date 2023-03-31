 // Convention is to name the model in uppercase and singular
 const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
  };

function create(req, res) {
  Skill.create(req.body);
  res.redirect('/skills');
}

function newSkill(req, res) {
  res.render('skills/new', {title: 'New Skill'});
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skills Details'
    });
}

function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'All Skills'
    });
  }