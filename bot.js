require('dotenv').config()
import config from './config';
import twit from 'twit';
const T = new twit(config)

var twelveAM = ["https://www.youtube.com/watch?v=odZ-OV8JWNk", "https://www.youtube.com/watch?v=OW36kFCHdQ4", "https://www.youtube.com/watch?v=yMsEExr7rOg", "https://www.youtube.com/watch?v=hyIPaz3UJAI",
            "https://www.youtube.com/watch?v=WupCh29HCcE", "https://www.youtube.com/watch?v=mjxwRmAlotA", "https://www.youtube.com/watch?v=EAQkNFuyk38", "https://www.youtube.com/watch?v=9Wi-hrlBvw8",
            "https://www.youtube.com/watch?v=wyDjBEZR-0Q", "https://www.youtube.com/watch?v=6BtFOUrKGg4"],
    oneAM = ["https://www.youtube.com/watch?v=I9j_PrSn38A", "https://www.youtube.com/watch?v=ogZOuyEUaqM", "https://www.youtube.com/watch?v=zriYPJvR45s", "https://www.youtube.com/watch?v=kFSTf-q9qX4",
            "https://www.youtube.com/watch?v=KrkwWLV2Mx0", "https://www.youtube.com/watch?v=bKufdewCtwE"],
    twoAM = ["https://www.youtube.com/watch?v=J36o0MZ7EzU", "https://www.youtube.com/watch?v=YsDM3UvXWOc", "https://www.youtube.com/watch?v=8Q2m0Sl3uyc", "https://www.youtube.com/watch?v=6ctYQ2giDfw",
            "https://www.youtube.com/watch?v=8R-di42uSJk", "https://www.youtube.com/watch?v=clXbS9JOVmY", "https://www.youtube.com/watch?v=4nljMtjB35o", "https://www.youtube.com/watch?v=JhlHbaeQqQs",
            "https://www.youtube.com/watch?v=POsoMkYfh_k"],
    threeAM = ["https://www.youtube.com/watch?v=Otx87vJ4M1Y", "https://www.youtube.com/watch?v=zXcpYHhiQZk", "https://www.youtube.com/watch?v=gWH27B8TPDA",
            "https://www.youtube.com/watch?v=pBwH77-DCmk", "https://www.youtube.com/watch?v=APXXkeoUDtQ", "https://youtu.be/l8a7xJokAG0", "https://youtu.be/DI-o7wXyrME"],
    fourAM = ["https://www.youtube.com/watch?v=yL2diojhue8", "https://www.youtube.com/watch?v=of877S78m5k", "https://www.youtube.com/watch?v=q4TndIe-648", "https://www.youtube.com/watch?v=OZgsTxyKo7s",
            "https://www.youtube.com/watch?v=hAIjx6jVe8E", "https://www.youtube.com/watch?v=tc453B3c83k", "https://www.youtube.com/watch?v=8XqSkFy8VH8", "https://www.youtube.com/watch?v=9hwV6TFqaFo",
            "https://www.youtube.com/watch?v=sSfz3K6CCbI", "https://www.youtube.com/watch?v=_4O9IflKQCs", "https://www.youtube.com/watch?v=pKMDvMb11bc", "https://www.youtube.com/watch?v=sfV0EYwum3U"],
    fiveAM = ["https://www.youtube.com/watch?v=XH6IXiXU8Eo", "https://www.youtube.com/watch?v=SY69KnqL8DE", "https://www.youtube.com/watch?v=ZZk2CyGgbR0", "https://www.youtube.com/watch?v=_kR5GtsvU18",
            "https://www.youtube.com/watch?v=ptNHL_v1BLI", "https://www.youtube.com/watch?v=MR2O7jPvAbE", "https://www.youtube.com/watch?v=SZiFIY7Lj8Q"],
    sixAM = ["https://www.youtube.com/watch?v=gSO3-wVsrOU", "https://www.youtube.com/watch?v=mai8_WOgWnY", "https://www.youtube.com/watch?v=3DdlJCXm7Vw", "https://www.youtube.com/watch?v=tnlpjqXHQnI",
            "https://www.youtube.com/watch?v=QTZ3-oLu7cw", "https://www.youtube.com/watch?v=sVFaQEHLndk", "https://www.youtube.com/watch?v=qam0fpp085w", "https://www.youtube.com/watch?v=uhOM5j7FH2I",
            "https://www.youtube.com/watch?v=bY7Td498Czk", "https://www.youtube.com/watch?v=G7UhL1OBJ3c"],
    sevenAM = ["https://www.youtube.com/watch?v=WA-iIVYYqsI", "https://www.youtube.com/watch?v=kXvpdzYzyiU", "https://www.youtube.com/watch?v=DHskPDrg-fQ", "https://www.youtube.com/watch?v=jv2J68QWlcI",
            "https://www.youtube.com/watch?v=d3d7DdKBSrM", "https://www.youtube.com/watch?v=Cpeapou7YLA", "https://www.youtube.com/watch?v=WNxuUuoi8hY", "https://www.youtube.com/watch?v=vMF5LRSIM8s",
            "https://www.youtube.com/watch?v=W6QqFwPUajQ", "https://www.youtube.com/watch?v=XyNU5UMx37g", "https://www.youtube.com/watch?v=qNcu_xyubsw"],
    eightAM = ["https://www.youtube.com/watch?v=fYSMZpiF7sA", "https://www.youtube.com/watch?v=r7Ncy-yY9Uw", "https://www.youtube.com/watch?v=e5h_KM1kXgw", "https://www.youtube.com/watch?v=qJcIHbjCDrg",
            "https://www.youtube.com/watch?v=S5Ea0zppkcQ", "https://www.youtube.com/watch?v=hCX7W3-8s2w", "https://www.youtube.com/watch?v=IXMLGzS9Ohs", "https://www.youtube.com/watch?v=7GgKERsVVbA"],
    nineAM = ["https://www.youtube.com/watch?v=JDQu0rr7gEo", "https://www.youtube.com/watch?v=e1qKdkDeDoc", "https://www.youtube.com/watch?v=cZRzK3g5oi4", "https://www.youtube.com/watch?v=qRAt72y7Dl0",
            "https://www.youtube.com/watch?v=cdB3harSmZ8", "https://www.youtube.com/watch?v=dmlYmH16-CE", "https://www.youtube.com/watch?v=ExuCkYPnvZs", "https://www.youtube.com/watch?v=hi_XeWdcLjk",
            "https://www.youtube.com/watch?v=3Feoqjd9GQA", "https://www.youtube.com/watch?v=CcXxs6VgcMQ"],
    tenAM = ["https://www.youtube.com/watch?v=GAHD10BeSqM", "https://www.youtube.com/watch?v=B20O58ceYko", "https://www.youtube.com/watch?v=BtxRvNYYUUo", "https://www.youtube.com/watch?v=KvTavWs70Uw",
            "https://www.youtube.com/watch?v=L_I9eUkI8W0", "https://www.youtube.com/watch?v=b6TYdg75_lU", "https://www.youtube.com/watch?v=-vV_JKMNxmU", "https://www.youtube.com/watch?v=tdtx7umvsNM",
            "https://www.youtube.com/watch?v=V4GT9MI7K4s", "https://www.youtube.com/watch?v=1deYpZqVRf0"],
    elevenAM = ["https://www.youtube.com/watch?v=roj0iqA1X7o", "https://www.youtube.com/watch?v=ONKmAo8KsGk", "https://www.youtube.com/watch?v=1ZXwbqjoHQ8", "https://www.youtube.com/watch?v=gOZPm1YT198",
            "https://www.youtube.com/watch?v=kt8SZNjQ4D4", "https://www.youtube.com/watch?v=v3R5G4-cjBQ", "https://www.youtube.com/watch?v=kesNrruFYps", "https://www.youtube.com/watch?v=QmUHk4B5OsM",
            "https://www.youtube.com/watch?v=QinlRFYIw7A", "https://www.youtube.com/watch?v=DsL-HnICHDU"],
    twelvePM = ["https://www.youtube.com/watch?v=xs4FJOvLPC8", "https://www.youtube.com/watch?v=6QgNRFuRQUs", "https://www.youtube.com/watch?v=kginZ7__1aE", "https://www.youtube.com/watch?v=YG6uJCJ8V_g",
            "https://www.youtube.com/watch?v=ZOMo962Xuyg", "https://www.youtube.com/watch?v=XSuREX7PNjI", "https://www.youtube.com/watch?v=yW0_IuEMw5o", "https://www.youtube.com/watch?v=GJLz6rje4C0",
            "https://www.youtube.com/watch?v=4zOmn_cA3ZM", "https://www.youtube.com/watch?v=CfoUfyB2cvU"],
    onePM = ["https://www.youtube.com/watch?v=bskJpsmSzQo", "https://www.youtube.com/watch?v=JkHgU_O6f64", "https://www.youtube.com/watch?v=WGCPde7TbRk", "https://www.youtube.com/watch?v=EsYCK6U3dNw",
            "https://www.youtube.com/watch?v=QH8ICY7-qvg", "https://www.youtube.com/watch?v=nBZYhlcl9Ng", "https://www.youtube.com/watch?v=cZjJ8hb422g", "https://www.youtube.com/watch?v=11lvuMIoCoM", 
            "https://youtu.be/bskJpsmSzQo", "https://youtu.be/W6QqFwPUajQ", "https://www.youtube.com/watch?v=ARGTb-R0X8o", "https://youtu.be/h-FrucQUEko", "https://www.youtube.com/watch?v=cWd7SfZk4bo"],
    twoPM = ["https://www.youtube.com/watch?v=dIWlztcYiJg", "https://www.youtube.com/watch?v=HgETcBBLdTk", "https://www.youtube.com/watch?v=yQicvIsa8W8", "https://www.youtube.com/watch?v=H3eVurFyHvM",
            "https://www.youtube.com/watch?v=u-bmQy-xi_I", "https://www.youtube.com/watch?v=vGL9SQ2e6FY", "https://www.youtube.com/watch?v=9-Sc4WYbRbQ", "https://www.youtube.com/watch?v=yK2Bj-9odNU",
            "https://www.youtube.com/watch?v=oGqMuMBYPn8", "https://www.youtube.com/watch?v=NUkrBBW6bDw", "https://www.youtube.com/watch?v=2JljMWUHDvA"],
    threePM = ["https://www.youtube.com/watch?v=D2TFSxMn-mc", "https://www.youtube.com/watch?v=6bWilabrMFw", "https://www.youtube.com/watch?v=WalIFXKCmHU", "https://www.youtube.com/watch?v=OJbLmWQGBRs",
            "https://www.youtube.com/watch?v=Jr0nWQkyZb0", "https://www.youtube.com/watch?v=9sF-9m-jThI", "https://www.youtube.com/watch?v=fyiz0DJgdcc", "https://www.youtube.com/watch?v=Oe7g-tXGC1A",
            "https://www.youtube.com/watch?v=EK7bycJnOgs", "https://www.youtube.com/watch?v=wpMQ97bsWm8"],
    fourPM = ["https://www.youtube.com/watch?v=Dlx9Kqg7u4Y", "https://www.youtube.com/watch?v=jK7wl38aGao", "https://www.youtube.com/watch?v=N5Xx8r2uTLI", "https://www.youtube.com/watch?v=5nqWwV2kn7Y",
            "https://www.youtube.com/watch?v=y8Dq0BNW6OI", "https://www.youtube.com/watch?v=Y-UJ-U-p-2A", "https://www.youtube.com/watch?v=7kuDFhYTSVU", "https://www.youtube.com/watch?v=0tcnIFDfFMQ",
            "https://www.youtube.com/watch?v=gCx37g-phz8", "https://www.youtube.com/watch?v=-syx8bt-g28", "https://www.youtube.com/watch?v=NGuhqFOEJVo"],
    fivePM = ["https://www.youtube.com/watch?v=tF5sm6TBXhg", "https://www.youtube.com/watch?v=uLtJIPu-Cns", "https://www.youtube.com/watch?v=37UjXU-3wZ8", "https://www.youtube.com/watch?v=ZTvNX1R5QlU",
            "https://www.youtube.com/watch?v=MWh6gWwd2jg", "https://www.youtube.com/watch?v=AOnxBYHV_Ss", "https://www.youtube.com/watch?v=91MqtzILmH0", "https://www.youtube.com/watch?v=vuBkK6fUF3o",
            "https://www.youtube.com/watch?v=-av4biImVFs", "https://www.youtube.com/watch?v=fFw_wD4evpw", "https://www.youtube.com/watch?v=-ohNImH7BkA"],
    sixPM = ["https://www.youtube.com/watch?v=sDSOT1LaNhU", "https://www.youtube.com/watch?v=37F1qzbtDnA", "https://www.youtube.com/watch?v=5QJaWg5fOAo", "https://www.youtube.com/watch?v=_BWBmLuVCMo",
            "https://www.youtube.com/watch?v=Fl1LPznGCn4", "https://www.youtube.com/watch?v=IZswtflfWlY", "https://www.youtube.com/watch?v=zh5lr98K9z0", "https://www.youtube.com/watch?v=rck-hUGCTpo",
            "https://www.youtube.com/watch?v=xot-bc4gYc0", "https://www.youtube.com/watch?v=aAe9NJs9I8s", "https://www.youtube.com/watch?v=Qyyxr6roepw"],
    sevenPM = ["https://www.youtube.com/watch?v=qYhA2QqFDS8", "https://www.youtube.com/watch?v=q5FFPzAX-Jg", "https://www.youtube.com/watch?v=pSm8QMT6gG0", "https://www.youtube.com/watch?v=JpCmXXgaNzU",
            "https://www.youtube.com/watch?v=BD3lqQ9-8Ig", "https://www.youtube.com/watch?v=PZ6d58oZg1E", "https://www.youtube.com/watch?v=Z0kgYx93FAU", "https://www.youtube.com/watch?v=jb5cPNtZNxA",
            "https://www.youtube.com/watch?v=lKCl9xoKb50", "https://www.youtube.com/watch?v=WNpoyWrElGc", "https://www.youtube.com/watch?v=NfnAg-2AVTs", "https://www.youtube.com/watch?v=HzKjWnZx9zo",
            "https://www.youtube.com/watch?v=st-YcWnuwA4"],
    eightPM = ["https://www.youtube.com/watch?v=eZ8lmEQO8ks", "https://www.youtube.com/watch?v=Fksz_uENt9U", "https://www.youtube.com/watch?v=TePuChVQgpg", "https://www.youtube.com/watch?v=0jWetqSVGNc",
            "https://www.youtube.com/watch?v=wm4A_6fu4uQ", "https://www.youtube.com/watch?v=VIG2CDQZDzc", "https://www.youtube.com/watch?v=QjIjSEOx1rc", "https://www.youtube.com/watch?v=ZHm_sZL3adU", 
            "https://www.youtube.com/watch?v=IqPPRjzwYRo", "https://www.youtube.com/watch?v=VZSFE8H1WJw", "https://www.youtube.com/watch?v=71S5i39GRYI", "https://www.youtube.com/watch?v=pq21GWzKjVg"],
    ninePM = ["https://www.youtube.com/watch?v=w_md7sA7syU", "https://www.youtube.com/watch?v=TuMvh1R2Wkw", "https://www.youtube.com/watch?v=ZUPm4MT64VU", "https://www.youtube.com/watch?v=oWmT9EGNuOU",
            "https://www.youtube.com/watch?v=b257fZDin_M", "https://www.youtube.com/watch?v=pNy1w-X43ZY", "https://www.youtube.com/watch?v=oT_ai6UvgOU", "https://www.youtube.com/watch?v=yd-_mgpjejU",
            "https://www.youtube.com/watch?v=VaC245tbTOg", "https://www.youtube.com/watch?v=pNzeJ4xfGWs", "https://www.youtube.com/watch?v=gUVD_lJTGSI", "https://www.youtube.com/watch?v=dMPuxpzQS4U"],
    tenPM = ["https://www.youtube.com/watch?v=cRCuIlnGpBY", "https://www.youtube.com/watch?v=YukcuUPS05U", "https://www.youtube.com/watch?v=msrs_b2DDTM", "https://www.youtube.com/watch?v=vvw5eCl8okI",
            "https://www.youtube.com/watch?v=BFIzwSki4J8", "https://www.youtube.com/watch?v=oEpYueb2gqs", "https://www.youtube.com/watch?v=9T4ftawwCPk", "https://www.youtube.com/watch?v=J52gTQUWVl0",
            "https://www.youtube.com/watch?v=UEVgu-4cgB4", "https://www.youtube.com/watch?v=XFtxYy89mi0", "https://www.youtube.com/watch?v=StvUetZ-KAI", "https://www.youtube.com/watch?v=mRBSfD6nkAc",
            "https://www.youtube.com/watch?v=BUSKfmDO2eM"],
    elevenPM = ["https://www.youtube.com/watch?v=YrEss6dcsc8", "https://www.youtube.com/watch?v=xbjbGNa-7eE", "https://www.youtube.com/watch?v=2ntrw94Pbe0", "https://www.youtube.com/watch?v=Q6qqtVeFM9w",
            "https://www.youtube.com/watch?v=z5Xb6FQMnss", "https://www.youtube.com/watch?v=Wl5Qsoo68Yk", "https://www.youtube.com/watch?v=Autow70fkks", "https://www.youtube.com/watch?v=NRtiXe9ykec",
            "https://www.youtube.com/watch?v=HKLvQOiJN44", "https://www.youtube.com/watch?v=a7YAGDwIceM", "https://www.youtube.com/watch?v=tUgIhLBApu0", "https://www.youtube.com/watch?v=785HVWetf5k",
            "https://www.youtube.com/watch?v=YP84uIo4_8Q"];
            
