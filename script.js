const queryString = window.location.search;

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