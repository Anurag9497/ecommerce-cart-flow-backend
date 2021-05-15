import { Products } from '../models/productModel';


const productController = (req, res) => {
    Products.find({}, (err, data) => {
        if(err)
            res.status(500).json({messege: err});
        else if(data===null)
            res.status(404).json({messege: "Products not found"});
        else
            res.status(200).json(data);
    });
};

export default productController;