class HelloWorld
    def product(*args)
        return args.reduce(:*)
    end

    def main
        # stdout
        puts "Hello World";

        # basic math
        puts "//basic math"
        sum = 0
        sum = 2.0 + 2.0
        puts sum
        sqrt = Math.sqrt(sum)
        puts sqrt

        # for and while loops; nested arrays; functions
        puts "// loops; nested arrays; functions"
        n = 10
        nsums = []
        totalsum = 0
        i = 0
        while (i < n)
            nsums.push [nil,]*n
            for j in (0..n-1).reverse_each
                nsums[i][j] = product(i,j)
                totalsum += nsums[i][j]
            end
            i+=1
        end

        # if-conditionals
        puts "// if-conditionals"
        if totalsum == 2025
            puts "totalsum*5: #{totalsum*5}"
        elsif totalsum == 0
            puts "totalsum is zero?"
        else
            puts "totalsum is off"
        end

        # function overload (what is this called again?)
        puts "//function overload"
        puts product(2,3,4) # TODO

        # input coercion
        puts "// input coercion"
        ten = Integer("10")
        tenpointoh = Float("10.0")

        # begin/rescue blocks
        puts "// begin/rescue blocks"
        doublestr = "x20.2"
        begin
            twentypointtwo = Float(doublestr)
        rescue
            puts "err: '#{doublestr}' is not a double"
            puts "#{$!}"
        ensure
            doublestr = doublestr[1..-1]
            twentypointtwo = Float(doublestr)
        end

        ##
        # Arraylists
        puts "// ArrayLists"
        intlist = Array(0..4)
        puts intlist.length
        intlist.pop 0
        puts intlist.length

        # traditional iteration
        intlist.each do |nextint|
            puts nextint
        end

        # iteration with downcasting
        intlist.each do |nextint|
            puts nextint
        end

        # ruby iteration
        puts intlist.join("\n")

        ##
        # HashMaps
        puts "// Maps"
        map = Hash.new
        map['one'] = 1
        map['two'] = 2
        map['three'] = 3
        map['four'] = 4
        puts "size = #{map.length}"

        key = "one"
        if map.key? key # also has_key?
            puts "#{key}: #{map[key]}"
        end

        searchvalue = "four"
        if map.value? searchvalue # also has_value?
            puts "contains the value '#{searchvalue}'"
        else
            puts "does not contain the value '#{searchvalue}'"
        end

        map.each do |k,v|
            puts "#{k}=#{v}"
        end

        ##
        # Collections, sorting
        #
        puts "// Collections.sort"
        map.keys.each do |k|
            puts "#{k}: #{map[k]}"
        end

        ##
        # OrderedDict
        # ruby >= 1.9 maintains Hash insertion order
        puts " // OrderedDict"
        sortedmap = Hash.new
        sortedmap['one'] = 1
        sortedmap['two'] = 2
        sortedmap['three'] = 3
        sortedmap['four'] = 4
        puts "size = #{sortedmap.length}"
        sortedmap.each do |k,v|
            puts "#{k}=#{v}"
        end

        ##
        # invert dict
        sortedmap['uno'] = 1
        invertedmap = Hash.new
        sortedmap.each do |k,v|
            _currentvalue = invertedmap[v] # XXX: "default" = nil (sentinel)
            if _currentvalue != nil
                puts "duplicate key: '#{v}' [#{k}] {{#{_currentvalue}}}"
            else
                invertedmap[v] = k
            end
        end
        invertedmap.each do |k,v|
            puts "#{k}=#{v}"
        end
    end
end 
        

if __FILE__ == $0
    hw = HelloWorld.new
    hw.main
end
