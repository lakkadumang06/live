var user_model = require('../model/usermodel');

exports.insert = async (req, res) => {
    var data = await user_model.create(req.body);

    res.status(200).json({
        data
    })
}

exports.get_data = async (req, res) => {
    var data = await user_model.find();

    res.status(200).json({
        data
    })
}