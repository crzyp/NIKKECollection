const queryString = window.location.search;
// dictionary of all the nikke's bursts where [burst number, burst cd, special]
// burst number is burst number, burst cd is 1 for 40 seconds, 2 for 20 seconds, special is 0 for tia, 1 for rh, 2 for rrh
const burstValues = {
    1: [2, 2],
    2: [3, 1],
    3: [2, 2],
    4: [2, 1],
    5: [2, 2],
    6: [3, 1],
    7: [2, 2],
    8: [3, 1],
    9: [2, 1],
    10: [2, 2],
    11: [2, 2],
    12: [3, 1],
    13: [1, 1],
    14: [3, 1],
    15: [1, 1],
    16: [2, 2],
    17: [1, 2],
    18: [2, 1],
    19: [1, 1],
    20: [3, 1],
    21: [3, 1],
    22: [1, 1],
    23: [1, 1],
    24: [3, 1],
    25: [3, 1],
    26: [3, 1],
    27: [1, 2],
    28: [1, 2],
    29: [3, 1],
    30: [1, 2],
    31: [1, 1],
    32: [3, 1],
    33: [1, 2],
    34: [3, 1],
    35: [1, 1],
    36: [1, 2],
    37: [1, 2],
    38: [1, 2],
    39: [2, 1],
    40: [1, 1],
    41: [2, 1],
    42: [1, 2],
    43: [2, 1],
    44: [3, 1],
    45: [1, 2],
    46: [3, 1],
    47: [2, 2],
    48: [3, 1],
    49: [1, 0],
    50: [2, 2],
    51: [3, 1],
    52: [2, 2],
    53: [3, 1],
    54: [3, 1],
    55: [2, 1],
    56: [1, 2],
    57: [3, 1],
    58: [3, 1],
    59: [3, 1],
    60: [1, 2],
    61: [1, 2],
    62: [3, 1],
    63: [2, 2],
    64: [3, 1],
    65: [3, 1],
    66: [3, 1],
    67: [1, 2],
    68: [2, 0],
    69: [3, 1],
    70: [2, 2],
    71: [1, 2],
    72: [2, 2],
    73: [2, 2],
    74: [2, 2],
    75: [1, 2],
    76: [1, 2],
    77: [2, 2],
    78: [2, 2],
    79: [3, 1],
    80: [2, 1],
    81: [2, 2],
    82: [1, 1],
    83: [3, 1],
    84: [1, 2],
    85: [1, 2],
    86: [2, 2],
    87: [3, 1],
    88: [1, 1],
    89: [2, 2],
    90: [1, 2],
    91: [3, 1],
    92: [2, 2],
    93: [1, 2],
    94: [3, 1],
    95: [2, 2],
    96: [3, 1],
    97: [1, 2],
    98: [3, 1],
    99: [2, 2],
    100: [2, 2],
    101: [0, 0, 0],
    102: [3, 1],
    103: [0, 0, 1],
    104: [3, 1],
    105: [1, 2],
    106: [3, 1],
    107: [1, 2],
    108: [3, 1],
    109: [2, 2],
    110: [1, 1],
    111: [3, 1],
    112: [2, 2],
    113: [2, 2],
    114: [1, 2],
    115: [3, 1],
    116: [1, 1],
    117: [2, 2],
    118: [2, 1],
    119: [2, 2],
    120: [3, 1],
    121: [3, 1],
    122: [3, 1],
    123: [1, 1],
    124: [2, 1],
    125: [3, 1],
    126: [2, 2],
    127: [3, 1],
    128: [1, 2],
    129: [3, 1],
    130: [1, 1],
    131: [3, 1],
    132: [2, 2],
    133: [1, 2],
    134: [3, 1],
    135: [3, 1],
    136: [1, 2],
    137: [3, 1],
    138: [1, 2],
    139: [2, 2],
    140: [2, 1],
    141: [3, 1],
    142: [3, 1],
    143: [0, 0, 2],
    144: [3, 1],
    145: [2, 1],
    146: [2, 1],
    147: [3, 1],
    148: [1, 1],
    149: [3, 1],
    150: [2, 2],
    151: [3, 1],
    152: [1, 2],
    153: [2, 2],
    154: [3, 1],
    155: [2, 2],
    156: [3, 1],
    157: [2, 1],
    158: [3, 1],
    159: [2, 1],
    160: [3, 1],
    161: [1, 1],
    162: [3, 1],
    163: [3, 1],
    164: [1, 2],
    165: [2, 2],
    166: [3, 1]
};

