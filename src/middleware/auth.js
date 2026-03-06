const AUTH_TOKEN = process.env.API_TOKEN || 'dev-token';

function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token || token !== AUTH_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.authenticated = true;
  next();
}

module.exports = { authenticate };