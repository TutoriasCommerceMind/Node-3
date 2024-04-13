const Product = require("../models/productModel");

function getAllProducts(req, res) {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al obtener los productos");
    });
}

function createProduct(req, res) {
  const { name, price, description } = req.body;
  Product.create({ name, price, description })
    .then((newProduct) => res.json(newProduct))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al crear el producto");
    });
}

function deleteProduct(req, res) {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId)
    .then(() => res.send("Producto eliminado correctamente"))
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al eliminar el producto");
    });
}

function updateProduct(req, res) {
  const productId = req.params.id;
  const updatedProduct = req.body;
  Product.findByIdAndUpdate(productId, updatedProduct, {new:true})
    .then(product =>{
      if(!product){
        return res.status(404).send("Producto No encontrado")
      }
      res.json(product)
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error al actualizar el producto");
    });
}



module.exports={
    getAllProducts,
    createProduct,
    deleteProduct,
    updateProduct
}