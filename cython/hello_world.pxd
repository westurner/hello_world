#!/usr/bin/env python
from __future__ import print_function
from operator import mul
from collections import OrderedDict # python 2.7+
import math
import cython

# TODO: reconcile fused types (cython > 0.16) with significant digits

cdef class HelloWorld:
    cpdef double product(self, tuple args)
    @cython.locals(
        _sum = cython.double,
        sqrt = cython.double, #
        n = cython.int,
        totalsum = cython.int,
        i = cython.int,
        nsums = list, #cython.double[10][10],
        ten = cython.int,
        tenpointoh = cython.double,
        doublestr = str,
        twentypointtwo = cython.double,
        intlist = list,
        key = str,
        searchvalue = str
    )
    cpdef main(self)
