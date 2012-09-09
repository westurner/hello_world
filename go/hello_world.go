package main

import (
  "fmt"
  "strconv"
  "math"
  "sort"
  "container/list"
  //"strings"
)

func Product(args ...int) int {
  product := 1
  for i := 0; i < len(args); i++ {
    product *= args[i]
  }
  return product
}

func Range(start int, stop int) []int {
  numbers := make([]int, stop-start)
  for i := start; i < stop; i++ {
    numbers[i] = i
  }
  return numbers
}

type OrderedMap struct {
    keys list.List
    data map[string] int
}

func New() *OrderedMap { return new(OrderedMap) }

func (m *OrderedMap) Init() *OrderedMap {
    m.keys = *list.New()
    m.data = *new(map[string] int)
    return m
}

func (m *OrderedMap) Insert(k string, v int) {
    m.keys.PushBack(k)
    m.data[k] = v
}


func main() {
    fmt.Println("Hello World")

    // basic math
    fmt.Println("// basic math")
    _sum := 0.0
    _sum = 2.0 + 2.0
    fmt.Println(_sum)
    _sqrt := math.Sqrt(_sum)
    fmt.Println(_sqrt)

    // for and while loops; nested arrays; functions
    fmt.Println("// loops; nested arrays; functions")
    n := 10
    totalsum := 0
    var nsums [10][10]int
    i := 0
    for i < n {
      for j:= n-1; j >= 0; j-- {
        nsums[i][j] = Product(i,j)
        totalsum += nsums[i][j]
      }
      i++
    }

    // if-conditionals
    fmt.Println("// if-conditionals")
    if totalsum==2025 {
        fmt.Printf("totalsum*5: %d\n", totalsum*5)
    } else if totalsum==0 {
        fmt.Println("totalsum is zero?")
    } else {
        fmt.Println("totalsum is off")
      }

    // function overload (what is this called again?)
    fmt.Println("// function overload") // not really
    fmt.Println(Product(2,3,4));

    // input coercion
    fmt.Println("// input coercion");
    ten, err := strconv.ParseInt("10", 10, 32) // TODO 
    _ = ten
    tenpointoh, err:= strconv.ParseFloat("10.0", 64) // XXX
    _ = tenpointoh

    // try/except blocks
    fmt.Println("// try/catch blocks")
    twentypointtwo := "x20.2"
    doublestr, err := strconv.ParseFloat(twentypointtwo, 64)
    if err != nil {
      fmt.Printf("err: %s is not a double\n", twentypointtwo)
    }
    doublestr, err = strconv.ParseFloat(twentypointtwo[1:], 64)
    fmt.Println(doublestr)

    ////
    // Arraylists
    fmt.Println("// ArrayLists")
    intlist := Range(0,5)
    fmt.Println(len(intlist))
    intlist = intlist[:len(intlist)-1] // pop
    fmt.Println(len(intlist))

    // traditional iteration
    for nextint := range intlist {
      fmt.Println(nextint)
    }

    // iteration with downcasting
    for nextint := range intlist {
      fmt.Println(nextint)
    }

    // go string join
    // strform := map(strconv.Itoa, intlist)
    // fmt.Println( strings.Join(intlist, "\n") ) // no upcasting

    ////
    // HashMaps
    fmt.Println("// Maps")
    var _map = map[string] int {
      "one": 1,
      "two": 2,
      "three": 3,
      "four": 4,
    }
    fmt.Printf("size = %d\n", len(_map))

    key := "one"
    lookup := _map[key]
    if lookup != 0 {
      fmt.Printf("%s = %d\n", key, lookup)
    }

    searchvalue := 10
    found := false
    for _, value := range _map {
      if value == searchvalue {
        fmt.Printf("contains the value '%d'\n", searchvalue)
        found = true
        break
      }
    }
    if (!found) {
      fmt.Printf("does not contain the value '%d'\n", searchvalue)
    }

    for k,v := range _map {
      fmt.Printf("%s=%d\n", k, v)
    }

    ////
    // Collections, sorting
    fmt.Println("// Collections.sort")
    //for k,v := range template.sortKeys(reflect.MapKeys(reflect.ValueOf(_map))) {
    //  fmt.Printf("%s=%d\n", k, v)
    //}
    keys := make([]string, len(_map))
    i = 0
    for k, _ := range _map {
      keys[i] = k
      fmt.Println(keys[i])
      i++
    }
    sort.Strings(keys)
    for i := range keys {
      fmt.Printf("%s: %d\n", keys[i], _map[keys[i]])
    }

    ////
    // OrderedDict
    m := New()

    m.Insert("one", 1)
    //fmt.Println(*m.data)
    //for k,v := range (*m.data) {
    //    fmt.Printf("%s=%d\n", k, v)
    //}
    //Insert(orderedmap, "two", 2)
    //Insert(orderedmap, "three", 3)
    //Insert(orderedmap, "four", 4)
}
