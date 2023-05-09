const express=require("express")
const app = express();
const products=require("./foods.js")



app.get('/products', (req, res) => {
  res.json(products);
});


app.get('/products/highest-price', (req, res) => {
 
    
  let highestPriceProduct = products.reduce((maxProduct, currentProduct) => {
    return currentProduct.price > maxProduct.price ? currentProduct : maxProduct;
  });

  res.json(highestPriceProduct);
});


app.get('/products/total-price', (req, res) => {
  let totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  res.json({ total: totalPrice });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
