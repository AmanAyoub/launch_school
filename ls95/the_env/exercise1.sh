// Run the following commands to experiment with altering your command line environment:
cd
PS1="\u@\w$ "
ubuntu@~$ echo "Hello world"
Hello world
ubuntu@~$

// Set your prompt in your ~/.bashrc (or ~/.zshrc if appropriate) file:
echo 'export PS1="this is a test$ "' >> ~/.bashrc

// Exit and open up a new terminal. You should see something like this:
this is a test$

/*
As discussed previously in this chapter, the PATH variable determines which files can be executed without specifying their path explicitly. Run through the commands in this exercise to see this principle in action.
*/

// Set the current PATH variable to another variable so we can revert to it later:
OLDPATH=$PATH
echo $OLDPATH
/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/aws/bin:/home/ubuntu/bin

// Temporarily change PATH and try to run a program that is no longer located in the directories specified in PATH:
cd /usr/local
ls
bin etc games include lib man sbin share src
PATH="" ls
-bash: ls: No such file or directory
ls
bin etc games include lib man sbin share src

// Now, create an executable in your home directory by entering the following:
cd ~
echo '#!/bin/bash' > test.sh // Replace existing test.sh file
echo 'echo "Hello world"' >> test.sh
chmod +x test.sh // Make sure test.sh has the executable permission

// Run the executable, first by specifying the path, then by running it like a command:
./test.sh
Hello world
test.sh
-bash: test.sh: command not found

// Now, change PATH more permanently for your current session, and try to run test.sh again:
PATH=$PATH:$HOME
$ echo $PATH
/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/opt/aws/bin:/home/ubuntu/bin:/home/ubuntu
test.sh
Hello world
cd /
test.sh
Hello world

// Exit out of Terminal and then open it up again. Try running test.sh again:
test.sh
-bash: test.sh: command not found
