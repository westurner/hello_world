all: clean build test

clean:
	cake.coffeescript clean
	rm -fv ./*.output

build:
	cake.coffeescript build

test:
	node ./lib/hello_world.js | tee hello_world.output
