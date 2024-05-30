const cron = require('node-cron');
const PregnancyService = require('../services/pregnancy.service')
cron.schedule('0 0 * * 0', async () => { // Chạy mỗi chủ nhật
    await PregnancyService.updateWeeks();
  });