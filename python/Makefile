all: clean build test

clean:
	rm -fv ./*.pyc ./*.output

build:
	python -m py_compile ./hello_world.py

test:
	python ./hello_world.pyc | tee hello_world.output

test_pypy:
	pypy ./hello_world.py | tee hello_world_pypy.output
