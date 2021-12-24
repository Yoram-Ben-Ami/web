const button = document.querySelector('button');
const h1 = document.querySelector('h1');
let i=0;
button.addEventListener('click', function () {
    let images = [10];
    images[0] = ["url('./PHOTOS/0.jpeg')"];
    images[1] = ["url('./PHOTOS/1.jpeg')"];
    images[2] = ["url('./PHOTOS/2.jpeg')"];
    images[3] = ["url('./PHOTOS/3.jpeg')"];
    document.body.style.backgroundImage = images[(i++)%4];
});

function loadup() {
    let images = [58];
    images[0] = ["url('./PHOTOS/1.png')"];
    images[1] = ["url('./PHOTOS/1.png')"];
    images[2] = ["url('./PHOTOS/2.png')"];
    images[3] = ["url('./PHOTOS/3.png')"];
    images[4] = ["url('./PHOTOS/4.png')"];
    images[5] = ["url('./PHOTOS/5.png')"];
    images[6] = ["url('./PHOTOS/6.png')"];
    images[7] = ["url('./PHOTOS/7.png')"];
    images[8] = ["url('./PHOTOS/8.png')"];
    images[9] = ["url('./PHOTOS/9.png')"];
    images[10] = ["url('./PHOTOS/10.png')"];
    images[11] = ["url('./PHOTOS/11.png')"];
    images[12] = ["url('./PHOTOS/12.png')"];
    images[13] = ["url('./PHOTOS/13.png')"];
    images[14] = ["url('./PHOTOS/14.png')"];
    images[15] = ["url('./PHOTOS/15.png')"];
    images[16] = ["url('./PHOTOS/16.png')"];
    images[17] = ["url('./PHOTOS/17.png')"];
    images[18] = ["url('./PHOTOS/18.png')"];
    images[19] = ["url('./PHOTOS/19.png')"];
    images[20] = ["url('./PHOTOS/20.png')"];
    images[21] = ["url('./PHOTOS/21.png')"];
    images[22] = ["url('./PHOTOS/22.png')"];
    images[23] = ["url('./PHOTOS/23.png')"];
    images[24] = ["url('./PHOTOS/24.png')"];
    images[25] = ["url('./PHOTOS/25.png')"];
    images[26] = ["url('./PHOTOS/26.png')"];
    images[27] = ["url('./PHOTOS/27.png')"];
    images[28] = ["url('./PHOTOS/28.png')"];
    images[29] = ["url('./PHOTOS/29.png')"];
    images[30] = ["url('./PHOTOS/30.png')"];
    images[31] = ["url('./PHOTOS/31.png')"];
    images[32] = ["url('./PHOTOS/32.png')"];
    images[33] = ["url('./PHOTOS/33.png')"];
    images[34] = ["url('./PHOTOS/34.png')"];
    images[35] = ["url('./PHOTOS/35.png')"];
    images[36] = ["url('./PHOTOS/36.png')"];
    images[37] = ["url('./PHOTOS/37.png')"];
    images[38] = ["url('./PHOTOS/38.png')"];
    images[39] = ["url('./PHOTOS/39.png')"];
    images[40] = ["url('./PHOTOS/40.png')"];
    images[41] = ["url('./PHOTOS/41.png')"];
    images[42] = ["url('./PHOTOS/42.png')"];
    images[43] = ["url('./PHOTOS/43.png')"];
    images[44] = ["url('./PHOTOS/44.png')"];
    images[45] = ["url('./PHOTOS/45.png')"];
    images[46] = ["url('./PHOTOS/46.png')"];
    images[47] = ["url('./PHOTOS/47.png')"];
    images[48] = ["url('./PHOTOS/48.png')"];
    images[49] = ["url('./PHOTOS/49.png')"];
    images[50] = ["url('./PHOTOS/50.png')"];
    images[51] = ["url('./PHOTOS/51.png')"];
    images[52] = ["url('./PHOTOS/52.png')"];
    images[53] = ["url('./PHOTOS/53.png')"];
    images[54] = ["url('./PHOTOS/54.png')"];
    images[55] = ["url('./PHOTOS/55.png')"];
    images[56] = ["url('./PHOTOS/56.png')"];
    images[57] = ["url('./PHOTOS/57.png')"];
    setInterval(() => { document.getElementById("Argentina").style.backgroundImage =   images[(i++)%4];}, 3*1000);
    setInterval(() => { document.getElementById("Chile").style.backgroundImage =       images[(4 + (i)%3)%7];}, 5*1000);
    setInterval(() => { document.getElementById("Brazil").style.backgroundImage =      images[(7 + (i)%3)%10];}, 3*1000);
    setInterval(() => { document.getElementById("Peru").style.backgroundImage =        images[(10 + (i)%3)%13];}, 6*1000);
    setInterval(() => { document.getElementById("Bolivia").style.backgroundImage =     images[(13 + (i)%3)%16];}, 7*1000);
    setInterval(() => { document.getElementById("Colombia").style.backgroundImage =    images[(16 + (i)%3)%19];}, 3*1000);
    setInterval(() => { document.getElementById("Hawaii").style.backgroundImage =      images[(19 + (i)%3)%22];}, 5*1000);
    setInterval(() => { document.getElementById("Australia").style.backgroundImage =   images[(22 + (i)%3)%25];}, 3*1000);
    setInterval(() => { document.getElementById("Philippines").style.backgroundImage = images[(25 + (i)%3)%28];}, 6*1000);
    setInterval(() => { document.getElementById("Cambodia").style.backgroundImage =    images[(28 + (i)%3)%31];}, 3*1000);
    setInterval(() => { document.getElementById("Vietnam").style.backgroundImage =     images[(31 + (i)%3)%34];}, 4*1000);
    setInterval(() => { document.getElementById("Thailand").style.backgroundImage =    images[(34 + (i)%3)%37];}, 3*1000);
    setInterval(() => { document.getElementById("Jordan").style.backgroundImage =      images[(37 + (i)%3)%40];}, 4*1000);
    setInterval(() => { document.getElementById("UAE").style.backgroundImage =         images[(40 + (i)%3)%43];}, 7*1000);
    setInterval(() => { document.getElementById("Germany").style.backgroundImage =     images[(43 + (i)%3)%46];}, 4*1000);
    setInterval(() => { document.getElementById("Austria").style.backgroundImage =     images[(46 + (i)%3)%49];}, 6*1000);
    setInterval(() => { document.getElementById("Italy").style.backgroundImage =       images[(49 + (i)%3)%52];}, 3*1000);
    setInterval(() => { document.getElementById("Switzerland").style.backgroundImage = images[(52 + (i)%3)%55];}, 5*1000);
    setInterval(() => { document.getElementById("Budapest").style.backgroundImage = images[(55 + (i)%3)%58];}, 5*1000);
    }


const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
const score = document.querySelector('#score');
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    const score = tweetForm.elements.score;
    addTweet(usernameInput.value, tweetInput.value , score.value)
    usernameInput.value = '';
    tweetInput.value = '';
    score.value ='';
});

const addTweet = (username, tweet , score) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    newTweet.append(`  Score: ${score}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})

