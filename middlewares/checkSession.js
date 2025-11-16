

function requireAuth(req, res, next) {
  const authToken = req.cookies.token;
//   console.log(authToken);

  if (!authToken) {
    return res.status(401).json({ message: "Not authenticated" });
  }else{
    req.user=authToken;
  }

  next();
}

export default requireAuth;
