AUTO FFS V1.1
Copyright © 2004. - SKY MobileMedia.

Author: Phillip Walker
----------------------------------------------------
----------------------------------------------------
CONTENTS:
    : FFSL.js         //Script Which Will Perform Tasks
    : PCTM.exe    //Utility To Transfer Binary Data Over Serial
    : cygwin1.dll   //Used By PCTM.exe
    : ReadMe.txt  //This File
_________________________________________________
NOTE:
        USE QUOTES IF THERE IS WHITESPACE IN THE PATHNAME.
*******************************************************
EX:
     > C:\DOCUMENTS AND SETTINGS\ADMINISTRATOR\USER\FFSL           : <----------ERROR.
     > "C:\DOCUMENTS AND SETTINGS\ADMINISTRATOR\USER\FFSL"         : <----------OK
     > C:\DOCUME~1\ADMINI~1\USER\FFSL                                              : <----------OK
_________________________________________________
NOTE:
         IF COMPORT SETTINGS ARE NOT CORRECTLY CONFIGURED OR
         IF TARGET-SIDE INTERFACE IS SOMEHOW MALFUNCTIONING,
         FFSL MAY LOCK UP WITHOUT ANY NOTIFICATONS. THE BEST
         INDICATION OF THIS EXCESSIVE PROCESSOR USAGE WITHOUT
         ACTIVITY FROM FFSL.
         TO RESOLVE, CORRECT ANY PROBLEMS/SETTINGS,
          RESET TARGET, RERUN FFSL.
__________________________________________________
COMMENTS:
        PLEASE FEEL FREE TO MODIFY AS NEEDED. I ONLY ASK YOU
        ACKNOWLEDGE AUTOHR.

UPDATES:
========================================
Version 1.1
- Added Support For Dynamic File Transfers Based On A Source Folder.
- Added Support For 'File Types' Filtering.
- Late Binding Of COM port.
- Select source folder at Run-Time.
- Transferred File Names/Sizes Logged To external File.


