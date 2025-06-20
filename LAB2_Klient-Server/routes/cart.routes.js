var express = require('express');
var router = express.Router();
const data = require('../data/mydata');

function getCartProducts(kosarica) {
    const productsInCart = [];

    for (const [id, qty] of Object.entries(kosarica)) {
        if (qty > 0) {
            for (const category of data.categories) {
                const product = category.products.find(p => p.id == id);
                if (product) {
                    productsInCart.push({
                        id,
                        name: product.name,
                        image: product.image,
                        qty
                    });
                    break;
                }
            }
        }
    }

    return productsInCart;
}

router.get('/', function (req, res) {
    const kosarica = req.session.kosarica || {};
    const cartProducts = getCartProducts(kosarica);

    res.render('cart', {
        title: 'Cart | Matildas Spook Shop',
        cartProducts,
        isCart: true
    });
});

router.get('/getAll', function(req, res) {
    const cart = req.session.kosarica || {};
    const productsInCart = getCartProducts(cart);
    res.json(productsInCart);
});

router.post('/add/:id', function(req, res) {
    const id = req.params.id;

    if (!req.session.kosarica) req.session.kosarica = {};
    req.session.kosarica[id] = (req.session.kosarica[id] || 0) + 1;

    res.json({ 
        success: true,
        newQty: req.session.kosarica[id],
    });
});

router.post('/remove/:id', function(req, res) {
    const id = req.params.id;

    if (!req.session.kosarica) req.session.kosarica = {};
    if (req.session.kosarica[id]) {
        req.session.kosarica[id]--;
        if (req.session.kosarica[id] <= 0) delete req.session.kosarica[id];
    }

    res.json({ 
        success: true,
        newQty: req.session.kosarica[id] || 0, 
    });
});


module.exports = router;