const {User_answers} = require('../models/models')

class answersController {

    async answerHandler(req, res) {
        try {
            const { answer } = req.body;
            const userId = req.user.id;
            const testId = req.params.test_id;

            const userAnswer = await User_answers.create({
                userId: userId,
                testId: testId,
                answer: answer
            });

            return res.json(userAnswer);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to process user answer' });
        }
    }


    async getUserAnswersByTestId(req, res) {
        try {
            const userId = req.user.id;
            const testId = req.params.test_id;

            const userAnswers = await User_answers.findAll({
                where: {
                    userId: userId,
                    testId: testId
                }
            });

            return res.json(userAnswers);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to retrieve user answers' });
        }
    }

}

module.exports = new answersController()

