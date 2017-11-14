var express = require('express')
var router = express.Router()
var axios = require('axios')

/* GET dummy data. */
router.get('/dummyData', function(req, res, next) {
  //res.send('respond with a resource');
  res.send({
        "data": [
            {
                "desc": "In-Browser Find and Replace with RegEx Previews",
                "date": "1510535202",
                "author": "dalimil_",
                "title": "google.com",
                "votes": "1",
                "comments": "0",
                "link": "https://chrome.google.com/webstore/detail/find-replace-for-text-edi/jajhdmnpiocpbpnlpejbgmpijgmoknnl",
                "id": "15683525",
                "tags": "library,web,development"
            }
        ]  
  })
})

router.get('/test', (req, res, next) => {
  axios.get('https://hacker-news.firebaseio.com/v0/item/192327.json')
        .then(result => res.send(result.data))
})

module.exports = router;
