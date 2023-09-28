// Let's review some common navigation tasks:

// To get your current location, use pwd:
pwd
/home/aman

// To change your current directory, use cd. Using it without any arguments will take you to your home directory:
cd
pwd
/home/aman

// You can also pass the $HOME variable as an argument, or use the ~ (tilde) as the first argument to achieve the same resul
cd $HOME
pwd
/home/aman
cd ~
pwd
/home/aman
cd

// Go to the root directory (/):
cd /
pwd
/

// Use the ls command to determine what files and directories are located in the current directory:
ls
bin    dev   lib    libx32      mnt   root  snap      sys  var
boot   etc   lib32  lost+found  opt   run   srv       tmp
cdrom  home  lib64  media       proc  sbin  swapfile  usr

// Pass a directory or a path as an argument to the cd command to go directly to that location:
cd usr
pwd
/usr

// You can also get a sneak peek into what directories are located in a specific path:
cd /
pwd
/
ls usr
bin  etc  games  include  lib  lib64  libexec  local  sbin  share  src  tmp

// Use the -lah set of flags as arguments to the ls command to get more detailed information about files and directories:
cd /
$ ls -lah
total 112K
dr-xr-xr-x 24 root root 4.0K Mar 16 20:56 .
dr-xr-xr-x 24 root root 4.0K Mar 16 20:56 ..
-rw-r--r--  1 root root    0 Mar 16 20:56 .autofsck
dr-xr-xr-x  2 root root 4.0K Oct  1  2014 bin
dr-xr-xr-x  3 root root 4.0K Oct  1  2014 boot
drwxr-xr-x 16 root root 2.8K Jun  3 21:48 dev
drwxr-xr-x 76 root root 4.0K Jun  3 21:48 etc
drwxr-xr-x  3 root root 4.0K Sep 29  2014 home

// To figure out a default executable's location, you can use the which command:
which touch
/bin/touch

// Now we can execute the touch command using its full path or name:
touch test
ls
test
/bin/touch test2
ls
test test2
