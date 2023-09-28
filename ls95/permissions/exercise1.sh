// Which user and group are assigned to the /etc folder on your computer?
ls -l /

// Which user and group are assigned to the $HOME folder?
ls -la $HOME

// What are mary's permissions for the napkins file in the following outputs?
groups mary
mary travelers vip
ls -l custodian_closet
total 0
-rw-rw----  1 acmeair acmeair 0 Jul 21 17:57 napkins
-rw-rw----  1 acmeair acmeair 0 Jul 21 17:57 paper_towels

// What are mary's permissions to the donuts file in the following example:
groups
mary travelers vip
ls -l vip_lounge
ls -l ./
...
-rw-rw----  1 acmeair  vip  0 Jul 21 17:57 donuts
...

// What are mary's permissions to the laptop file in the following example? What are the permissions for the group acmeinc?
ls -l vip_lounge
...
-r-xrwx---  1 mary acmeinc 0 Jul 21 17:57 laptop
...

// 
