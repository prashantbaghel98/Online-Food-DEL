import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers; // Changed 'Token' to 'token' to match typical header casing
  if (!token) {
    return res.json({ success: false, message: "Not authorized, login again" }); // Added status code
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.error(error); // Changed console.log to console.error for better error logging
    res.json({ success: false, message: "Invalid token" }); // Added status code and more descriptive message
  }
};

export default authMiddleware;