const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const authHeader = req.header("Authorization");
//     if (!authHeader)
//         return res.status(401).json({ message: "Access Denied. No token provided" });

//     const token = authHeader.split(" ")[1]; // remove "Bearer"

//     if (!token)
//         return res.status(401).json({ message: "Access Denied. No token provided" });

//     try {
//         const decoded = jwt.verify(token, "securitykey");
//         req.user = decoded;
//         next();
//     } catch (err) {
//         res.status(400).json({ message: "Invalid token!" });
//     }
// };

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ "message": "Access Denied. No token provided"});

    try {
        const decoded = jwt.verify(token, "securitykey");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({message: "Invalid token!"});
    }
}

module.exports = authMiddleware;