all: clean build test

clean:
	rm -fv hello_world *.output

build:
	g++ hello_world.cc -o hello_world

test:
	./hello_world | tee hello_world.output
