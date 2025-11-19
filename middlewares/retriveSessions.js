import { Chats } from "../models/models.js";

const retriveSessions = async (req, res, next) => {
  try {
    const sessions = await Chats.find({
      username: req.params.user,
      chatSession: req.body.chatSession,
    });
    req.data = sessions;
    next();
  } catch (err) {
    res.send(err);
  }
};

export default retriveSessions;
