DIRS	= c++ coffeescript cython go java javascript python ruby

all :
	-for d in $(DIRS); do (cd $$d; $(MAKE) $(MFLAGS)); done

clean :
	-for d in $(DIRS); do (cd $$d; $(MAKE) $(MFLAGS) clean); done

build :
	-for d in $(DIRS); do (cd $$d; $(MAKE) $(MFLAGS) build); done

test :
	-for d in $(DIRS); do (cd $$d; $(MAKE) $(MFLAGS) test); done
