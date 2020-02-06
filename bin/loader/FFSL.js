/*
         <!----------------------------------------------------------------------------------
            //                                                                                                    //
            //                              COPYRIGHT NOTICE                                         //
            //                                                                                                    //
            //   Copyright 2004 Sky MobileMedia. All rights reserved.                     //
            //                                                                                                    //
            //   This software is confidential and proprietary information of             //
           //   Sky MobileMedia. The receipt of or possession of this software does //
         //   not convey any rights to reproduce or disclose its contents or to        //
       //   manufacture, use, or sell anything it may describe, in whole, or in       //
     //   part, without the specific written consent of Sky MobileMedia.                //
   //                                                                                                            //
  |------------------------------------------------------------------------------------------|
  |                                             AUTO-FFS V1.1                                              |
  |                             Copyright © 2004. - SKY MobileMedia.                             |
  |                                 Author: Philllp Walker [7/25/05]                                  |
  |------------------------------------------------------------------------------------------|

*/
//  This Script Loads Target FFS With user Files.
var WshShell = new ActiveXObject("WScript.Shell"),WshObj,obj;
var SS = new String(WScript.ScriptFullName),root,type=position=0;
var SN = new String(WScript.ScriptName),cmd=0,S = "\"",e=new Error();
var Script_Location = new String(SS.slice(3,(SS.length-(SN.length+1))));
var Script_Drive=new String(WScript.ScriptFullName.slice(0,2));
var Instruction="fwr ", CHECK_TRANSFER=false;
//-----------------------------------------------------SOURCE_REFFERENCES
var ImageList,AudioList,TextList;
//-----------------------------------------------------PRE-COPY_INSTRUCTION_SEQUENCES
var PreImageInstr=new ActiveXObject("Scripting.Dictionary");
var PreAudioInstr=new ActiveXObject("Scripting.Dictionary");
var PreTextInstr=new ActiveXObject("Scripting.Dictionary");
var File_Name = new Array(new String(SN), new String("pctm.exe"), new String("cmd.exe"));
var File_Location = new Array(new String("0"+SS.slice(3,(SS.length-(SN.length+1)))));
var Search_length = new Array(0,0,0),type=i=0, Bounds = new Array(3,2,2);
var f_obj = new ActiveXObject("Scripting.FileSystemObject");
var RexErr=/er+(?=or|ors)/i, err=new Object(),Ikeys,f_hndl;
var CnvtEnv=new Array("CScript.exe //H:CScript",(SS.toString()+" 2"),"CScript.exe //H:WScript","CScript.exe //I:");
var Time = new Function("var c, s=\"/\";var time = new Date();if (time.getMinutes() < 10)c = \":0\";else c = \":\";return \"at: \"+Hours(time)+c+time.getMinutes()+AMorPM(time.getHours())+\" on \"+((time.getMonth() + 1)+s)+(time.getDate()+s)+time.getYear();");
var Hours = new Function("time","var num; num = new Number(time.getHours() % 12);if ((time.getHours() == 12)||(time.getHours() == 0)){num = new Number(12);return (num.toString(10));}else return (num.toString(10));");
var AMorPM = new Function("time","var AM = \"AM\", PM = \"PM\";if (time < 12) return AM;else return PM;");
var str1="                        AUTO-FFS V1.1                         \n   Copyright © 2004. - SKY MobileMedia.   \n ------------------------------------------------------- \n: Tasks Starting "+Time()+"\n: NOTE: Files Should Be Placed in:\n: \"..\\Attachments\"\n\n: Resuming In 10 Seconds............";
var getPath=new Function("sl","f","var A=(new String((f)?(\"\\\"\"+sl):sl)).split(\"\\\\\"),B=new String(A[0]);if (A.length==0)return null;else{for (var i=1; i < (A.length-1); i++)B=B.concat(\"\\\\\"+A[i]);}return B;");
//-----------------------------------------------------SOURCE_PATHS
var Path,COMPORT=4;
var mPath="\\Attachments";
//*****************************************************SPECIFY COMPORT HERE
//*****************************************************
//*****************************************
intro="Verifying Application Components Exists...";
err['1']="I/O ERROR: Restarting Previous Task(s)...";
err['3']="I/O ERROR: Restarting ALL Previous Task(s)....";
err['2']="I/O ERROR: Resending Previous Instruction)....";
err['4']="              *****System File(s) Missing******\n> 'FFSL.js'\n> 'cmd.exe'\n> 'pctm.exe'\nMUST be together. Aborting...";
err['5']="Unable To Find Files For Transfer. Aborting...";
err['6']="A Serious Error Has Occured!";
//1111111111111111111111111111111111111111111111111111111111111[PATH SPECIFIC TO IMAGELIST OBJECT]
PreImageInstr.add("_PREIMAGE0","ti");
PreImageInstr.add("_PREIMAGE1","ti");
PreImageInstr.add("_PREIMAGE2","cd..");
PreImageInstr.add("_PREIMAGE3","cd..");
PreImageInstr.add("_PREIMAGE4","cd user");
PreImageInstr.add("_PREIMAGE5","cd image");
PreImageInstr.add("_PREIMAGE6","cd mms");
//1111111111111111111111111111111111111111111111111111111111111
//2222222222222222222222222222222222222222222222222222222222222[PATH SPECIFIC TO AUDIOLIST OBJECT]
PreAudioInstr.add("_PREAUDIO0","cd..");
PreAudioInstr.add("_PREAUDIO1","cd..");
PreAudioInstr.add("_PREAUDIO2","cd sound");
PreAudioInstr.add("_PREAUDIO3","cd mms");
//2222222222222222222222222222222222222222222222222222222222222
//3333333333333333333333333333333333333333333333333333333333333[PATH SPECIFIC TO TEXTLIST OBJECT]
//PreTextInstr.add("_PRETEXT0","cd..");
//PreTextInstr.add("_PRETEXT1","cd..");
//PreTextInstr.add("_PRETEXT2","cd text");
//PreTextInstr.add("_PRETEXT3","cd mms");
//3333333333333333333333333333333333333333333333333333333333333
WshObj=WScript.Arguments;
try {type=parseInt(WshObj(0));}
catch(e){type=0};
switch(type)
{
    case (0):
    WshShell.PopUp(str1,3,"<FFSSAL: - "+type+" ->");
    for (var i=2;i<=(CnvtEnv.length-1);i++){
        WScript.Sleep(500);
        WshShell.Run(CnvtEnv[i]);
    }
    WshShell.PopUp(intro,1,"<FFSSAL: - "+type+" ->",32);
    root=getPath(WScript.ScriptFullName,false);
    root=chksrc(root,File_Name);
    if (root)
    {
            WshShell.Run(WScript.ScriptFullName+" 3 -1 4");
            WScript.Quit(1);
    }
    WshShell.Run(WScript.ScriptFullName+" 1");
    break;
    case (1):
    for (var i=0;i<=(CnvtEnv.length-1);i++){
        WScript.Sleep(2000);
        WshShell.Run(CnvtEnv[i]);
    }
    break;
    case (2):
    info=getComport();
    COMPORT=info["comport"];Path=getPath(WScript.ScriptFullName,false);
    dfilespec=mkFilesToObj(Script_Drive, Script_Location,f_obj);
    AudioList=dfilespec.Item("Audio");
    ImageList=dfilespec.Item("Image");
        //TextList=dfilespec.Item("Text");
    COMPORT=4;
    try{f_hndl=FileHandler(f_obj,1,"..\\logs\\FFSL.dat",null);}catch(e){WScript.Echo("failed");}
    obj = WshShell.Exec(new String(File_Name[1].toString()+" -p"+COMPORT+" -cc -ct"));
    WScript.Sleep(2000);
    if (!(new Number(dfilespec.Item("ImageSz")+dfilespec.Item("AudioSz")))){
        WshShell.Run(WScript.ScriptFullName+" 3 -1 5");
            WScript.Quit(1);
    }
    WScript.Echo("\n**********************************************\n");
    WScript.Echo("**********************************************\n\n\n");
    WScript.Echo("Transfering Files...\n");
    WshShell.PopUp("Preparing To Transfer ["+new Number(dfilespec.Item("ImageSz")+dfilespec.Item("AudioSz"))+"] Files To Target...",5);
    try {cmd=InOut(f_hndl,obj,"", "OUT","");}catch(e){}
    if (cmd){
         WshShell.Run(WScript.ScriptFullName+" 3 -1 1");
         obj.Close;
         WScript.Quit(1);
    }
    if ((new Number(dfilespec.Item("ImageSz")))!=(false)){
        Process(obj,PreImageInstr,"_PREIMAGE",0);
        Process(obj,ImageList,"_IMAGE",Path+mPath+"\\");
    }
    if ((new Number(dfilespec.Item("AudioSz")))!=(false)){
        Process(obj,PreAudioInstr,"_PREAUDIO",0);
        Process(obj,AudioList,"_AUDIO",Path+mPath+"\\");
    }
    /*if ((new Number(dfilespec.Item("TextSz")))!=(false)){
        Process(obj,,PreTextInstr,"_PRETEXT",0);
        Process(obj,TextList,"_TEXT",Path+mPath+"\\");
    }*/
    type=4;
    break;
    case (3):
    WshObj=WScript.Arguments;
    try {type=parseInt(WshObj(0));
    try {cmd=parseInt(WshObj(1));
    try {position=parseInt(WshObj(2));}
    catch(e){position=cmd=type=0;}}
    catch(e){cmd=type=0;}}
    catch(e){type=0;}
    WshShell.PopUp(eval("err["+position+"]"),10,"<FFSSAL: - "+type+" ->",16);
    if (cmd != -1) WshShell.Run(WScript.ScriptFullName+" "+cmd);
    WScript.Sleep(1000);
    break;
}
if (type == 4){try{FileHandler(f_obj,3,"FFSL.dat",null);}catch(e){}WshShell.PopUp("Tasks Completed  -[FINISHED]-"+Time(),10,"<FFSSAL: - "+type+" ->",64);}
WScript.Quit(0);
function getComport()
{
    var data,abort=false,type=new Array(),File="..\\source\\tmp.dat";
     var f_obj=new ActiveXObject("Scripting.FileSystemObject");
     try{f_hndl=f_obj.OpenTextFile(File,1);}catch(e){wScript.Echo("File Open Failed.");WScript.Quit(1);}
     try{data=new String(f_hndl.ReadAll());}catch(e){wScript.Echo("Error: Source File Probabally Empty");WScript.Quit(1);}
     if((data.indexOf("PATH=") != -1)&&(data.indexOf("PATH_END") != -1)){
           tmp=(new String(data.slice((data.indexOf("PATH=")+5),(data.indexOf("PATH_END")+8)))).split("PATH_END");
           type["path"]=tmp[0];}
     else abort=true;
     if((data.indexOf("COM=") != -1)&&(data.indexOf("COM_END") != -1)){
           tmp=(new String(data.slice((data.indexOf("COM=")+4),(data.indexOf("COM_END")+7)))).split("COM_END");
           type["comport"]=tmp[0];}
     else abort=true;
     f_hndl.Close();
     return type;   
}
function mkFilesToObj(Script_Drive, Script_Location, f_obj)
{
var n_hndl,folderspec,foldername,flag,L=0,K=0,I=0,O=0,cnt=new Array();
var _filetypes={"1":".wav", "2":".amr", "3":".mid", "4":".bmp", "5":".wbmp", "6":".jpg", "7":".gif", "8":".png","9":".mp4","10":".imy","11":".mmf","12":".jpeg"}
var image=new ActiveXObject("Scripting.Dictionary"),audio=new ActiveXObject("Scripting.Dictionary") ,fname;
var text=new ActiveXObject("Scripting.Dictionary"),final=new ActiveXObject("Scripting.Dictionary");
    folderspec=new String(Script_Drive+"\\"+Script_Location+mPath);
    try{
    WScript.Echo("**********************************************\nSOURCE := "+folderspec+"\n**********************************************\n");
    foldername=f_obj.getFolder(folderspec);
    flag=new Enumerator(foldername.files);
    for (; !flag.atEnd(); flag.moveNext()){
        fname=new String(((flag.item()).Name));
        for(I in _filetypes){
            if (((fname.valueOf()).toLowerCase()).indexOf(_filetypes[I]) != -1){
                switch(I){
                //IMAGE_BEGIN
                case "8":case "7":case "6":
                case "5":case "4":
                image.add((new String("_IMAGE")).concat(L),(fname.valueOf()).toLowerCase());
                WScript.Echo("IMAGE FILE: "+(fname.valueOf()).toLowerCase()+" added.");
                L++;
                break;
                //AUDIO_BEGIN
                case"12":case"11":case "10":case "9":
                case "3":case "2":case "1":
                audio.add((new String("_AUDIO")).concat(K),(fname.valueOf()).toLowerCase());
                 WScript.Echo("AUDIO FILE: "+(fname.valueOf()).toLowerCase()+" added.");
                K++;
                break;
                default:break;
           }   }
             //n_hndl.WriteLine(":: "+(flag.item()).Name+" <--> ");
   }   }
   final.add("Image",image);
   final.add("Audio",audio);
   final.add("AudioSz",K);
   final.add("ImageSz",L);
   //final.add("Text",text);
   }catch(e)
   {
       WshShell.Run(WScript.ScriptFullName+" 3 -1 6");
            WScript.Quit(1);
   }
   return final;
}
function chksrc(pth,FNs)
{
    var f_obj=new ActiveXObject("Scripting.FileSystemObject"),flag=false;
    for (i in FNs){
        if (!f_obj.FileExists(new String(pth+"\\"+FNs[i]))){
            flag=true;break;}
        else flag=false;
    }
    return flag;
}
function InOut(f_hndl,obj, CmdStrIn, type,fname)
{
    var e=new Error(),_fw,_lw,keyword=new String("Transferred");
    var CmdStrOut=new String(),flag=false,lflag=true,endkey=new String("bytes"),l;
    switch(type){
        case "IN":
            try{obj.StdIn.WriteLine(CmdStrIn+'\r');}
            catch(e){WshShell.Run(WScript.ScriptFullName+" 3 2 2");WScript.Quit(1);}
        break;
        case "OUT":
        flag=false;
        while (true){
            if (!obj.StdOut.AtEndOfStream){
                try{CmdStrOut=CmdStrOut.concat(obj.StdOut.Read(1));}
                catch(e){WshShell.Run(WScript.ScriptFullName+" 3 0 3");WScript.Quit(1);}
                if ((_fw != -1)&&(!flag)) flag=true;
                if ((CmdStrOut.charAt(CmdStrOut.length-1)) == "$"){
                        if ((CHECK_TRANSFER)&&(!flag)) throw new Error(1,err3);
                                flag=false;
                                _fw=CmdStrOut.indexOf(keyword);_lw=CmdStrOut.indexOf(endkey);
                                if ((_fw != -1)&&(!flag)&&(_lw != -1)){
                                     f_hndl.WriteLine(fname+" <> "+(CmdStrOut.slice((_fw+keyword.length),_lw)));
                                       lflag=false;
                                  }
                                try{CmdStrOut=CmdStrOut.concat(obj.StdOut.Read(1));}
                                catch(e){WshShell.Run(WScript.ScriptFullName+" 3 0 3");WScript.Quit(1);}
                                WScript.Echo("< "+CmdStrOut);
                            break;
       }      }      }      }
     return flag;
}
function Process(obj, dictionary,ref, path)
{
    var cmd, e=new Error(),j=0,logF=false;
    for (var i=0; i<dictionary.Count; i++){
        if (path) {CHECK_TRANSFER=true;cmd=InOut(f_hndl,obj,Instruction+dictionary.Item(ref+i)+" "+path+dictionary.Item(ref+i), "IN",dictionary.Item(ref+i));
        WScript.Echo("> "+Instruction+dictionary.Item(ref+i)+" "+path+dictionary.Item(ref+i));}
        else {CHECK_TRANSFER=false;cmd=InOut(f_hndl,obj,dictionary.Item(ref+i), "IN",dictionary.Item(ref+i));}
        WScript.Sleep(1000);cmd=true;
        try{InOut(f_hndl,obj, "", "OUT",dictionary.Item(ref+i));}
        catch(e){
            i--; cmd=false;
            if (j == 5){ WshShell.Run(WScript.ScriptFullName+" 3 -1 3");WScript.Quit(1);}
            else{
                WshShell.Run(WScript.ScriptFullName+" 3 -1 2");
                WScript.Sleep(10000);
                j++;
            }
        }if (cmd) j=0;
    }
    return cmd;
}
function FileHandler(fobj,type,fname,stream)
{
    var e=new Error(), fhdle, strmatt, _VERBOSE;
    switch(type){
        case 0:
            if (!fobj.FileExists(fname)){
                throw new Error(1, "Error: File '"+fname+"' Does Not Exist.");
            }
            break;
        case 1:
             if (fobj.FileExists(fname))
                 fobj.DeleteFile(fname);
             try{fhdle=fobj.CreateTextFile(fname,true);}
             catch(e){e=null; throw new Error(2,"Error: Cannot Create File '"+fname+"'");}
             break;
          case 2:
                   strmatt=new ActiveXObject("Scripting.Dictionary");
                   strmatt.add("_1","Reading"); strmatt.add("_2","Writing"); strmatt.add("_8","Appending");
                   strmatt=new String(strmatt.Item("_"+stream.toString()));
             try{fhdle=fobj.OpenTextFile(fname,stream.valueOf());}
             catch(e){e=null; throw new Error(3,"Warning: Cannot Open File '"+fname+"' For '"+strmatt.toString()+"'");}
             break;
        case 3:
             try {fobj.Close();}
             catch(e){e=null; throw new Error(4,"Warning: Cannot Close File '"+fname+"'");}
             break;
    }
    return fhdle;
}
