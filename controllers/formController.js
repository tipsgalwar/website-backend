const FormData = require("../models/FormData");

exports.submitForm = async (req, res) => {
  try {
    const { name, email, number, qualification, subject, message } = req.body;

    const newForm = new FormData({
      name,
      email,
      number,
      qualification,
      subject,
      message,
    });
    await newForm.save();

    res.status(201).json({ message: "✅ Form submitted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "❌ Error submitting form", details: error.message });
  }
};
