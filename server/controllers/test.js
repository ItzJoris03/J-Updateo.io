const Test = require('../models/test');

exports.getTest = async (req, res) => {
    try {
        const { id, email } = req.params;
        if (id || email) {
            const Test = id ? await Test.findById(id) : await Test.find({ email: email });
            res.json(Test);
        } else {
            const Test = await Test.find();
            res.json(Test);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};