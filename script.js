const queryString = window.location.search;

String.prototype.removeCharAt = function (i) {
    var tmp = this.split(''); // convert to an array
    tmp.splice(i - 1 , 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
    return tmp.join(''); // reconstruct the string
}

function loadCollection(){
    let queryString = bigintToBitArray(base64ToBigInt(window.location.search.removeCharAt(1)));
    //yeah, its kinda weird to check if there is a link to load but like wadeva
    if (queryString.length == 1){
        queryString = bigintToBitArray(base64ToBigInt(localStorage.getItem("nikkeSave")));
    }
    // im doing some wack ass reversing like 5 times because of endianess
    queryString.reverse();

    ssrEly = document.getElementById("ssrElysion");
    ssrElyNikke = ssrEly.querySelectorAll("ul li");
    for (let i = 0; i < ssrElyNikke.length; i++){
        nikke = ssrElyNikke[i];
        number = nikke.id.match(/\d+/)[0];
        if (queryString[number - 1] == 1){
            nikke.classList.remove('dim');
            nikke.classList.add('light');
        } else{
            nikke.classList.remove('light');
            nikke.classList.add('dim');
        }
    }
    return;
}

function toggle(id){
    nikke = document.getElementById(`nikke${id}`);
    if (nikke.classList.contains('dim')) {
        nikke.classList.remove('dim');
        nikke.classList.add('light');
    } else {
        nikke.classList.remove('light');
        nikke.classList.add('dim');
    }
}

function share(){
    file = 0n;
    ssrEly = document.getElementById("ssrElysion");
    ssrElyNikke = ssrEly.querySelectorAll("ul li");
    for (let i = 0; i < ssrElyNikke.length; i++){
        nikke = ssrElyNikke[i];
        number = nikke.id.match(/\d+/)[0] - 1;
        if (nikke.classList.contains('light')){
            file += BigInt(2 ** number);
        }
    }
    file = bigIntToBase64(file);
    navigator.clipboard.writeText(file);
    
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
        if (nikke.classList.contains('light')){
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