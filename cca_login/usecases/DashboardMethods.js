
//dashboard method
/**
 * This function will return the welcome message
 * @param {*} req 
 * @param {*} res 
 */
exports.Dashboard = (req, res) => {
     res.status(400).json({
        message: 'Welcome to learning!'
      });
    }