#!/usr/bin/env node
var Print = function (str) {
    console.log(str);
};

function HelloWorld () {

}

HelloWorld.prototype.product = function() {
    var product = 1;
    var _length = arguments.length;
    for (var i = 0; i < arguments.length; i++) {
        product = product* arguments[i];
    }
    return product;
};
HelloWorld.prototype.range = function(start,stop) {
    var range = Array();
    for (var i = start; i<stop; i++) {
        range.push(i); // Javascript >= 1.7 has a 'yield' statement
    }
    return range;
}

HelloWorld.prototype.main = function() {
    // stdout
    Print("Hello world");

    // basic math
    Print("// basic math");
    var _sum = 0;
    _sum = 2.0 + 2.0;
    Print(_sum);
    var sqrt = Math.sqrt(_sum);
    Print(sqrt);

    // for and while loops; nested arrays; functions
    Print("// loops; nested arrays; functions");
    var n = 10;
    var nsums = Array(n);
    var totalsum = 0;
    var i = 0;
    while (i < n) {
        nsums[i] = Array(n);
        for (var j = n-1; j >= 0; j--) {
            nsums[i][j] = this.product(i,j);
            totalsum += nsums[i][j];
        }
        i+=1;
    }

    Print("// if-conditionals");
    if (totalsum===2025) {
        Print("totalsum*5: " + totalsum*5);
    } else if (totalsum===0) {
        Print("totalsum is zero?");
    } else {
        print("totalsum is off");
    }

    // function overload (what is this called again?)
    Print("// function overload"); // not really
    Print(this.product(2,3,4));

    // input coercion
    Print("// input coercion");
    var ten = parseInt("10"); 
    var tenpointoh = parseFloat("10.0");

    // try/except blocks
    Print("// try/catch blocks");
    var doublestr = "x20.2";
    try {
        var twentypointtwo = parseFloat(doublestr);
        if (twentypointtwo === NaN) {
            throw ("'" + twentypointtwo + "' is not a double");
        }
    } catch(err) {
        Print("err: " + doublestr + " is not a double");
        Print(err);
    } finally {
        doublestr = doublestr.substring(1,-1); // TODO
        var twentypointtwo = parseFloat(doublestr);
    }

    ////
    // Arraylists
    Print("// ArrayLists");
    var intlist = this.range(0,5);
    Print(intlist.length);
    var _ = intlist.pop(0);
    Print(intlist.length);

    // traditional iteration
    var _length = intlist.length;
    for (var i=0; i < _length; i++) {
        Print(intlist[i]);
    }

    // iteration with downcasting
    var _length = intlist.length;
    for (var i=0; i < _length; i++) {
        Print(intlist[i]);
    }

    // string join
    Print(intlist.join("\n"));

    ////
    // HashMaps
    Print("// Maps");
    var map = {};
    map['one'] = 1;
    map['two'] = 2;
    map['three'] = 3;
    map['four'] = 4;
    Print("size = " + map.length); // TODO: uhhh

    var key = "one";
    if ( map.hasOwnProperty(key) ) {
        Print(key + ": " + map[key]);
    }

    var searchvalue = "four";
    var foundvalue = false;
    for (key in map) {
        if (map[key] === searchvalue) {
            Print("contains the value '" + searchvalue + "'");
            foundvalue = true;
        }
    }
    if (!foundvalue) {
        Print("does not contain the value '" + searchvalue + "'");
    }

    for (key in map) {
        Print(key+"="+map[key]);
    }

    ////
    // Collections, sorting
    Print("// Collections.sort");
    var keys = [];
    for (key in map) {
        keys.push(key);
    }
    keys = keys.sort();
    var _length = keys.length;
    for (var i = 0; i < _length; i++) {
        var key = keys[i];
        Print(key + "=" + map[key]);
    }

    ////
    // OrderedMap
    Print("// OrderedMap");
    var mapkeys = [];
    var sortedmap = {};
    var pushKey = function(obj, key, value) {
        mapkeys.push(key);
        sortedmap[key] = value;
    }
    pushKey(sortedmap, "one", 1);
    pushKey(sortedmap, "two", 2);
    pushKey(sortedmap, "three", 3);
    pushKey(sortedmap, "four", 4);
    var _keylength = mapkeys.length;
    for (var i = 0; i < _keylength; i++) {
        var _key = keys[i];
        Print(_key + "=" + sortedmap[_key]);
    }

    ////
    // invert dict
    pushKey(sortedmap, "uno", 1);
    invertedmap = {};
    for (var i = 0; i < _keylength; i++) {
        var _key = keys[i];
        var _value = sortedmap[_key];
        var _currentvalue = invertedmap[_key];
        if (_currentvalue !== undefined && _currentvalue !== _key) { // TODO
            Print("duplicate key: '" + _value + "' [" + _key + 
                    "] {{" + _currentvalue + "}}");
        } else {
            invertedmap[_value] = _key;
        }
    }
    for (key in invertedmap) {
        Print(key + "=" + invertedmap[key]);
    }

};

var hw = new HelloWorld;
hw.main();
