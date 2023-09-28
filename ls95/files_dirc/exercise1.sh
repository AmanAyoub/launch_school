// List the hidden files in a directory.
ls -a

// To only list hidden (also called dotfiles) files, you can use the following command:
ls -d .*

//List the files in the parent directory. Then list the files in the parent directory's parent directory.
ls ..

// To list the files of the parent's parent directory, just add a slash and an extra ..:
ls ../..

// Suppose you are in a directory with 7 files. You need to move 6 of them into a "tmp" directory, that you have yet to create. How do you do that?
mv * ~/tmp
mv ~/tmp/1.file ./

// Using the glob operator *, (also known as the wildcard or just asterisk) you can move all files that match a particular pattern. First, check your pattern:
ls abc/*.txt
1.txt  2.txt  3.txt
mv abc/*.txt xyz/ 
