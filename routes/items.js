const express = require('express')
const router = express.Router()
const axios = require('axios')
const _ = require('lodash')
const URI = 'https://hacker-news.firebaseio.com/v0/item/'
let topStoryIDs = getTopStoryIDs()

async function getTopStoryIDs() {
    let IDs = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
    topStoryIDs = await IDs.data
}

async function getItemWithID(itemID){
    const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${itemID}.json`)
    return response.data
}

router.get('/test', (req, res) => {
  axios.get('https://hacker-news.firebaseio.com/v0/item/192327.json?print=pretty')
        .then(result => res.send(result.data))
        .catch(err => {throw err})
})

router.get('/topstories/:page', (req, res) => {
    const page = Number(req.params.page)
    const lowerBracket = page * 12
    const upperBracket = (page + 1) * 12
    const stories = []
    
    const requestedStoriesIDs = _.slice(topStoryIDs, lowerBracket, upperBracket)
    requestedStoriesIDs.forEach(async (element) => {
        stories.push(await getItemWithID(element))
        if(_.compact(stories).length >= 12){
            return res.send(stories)
        }
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
        .then(result => res.send(result.data))
        .catch(err => {throw err})
})
module.exports = router;
