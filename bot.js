const config = require('./config')
const twit = require('twit')
const T = new twit(config)

// RETWEET BOT ==========================
// find latest tweet according the query 'q' in params
function retweet() {
    let params = {
        q: '#animalcrossing OR (Animal Crossing)',
        result_type: 'mixed',
        count: 2
    }
    T.get('search/tweets', params, (err, data, response) => {
        let tweets = data.statuses
        if (!err) {
            for (let dat of tweets) {
                let retweetId = dat.id_str;
                T.post('statuses/retweet/:id', {id: retweetId}, (err, response) => {
                    if (response)
                        console.log('Retweeted!' + retweetId)
                    if (err)
                        console.log('Something went wrong while Retweeting...duplication, maybe?')
    
                })
            }
        }
    })
}
retweet();
setInterval(retweet, 900000);

// FAVORITE BOT ==========================
// find a random tweet and 'favorite' it
function favoriteTweet() {
    let params = {
        q: '#animalcrossing OR (Animal Crossing)',
        result_type: 'recent',
        lang: 'en',
        count: 2
    }
    T.get('search/tweets', params, (err, data, response) => {
        let fbottweets = data.statuses
        let randomfbottweet = ranDom(fbottweets)
        if (typeof randomfbottweet != err) {
            T.post('favorites/create', {id: randomfbottweet.id_str}, (err, response) => {
            if (response) {
                console.log('Successfully favorited tweet')
            }
            if (err)
                console.log('Error: Unable to favorite tweet')
            })
        }
    })
}
favoriteTweet();
setInterval(favoriteTweet, 900000);

// function to generate a random tweet
function ranDom (arr) {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

//MUSIC BOT ==========================
//tweet a song on the hour every hour from selection (ie: randomly between two set songs at 1 pm, three set songs at 4pm, etc.)

