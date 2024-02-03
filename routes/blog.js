var express = require('express');
var router = express.Router();

var articles = [
    {
        id: 1,
        title: 'My first article',
        body: 'How awesome is it to write articles!',
        author: 'abdellah'
    },
    {
        id: 2,
        title: 'My second article',
        body: 'Butterflies are rare and their presence has a meaning',
        author: 'georges'
    },
    {
        id: 3,
        title: 'My third article',
        body: 'Live is full of lessons',
        author: 'unknown'
    }
]

router.get('/', function (req, res) {
    res.render('blog', {
        'articles': articles
    })
})

router.get('/:id', function (req, res, next) {
    // ['id': 2, 'another': 'slug-kjkj']
    let id = req.params['id'];
    var singleArticle = [];
    

    articles.forEach((article, index, articles) => {
        if (article.id == id) {
            singleArticle = article
        }
    })

    res.render('blogitem', {
       'article': singleArticle
    })
})

module.exports = router;