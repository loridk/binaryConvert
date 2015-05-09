/**
 * Created by Lori DK on 5/8/2015.
 */


function convert() {

    var form, fname, lname, fBinary, lBinary, lower, upper, fnameArray, lnameArray, i, finputArea, linputArea, foutputArea, loutputArea;

    // get input
    form = document.getElementById("form"); // form
    fname = document.getElementById("fname").value; // first name input
    fname = fname.replace(/[^\w]/gi, ''); // trim everything but letters
    lname = document.getElementById("lname").value; // last name input
    lname = lname.replace(/[^\w]/gi, ''); // trim everything but letters

    if (!fname && !lname){
        alert("Please enter a first and/or last name");
    }

    else {


    fBinary = []; // first name converted output
    lBinary = []; // last name converted output
    lower = /[a-z]/g; // pattern for lowercase
    upper = /[A-Z]/g; // pattern for uppercase

    // break strings into array
    fnameArray = fname.split(''); // put letters of first name into array
    lnameArray = lname.split(''); // put letters of last name into array

    // ascii num to binary conversion
    function dec2Bin (num){
        num = num.toString(2);
        if (num.length != 8) {
            num = "0" + num;
        }
        return num;
    }


    // switch function

    function letterToNum (letter) {
        // if lowercase
        if (letter.match(lower)) {

            // convert each char
            // get ascii number
            switch (letter) {
                case "a":
                    letter = 97;
                    break;
                case "b":
                    letter = 98;
                    break;
                case "c":
                    letter = 99;
                    break;
                case "d":
                    letter = 100;
                    break;
                case "e":
                    letter = 101;
                    break;
                case "f":
                    letter = 102;
                    break;
                case "g":
                    letter = 103;
                    break;
                case "h":
                    letter = 104;
                    break;
                case "i":
                    letter = 105;
                    break;
                case "j":
                    letter = 106;
                    break;
                case "k":
                    letter = 107;
                    break;
                case "l":
                    letter = 108;
                    break;
                case "m":
                    letter = 109;
                    break;
                case "n":
                    letter = 110;
                    break;
                case "o":
                    letter = 111;
                    break;
                case "p":
                    letter = 112;
                    break;
                case "q":
                    letter = 113;
                    break;
                case "r":
                    letter = 114;
                    break;
                case "s":
                    letter = 115;
                    break;
                case "t":
                    letter = 116;
                    break;
                case "u":
                    letter = 117;
                    break;
                case "v":
                    letter = 118;
                    break;
                case "w":
                    letter = 119;
                    break;
                case "x":
                    letter = 120;
                    break;
                case "y":
                    letter = 121;
                    break;
                case "z":
                    letter = 122;
                    break;
            }
        }
        // if uppercase
        else if (letter.match(upper)) {


            // convert each char
            // get ascii number
            switch (letter) {
                case "A":
                    letter = 65;
                    break;
                case "B":
                    letter = 66;
                    break;
                case "C":
                    letter = 67;
                    break;
                case "D":
                    letter = 68;
                    break;
                case "E":
                    letter = 69;
                    break;
                case "F":
                    letter = 70;
                    break;
                case "G":
                    letter = 71;
                    break;
                case "H":
                    letter = 72;
                    break;
                case "I":
                    letter = 73;
                    break;
                case "J":
                    letter = 74;
                    break;
                case "K":
                    letter = 75;
                    break;
                case "L":
                    letter = 76;
                    break;
                case "M":
                    letter = 77;
                    break;
                case "N":
                    letter = 78;
                    break;
                case "O":
                    letter = 79;
                    break;
                case "P":
                    letter = 80;
                    break;
                case "Q":
                    letter = 81;
                    break;
                case "R":
                    letter = 82;
                    break;
                case "S":
                    letter = 83;
                    break;
                case "T":
                    letter = 84;
                    break;
                case "U":
                    letter = 85;
                    break;
                case "V":
                    letter = 86;
                    break;
                case "W":
                    letter = 87;
                    break;
                case "X":
                    letter = 88;
                    break;
                case "Y":
                    letter = 89;
                    break;
                case "Z":
                    letter = 90;
                    break;
            }

        }
        return letter;
    }

    // go through arrays

    // first name
    for (i = 0; i < fnameArray.length; i++) {
        fnameArray[i] = letterToNum(fnameArray[i]); // get ascii number
        fnameArray[i] = dec2Bin(fnameArray[i]);    // convert # to binary
        fBinary.push(fnameArray[i]); // push to binary array
        }
    

    // last name

    for (i = 0; i < lnameArray.length; i++) {
        lnameArray[i] = letterToNum(lnameArray[i]); // get ascii number
        lnameArray[i] = dec2Bin(lnameArray[i]);    // convert # to binary
        lBinary.push(lnameArray[i]); // push to binary array
    }


    // print output
        // grab first name areas
    finputArea = document.getElementById("finput");
    foutputArea = document.getElementById("foutput");
        // grab last name areas
    linputArea = document.getElementById("linput");
    loutputArea = document.getElementById("loutput");


        // print first
    finputArea.innerHTML = fname;
        // split array to string for print
    foutputArea.innerHTML = fnameArray.join(" ");

        // print last
    linputArea.innerHTML = lname;
    // split array to string for print
    loutputArea.innerHTML = lnameArray.join(" ");


    // tests
    console.log(fname);
    console.log(lname);
    console.log(fBinary);
    console.log(lBinary);


    }
}

// reset form
function reset() {
    document.getElementById("form").reset();
}
