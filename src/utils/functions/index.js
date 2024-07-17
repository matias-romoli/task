export function auth(req, res, next) {
  let { task } = req.body;

  if (task.trim() === "") {
    res.status(500).json("Fields cannot be empty.");
  } else {
    next();
  }
}
