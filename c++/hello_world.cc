#include <exception>
#include <iostream>
#include <sstream>
#include <string>
#include <cstring>
#include <cstdlib>
#include <stdio.h>
#include <math.h>


#include <list>
#include <map>

using namespace std;

// TODO: require boost::lexical_cast
template<class T> T fromString(const std::string& s) {
  std::istringstream stream (s);
  T t;
  stream >> t;
  return t;
}

class HelloWorld {
  public:
    HelloWorld();
    ~HelloWorld();
    int product (int, int);
    int product (int, int*); 
    void main();
};

HelloWorld::HelloWorld () {
  printf("init\n");
}
HelloWorld::~HelloWorld () {
  printf("destruct");
}
int HelloWorld::product (int arg1, int arg2) {
  return arg1*arg2;
}
int HelloWorld::product (int nargs, int* args) {
  int product = 1;
  for (int i=0; i < nargs; i++) {
    product *= args[i];
  }
  return product;
}
void HelloWorld::main() {
  printf("Hello World\n");

  // basic math
  printf("// basic math\n");
  int _sum = 0;
  _sum = 2.0 + 2.0;
  printf("%d\n", _sum);
  int sqrt_of_sum = sqrt(_sum);
  printf("%d\n", sqrt_of_sum);

  // for and while loops; nested arrays; functions
  printf("// loops; nested arrays; functions\n");
  int n = 10;
  int nsums[10][10];
  int totalsum = 0;
  int i = 0;
  while (i < n) {
    for (int j=n-1; j>=0; j--) {
      nsums[i][j] = this->product(i, j);
      totalsum += nsums[i][j];
    }
    i += 1;
  }
  
  // if-conditionals
  printf("// if-conditionals\n");
  if (totalsum==2025) {
    printf("totalsum*5: %d\n", totalsum*5);
  } else if (totalsum==0) {
    printf("totalsum is zero?\n");
  } else {
    printf("totalsum is off\n");
  }
  
  // function overload (what is this called again?)
  int args[3];
  args[0] = 2;
  args[1] = 3;
  args[2] = 4;
  int product = this->product(3, args);
  printf("%d\n", product);

  // input coercion
  printf("// input coercion\n");
  std::string num = "10";
  int ten = ::atoi(num.c_str());
  std::string tenpointohstr = "10.0";
  float tenpointoh = ::atof(tenpointohstr.c_str());

  // try/except blocks
  printf("// try/catch block\n");
  std::string doublestr = "x20.2";
  try {
    double twentypointtwo = fromString<double>(doublestr.c_str());
    //double twentypointtwo = ::strtod(doublestr.c_str());
    if (twentypointtwo==0.0) { // XXX: 0.0 as 'sentinel' value
      // TODO: require boost::lexical_cast
      printf("err: %s is not a double\n", doublestr.c_str());
    }
  } catch (exception& e) {
    printf("err: %s is not a double\n", doublestr.c_str());
  } // there is no finally
  std::string _doublestr = doublestr.substr(1, doublestr.size());
  float twentypointtwo = ::atof(_doublestr.c_str());


  ////
  // ArrayLists
  printf("// ArrayLists\n");
  int ints[] = {0,1,2,3,4};
  list<int> intlist (ints,ints+5); // XXX: pointer arithmetic
  printf("%d\n", intlist.size());
  intlist.pop_back();
  printf("%d\n", intlist.size());

  // traditional iteration
  std::list<int>::iterator it;
  for ( it=intlist.begin() ; it != intlist.end(); it++)
    printf("%d\n", (*it));

  // iteration with downcasting
  for ( it=intlist.begin() ; it != intlist.end(); it++)
    printf("%d\n", (*it));

  //// HashMaps
  printf("// Maps\n");
  std::map<string,int> _map;
  std::map<string,int>::iterator iter;
  //pair<map<string,int>::iterator,bool> ret;
  _map.insert( pair<string,int>("one",1) );
  _map.insert( pair<string,int>("two",2) );
  _map.insert( pair<string,int>("three",3) );
  _map.insert( pair<string,int>("four",4) );
  printf("size = %d\n", _map.size());

  std::string key = "one";
  iter = _map.find(key);
  if (iter != _map.end())
    printf("%s: %d\n", key.c_str(), (*iter).second);

  int searchvalue = 10;
  bool foundvalue = false;
  for (iter=_map.begin(); iter != _map.end(); iter++) {
    if (searchvalue == (*iter).second) {
      printf("contains the value '%d'\n", searchvalue);
      foundvalue = true;
      break;
    }
  }
  if (!foundvalue) {
    printf("does not contain the value '%d'\n", searchvalue);
  }
  
  for (iter = _map.begin(); iter != _map.end(); iter++)
    printf("%s=%d\n", (*iter).first.c_str(), (*iter).second);

  ////
  // Collections, sorting
  printf("// Collections.sort\n"); 
  list<string> keys;
  for (iter = _map.begin(); iter != _map.end(); iter++)
    keys.push_back((*iter).first);
  keys.sort(); // actually already sorted
  list<string>::iterator listiter;
  for (listiter = keys.begin(); listiter!=keys.end(); listiter++) 
    printf("%s = %d\n",
        (*listiter).c_str(),
        (*(_map.find(*listiter))).second);

  // invert dict
  _map.insert( pair<string,int>("uno", 1) );
  std::map<int,string> invertedmap;
  std::map<int,string>::iterator inviter;
  for (iter = _map.begin(); iter != _map.end(); iter++) {
    inviter = invertedmap.find( (*iter).second );
    if (inviter != invertedmap.end()) {
      if ( (*inviter).first != (*iter).second ) {
        printf("duplicate key: '%d' [%s] {{%s}}",
            (*iter).second,
            (*iter).first.c_str(),
            (*inviter).second.c_str());
      }
     } else {
       invertedmap.insert( pair<int,string>( (*iter).second, (*iter).first) );
     }
  }
  for (inviter = invertedmap.begin(); inviter != invertedmap.end(); inviter++)
    printf("%d = %s\n",
        (*inviter).first,
        (*inviter).second.c_str());
}

int main(int nargs, char *argv[]) {
  HelloWorld hw;
  hw.main();
  return 0;
}
