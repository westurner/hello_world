var HelloWorld, _,
  __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

_ = require('underscore');

HelloWorld = {
  print: function(str) {
    return console.log(str);
  },
  product: function() {
    return _.reduce(arguments, (function(x, y) {
      return x * y;
    }));
  },
  main: function() {
    var doublestr, i, intlist, invertedmap, j, k, key, keyorder, map, n, nextint, nsums, num, pushKey, searchvalue, sortedmap, sqrt, ten, tenpointoh, totalsum, twentypointtwo, v, _currentvalue, _i, _j, _k, _l, _len, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _m, _n, _o, _p, _ref, _ref2, _ref3, _ref4, _results, _sum;
    this.print("Hello World");
    this.print("// basic math");
    _sum = 0;
    _sum = 2.0 + 2.0;
    this.print(_sum);
    sqrt = Math.sqrt(_sum);
    this.print(sqrt);
    this.print("// loops; nested arrays; functions");
    n = 10;
    nsums = [];
    totalsum = 0;
    i = 0;
    while (i < n) {
      nsums.push(Array(n));
      _ref = (function() {
        var _ref, _results;
        _results = [];
        for (num = _ref = n - 1; _ref <= 0 ? num <= 0 : num >= 0; _ref <= 0 ? num++ : num--) {
          _results.push(num);
        }
        return _results;
      })();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        j = _ref[_i];
        nsums[i][j] = this.product(i, j);
        totalsum += nsums[i][j];
      }
      i += 1;
    }
    this.print("// if-conditionals");
    if (totalsum === 2025) {
      this.print("totalsum*5: " + totalsum * 5);
    } else if (totalsum === 0) {
      this.print("totalsum is zero");
    } else {
      this.print("totalsum is off");
    }
    this.print("// function overload");
    this.print(this.product(2, 3, 4));
    ten = parseInt("10");
    tenpointoh = parseFloat("10.0");
    this.print("// try/catch blocks");
    doublestr = "x20.2";
    try {
      twentypointtwo = parseFloat(doublestr);
      if (twentypointtwo === NaN) throw "'" + twentypointtwo + "' is not a float";
    } catch (error) {
      this.print("err: '" + doublestr + "' is not a double");
    } finally {
      doublestr = doublestr.slice(1);
      twentypointtwo = parseFloat(doublestr);
    }
    this.print("// ArrayLists");
    intlist = [0, 1, 2, 3, 4];
    this.print(intlist.length);
    intlist.pop(0);
    this.print(intlist.length);
    for (_j = 0, _len2 = intlist.length; _j < _len2; _j++) {
      nextint = intlist[_j];
      this.print(nextint);
    }
    for (_k = 0, _len3 = intlist.length; _k < _len3; _k++) {
      nextint = intlist[_k];
      this.print(nextint);
    }
    this.print(intlist.join("\n"));
    this.print("// Maps");
    map = {};
    map['one'] = 1;
    map['two'] = 2;
    map['three'] = 3;
    map['four'] = 4;
    this.print(_.keys(map).length);
    key = "one";
    if (__indexOf.call(map, key) >= 0) this.print(key + ": " + map[key]);
    searchvalue = "four";
    if (_.indexOf(_.values(map), searchvalue) !== -1) {
      this.print("contains the value '" + searchvalue + "'");
    } else {
      this.print("does not contain the value '" + searchvalue + "'");
    }
    _ref2 = _.keys(map);
    for (_l = 0, _len4 = _ref2.length; _l < _len4; _l++) {
      key = _ref2[_l];
      this.print(key + "=" + map[key]);
    }
    this.print("// Collections.sort");
    _ref3 = _.keys(map).sort();
    for (_m = 0, _len5 = _ref3.length; _m < _len5; _m++) {
      k = _ref3[_m];
      this.print(k + ": " + map[k]);
    }
    this.print("OrderedDict");
    keyorder = [];
    pushKey = function(obj, k, v) {
      keyorder.push(k);
      return obj[k] = v;
    };
    sortedmap = {};
    pushKey(sortedmap, "one", 1);
    pushKey(sortedmap, "two", 2);
    pushKey(sortedmap, "three", 3);
    pushKey(sortedmap, "four", 4);
    for (_n = 0, _len6 = keyorder.length; _n < _len6; _n++) {
      key = keyorder[_n];
      this.print(key + "=" + sortedmap[key]);
    }
    pushKey(sortedmap, "uno", 1);
    invertedmap = {};
    for (_o = 0, _len7 = keyorder.length; _o < _len7; _o++) {
      k = keyorder[_o];
      v = sortedmap[k];
      _currentvalue = invertedmap[v];
      if (_currentvalue !== void 0) {
        if (_currentvalue !== k) {
          this.print("duplicate key: '" + v + "' [" + k + "] {{" + _currentvalue + "}}");
        }
      } else {
        invertedmap[v] = k;
      }
    }
    _ref4 = _.keys(invertedmap);
    _results = [];
    for (_p = 0, _len8 = _ref4.length; _p < _len8; _p++) {
      key = _ref4[_p];
      _results.push(this.print(key + "=" + invertedmap[key]));
    }
    return _results;
  }
};

HelloWorld.main();
