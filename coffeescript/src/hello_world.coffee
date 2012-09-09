_ = require('underscore')

HelloWorld =
  print: (str) ->
    console.log str

  product: () ->
    _.reduce(arguments, ((x, y) -> x*y))

  main: () ->
    # stdout
    this.print "Hello World"

    # basic math
    this.print "// basic math"
    _sum = 0
    _sum = 2.0 + 2.0
    this.print _sum
    sqrt = Math.sqrt(_sum)
    this.print sqrt

    # for and while loops; nested arrays; functions
    this.print "// loops; nested arrays; functions"
    n = 10
    nsums = []
    totalsum = 0
    i = 0
    while (i<n)
      nsums.push Array(n)
      for j in (num for num in [n-1..0])
        nsums[i][j] = this.product(i,j)
        totalsum += nsums[i][j]
      i+=1

    # if-conditionals
    this.print "// if-conditionals"
    if totalsum==2025
      this.print "totalsum*5: " + totalsum*5
    else if totalsum==0
      this.print "totalsum is zero"
    else
      this.print "totalsum is off"

    # function overload (what is this called again?)
    this.print "// function overload"
    this.print this.product(2,3,4)

    # input coercion
    ten = parseInt("10")
    tenpointoh = parseFloat("10.0")

    # try/catch blocks
    this.print "// try/catch blocks"
    doublestr = "x20.2"
    try
      twentypointtwo = parseFloat(doublestr)
      if twentypointtwo == NaN
        throw "'" + twentypointtwo + "' is not a float"
    catch error
      this.print "err: '" + doublestr + "' is not a double"
    finally
      doublestr = doublestr[1..]
      twentypointtwo = parseFloat(doublestr)

    ##
    # ArrayLists
    this.print "// ArrayLists"
    intlist = [0..4]
    this.print intlist.length
    intlist.pop(0)
    this.print intlist.length

    # traditional iteration # TODO
    for nextint in intlist
      this.print nextint

    # iteration with downcasting
    for nextint in intlist
      this.print nextint

    # javascript string join
    this.print intlist.join("\n")

    ##
    # HashMaps
    this.print "// Maps"
    map = {}
    map['one'] = 1
    map['two'] = 2
    map['three'] = 3
    map['four'] = 4
    this.print _.keys(map).length

    key = "one"
    if key in map
      this.print key + ": " + map[key]

    searchvalue = "four"
    if _.indexOf(_.values(map), searchvalue) != -1
      this.print "contains the value '" + searchvalue + "'"
    else
      this.print "does not contain the value '" + searchvalue + "'"

    for key in _.keys(map)
      this.print key + "=" + map[key]

    ## Collections, sorting
    this.print "// Collections.sort"
    for k in _.keys(map).sort()
        this.print k + ": " + map[k]

    ##
    # OrderedDict
    this.print "OrderedDict"

    keyorder = []
    pushKey = (obj,k,v) ->
        keyorder.push k
        obj[k] = v
    sortedmap = {}
    pushKey(sortedmap, "one", 1)
    pushKey(sortedmap, "two", 2)
    pushKey(sortedmap, "three", 3)
    pushKey(sortedmap, "four", 4)
    for key in keyorder
        this.print key + "=" + sortedmap[key]

    ##
    # invert dict
    pushKey(sortedmap, "uno", 1)
    invertedmap = {}
    for k in keyorder
        v = sortedmap[k]
        _currentvalue = invertedmap[v]
        if _currentvalue != undefined
            if _currentvalue != k
                this.print "duplicate key: '" + v + "' [" + k + "] {{" +
                    _currentvalue + "}}"
        else
            invertedmap[v] = k
    for key in _.keys(invertedmap)
        this.print key + "=" + invertedmap[key]

HelloWorld.main()