var builderOn = false;
var lastClickedChar = null;
var lastClickedBuilder = null;

String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}

function loadCollection(){
    let queryString = bigintToBitArray(base64ToBigInt(window.location.search.removeCharAt(1)));
    //yeah, its kinda weird to check if there is a link to load but like wadeva
    console.log(queryString);
    if (queryString.length == 1 && localStorage.getItem("nikkeSave") != null){
        queryString = bigintToBitArray(base64ToBigInt(localStorage.getItem("nikkeSave")));
    } else if (queryString.length == 1){
        return;
    }
    // im doing some wack ass reversing like 5 times because of endianess
    queryString.reverse();

    ssrEly = document.getElementById("ssrElysion");
    ssrElyNikke = ssrEly.querySelectorAll("ul li");
    for (let i = 0; i < ssrElyNikke.length; i++){
        nikke = ssrElyNikke[i];
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    ssrMis = document.getElementById("ssrMissilis");
    ssrMisNikke = ssrMis.querySelectorAll("ul li");
    for (let i = 0; i < ssrMisNikke.length; i++){
        nikke = ssrMisNikke[i];
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    ssrTet = document.getElementById("ssrTetra");
    ssrTetNikke = ssrTet.querySelectorAll("ul li");
    for (let i = 0; i < ssrTetNikke.length; i++){
        nikke = ssrTetNikke[i];
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    ssrPil = document.getElementById("ssrPilgrim");
    ssrPilNikke = ssrPil.querySelectorAll("ul li");
    for (let i = 0; i < ssrPilNikke.length; i++){
        nikke = ssrPilNikke[i];
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    ssrAbn = document.getElementById("ssrAbnormal");
    ssrAbnNikke = ssrAbn.querySelectorAll("ul li");
    for (let i = 0; i < ssrAbnNikke.length; i++){
        nikke = ssrAbnNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    srEly = document.getElementById("srElysion");
    srElyNikke = srEly.querySelectorAll("ul li");
    for (let i = 0; i < srElyNikke.length; i++){
        nikke = srElyNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    srMis = document.getElementById("srMissilis");
    srMisNikke = srMis.querySelectorAll("ul li");
    for (let i = 0; i < srMisNikke.length; i++){
        nikke = srMisNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    srTet = document.getElementById("srTetra");
    srTetNikke = srTet.querySelectorAll("ul li");
    for (let i = 0; i < srTetNikke.length; i++){
        nikke = srTetNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    srAbn = document.getElementById("srAbnormal");
    srAbnNikke = srAbn.querySelectorAll("ul li");
    for (let i = 0; i < srAbnNikke.length; i++){
        nikke = srAbnNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    rEly = document.getElementById("rElysion");
    rElyNikke = rEly.querySelectorAll("ul li");
    for (let i = 0; i < rElyNikke.length; i++){
        nikke = rElyNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    rMis = document.getElementById("rMissilis");
    rMisNikke = rMis.querySelectorAll("ul li");
    for (let i = 0; i < rMisNikke.length; i++){
        nikke = rMisNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    rTet = document.getElementById("rTetra");
    rTetNikke = rTet.querySelectorAll("ul li");
    for (let i = 0; i < rTetNikke.length; i++){
        nikke = rTetNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0];
        img = nikke.querySelector("img");
        if (queryString[number - 1] == 1){
            img.classList.remove('dim');
            img.classList.add('light');
        } else{
            img.classList.remove('light');
            img.classList.add('dim');
        }
    }

    return;
}

function toggle(id){
    const nikke = document.getElementById(`nikke${id}`);
    const img = nikke.querySelector("img");
    //check if builder is on
    if (builderOn) {
        //is there one waiting to slot in?
        if (lastClickedBuilder != null) {
            const li = document.getElementById(`builder${lastClickedBuilder}`);
            //change build slot to char
            li.querySelector("img").src = `img/${id}.webp`;
            li.style.backgroundColor = "transparent";
            //reset lastClicked
            lastClickedBuilder = null;
            update();
            return;
        }
        //if there is a nikke ready, reset previous nikke
        if (lastClickedChar != null){
            document.getElementById(`nikke${lastClickedChar}`).style.backgroundColor = "transparent";
        }
        nikke.style.backgroundColor = "#6a6acf";
        lastClickedChar = id;
        return;
    }
    if (img.classList.contains('dim')) {
        img.classList.remove('dim');
        img.classList.add('light');
    } else {
        img.classList.remove('light');
        img.classList.add('dim');
    }
}

function share(){
    file = 0n;

    ssrEly = document.getElementById("ssrElysion");
    ssrElyNikke = ssrEly.querySelectorAll("ul li");
    for (let i = 0; i < ssrElyNikke.length; i++){
        nikke = ssrElyNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    ssrMis = document.getElementById("ssrMissilis");
    ssrMisNikke = ssrMis.querySelectorAll("ul li");
    for (let i = 0; i < ssrMisNikke.length; i++){
        nikke = ssrMisNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    ssrTet = document.getElementById("ssrTetra");
    ssrTetNikke = ssrTet.querySelectorAll("ul li");
    for (let i = 0; i < ssrTetNikke.length; i++){
        nikke = ssrTetNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    // why the fk am i doing it like this
    ssrPil = document.getElementById("ssrPilgrim");
    ssrPilNikke = ssrPil.querySelectorAll("ul li");
    for (let i = 0; i < ssrPilNikke.length; i++){
        nikke = ssrPilNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    ssrAbn = document.getElementById("ssrAbnormal");
    ssrAbnNikke = ssrAbn.querySelectorAll("ul li");
    for (let i = 0; i < ssrAbnNikke.length; i++){
        nikke = ssrAbnNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    // ASDOHFEIU WHY AM I DOING IT LIKE THIS
    srEly = document.getElementById("srElysion");
    srElyNikke = srEly.querySelectorAll("ul li");
    for (let i = 0; i < srElyNikke.length; i++){
        nikke = srElyNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    srMis = document.getElementById("srMissilis");
    srMisNikke = srMis.querySelectorAll("ul li");
    for (let i = 0; i < srMisNikke.length; i++){
        nikke = srMisNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    srTet = document.getElementById("srTetra");
    srTetNikke = srTet.querySelectorAll("ul li");
    for (let i = 0; i < srTetNikke.length; i++){
        nikke = srTetNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    srAbn = document.getElementById("srAbnormal");
    srAbnNikke = srAbn.querySelectorAll("ul li");
    for (let i = 0; i < srAbnNikke.length; i++){
        nikke = srAbnNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    rEly = document.getElementById("rElysion");
    rElyNikke = rEly.querySelectorAll("ul li");
    for (let i = 0; i < rElyNikke.length; i++){
        nikke = rElyNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    rMis = document.getElementById("rMissilis");
    rMisNikke = rMis.querySelectorAll("ul li");
    for (let i = 0; i < rMisNikke.length; i++){
        nikke = rMisNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    rTet = document.getElementById("rTetra");
    rTetNikke = rTet.querySelectorAll("ul li");
    for (let i = 0; i < rTetNikke.length; i++){
        nikke = rTetNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    file = bigIntToBase64(file);
    const link = "https://crzyp.github.io/NIKKECollection/?" + file;
    navigator.clipboard.writeText(link);
    
    // share toast
    var x = document.getElementById("shareToast");

    // Add the "show" class to DIV
    x.classList.add('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.classList.remove('show'); }, 3000);
}

function save(){
    file = 0n;

    ssrEly = document.getElementById("ssrElysion");
    ssrElyNikke = ssrEly.querySelectorAll("ul li");
    for (let i = 0; i < ssrElyNikke.length; i++){
        nikke = ssrElyNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        console.log(number);
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    ssrMis = document.getElementById("ssrMissilis");
    ssrMisNikke = ssrMis.querySelectorAll("ul li");
    for (let i = 0; i < ssrMisNikke.length; i++){
        nikke = ssrMisNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        console.log(number);
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    ssrTet = document.getElementById("ssrTetra");
    ssrTetNikke = ssrTet.querySelectorAll("ul li");
    for (let i = 0; i < ssrTetNikke.length; i++){
        nikke = ssrTetNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    ssrPil = document.getElementById("ssrPilgrim");
    ssrPilNikke = ssrPil.querySelectorAll("ul li");
    for (let i = 0; i < ssrPilNikke.length; i++){
        nikke = ssrPilNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    ssrAbn = document.getElementById("ssrAbnormal");
    ssrAbnNikke = ssrAbn.querySelectorAll("ul li");
    for (let i = 0; i < ssrAbnNikke.length; i++){
        nikke = ssrAbnNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    srEly = document.getElementById("srElysion");
    srElyNikke = srEly.querySelectorAll("ul li");
    for (let i = 0; i < srElyNikke.length; i++){
        nikke = srElyNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    srMis = document.getElementById("srMissilis");
    srMisNikke = srMis.querySelectorAll("ul li");
    for (let i = 0; i < srMisNikke.length; i++){
        nikke = srMisNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    srTet = document.getElementById("srTetra");
    srTetNikke = srTet.querySelectorAll("ul li");
    for (let i = 0; i < srTetNikke.length; i++){
        nikke = srTetNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    srAbn = document.getElementById("srAbnormal");
    srAbnNikke = srAbn.querySelectorAll("ul li");
    for (let i = 0; i < srAbnNikke.length; i++){
        nikke = srAbnNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    rEly = document.getElementById("rElysion");
    rElyNikke = rEly.querySelectorAll("ul li");
    for (let i = 0; i < rElyNikke.length; i++){
        nikke = rElyNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    rMis = document.getElementById("rMissilis");
    rMisNikke = rMis.querySelectorAll("ul li");
    for (let i = 0; i < rMisNikke.length; i++){
        nikke = rMisNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    
    rTet = document.getElementById("rTetra");
    rTetNikke = rTet.querySelectorAll("ul li");
    for (let i = 0; i < rTetNikke.length; i++){
        nikke = rTetNikke[i];
        if (!nikke.id){
            break;
        }
        number = nikke.id.match(/\d+/)[0] - 1;
        img = nikke.querySelector("img");
        if (img.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }

    file = bigIntToBase64(file);
    console.log("saving " + file)
    localStorage.setItem("nikkeSave", file);
    
    // saved toast
    var x = document.getElementById("savedToast");

    // Add the "show" class to DIV
    x.classList.add('show');

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.classList.remove('show'); }, 3000);
}

function toggleBuilder(){
    const builder = document.getElementById('builder');
    const btn = document.getElementById('builderToggle');
    if (builderOn) {
        builder.classList.remove('showBuilder');
        // haha why do i have global variable builderOn and class builderOn hahhaahaha
        btn.classList.remove('builderOn');
        builderOn = false;
    } else {
        builder.classList.add('showBuilder');
        btn.classList.add('builderOn');
        builderOn = true;
    }
}

function build(id) {
    const li = document.getElementById(`builder${id}`);
    const img = li.querySelector("img");
    //if lastClickedBuilder has a value, change it to this one instead
    if (lastClickedBuilder != null) {
        document.getElementById(`builder${lastClickedBuilder}`).style.backgroundColor = "transparent";
        //if it was this exact builder, turn it off
        if (lastClickedBuilder == id) {
            lastClickedBuilder = null;
            return;
        }
    }
    //if lastClickedChar is null, highlight and wait for new
    if (lastClickedChar == null) {
        li.style.backgroundColor = "#6a6acf";
        lastClickedBuilder = id;
        return;
    }
    //else lastClickedChar has a thing, change it to that char
    img.src = `img/${lastClickedChar}.webp`;
    //reset the char
    const nikke = document.getElementById(`nikke${lastClickedChar}`);
    nikke.style.backgroundColor = "transparent";
    lastClickedChar = null;
    update();
}

function update() {
    const team = document.getElementById("builder").querySelectorAll("ul li");
    //reset counter
    var b1 = false;
    var b2 = false;
    var b3 = false;
    var b1CD = 0;
    var b2CD = 0;
    var b3CD = 0;
    var rh = false;
    var rrh = false;

    //loop through each character
    buildLoop: for (let i = 0; i < team.length; i++) {
        //this gets me the id
        let id = team[i].querySelector("img").src.split("/").pop().split(".").slice(0, -1).join(".");
        //skip blanks
        if (id == "blank") {
            continue;
        }
        //check length for special cases
        if (burstValues[id].length > 2) {
            switch (burstValues[id][2]) {
                //tia
                case 0:
                    continue buildLoop
                //rh
                case 1:
                    rh = true;
                    continue buildLoop;
                //rrh
                case 2:
                    rrh = true;
                    continue buildLoop;
                default:
                    console.log(`Error: unknown special case for ${id}`);
                    continue buildLoop;
            }
        }
        switch (burstValues[id][0]) {
            case 1:
                b1 = true;
                b1CD += burstValues[id][1];
                break;
            case 2:
                b2 = true;
                b2CD += burstValues[id][1];
                break;
            case 3:
                b3 = true;
                b3CD += burstValues[id][1];
                break;
            default:
                console.log(`Error: unknown burst for ${id}`);
        }
    }

    //check for rh and rrh, rrh first cause that is how the logic goes in game
    if (rrh && !b1) {
        b1 = true;
        b1CD += 2;
    } else if (rrh) {
        b3 = true;
        b3CD++;
    }

    if (rh) {
        if (b1CD < 2) {
            b1 = true;
            b1CD++;
        } else if (b2CD < 2) {
            b2 = true;
            b2CD++;
        } else {
            b3 = true;
            b3++;
        }
    }

    //update each warning
    const b1C = document.getElementById("b1Check");
    const b2C = document.getElementById("b2Check");
    const b3C = document.getElementById("b3Check");
    const b1CDC = document.getElementById("b1CDCheck");
    const b2CDC = document.getElementById("b2CDCheck");
    const b3CDC = document.getElementById("b3CDCheck");

    if (b1) {
        b1C.classList.remove("show");
        if (b1CD < 2) {
            b1CDC.classList.add("show");
        } else {
            b1CDC.classList.remove("show");
        }
    } else {
        b1C.classList.add("show");
        b1CDC.classList.remove("show");
    }
    if (b2) {
        b2C.classList.remove("show");
        if (b2CD < 2) {
            b2CDC.classList.add("show");
        } else {
            b2CDC.classList.remove("show");
        }
    } else {
        b2C.classList.add("show");
        b2CDC.classList.remove("show");
    }
    if (b3) {
        b3C.classList.remove("show");
        if (b3CD < 2) {
            b3CDC.classList.add("show");
        } else {
            b3CDC.classList.remove("show");
        }
    } else {
        b3C.classList.add("show");
        b3CDC.classList.remove("show");
    }
    return;
}

async function createTeam(){
    const imgs = [
        document.getElementById("builder0").querySelector("img"),
        document.getElementById("builder1").querySelector("img"),
        document.getElementById("builder2").querySelector("img"),
        document.getElementById("builder3").querySelector("img"),
        document.getElementById("builder4").querySelector("img"),
    ];

    // make canvas big enough to hold them side by side
    const width = imgs[0].naturalWidth * imgs.length;
    const height = imgs[0].naturalHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // draw each image next to each other
    imgs.forEach((img, i) => {
        ctx.drawImage(img, i * img.naturalWidth, 0);
    });

    // turn into blob + copy
    canvas.toBlob(async (blob) => {
        try {
            await navigator.clipboard.write([
                new ClipboardItem({ "image/png": blob }),
            ]);
    
            // share toast
            var x = document.getElementById("teamToast");

            // Add the "show" class to DIV
            x.classList.add('show');

            // After 3 seconds, remove the show class from DIV
            setTimeout(function(){ x.classList.remove('show'); }, 3000);
        } catch (err) {
            console.error(err);
        }
    }, "image/png");
}

function bigIntToBase64(bigInt) {
    // Convert BigInt to a byte array
    const byteArray = [];
    let i = 0;
    while (bigInt > 0) {
        byteArray[i++] = Number(bigInt & 0xFFn); // Take the least significant byte
        bigInt >>= 8n; // Shift right by 8 bits
    }

    // Pad with leading zeros if necessary
    while (byteArray.length < 8) {
        byteArray.push(0); // Pad with zeros to fit 64 bits
    }

    // Convert the byte array to a string
    const binaryString = String.fromCharCode(...byteArray);

    // Encode the string in Base64
    return btoa(binaryString);
}

function base64ToBigInt(base64) {
    // Step 1: Decode Base64 to a binary string
    const binaryString = atob(base64);
  
    // Step 2: Convert binary string to BigInt
    let bigint = BigInt(0);
    for (let i = 0; i < binaryString.length; i++) {
        const byteValue = BigInt(binaryString.charCodeAt(i));
        bigint = (bigint << BigInt(8)) + byteValue;
    }
  
    //reverse the byte order
    const reversedBinaryString = binaryString.split("").reverse();
    bigint = BigInt(0);
    for (let i = 0; i < reversedBinaryString.length; i++) {
        const byteValue = BigInt(reversedBinaryString[i].charCodeAt(0));
        bigint = (bigint << BigInt(8)) + byteValue;
      
    }
  
    return bigint;
}

function bigintToBitArray(bigint) {
    // Convert BigInt to binary string
    const binaryString = bigint.toString(2);
  
    // Map binary string characters to an array of numbers
    return Array.from(binaryString, bit => Number(bit));
}