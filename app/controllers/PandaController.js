/* global Example, VSError */

/**
 * WelcomeController.js
 */

module.exports = {
  get: (req, res) => {
    res.render('app/index.njk');

  },
};
