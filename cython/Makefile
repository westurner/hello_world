all: clean build test

clean:
	rm -rfv ./build/ ./*.so ./*.f ./*.html ./*.pyc

build:
	python setup.py build_ext --inplace

build_c:
	cython hello_world.py

build_html:
	cython -a hello_world.py
	sensible-browser hello_world.html

test:
	python -c 'import c_hello_world; c_hello_world.HelloWorld().main()'


