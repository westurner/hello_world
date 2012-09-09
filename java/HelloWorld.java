import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.LinkedHashMap;
import java.util.SortedSet;

public class HelloWorld {

    public static int product(int x, int y) {
        return x*y;
    }

    public static int product(int x, int y, int z) {
        return x*y*z;
    }

    public static int arrayproduct(int[] args) {
        int product = 1;
        for (int i: args) {
            product *= i;
        }
        return product;
    }

    /*
     *public static int arrayproduct(int[][] args) {
     *    int product = 1;
     *    for (int i: args) {
     *        for (int j: args[i]) {
     *            product *= j;
     *        }
     *    }
     *    return product;
     *}
     */

    public static void main(String[] args) {
        // stdout
        System.out.println("Hello World");

        // basic math
        System.out.println("// basic math");
        double sum = 0;
        sum = 2.0 + 2.0;
        System.out.println(sum);
        double sqrt = Math.sqrt(sum);
        System.out.println(sqrt);

        // for and while loops; nested arrays; functions
        System.out.println("// loops; nested arrays; functions");
        int n = 10;
        int[][] nums = new int[n][n];
        int totalsum = 0;
        int i = 0;
        while (i < n) {
            for (int j = n-1; j > 0; j--) {
                nums[i][j] = product(i,j);
                totalsum += nums[i][j];
                //System.out.println(i + "*" + j + " = " + nums[i][j]);
            }
            i++;
        }

/*
 *        int anotherproduct = arrayproduct(nums[1]);
 *        System.out.printf("anotherproduct: %d\n", anotherproduct);
 *
 *        int totalproduct = arrayproduct(nums);
 *        System.out.printf("totalproduct: %d\n", totalproduct);
 */

        // if-conditionals
        System.out.println("// if-conditionals");
        if (totalsum == 2025) {
            System.out.println("totalsum*5: " + totalsum*5);
        } else if (totalsum == 0) {
            System.out.println("totalsum is zero?");
        } else {
            System.out.println("totalsum is off");
        }

        // function overload (what is this called again?)
        System.out.println("// function overload");
        System.out.println(product(2,3,4));

        // input coercion
        System.out.println("// input coercion");
        int ten = Integer.parseInt("10");
        double tenpointoh = Double.parseDouble("10.0");

        // try/catch blocks
        System.out.println("// try/catch blocks");
        String doublestr = "x20.2";
        try {
            double twentypointtwo = Double.parseDouble(doublestr);
        } catch (java.lang.NumberFormatException e) {
            System.out.println("err: " + doublestr + " is not a double");
        }

        ////
        // ArrayLists
        System.out.println("// ArrayLists");
        ArrayList<Integer> intlist = new ArrayList<Integer>();
        for (int j = 0; j<5; j++) {
            intlist.add(new Integer(j));
        }
        System.out.println(intlist.size());
        intlist.remove(0);
        System.out.println(intlist.size());

        // traditional iteration
        for (Iterator<Integer> it = intlist.iterator(); it.hasNext(); ) {
            Integer nextint = it.next();
            System.out.println(nextint);
        }

        // iteration with downcasting
        for (Iterator it = intlist.iterator(); it.hasNext(); ) {
            Integer nextint = (Integer)it.next();
            System.out.println(nextint);
        }

        // java 5+ iteration
        for (Integer nextint : intlist) {
            System.out.println(nextint);
        }

        ////
        // HashMaps
        System.out.println("// Maps");
        Map<String, Integer> map = new HashMap<String, Integer>();
        map.put("one", 1);
        map.put("two", 2);
        map.put("three", 3);
        map.put("four", 4);
        System.out.println("size = " + map.size());

        String key = "one";
        if (map.containsKey(key)) {
            System.out.println(key + ": " + map.get(key));
        }

        int searchvalue = 10;
        if (map.containsValue(searchvalue)) {
            System.out.println("contains the value '" + searchvalue +"'");
        } else {
            System.out.println("does not contain the value '" + searchvalue +"'");
        }

        for (Map.Entry item : map.entrySet()) {
            System.out.println(item);
        }

        ////
        // Collections, sorting
        // note that there exists a "SortedMap" in stdlib
        System.out.println("// Collections.sort");
        Set<String> keys = map.keySet();
        ArrayList<String> keylist = new ArrayList<String>();
        keylist.addAll(keys);
        Collections.sort(keylist);
        for (String k: keylist) {
            Integer value = map.get(k);
            System.out.println(k + ": " + value);
        }

        ////
        // SortedMap
        System.out.println("// SortedMaps");
        Map<String, Integer> sortedmap = new LinkedHashMap<String, Integer>();
        sortedmap.put("one", 1);
        sortedmap.put("two", 2);
        sortedmap.put("three", 3);
        sortedmap.put("four", 4);
        for (Map.Entry item : sortedmap.entrySet()) {
            System.out.println(item);
        }

        ////
        // invert map
        sortedmap.put("uno", 1);
        Map<Object, Object> invertedmap = new LinkedHashMap<Object, Object>();
        for (Map.Entry item : sortedmap.entrySet()) {
            Object _key = item.getValue();
            Object _value = item.getKey();
            if (invertedmap.containsKey(_key)) {
                Object _currentvalue = invertedmap.get(_key);
                if (!_currentvalue.equals(_value)) {
                    System.out.printf(
                        "duplicate key: '%s' [%s] {{%s}}\n",
                        _key, _value, _currentvalue);
                } else {
                    // uhm.
                }
            } else {
                invertedmap.put(_key, _value); // XXX
            }
        }
        for (Map.Entry item : invertedmap.entrySet()) {
            System.out.println(item);
        }
    }
}
