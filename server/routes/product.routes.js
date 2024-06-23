import express from 'express'
 import productCtrl from './../controllers/product.controller.js' 
 const router = express.Router()
router.route('/api/products').post(productCtrl.add)
 router.route('/api/products').get(productCtrl.list)
router.param('productId', productCtrl.productByID)
 router.route('/api/products/:productId').get(productCtrl.read)
router.route('/api/products/:productId').put(productCtrl.update)
router.route('/api/products/:productId').delete(productCtrl.remove)
router.route('/api/products').delete(productCtrl.removeall)
 export default router
