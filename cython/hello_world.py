#!/usr/bin/env python
from __future__ import print_function
from operator import mul
from collections import OrderedDict # python 2.7+
from itertools import imap
import math

class HelloWorld:
    def product(self, args):
        return reduce(mul, args)

    def main(self):
        # stdout
        print("Hello World");

        # basic math
        print("// basic math")
        _sum = 0
        _sum = 2.0 + 2.0
        print(_sum)
        sqrt = math.sqrt(_sum)
        print(sqrt)

        # for and while loops; nested arrays; functions
        print("// loops; nested arrays; functions")
        n = 10
        nsums = [] # XXX: see hello_world.pxd
        totalsum = 0
        i = 0
        while (i < n):
            nsums.append([None,]*n)
            for j in range(n)[::-1]:
                nsums[i][j] = self.product((i, j)) # preallocation?
                totalsum += nsums[i][j]
            i+=1

        # if-conditionals
        print("// if-conditionals")
        if totalsum==2025:
            print("totalsum*5: %d" % (totalsum*5))
        elif totalsum==0:
            print("totalsum is zero?")
        else:
            print("totalsum is off")

        # function overload (what is this called again?)
        print("// function overload") # not really
        print(self.product((2,3,4)))

        # input coercion
        print("// input coercion")
        ten = int("10")
        tenpointoh = float("10.0")

        # try/except blocks
        print("// try/catch blocks")
        doublestr = "x20.2"
        try:
            twentypointtwo = float(doublestr)
        except Exception, e: # TODO
            print("err: %s is not a double" % doublestr)
        finally:
            doublestr = doublestr[1:]
            twentypointtwo = float(doublestr)

        ##
        # Arraylists
        print("// ArrayLists")
        intlist = []
        intlist = range(5)
        print(len(intlist))
        intlist.pop(0)
        print(len(intlist))

        # traditional iteration
        for nextint in intlist:
            print(nextint)

        # iteration with downcasting
        for nextint in intlist:
            print(nextint)

        # python iteration
        print("\n".join(imap(str, intlist)))

        ##
        # HashMaps
        print("// Maps")
        _map = {}
        _map['one'] = 1
        _map['two'] = 2
        _map['three'] = 3
        _map['four'] = 4
        print("size = %d" % len(_map))

        key = "one"
        if key in _map:
            print("%s: %s" % (key, _map[key]))

        searchvalue = "four"
        if searchvalue in _map.values():
            print("contains the value '%s'" % searchvalue)
        else:
            print("does not contain the value '%s'" % searchvalue)

        for k,v in _map.iteritems():
            print('%s=%s' % (k,v))

        ##
        # Collections, sorting
        # note that there exists an "OrderedDict" in stdlib
        print("// Collections.sort")
        for k in sorted(_map.iterkeys()):
            print("%s: %s" % (k, _map[k]))

        ##
        # OrderedDict
        print("// OrderedDict")
        sortedmap = OrderedDict()
        sortedmap['one'] = 1
        sortedmap['two'] = 2
        sortedmap['three'] = 3
        sortedmap['four'] = 4
        for (k,v) in sortedmap.iteritems():
            print("%s=%s" % (k,v))

        ##
        # invert dict
        sortedmap['uno'] = 1
        invertedmap = OrderedDict()
        for (k,v) in sortedmap.iteritems():
            _currentvalue = invertedmap.get(v, None) # XXX: sentinel = None
            if _currentvalue is not None:
                if _currentvalue != k:
                    print("duplicate key: '%s' [%s] {{%s}}" %
                            (v, k, _currentvalue))
            else:
                invertedmap[v] = k
        for (k,v) in invertedmap.iteritems():
            print("%s=%s" % (k,v))


if __name__=="__main__":
    cls = HelloWorld()
    cls.main()
