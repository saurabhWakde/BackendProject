
require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const Data =require('./models/data')

const app =express();
const PORT = process.env.PORT || 1500;


mongoose.set('strictQuery',false);

const connectDB = async ()=>
{
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB :${conn.connection.host}`);
    }catch(err){
         console.log(err)
         process.exit(1);
    }
}

app.get('/',(req,res)=>
{
    res.send({title:'Data'})
})

app.get('/add-data', async (req,res)=>
{
    try{
        await Data.insertMany([
                {
                  "image_url": "./images/img1.jpeg",
                  "destination_title": "Wat Chaiwatthanaram",
                  "location": "Ayutthaya, Thailand",
                  "grade": 5,
                  "fees": 881,
                  "description": "Reality reach memory six thing. Field probably deep blue dream service eye officer. At seven both strong marriage.",
                  "id": 1
                },
                {
                  "image_url": "./images/img2.jpeg",
                  "destination_title": "Osbornton kitchen",
                  "location": "Sri Lanka",
                  "grade": 4,
                  "fees": 1113,
                  "description": "Theory write senior understand agency however. Song sometimes teach official most family significant. Career per attorney they provide thought.",
                  "id": 2
                },
                {
                  "image_url": "./images/img3.jpeg",
                  "destination_title": "East Alisonberg ground",
                  "location": "Cape Verde",
                  "grade": 4,
                  "fees": 1825,
                  "description": "Relationship source if either thing benefit member remember. Base interesting clear grow there admit interesting senior. Health want ago green that give.",
                  "id": 3
                },
                {
                  "image_url": "./images/img4.jpeg",
                  "destination_title": "East Emilybury few",
                  "location": "Costa Rica",
                  "grade": 3,
                  "fees": 3505,
                  "description": "Tax source grow nature contain decade guy. Letter military soldier never national.",
                  "id": 4
                },
                {
                  "image_url": "./images/img5.jpeg",
                  "destination_title": "North Christopherfort region",
                  "location": "Antarctica ",
                  "grade": 3,
                  "fees": 1982,
                  "description": "Check rather paper behavior discuss director process doctor. Indeed represent floor laugh think support.",
                  "id": 5
                },
                {
                  "image_url": "./images/img6.jpeg",
                  "destination_title": "Marieberg water",
                  "location": "South Africa",
                  "grade": 1,
                  "fees": 1915,
                  "description": "Deep home sell tough per language Democrat. Month seat continue cut drug.",
                  "id": 6
                },
                {
                  "image_url": "./images/img7.jpeg",
                  "destination_title": "Stewarttown eye",
                  "location": "Cook Islands",
                  "grade": 3,
                  "fees": 1493,
                  "description": "Himself black marriage suggest card give. Floor would fight author. Share play world similar those rate.",
                  "id": 7
                },
                {
                  "image_url": "./images/img8.jpeg",
                  "destination_title": "Bowersland firm",
                  "location": "Hong Kong",
                  "grade": 4,
                  "fees": 640,
                  "description": "Certainly focus meeting impact religious significant. Discussion make everything finish TV word able.",
                  "id": 8
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "South Christopher charge",
                  "location": "Equatorial Guinea",
                  "grade": 4,
                  "fees": 905,
                  "description": "Although politics Republican difference until check. Be fast to his company author.",
                  "id": 9
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Holly ability",
                  "location": "Malta",
                  "grade": 5,
                  "fees": 1412,
                  "description": "Alone story political Republican kind. Next business old quickly economy upon middle.",
                  "id": 10
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Davisstad miss",
                  "location": "Mali",
                  "grade": 5,
                  "fees": 1415,
                  "description": "Kid open point I. Traditional figure about year they sport space what. Scene action true can.",
                  "id": 11
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Hendersonhaven moment",
                  "location": "Guatemala",
                  "grade": 4,
                  "fees": 605,
                  "description": "Century firm head despite. Live can message after.",
                  "id": 12
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Angelaland listen",
                  "location": "Bermuda",
                  "grade": 5,
                  "fees": 505,
                  "description": "Hotel student month agreement manager write receive. Analysis every read. Feeling itself left heavy hit door.",
                  "id": 13
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Nancyburgh candidate",
                  "location": "Samoa",
                  "grade": 4,
                  "fees": 1690,
                  "description": "Reason pretty employee. Lot what more next. Whatever generation issue effect.",
                  "id": 14
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Beckborough give",
                  "location": "Eritrea",
                  "grade": 5,
                  "fees": 1185,
                  "description": "Nature may environmental dog management company daughter every. Begin realize against at. Spring perform data.",
                  "id": 15
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Aliciamouth future",
                  "location": "Mauritania",
                  "grade": 4,
                  "fees": 650,
                  "description": "Must now church gas. Trouble administration entire threat thing. Sure enough color institution.",
                  "id": 16
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "New Bradley garden",
                  "location": "New Caledonia",
                  "grade": 1,
                  "fees": 385,
                  "description": "Bank language trial cost type mention. Analysis present role its step bed simple. Analysis per their skin light.",
                  "id": 17
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Lake Jill least",
                  "location": "Anguilla",
                  "grade": 1,
                  "fees": 1322,
                  "description": "Author important leave kitchen out head. Accept use much different. Increase trouble early teacher. Hear blood discussion west song between course.",
                  "id": 18
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Davidborough court",
                  "location": "Botswana",
                  "grade": 3,
                  "fees": 695,
                  "description": "Senior indeed available senior. Try step picture. Employee strategy important pretty want memory none.",
                  "id": 19
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Brennanbury condition",
                  "location": "Belarus",
                  "grade": 4,
                  "fees": 1425,
                  "description": "Large must push raise need shake plan professor. Attention religious tend manage relationship. Trouble other family word crime. Pretty especially while light rich control order page.",
                  "id": 20
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Lorifurt keep",
                  "location": "South Africa",
                  "grade": 3,
                  "fees": 1364,
                  "description": "Republican service little respond current including. Your drug fire view everyone news.",
                  "id": 21
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Lake Matthewberg help",
                  "location": "Costa Rica",
                  "grade": 4,
                  "fees": 1350,
                  "description": "Recent of other if three police with. Four owner standard open seem himself.",
                  "id": 22
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Raymond ball",
                  "location": "Antigua and Barbuda",
                  "grade": 3,
                  "fees": 625,
                  "description": "Audience kind by data. Us often state win name according activity number.",
                  "id": 23
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "East Tinashire financial",
                  "location": "Cyprus",
                  "grade": 5,
                  "fees": 1970,
                  "description": "Whether successful coach. Week whose soon hard feeling bank chance. Power seven development responsibility sound.",
                  "id": 24
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Lisaton nothing",
                  "location": "Ecuador",
                  "grade": 3,
                  "fees": 1035,
                  "description": "Various skin modern live better picture. Mrs wear few history trial speak affect discuss. Current open federal somebody case.",
                  "id": 25
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Christinafurt produce",
                  "location": "Samoa",
                  "grade": 3,
                  "fees": 704,
                  "description": "East state building chance image. Enough among know little out wish wonder.",
                  "id": 26
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Port Carlastad over",
                  "location": "Egypt",
                  "grade": 4,
                  "fees": 785,
                  "description": "Life water mean suffer. Wish education truth owner speech physical sound. Threat movie professional.",
                  "id": 27
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "South Mark church",
                  "location": "Isle of Man",
                  "grade": 3,
                  "fees": 571,
                  "description": "Lot what particularly commercial six almost everyone growth. Eat local recognize garden force lead. Event question population read. Religious note military our bar help.",
                  "id": 28
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Ashleyhaven when",
                  "location": "Christmas Island",
                  "grade": 4,
                  "fees": 1285,
                  "description": "Food third community child tonight. Knowledge citizen various community my through. Life next form whole arm top role.",
                  "id": 29
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "South Michael trip",
                  "location": "Iran",
                  "grade": 1,
                  "fees": 1515,
                  "description": "News direction let. Write PM baby less. Choice bed involve probably again agency.",
                  "id": 30
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "New Edwardchester choice",
                  "location": "Italy",
                  "grade": 1,
                  "fees": 1495,
                  "description": "Officer top man establish. Read budget operation purpose about represent. Partner assume direction a about.",
                  "id": 31
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "East Jeffreymouth wrong",
                  "location": "Zimbabwe",
                  "grade": 5,
                  "fees": 1275,
                  "description": "Always factor apply. Result current speech way again.",
                  "id": 32
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Riverabury girl",
                  "location": "Hong Kong",
                  "grade": 5,
                  "fees": 1525,
                  "description": "Work life indeed out customer station. Job successful nearly. Democratic party situation. Perform husband whom impact.",
                  "id": 33
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Millerside piece",
                  "location": "Ethiopia",
                  "grade": 4,
                  "fees": 545,
                  "description": "Ever nothing doctor. Inside American join politics assume once. Because concern issue maintain represent within black.",
                  "id": 34
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Davidbury wait",
                  "location": "United States of America",
                  "grade": 4,
                  "fees": 561,
                  "description": "Hear then push. Administration particular fact own along blood garden. Party surface across agent someone plant thing.",
                  "id": 35
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Williamsshire or",
                  "location": "Uzbekistan",
                  "grade": 4,
                  "fees": 1722,
                  "description": "Collection fast someone popular small human. Up life should once whose edge. More stop woman could car.",
                  "id": 36
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Jeremiahhaven serious",
                  "location": "Burundi",
                  "grade": 5,
                  "fees": 1932,
                  "description": "Wide everything fine real return view.",
                  "id": 37
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Cindymouth reality",
                  "location": "Taiwan",
                  "grade": 5,
                  "fees": 1565,
                  "description": "Sense friend professional modern. Certainly agent set bit approach enough.",
                  "id": 38
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Phillipsland leg",
                  "location": "Ukraine",
                  "grade": 4,
                  "fees": 1075,
                  "description": "Your into best voice. Course home sit opportunity rate fly. Produce statement can. Girl final build direction environment.",
                  "id": 39
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Hansenville end",
                  "location": "Oman",
                  "grade": 5,
                  "fees": 1715,
                  "description": "Factor find image final. Positive indeed along size drive democratic. Chance call short establish.",
                  "id": 40
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Carriefort fill",
                  "location": "French Southern Territories",
                  "grade": 3,
                  "fees": 1455,
                  "description": "Father believe thank maybe current chance mission inside. Instead hot lead side industry unit light.",
                  "id": 41
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Christophermouth box",
                  "location": "Jamaica",
                  "grade": 5,
                  "fees": 905,
                  "description": "Develop enough together hundred side behavior operation. Sit yard million. Place office eat into attorney player perform together.",
                  "id": 42
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Jasonfort the",
                  "location": "Canada",
                  "grade": 4,
                  "fees": 1614,
                  "description": "Add get quite. Paper look plant exist plant. Current standard adult of market class black. Deal factor prevent beyond magazine activity responsibility few.",
                  "id": 43
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Lindseyland interesting",
                  "location": "Wallis and Futuna",
                  "grade": 3,
                  "fees": 841,
                  "description": "Ago view affect world effect worry head everyone.",
                  "id": 44
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Ramosbury throw",
                  "location": "United States of America",
                  "grade": 5,
                  "fees": 1414,
                  "description": "When myself ability return front character week. Too scientist whose open less its central.",
                  "id": 45
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Heather recently",
                  "location": "Guyana",
                  "grade": 3,
                  "fees": 530,
                  "description": "New worker fire both late. Democratic issue whether wall party. Morning although industry you job.",
                  "id": 46
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Marshallstad thank",
                  "location": "Russian Federation",
                  "grade": 5,
                  "fees": 1631,
                  "description": "Local sound impact boy. Their traditional operation happen.",
                  "id": 47
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Rachelbury order",
                  "location": "Niue",
                  "grade": 3,
                  "fees": 1065,
                  "description": "Which share read like.",
                  "id": 48
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "East David among",
                  "location": "Central African Republic",
                  "grade": 4,
                  "fees": 1385,
                  "description": "Partner each sometimes power particularly agreement value. Project sign truth put. Choice win at card interview candidate home.",
                  "id": 49
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Johnsonbury tax",
                  "location": "Netherlands Antilles",
                  "grade": 3,
                  "fees": 1761,
                  "description": "Expert southern live view box we main. Describe know enough share ground nor.",
                  "id": 50
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Rodriguezborough arm",
                  "location": "Azerbaijan",
                  "grade": 4,
                  "fees": 305,
                  "description": "Again base fast. Middle measure end or whom try fly. Role realize lawyer prove nice only start. Other set herself share series.",
                  "id": 51
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Anthonyhaven policy",
                  "location": "Taiwan",
                  "grade": 5,
                  "fees": 1581,
                  "description": "Hour same actually it. Deep report see blood test indicate scene. Example call feel woman.",
                  "id": 52
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Emilyhaven soon",
                  "location": "Cuba",
                  "grade": 5,
                  "fees": 1183,
                  "description": "Seek might open significant. Meeting drive water mention think remember store.",
                  "id": 53
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Port Jeffery number",
                  "location": "Christmas Island",
                  "grade": 4,
                  "fees": 1474,
                  "description": "American way yourself age north get significant. Media the up people.",
                  "id": 54
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "South Jamietown chance",
                  "location": "Croatia",
                  "grade": 3,
                  "fees": 505,
                  "description": "Individual fill eight window along run. Threat address stage fight option company issue. Owner woman since society skill blood leg.",
                  "id": 55
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Michaelton consumer",
                  "location": "Angola",
                  "grade": 5,
                  "fees": 1525,
                  "description": "Successful close either rock serve later scene. Few leave church board participant well skill. Quickly focus pass give middle.",
                  "id": 56
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "South Connie project",
                  "location": "Guam",
                  "grade": 4,
                  "fees": 534,
                  "description": "Stuff firm community hair environmental marriage cause. Body use seven call land. Father wrong every behavior become experience culture process.",
                  "id": 57
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Jonestown kitchen",
                  "location": "Falkland Islands (Malvinas)",
                  "grade": 3,
                  "fees": 1525,
                  "description": "Figure social performance production. Increase produce method front film yes. Movie under Republican.",
                  "id": 58
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Bennetthaven where",
                  "location": "Korea",
                  "grade": 4,
                  "fees": 845,
                  "description": "On realize like vote. Kid visit tonight suggest car physical central. Measure about low.",
                  "id": 59
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Jerryview reduce",
                  "location": "Denmark",
                  "grade": 3,
                  "fees": 1065,
                  "description": "Station beyond seat rule smile article care. Relationship war west Democrat total mention. Politics be exist program area.",
                  "id": 60
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Marieland discover",
                  "location": "Dominica",
                  "grade": 3,
                  "fees": 1975,
                  "description": "Record whom step them same. Study area meeting. Keep girl charge describe subject general.",
                  "id": 61
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "South Felicia agency",
                  "location": "Grenada",
                  "grade": 3,
                  "fees": 1271,
                  "description": "Move arrive huge movie age. Modern quickly of save have. War adult significant hope community act.",
                  "id": 62
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Stewartshire development",
                  "location": "Guatemala",
                  "grade": 4,
                  "fees": 1145,
                  "description": "Body return marriage meeting reveal support debate. Help whom ago goal early second weight.",
                  "id": 63
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Harriston state",
                  "location": "Equatorial Guinea",
                  "grade": 5,
                  "fees": 1114,
                  "description": "Order international fish citizen send. Consider standard decision early several from participant. Instead dream state employee.",
                  "id": 64
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Johnsonfurt do",
                  "location": "Senegal",
                  "grade": 3,
                  "fees": 1783,
                  "description": "Throughout car man possible.",
                  "id": 65
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "New Monique sit",
                  "location": "Thailand",
                  "grade": 5,
                  "fees": 995,
                  "description": "Relationship wait material subject attack cost reach civil. Drop military occur candidate catch strategy job.",
                  "id": 66
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Angelaville past",
                  "location": "Marshall Islands",
                  "grade": 3,
                  "fees": 1555,
                  "description": "Sound down produce parent. Outside address executive spring argue look foot letter.",
                  "id": 67
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Williamside agency",
                  "location": "Japan",
                  "grade": 5,
                  "fees": 1202,
                  "description": "Attention wall each grow realize surface. Give even reduce impact approach.",
                  "id": 68
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Heatherbury together",
                  "location": "Zambia",
                  "grade": 3,
                  "fees": 334,
                  "description": "Owner little response chair. Effort perform human nor own different present compare. Radio nor deep brother four outside great.",
                  "id": 69
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Burtonfurt member",
                  "location": "Kenya",
                  "grade": 5,
                  "fees": 1285,
                  "description": "View available thousand positive husband ever economic about. Myself at training pass wish later.",
                  "id": 70
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Jamesburgh success",
                  "location": "Cambodia",
                  "grade": 5,
                  "fees": 1864,
                  "description": "Yes media full listen policy plant. Anyone should what end consumer give good sign. Worry to we nothing nor win specific.",
                  "id": 71
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Riosstad employee",
                  "location": "Gibraltar",
                  "grade": 4,
                  "fees": 1312,
                  "description": "Science world none station. Apply attack gas road together could. Behavior nor Mrs idea miss. Prove professor body for offer get.",
                  "id": 72
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Karenberg child",
                  "location": "Gabon",
                  "grade": 3,
                  "fees": 1235,
                  "description": "Expect candidate room other strong age role benefit. Unit care should blood.",
                  "id": 73
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Lake Christina only",
                  "location": "Turkmenistan",
                  "grade": 3,
                  "fees": 954,
                  "description": "Charge sort wear unit. Oil onto admit research degree. Mother individual bank skill these.",
                  "id": 74
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Rosariomouth identify",
                  "location": "Greece",
                  "grade": 3,
                  "fees": 675,
                  "description": "Local purpose participant husband political. Generation stop part attention.",
                  "id": 75
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Evansfort few",
                  "location": "Chad",
                  "grade": 3,
                  "fees": 1455,
                  "description": "Career sea create should sister. Same move choice threat laugh.",
                  "id": 76
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Brandimouth policy",
                  "location": "Germany",
                  "grade": 5,
                  "fees": 1443,
                  "description": "Family visit small impact. Approach kitchen focus be card evidence foot large. Impact theory appear shake.",
                  "id": 77
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Michealside stuff",
                  "location": "Syrian Arab Republic",
                  "grade": 4,
                  "fees": 663,
                  "description": "Mean she reach growth almost bill speak. Allow month picture summer woman resource tonight.",
                  "id": 78
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Ronaldburgh dinner",
                  "location": "Mozambique",
                  "grade": 3,
                  "fees": 555,
                  "description": "Debate college smile PM. Son sure central.",
                  "id": 79
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Danielport teacher",
                  "location": "Kiribati",
                  "grade": 4,
                  "fees": 945,
                  "description": "Simple through baby full memory writer glass. Way direction I. That free usually above model.",
                  "id": 80
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Lake Diana mother",
                  "location": "Haiti",
                  "grade": 3,
                  "fees": 375,
                  "description": "Style dark resource television. Again stand six stand. Expert attack serious simple would hope.",
                  "id": 81
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Jeffreyhaven six",
                  "location": "Malta",
                  "grade": 3,
                  "fees": 1815,
                  "description": "Focus possible couple support opportunity world. Whether require experience break marriage lot. Social should particularly fight. Official why book well bar.",
                  "id": 82
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Stephaniemouth enjoy",
                  "location": "Mozambique",
                  "grade": 4,
                  "fees": 1384,
                  "description": "Far Mrs dream itself first. All deal hundred dinner entire. Challenge science fact impact space fast.",
                  "id": 83
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Wilsonhaven our",
                  "location": "Saint Pierre and Miquelon",
                  "grade": 3,
                  "fees": 895,
                  "description": "Analysis agree allow.",
                  "id": 84
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "New Nathanielville know",
                  "location": "New Caledonia",
                  "grade": 5,
                  "fees": 1195,
                  "description": "Huge account prepare begin. Ok nation finally year let. Simply actually collection. Control according actually half star tough.",
                  "id": 85
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "South Juan car",
                  "location": "Cook Islands",
                  "grade": 3,
                  "fees": 495,
                  "description": "Doctor fine eye station carry. Week attention opportunity might five until indicate network. Decide economy majority church at.",
                  "id": 86
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Harrisonhaven away",
                  "location": "Italy",
                  "grade": 5,
                  "fees": 635,
                  "description": "Season read but would. Form project article front. Available claim care number coach development type.",
                  "id": 87
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Brianshire health",
                  "location": "French Guiana",
                  "grade": 3,
                  "fees": 1295,
                  "description": "Risk which knowledge area.",
                  "id": 88
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Chloebury of",
                  "location": "Slovakia (Slovak Republic)",
                  "grade": 4,
                  "fees": 570,
                  "description": "Suffer wife party. Phone cause million wall great you send. Far adult every pay show eight experience nor.",
                  "id": 89
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Shawnbury maybe",
                  "location": "Oman",
                  "grade": 4,
                  "fees": 1015,
                  "description": "Week very green foot opportunity. Official region serious rather whose several science. Election never pick indeed positive.",
                  "id": 90
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "North Donna old",
                  "location": "Malaysia",
                  "grade": 4,
                  "fees": 1825,
                  "description": "Four claim trade happy about they where. Stock cost together group let leave maybe.",
                  "id": 91
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Anthonyfurt with",
                  "location": "Tokelau",
                  "grade": 3,
                  "fees": 412,
                  "description": "Here red serve consider provide human pretty. Prove collection billion buy sit ago huge. Assume front through.",
                  "id": 92
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Patricktown run",
                  "location": "Iraq",
                  "grade": 3,
                  "fees": 722,
                  "description": "Add them heart more show. Among soon top really. Me safe it good business.",
                  "id": 93
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Annetteshire threat",
                  "location": "Saint Lucia",
                  "grade": 4,
                  "fees": 1985,
                  "description": "Occur girl generation center political bed leave grow. Guess already claim seem particular ok. Mouth speech window group.",
                  "id": 94
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Dwayneton pattern",
                  "location": "Brazil",
                  "grade": 4,
                  "fees": 1695,
                  "description": "Lawyer today parent building amount medical young. During toward star always daughter. Image necessary those be since key.",
                  "id": 95
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "New Jennifer visit",
                  "location": "Timor-Leste",
                  "grade": 4,
                  "fees": 1154,
                  "description": "Kind study sure discover student reveal. Appear maybe paper receive.",
                  "id": 96
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Smithmouth particular",
                  "location": "Netherlands Antilles",
                  "grade": 5,
                  "fees": 1215,
                  "description": "During yes ahead foreign several dream. Piece hit wife product person. Not deal into top.",
                  "id": 97
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Laurenmouth management",
                  "location": "Nauru",
                  "grade": 4,
                  "fees": 985,
                  "description": "Anything last person cost she. Dinner play anything audience community use. Mrs Mr identify practice still.",
                  "id": 98
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "Davisfort story",
                  "location": "Gabon",
                  "grade": 4,
                  "fees": 725,
                  "description": "Particular various pay want religious. Conference eye strong. Arm nothing doctor although bit computer.",
                  "id": 99
                },
                {
                  "image_url": "https://source.unsplash.com/random/350x150/?Travel",
                  "destination_title": "West Lindsay produce",
                  "location": "Moldova",
                  "grade": 3,
                  "fees": 1513,
                  "description": "Big brother focus meeting task itself minute. Structure daughter tax Congress lead mind call decade.",
                  "id": 100
                }
              
        ]);
        res.send("Data Added");
    }catch(err){
        console.log("err",+err);
    }
})

app.get('/data',async(req,res)=>
{
    const data = await Data.find();

    if(data)
    {
        res.json(data)
    }
    else
    {
        res.send("Something went Wrong");
    }
})


connectDB().then(()=>
{
    app.listen(PORT,()=>
    {
        console.log('listening on Port 1500')
    })
})



// const connection = require('./config');

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');



// app.get("/", (req, res) => {
//     res.send("Welcome to the HomePage");
//   });


// app.listen(1000, async () => {
//     try {
//       await connection;
//       console.log("connected to mongodb successfully");
//     } catch (err) {
//       console.log("error in db file");
//       console.log(err);
//     }
//     console.log("listen to port 8005");
//   });
