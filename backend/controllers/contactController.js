import Contact from '../models/contactModel.js';

const handleContact = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const contactMessage = new Contact({ name, email, message });
        await contactMessage.save();
        return res.status(200).json({ message: "Your message is successfully sent!", contactMessage });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

export { handleContact };