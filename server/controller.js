module.exports = {
  getInventory: (req, res) => {
    const db = req.app.get("db");

    db.get_inventory()
      .then((products) => res.status(200).send(products))
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },

  createProduct: (req, res) => {
    const db = req.app.get("db");
    const { name, price, imgurl } = req.body;

    db.create_product([name, price, imgurl])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        res.status(500).send(err);
        console.log(err);
      });
  },
};
