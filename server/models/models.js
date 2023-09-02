const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('User',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    avatar: {type: DataTypes.STRING}
})


const Test = sequelize.define('Test',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    author_id: {type: DataTypes.INTEGER, unique: true},
})

const Question = sequelize.define('Question',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING},
    type: {type: DataTypes.ENUM('checkbox', 'radio-button', 'input'), allowNull: false},
    order: {type: DataTypes.INTEGER},
    test_id: {type: DataTypes.INTEGER}
})

const Answer = sequelize.define('Answer',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING},
    correct: {type: DataTypes.BOOLEAN},
    question_id: {type: DataTypes.INTEGER},
})

const Completed_test = sequelize.define('Completed_test',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER, unique: true},
    test_id: {type: DataTypes.INTEGER, unique: true},
    right: {type: DataTypes.INTEGER},//количество верных ответов
    wrong: {type: DataTypes.INTEGER},
})

const User_answers = sequelize.define('User_answers',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    user_id: {type: DataTypes.INTEGER, unique: true},
    answer_id: {type: DataTypes.INTEGER, unique: true},
    value: {type: DataTypes.INTEGER},
})

User.hasMany(Test, { foreignKey: 'author_id' });
Test.belongsTo(User, { foreignKey: 'author_id' });

Test.hasMany(Question, { foreignKey: 'test_id' });
Question.belongsTo(Test, { foreignKey: 'test_id' });

Question.hasMany(Answer, { foreignKey: 'question_id' });
Answer.belongsTo(Question, { foreignKey: 'question_id' });

Test.hasMany(Completed_test, { foreignKey: 'test_id' });
Completed_test.belongsTo(Test, { foreignKey: 'test_id' });

User.hasMany(Completed_test, { foreignKey: 'user_id' });
Completed_test.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(User_answers, { foreignKey: 'user_id' });
User_answers.belongsTo(User, { foreignKey: 'user_id' });

User_answers.belongsTo(Answer, { foreignKey: 'answer_id' });
Answer.hasMany(User_answers, { foreignKey: 'answer_id' });

module.exports = {
    User,
    Test,
    Question,
    Answer,
    Completed_test,
    User_answers
}



