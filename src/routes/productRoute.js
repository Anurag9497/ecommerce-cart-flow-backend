import productController from '../controllers/productController';


export const productRoute = (app) => {
    app.route('/products')
        .get(productController);
}