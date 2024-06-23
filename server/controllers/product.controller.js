import Product from '../models/product.model.js'
import extend from 'lodash/extend.js'


const add = async (req, res) => { 
const product = new Product(req.body) 
try {
await product.save()
return res.status(200).json({ 
message: "Successfully added product!"
})
} catch (err) {
return res.status(400).json({
error: err.message+"Error adding product"
})
} 
}


const list = async (req, res) => { 
try {
  //list product columns to display 
//let products = await Product.find().select('name updated created') 
let products = await Product.find();
console.log(products)
let qry=(req.query.name)
if (qry &&  qry.length > 0) {
  const subProductsArr = products.filter(str => str.name.toLowerCase().includes(qry.toLowerCase()))

 
  res.status(200).json(subProductsArr);
}else{
res.status(200).json(products)
}

} catch (err) {
return res.status(400).json({
error: err.message+"Error listing product"
})
} 
}


const productByID = async (req, res, next, id) => { 
try {
let product = await Product.findById(id) 
if (!product)
return res.status('400').json({ 
error: "product not found"
})
req.profile = product 
next()
} catch (err) {
return res.status('400').json({ 
error: "Could not retrieve product"
}) 
}
}


const read = (req, res) => {
   
        res.status(200).json(req.profile)
    
 
}


const update = async (req, res) => { 
try {
let product = req.profile
product = extend(product, req.body) 
product.updated = Date.now() 
await product.save()

res.status(200).json(product) 
} catch (err) {
return res.status(400).json({
error: "Could not update product"
})
} 
}


const remove = async (req, res) => { 
try {
let product = req.profile
let deletedproduct = await Product.deleteOne() 

res.json(deletedproduct) 
} catch (err) {
return res.status(400).json({
error: "Could not delete product"
})
} 
}


const removeall = async (req, res) => { 
    try {
    let product = req.profile
    let deletedproduct = await Product.deleteMany({}) 
    res.status(200).json({
        error: "All Products Deleted"
        })
    res.json(deletedproduct) 
    } catch (err) {
    return res.status(400).json({
    error: res.message+"Could not delete product"
    })
    } 
    }
export default { add, productByID, read, list, remove, removeall, update }