function ranDom (arr) {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
}
function checkTime() {
    var d = new Date();
    var hour = d.getHours();
    var min = d.getMinutes();
    return hour;
}
var time = new Date();
var min = time.getMinutes();
var firstTrigger = 60000* (60 - min);

function acSongs() {
		hour = checkTime();
    if (hour == 0) {
        return ranDom(twelveAM);
    } else if (hour == 1) {
        return ranDom(oneAM);
    } else if (hour == 2) {
        return ranDom(twoAM);
    } else if (hour == 3) {
        return ranDom(threeAM);
    } else if (hour == 4) {
        return ranDom(fourAM);
    } else if (hour == 5) {
        return ranDom(fiveAM);
    } else if (hour == 6) {
        return ranDom(sixAM);
    } else if (hour == 7) {
        return ranDom(sevenAM);
    } else if (hour == 8) {
        return ranDom(eightAM);
    } else if (hour == 9) {
        return ranDom(nineAM);
    } else if (hour == 10) {
        return ranDom(tenAM);
    } else if (hour == 11) {
        return ranDom(elevenAM);
    } else if (hour == 12) {
        return ranDom(twelvePM);
    } else if (hour == 13) {
        return ranDom(onePM);
    } else if (hour == 14) {
        return ranDom(twoPM);
    } else if (hour == 15) {
        return ranDom(threePM);
    } else if (hour == 16) {
        return ranDom(fourPM);
    } else if (hour == 17) {
        return ranDom(fivePM);
    } else if (hour == 18) {
        return ranDom(sixPM);
    } else if (hour == 19) {
        return ranDom(sevenPM);
    } else if (hour == 20) {
        return ranDom(eightPM);
    } else if (hour == 21) {
        return ranDom(ninePM);
    } else if (hour == 22) {
        return ranDom(tenPM);
    } else if (hour == 23) {
        return ranDom(elevenPM);
    } else {
        return "Wrong time...?";
    }
}

// This is for 1st Time Trigger
setTimeout(function() {
	T.post('statuses/update', { status: acSongs() }, function(err, data, response) {
        console.log(data)
      })
// This is continuous trigger every full hour
	setInterval(function(){
        T.post('statuses/update', { status: acSongs() }, function(err, data, response) {
            console.log(data)
          })
  }, 3600000);
  }, firstTrigger);


/*
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
setInterval(retweet, 1000*60*60);

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
setInterval(favoriteTweet, 1000*60*60);

//Stream / track tweets ==========================
//pulling from a stream of all user tweets live
const stream = T.stream('statuses/filter', {track: ['Animal Crossing', '#animalcrossing', '#ACNL', '#ACNH', '#ACCF', '#ACWW'] })

//Logs errors from requests
function responseCallback (err, data, response) {
console.log(err);
};


//Event Handler from stream ======================
//this is the info we pulled from stream, now we can act on it
stream.on('tweet', tweet => {
// retweet
T.post('statuses/retweet/:id', {id: tweet.id_str}, responseCallback);
// like
T.post('favorites/create', {id: tweet.id_str}, responseCallback);
});
*/