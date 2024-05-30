const PregnancyGuideService = require('../services/pregnancy_guide.service');

class PregnancyGuideController { 
    getPregnancyGuideByWeek = async (req, res, next) => {
        const userId = req.params.userId
        try {
            const guides = await PregnancyGuideService.getByWeekUser(userId);
            res.status(200).json(guides).send();
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new PregnancyGuideController()