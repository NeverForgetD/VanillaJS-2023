/*
const verseList = [
    {
        verse: "이 세상도, 그 정욕도 지나가되 오직 하나님의 뜻을 행하는 이는 연원히 거하느니라",
        from: "요한일서 2:17"
    },
    {
        verse: "지극히 작은 것에 충성된 자는 큰 것에도 충성되고, 지극히 작은 것에 불의한 자는 큰 것에도 불의하니라",
        from: "누가복음 16:10"
    },
    {
        verse: "하나님을 가까이 하라 그리하면 너희를 가까이 하시리라",
        from: "야고보서 4:8"
    },
    {
        verse: "네 마음을 다하고 목숨을 다하고 뜻을 다하고 힘을 다하여 주 너의 하나님을 사랑하라",
        from: "마가복음 12:30"
    },
    {
        verse: "무슨 일을 하든지 마음을 다하여 주꼐 하듯 하고 사람에게 하듯 하지 말라 이는 유업의 상을 주께 받을 줄 앎이니 너희는 주 그리스도를 섬기느니라",
        from: "골로새서 3:23-24"
    },
    {
        verse: "그가 우리를 위하여 목숨을 버리셨으니 우리가 이로써 사랑을 알고 우리도 형제들을 위하여 목숨을 버리는 것이 마땅하니",
        from: "요한일서 3:16"
    },
    {
        verse: "할 수 있거든 너희로서는 모든 사람으로 더불어 평화하라",
        from: "로마서 12:18"
    },
    {
        verse: "너희가 내 말에 거하면 참 내 제자가 되고 진리를 알지니 진리가 너희를 자유케 하리라",
        from: "요한복음 8:31-32"
    },
    {
        verse: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 협력하여 선을 이루느니라",
        from: "로마서 8:28"
    },
    {
        verse: "너희 염려를 다 주께 맡기라 이는 그가 너희를 돌보심이라",
        from: "베드로전서 5:7"
    },
    {
        verse: "두려워하지 말라 내가 너와 함께함이라 놀라지 말라 나는 네 하나님이 됨이라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 나의 의로운 오른손으로 너를 붙들리라",
        from: "이사야 41:10"
    },
    {
        verse: "하나님이여 주의 생각이 내게 어찌 그리 보배로우신지요 그 수가 어찌 그리 많은지요",
        from: "시편 139:17"
    },
    {
        verse: "여호와는 나의 목자시니 내게 부족함이 없으리로다. 그가 나를 푸른 풀밭에 누이시며 쉴 만한 물가로 인도하시는도다.",
        from: "시편 23:1-2"
    },
    {
        verse: "새 계명을 너희에게 주노니 서로 사랑하라 내가 너희를 사랑한 것 같이 너희도 서로 사랑하라 너희가 서로 사랑하면 이로써 모든 사람이 너희가 내 제자인 줄 알리라",
        from: "요한복음 13:34-35"
    },
    {
        verse: "내가 그리스도와 함께 십자가에 못 박혔나니 그런즉 이제는 내가 사는 것이 아니요 오직 내 안에 그리스도께서 사는 것이라 이제 내가 육체 가운데 사는 것은 나를 사랑하사 나를 위하여 자기 자신을 버리신 하나님의 아들을 믿는 믿음 안에서 사는 것이라",
        from: "갈라디아서 2:20"
    },
    {
        verse: "그리스도께서 우리를 자유롭게 하려고 자유를 주셨으니 그러므로 굳건하게 서서 다시는 종의 멍에를 메지 말라",
        from: "갈라디아서 5:1"
    },
    {
        verse: "믿음이 없이는 하나님을 기쁘시게 하지 못하나니 하나님께 나아가는 자는 반드시 그가 계신 것과 또한 그가 자기를 찾는 자들에게 상 주시는 이심을 믿어야 할지니라",
        from: "히브리서 11:6"
    },
    {
        verse: "그런즉 너희는 먼저 그의 나라와 그의 의를 구하라 그리하면 이 모든 것을 너희에게 더하시리라",
        from: "마가복음 6:33"
    },
    {
        verse: "너의 하나님 여호와가 너의 가운데에 계시니 그는 구원을 베푸실 전능자이시라 그가 너로 말미암아 기쁨을 이기지 못하시며 너를 잠잠히 사랑하셔서 너로 말미암아 즐거이 부르며 기뻐하시리라 하리라",
        from: "스바냐 3:17"
    }
];

const line1 = document.querySelector(".verse-box span:first-child");
const line2 = document.querySelector(".verse-box span:last-child");

const num = Math.floor(Math.random()*verseList.length);

line1.innerText = verseList[num].verse;
line2.innerText = verseList[num].from;
*/

const quotes = [
    {
    quote: 'I never dreamed about success, I worked for it',
    author: 'Estee Lauder'
    },
    {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand'
    },
    {
    quote: 'Do not be afraid to give up the good to go for the great',
    author: 'John D. Rockefeller'
    },
    {
    quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.'
    },
    {
    quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
    },
    {
    quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
    author: 'Reid Hoffman'
    },
    {
    quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
    author: 'Tim O Reilly'
    },
    {
    quote: 'Some people dream of success, while other people get up every morning and make it happen',
    author: 'Wayne Huizenga'
    },
    {
    quote: 'The only thing worse than starting something and falling.. is not starting something',
    author: 'Seth Godin'
    },
    {
    quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
    author: 'Jim Rohn'
    },
    ];

const line1 = document.querySelector(".verse-box span:first-child");
const line2 = document.querySelector(".verse-box span:last-child");

const num = Math.floor(Math.random()*quotes.length);

line1.innerText = quotes[num].quote;
line2.innerText = quotes[num].author;