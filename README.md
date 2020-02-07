# OLD_IE6_Automation-Tool
I created this project back in 2004. Only works on IE6. It is an automation tool for old Symbian based mobile devices. This script utilizes Wscript (by means of COM component), JScript, and Javascript in one application. It also uses the windows registry to send AT commands to the mobile device via serial port. A custom C++ application (p4.exe) was made to poll the registry and send available commands to the device.

To run,
1. Create a Windows 7 virtual machine (with IE6 installed) and download this repo to it.
2. In Windows 7, register 'bin/com/JI.wsc' (the COM component).
3. Execute the script 'SkyPlayer.htm'.

There is also a key recording/playback tool built into the script that you can launch on the main page. It will record/playback commands for the mobile device.

Obviously, you won't be able to perform any automation as you have no compatible physical device.
