all: clean build test

clean:
	rm -fv ./hello_world ./*.output
	go clean

build:
	go vet hello_world.go
	go build -v -o hello_world hello_world.go

test:
	./hello_world | tee hello_world.output
