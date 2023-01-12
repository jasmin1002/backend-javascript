const data = require("../data");

module.exports = {
  getHome(req, res) {
    const query = req.query;
    res.json(data);
  },
  getAbout(req, res) {
    res.send("<h1>About us</h1>");
  },
  getProduct(req, res) {
    res.json(req.params);
  },
  postPeople(req, res) {
    console.log(req.body);
    res.status(201).send([...data, req.body]);
  },
};
