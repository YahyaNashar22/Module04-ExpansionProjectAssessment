import Product from "../models/productModel.js";

export const createProduct = async (req, res) => {
  const { title, category, description, price, supplier } = req.body;
  try {
    const newProduct = await Product.create({
      title,
      category,
      description,
      price,
      supplier,
    });
    return res
      .status(200)
      .json({ message: "Product created successfully", product: newProduct });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "product could not be created" });
  }
};
//all products fetch
export const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    return res.status(200).json(allProducts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "cannot fetch products" });
  }
};
//single product fetch
export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({ where: { id } });
    res.status(200).json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Couldn't find product" });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const { title, category, description, price, supplier } = req.body;
  try {
    await Product.update(
      { title, category, description, price, supplier },
      {
        where: { id },
      }
    );
    return res.status(200).json({ message: "product updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Trouble updating product info" });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await Product.destroy({ where: { id } });
    res.status(200).json({ message: "product deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: " could not delete product" });
  }
};
