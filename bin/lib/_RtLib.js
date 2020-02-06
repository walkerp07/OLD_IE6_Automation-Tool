//<!--
/*-->
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
  |                                 Core Automation Library V1.7.2             [File: 3 of 3]   |
  |                             Copyright © 2004. - SKY MobileMedia.                            |
  |                                         Author: Phillip Walker                                        |
  |------------------------------------------------------------------------------------------|
  |****************************************************************|
  |>Usage:                                                                   [Engine]                     |
  |==================================================|
  |         as: 1. _RtLib.hta                                            : [HTML App. Engine]      |
  |  and/or: 2. _RtLib.html / _RtLib.htm                         : [IE Engine ONLY]         |
  |  and/or: 3. _RtLib.js                                               : [WScript Engine]         |
       *************************************************************/
function generic()
{
    this.createPopup=this.returnValue=this.location=this.cancelBubble=
    this.parent=this.window=this.open=this.write=this.replaceAdjacentText=new Function("");
    this.alert=new Function("m","WScript.Echo(m);");
    this.close=new Function("p","try{_p=(p==null)?0:p;}catch(e){_p=0;}WScript.Quit(_p);");
}
        ////////////// _START_WSCRIPT_ ///////////////
try{window=new generic();}catch(e){}
try{document=new generic();}catch(e){}
try{event=new generic();}catch(e){}try{self=new generic();}catch(e){}
      
       //////////////// _START_DHTML /////////////////
/*--><html><head>
<!-- /////////////// _START_JSCRIPT/////////////// -->
<script language="JScript"></script><script language="JScript"></script>
<!--*///--><script language='jscript'>
var e=new Error();
var WSHost=ie=JI=_pMgr=_res=f_obj=shell=getPath=SkyMobile=false,xargs=undefined;
var FHANDLE=THANDLE=false;
var ORIGINAL_AUTHOR       = "Keith Burke       [3/21/05]     *";
var REVISING_AUTHOR       = "Phillip Walker    [9/13/05]     *";
var CURRENT_VERSION       = "Verision 4.1";
var DEBUG_PROMPT= "TERMINAL > ",TRACE_PROMPT= "$trace > ",ERROR_PROMPT= "ERROR  > ";
var OK=INSERT=OPTION="]", CAMERA=BACK="~", SEND="[", IKEY="`", AT="*6", DOT="*1", DOWN="V", END="E", UP="^", LEFT="<", RIGHT=">", PAUSE="%";
//
var _VERBOSE=false, BYPASS=-1;
var Debug_Print = new Function("TxtString"," var e=new Error();JI.write(DEBUG_PROMPT+TxtString);try{FHANDLE.WriteLine(DEBUG_PROMPT + TxtString );}  catch(e){} return TxtString;");
var Trace_Print=new Function("TxtString","context","noScreen","var e=new Error();try{if(!noScreen){JI.write(TRACE_PROMPT+((context!=null)?context:\"\")+TxtString );}try{THANDLE.WriteLine(TRACE_PROMPT+((context!=null)?context:\"\")+TxtString );}  catch(e){}}catch(e){} return TxtString;");
var Shutdown = new Function("S","var e=new Error();Debug_Print(\"Disconnecting from target\",\"- ShutDown() -\");try{_p=(new rsMgr()).getPath(WSHost.ScriptFullName,false);}catch(e){try{_p=getPath(self.parent.window.location.pathname,false);}catch(e){_p=\"C:\mobile\"}}try{f_obj.CreateTextFile(_p+\"\\\\bin\\\\source\\\\stop\",true);}catch(e){}S.delOldReg();JI.quit();try{FileHandler(f_obj,null,(_p+\"\\\\bin\\\\com\\\\JI.htm\"),null);}catch(e){}try{FileHandler(f_obj,null,(_p+\"\\\\bin\\\\source\\\\pause\"),null);}catch(e){};try{FileHandler(f_obj,null,(_p+\"bin\\\\source\\\\tmp.dat\"),null);}catch(e){};_e=\"Tool Exited Normally\";Trace_Print(_e);Trace_Print(\"Error - [\"+_e+\"].\\n:\"+Time());halt(1);");
var Startup=new Function("S","LP0","_gp","shell","var _path=_gp(window.location.pathname,false,false);ferr=new Error(),_err=0;S.delOldReg();Debug_Print(\"\\\\\\\\n\\\\\\\\n\\\\\\\\n::::::::::::: [[ Initializing... ]]:::::::::::::\\\\\\\\n\\\\\\\\n\\\\\\\\n\");try{FHANDLE=FileHandler(f_obj, 1, new String(_path+_res._paths[\'_src\']+_res._files[\'_il\']),new Number(8));}catch(ferr){Debug_Print(TRACE_PROMPT+ferr.message);_err=1;}try{THANDLE=FileHandler(f_obj, 1,new String(_path+_res._paths[\'_src\']+_res._files[\'_tl\']),new Number(8));}catch(ferr){Debug_Print(\"[\"+TRACE_PROMPT+\"]\"+ferr.message);_err=1;}if(!_err){Debug_Print( \"Success!!! Target Ready... \");}else{Debug_Print(\"To Many Errors To Continue. Aborting...\");_xd=_pMgr.getXObj(\"_d\");xoe=_xd.createEventObject();_xid=_pMgr.getXObj(\"_id\");xoe.cmd=_res.cnst[\"_kill\"];_xid('mdiv').fireEvent(\"onbeforeupdate\",xoe);return false;}S.delOldReg();return true;");
var regObserver=new Function("observer","if (observer != null){this.ObsVect[((this.ObsVect).length)]={\"Observer\":observer}}");
var Splash = new Function("var ver=\"UMAP Script Engine Version \"+CURRENT_VERSION,cpyrt=\"SKY  MobileMedia, Copyright 2005.\";Debug_Print(\"==============================\",\"- Splash() -\");Debug_Print(ver);Debug_Print(cpyrt);Debug_Print(\"==============================\");Debug_Print(\"*******************************************\");Debug_Print(\"[Author:]          *   : \"+REVISING_AUTHOR);Debug_Print(\"[Original Author:]  *   : \"+ORIGINAL_AUTHOR);Debug_Print(\"*******************************************\");Debug_Print(\"\");");
var ExitScreen = new Function("var term= \"UMAP Script Engine Terminated\" ;Debug_Print( \"\",\"- ExitScreen() -\");Debug_Print( \"******************************************\");Debug_Print(term);Debug_Print(term );Debug_Print( \"******************************************\" );Debug_Print( \"\" );");
var sda = new Function("try{FileHandler(f_obj, 1,\"___\",null);}catch(e){try{FileHandler(f_obj, 1,\"___\",null);}catch(e){}}");
var isMParsed = new Function("testStr","var prsdMda,str;if (testStr.indexOf(\"{\") == -1)return (new Array(testStr));else{str=testStr.slice((testStr.indexOf(\"{\")+1),testStr.indexOf(\"}\"));str=str.split(\" / \");return str;}");
var ticks=new Function("amt","cmd","var i,str=\"\",lamnt=(amt==null)?1:amt;this.cmdchar=(cmd==null)?\"%\":cmd;for(i=0; i < (lamnt*this.PltClk); i++)str=str.concat(this.cmdchar); return str;");
var Next=new Function("cnt","if (cnt!=null){if (this.IP <= cnt)return true;else return false;}else {this.IP++;return({\"comport\":this.COM,\"ip\":this.IP});}");
var isO = new Function("inn","R1","R2","if ((inn >= R1)&&(inn <= R2))return true;else return false;");
var isI0=new Function("_m","_p","var mtypes=_m;mtypes.add(3,\"record_audio\");mtypes.add(4,\"insert_video\");mtypes.add(5,\"record_video\");mtypes.add(\"insert_image\",0);mtypes.add(\"record_image\",1);mtypes.add(\"insert_audio\",2);mtypes.add(\"record_audio\",3);mtypes.add(\"insert_video\",4);mtypes.add(\"record_video\",5);mtypes.add(\"s\",1);mtypes.add(\"m\",4);mtypes.add(\"l\",9);try{if(!mtypes.Exists(_p)){_pram=_p;}else{_pram=mtypes.Item(_p);}}catch(e){_pram=_p;}return _pram;");
var isI = new Function("pram","var e=new Error(),mtypes=_pMgr.getDset('mtypes');mtypes.add(\"mp4\",1);mtypes.add(\"mid\",2);mtypes.add(\"wav\",3);mtypes.add(\"amr\",4);mtypes.add(\"jpeg\",5);mtypes.add(\"bmp\",6);mtypes.add(\"wbmp\",7);mtypes.add(\"png\",8);mtypes.add(\"gif\",9);mtypes.add(\"agif\",10);mtypes.add(\"empty\",\"?\");mtypes.add(0,\"insert_image\");mtypes.add(1,\"record_image\");mtypes.add(2,\"insert_audio\");_pram=isI0(mtypes,pram);mtypes.RemoveAll();return _pram;");
var informViewers=new Function("cdata,ctype","for(i in this.ObsVect)(this.ObsVect[i][\"Observer\"]).update(cdata,ctype);");
var MSEQ=new Function("src","i","A","B","ch","var v=isI(\"ss\"),i,lt=\"\",ft=\"\";if ((src[i] == isI(i))&&(isO(src[i],A,B))){lt=eval((\"this.\"+(i.toUpperCase())));}else lt=\"\"; return lt;");
var update=new Function("CObj","CPram","if(CObj==\"MobileObject\"){if (CPram[\"platform\"]==this.ID)this.informViewers(this.EID,{\"toHndlrs\":true,\"ID\":this.ID,\"LDelay\":this.PltClk,\"KPdelay\":this.KPDelay});}");
var _stpInvl=new Function("id","try{self.parent.window.clearInterval(id);}catch(e){}return;");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
try{if((window.dialogArguments)?(_setParms(window.dialogArguments),true):false){}}catch(e){}
try{filespec=window.location.pathname;}catch(e){filespec="about:blank";}
var _setPram=function(_da){
    if(_da){if(!WSHost)WSHost=_da[0];if(!ie)ie=_da[1];if(!JI)JI=_da[2];if(!_pMgr)_pMgr=_da[4];if(!_res)_res=_da[5];if(!f_obj)f_obj=_da[7];if(!shell)shell=_da[10];if(!getPath)getPath=_da[9];if(!SkyMobile)SkyMobile=_da[12];}
}
//</script><script language="JScript">
function _initDHTML()
{
    try{filespec=window.location.pathname;}catch(e){filespec="about:blank";}
    try{if(WScript.ScriptName==null){
    eval("WScript=new Function(\"\");");eval("WScript.Quit=new Function(\"self.parent.window.close();\");");
    eval("WScript.Echo=new Function(\"_m\",\"self.parent.window.alert(_m);\");");}}catch(e){}
    return;
}
function _enDScripts(_da)
{
    var _mw=self.parent.window,_d=_mw.document,_id=_d.getElementById,_pn=_mw.location.pathname,_tnc=_d.getElementsByTagName,_scr,_loc=_mw.location;
    var _gfp=new Function("_x","_d","_s=new Array();_s['p']=new String(_d[9](window.location.pathname,false,false)+\"\\\\\"+_x);_s['e']=_d[7].FileExists(_s['p']);return _s;"),_lr;
    try{_lr=(!_da[5])?(new res()):_da[5];
    _iI=_gfp(_lr._files['_instr'],_da);_iP=_gfp(_lr._files['_prf'],_da);
    }
    catch(e){_iI=_iP=new Object();}
    if((_iI['e'])&&(_iP['e'])){_scr=_tnc('script');
              if(_scr.length>=1){_scr[0].src=_iI['p'];_scr[1].src=_iP['p'];}
    }      
}//</script><script language="JScript">
function getComport(_gp,_res,_pn)
{
    var data,type=new Array(),File=new String(_gp(_pn,false,false)+_res._paths['_src']+_res._files['_tmp']);
     try{f_hndl=f_obj.OpenTextFile(File,1);}catch(e){Trace_Print("Warning: Could Not Open Source File."," getComport(): ");throw new Error();}
     try{data=new String(f_hndl.ReadAll());}catch(e){Trace_Print("Warning: Cannot Read Source File."," getComport(): ");throw new Error();}
     if((data.indexOf("PATH=") != -1)&&(data.indexOf("PATH_END") != -1)){
           tmp=(new String(data.slice((data.indexOf("PATH=")+5),(data.indexOf("PATH_END")+8)))).split("PATH_END");
           _pMgr.path=type["path"]=tmp[0];}
     else{_pMgr.path=undefined;}
     if((data.indexOf("COM=") != -1)&&(data.indexOf("COM_END") != -1)){
           tmp=(new String(data.slice((data.indexOf("COM=")+4),(data.indexOf("COM_END")+7)))).split("COM_END");
           _pMgr.com=type["comport"]=tmp[0];}
     else{ _pMgr.com=undefined;
     f_hndl.Close();}
     return type;
}
function halt(prm)
{
   var e=new Error();
   switch(prm){
       case(1):
           Debug_Print("Shutting Down...");
           SkyMobile.delayCmd("done",true);
           try{WSHost.Sleep(5000);}catch(e){}
           try{f_obj.DeleteFile(_pMgr.path+"\\source\\pause",true);}catch(e){}
           try{f_obj.DeleteFile(_pMgr.path+"\\source\\stop",true);}catch(e){}
           Trace_Print(_res.errFatal);JI.quit();WSHost.Quit(prm);
       break;default:break;
   }       
}
function _setCom(comport,f_obj,_gp,_pn)
{
    var f_hndl,e=new Error(),_err,_path;
    if(!(isNaN(comport))){
    if(_pMgr.com != comport){_path=_gp(_pn,false,false);
    try{f_obj.DeleteFile(_path+_res._paths["_src"]+_res.File,true);}catch(e){}
    try{f_hndl=f_obj.CreateTextFile(_path+_res._paths["_src"]+_res.File,true);}
    catch(e){Trace_Print(_res.err18," setCom(): ");_err=1;}try{f_hndl.WriteLine("PATH="+_path+"PATH_END");}
    catch(e){Trace_Print(_res.err17," setCom(): ");_err=1;}try{f_hndl.WriteLine("COM="+_res.cnst['_com']+comport+"COM_END");}
    catch(e){Trace_Print(_res.err19," setCom(): ");_err=1;}try{f_hndl.Close();}catch(e){}
    try{if(!_err){if(!(isNaN(_pMgr.com))){Trace_Print((new String("["+_res.cnst['_com']+_pMgr.com+_res.Ntfy['_com']+_res.cnst['_com']+comport+"]"))," _setCom: ");}}else Trace_Print(_res.err20," _setCom: ");}catch(e){throw e;}
    try{f_obj.DeleteFile(_path+_res.pause);}catch(e){}try{f_obj.DeleteFile(_path+_res.stop);}catch(e){}_pMgr.com=(!comport)?_pMgr.com:comport;
    }}
    return;
}
function MenuObj()
{
    var _filter=new String("filter:progid:DXImageTransform.Microsoft.Shadow(color='#222222', Direction=113, Strength=1);");
    this._MMg=(!this._MMg)?(new (new Function("this.LCM=null;this.LM=null;this.rsos=new Array();"))()):this._MMg;this.cMenuOut=new String(_filter);this.tbar=new Array('_pauseX','_stopX','_runX');   
    this._styleSheet={".MenuIn":new String(_filter+"border:'1px white inset';"),".Over":new String(_filter+"color:white;border:'1px white outset';"),".MenuOut":new String(_filter),".Out":new String(_filter),".SubOver":new String("background:'#0000FF';color:'#FCC0FF';"),"SubOut":new String("color:'highlighttext';")}
    this.Menu=new Function("P","C","if(C.style.display==\"block\"){P.className=\"Over\";C.filters[1].Apply();C.style.display=\"none\";this.SubOutAll();C.filters[1].Play();this._MMg.LCM=null;}else{P.className=\"MenuIn\";C.style.display=\"block\";this._MMg.LCM=C;}this._MMg.LM=P;return;");
    this.Over=new Function("P","C","if (this._MMg.LCM==null)P.className=\"Over\";else{if((P.id==\"img0\")||(P.id==\"img1\")){P.children.item(0).className=P.className=\"MenuIn\";}if (this._MMg.LM == P)P.className=\"MenuIn\";else {this.Hide();this.Menu(P,C);}}return;");
    this.Out=new Function("M","if(this._MMg.LCM==null){M.className=\"Out\";this.SubOutAll();}return;");
    this.SubOver=new Function("M","M.className=\"SubOver\";if(M.parentNode.id==\"Table\")this._MMg.LM.className=\"MenuIn\";return;");
    this.SubOut=new Function("M","M.className=\"SubOut\";this._MMg.LM.className=\"MenuOut\";return;");
    this.SubSideOver=new Function("M","N","M.filters[0].Apply();M.style.display=\"block\";M.filters[0].Play();return;");
    this.SubSideOut=new Function("M","M.filters[0].Apply();M.style.display=\"none\";M.filters[0].Play();return;");
    this.SubOutAll=new Function("for(var i=0;i<this._MMg.rsos.length;i++)this.SubSideOut(this._MMg.rsos[i]);return;");
    this.Hide=new Function("if(!(this._MMg.LCM ==null)){try{this._MMg.LCM.style.display=\"none\";}catch(e){}try{this.SubOutAll();}catch(e){}this._MMg.LCM=null;this._MMg.LM.className=\"Out\";}return;");   
    this.initStyleSheet=new Function("_w","_s","for(l in this._styleSheet){_w.document.styleSheets[_s].addRule(l,this._styleSheet[l]);}return _w.document.styleSheets[_s];");
    this._enTB=new Function("_id","for(var i=0;i<this.tbar.length;i++)_id(this.tbar[i]).disabled=false;return;");
    this.regSubObj=new Function("_objs","var i=k=0,_lo=((_objs.constructor)!=((new Array()).constructor))?(new Array(_objs)):_objs;for(k=0;k<_lo.length;k++){_exist=false;for(i=0;i<this._MMg.rsos.length;i++){if(this._MMg.rsos[i].id==_lo[k].id){_exist=true;break;}}if(!_exist)this._MMg.rsos.push(_lo[k]);}return this._MMg.rsos;");
}
//619-756-4746
function SkyKPHndlr()
{//implements Observer[[[[[[   'G'  ==  'true'   ]]]]]
   this.ID="SkyKPHndlr";this.ObsVect=new Array();this.ALTKEYS="";this.CSet=0;this.CPlatform="";SkyKPHndlr.prototype.informViewers=informViewers;
   this.CSet={"a":"2","b":"22","c":"222","d":"3","e":"33","f":"333","g":"4","h":"44","i":"444","j":"5","k":"55","l":"555","m":"6","n":"66","o":"666","p":"7","q":"77","r":"777","s":"7777","t":"8","u":"88","v":"888","w":"9","x":"99","y":"999","z":"9999"}
   this.ECSet={"1":"11111","2":"2222","3":"3333","4":"4444","5":"5555","6":"6666","7":"77777","8":"8888","9":"99999","0":"00"}
   this.ANASTA_ALT={"-":("*3["),"+":("*VV0["),".":("*1["),",":("*2["),"!":("*4["),"?":("*5["),":":("*8["),"_":("*9["),"\\\\":("*#["),"/":("*V1["),"@":("*6[")," ":"0"}  /*PLATFORM: [ANESTA]*/
   this.N101_ALT={"-":"*3","+":"*VVVV7",".":"*1",",":"*2","!":"*4","?":"*5",":":"*V1","_":"*V2","\\\\":"*V5","/":"*V6","@":"*6"," ":"0"}                              /*PLATFORM: [N101/100]*/
   this.N200_ALT={"-":"*|3","+":"*VVVV7",".":"*1",",":"*2","!":"*4","?":"*5",":":"*V1","_":"*V2","\\\\":"*V5","/":"*V6","@":"*6"," ":"0"}                              /*PLATFORM: [N200]*/
   this.Decode=new Function("char","org","item","mode","var cnvt=item,tmp=\"\";switch(char){case \'~\': tmp=\":C\";   break;case \'`\': tmp=\":@\"; break;case \'%\': if (mode) tmp=\"WAIT\"; break;default: tmp=char; break;   }if (mode) cnvt.add(\"_CHARS\",tmp);else{ if (!mode) cnvt=cnvt.concat(tmp);}return cnvt;");
   this.Exists=new Function("obj","var bool=false;for (i in this.Set){if(i==obj){bool=true;break;}}return bool;");
   this.Item=new Function("item","var bool=false;for(i in this.Set){if(i==item){return this.Set[i];}}return bool;");
   this.update=new Function("CObj","CPram","var i,x=new String();if(CObj==\"CharHndlr\"){this.Set=new Array();for (i in this.CSet)this.Set[i]=this.CSet[i];if((CPram[\"altkeys\"])&&(CPram[\"type\"]!= null)){this.ALTKEYS=eval(\"this.\"+CPram[\"type\"]+\"_ALT\");}for (i in this.ALTKEYS)this.Set[i]=this.ALTKEYS[i];if(CPram[\"smode\"]){for (i in this.ECSet)this.Set[i]=this.ECSet[i];}}");
   this.getId=new Function("return this.ID;");
}
function Profile(p0,p1,p2,p3,p4,p5,p6,c0,c1,c2,c3,p7,p8,p9,c4,p11,p12,c5,c6,p13,p14,gp0,gp1,gp2,gs0,gs1,gs2,c7,c8,gs5,v0,d0,dr0,rr0,pp0,a0,mc0)
{
   this.identifer=p0;
   this.field={"p_home":p0,"mmsc":p1,"ip":p2,"p_addr":p3,"port":p4,"session_mode":p5,"password":p6,"u_upd":p7,"u_name":p8,"u_password":p9,"Secproxy_port":p11,"Secproxy_IP":p12,"HTTPProxy_Port":p13,"HTTPProxy_Addr":p14}
   this.cond={"connect":c1,"secure":c3,"display":c0,"u_auth":c3,"connect_type":c4,"TCP":c5,"hproxy":c6,"call_type":c7,"call_speed":c8}
   this.gsm={"dialup":gs0,"user":gs1,"password":gs2,"linger":gs5}
   this.gprs={"apn":gp0, "gid":gp1, "gpassword":gp2}
   this.options={"validity":v0,"delayed":d0,"priority":pp0,"delivery":dr0,"read":rr0,"auto":a0,"_class":mc0}
   this.isEqual=new Function("obj","if((this.identifer==obj)&&(this.identifer != undefined))return true; else return false;");
   this.getField=new Function("entry","if(( this.field[entry])!=undefined)return (new String(this.field[entry])); else return undefined;");
   this.setField=new Function("entry","value","if ((this.field[entry])!=undefined){this.field[entry]=value;return true;}else return false;");
   this.getCond=new Function("entry","if((this.cond[entry])!=undefined)return (new String(this.cond[entry])); else return undefined;");
   this.setCond=new Function("entry","value","if ((this.cond[entry])!=undefined){this.cond[entry]=value;return true;}else return false;");
   this.getGsm=new Function("entry","if((this.gsm[entry])!=undefined)return (new String(this.gsm[entry])); else return undefined;");
   this.setGsm=new Function("entry","value","if ((this.gsm[entry])!=undefined){this.gsm[entry]=value;return true;}else return false;");
   this.getGprs=new Function("entry","if((this.gprs[entry])!=undefined)return (new String(this.gprs[entry])); else return undefined;");
   this.setGprs=new Function("entry","value","if ((this.gprs[entry])!=undefined){this.gprs[entry]=value;return true;}else return false;");
   this.getOptions=new Function("entry","if((this.options[entry])!=undefined)return (new String(this.options[entry])); else return undefined;");
   this.setOptions=new Function("entry","value","if ((this.options[entry])!=undefined){this.options[entry]=value;return true;}else return false;");
   this.setId=new Function("value","this.identifer=value;");
   this.normalize=new Function("a","var s=new String(a),g=new String(),t,f,l,h;for ( i=0; i <= (s.length-1); i++){t=s.charAt(i);if(t != \"(\"){if(t != \")\"){f=true;if(t == \">\")h=\".\";else h=t; g=g.concat(h);}}}return (g);");
   this.showFIELD=new Function("type","with(this){var i; for (i in this.field){type(i+\"=\"+this.field[i]);}}");
   this.showCOND=new Function("type","with(this){var i; for (i in this.cond){type(i+\"=\"+this.cond[i]);}}");
   this.showGPRS=new Function("type","with(this){var i; for (i in this.gprs){type(i+\"=\"+this.gprs[i]);}}");
   this.showGSM=new Function("type","with(this){var i; for (i in this.gsm){type(i+\"=\"+this.gsm[i]);}}");
   this.showOPTIONS=new Function("type","with(this){var i; for (i in this.options){type(i+\"=\"+this.options[i]);}}");
   this.getId=new Function("return (this.identifier);");
}
function CharHndlr()
{//implements Observer/Observerable
   CharHndlr.prototype.informViewers=informViewers;CharHndlr.prototype.regObserver=regObserver;CharHndlr.prototype.ticks=ticks;
   this.ID="CharHndlr";this.ObsVect=new Array();this.CONST='?';this.PltClk=1;
   this.isAlpha=new Function("letter","speed","flag","SkyHndlr","var chdata=letter,parm=_pMgr.getDset('parm'),foward=false;if (SkyHndlr.Exists(letter)){if (flag){chdata=(SkyHndlr.Item(letter));foward=true;}}parm.RemoveAll();parm.add(\"_SPEED\",((chdata.length-1)*this.CONST)+speed);parm.add(\"_FOWARD\",foward);parm.add(\"_CHARS\",chdata);Trace_Print((\"IN: \"+letter+\" OUT: \"+chdata+\" SPEED: \"+speed+\" FOWARD: \"+foward),\" ISALPHA: \",1);return parm;");
   this.PrcPrms=new Function("chkchar","type","isFwrd","SkyHndlr","var crrparms; switch(chkchar){case \"G\":this.informViewers(this.ID,{\"smode\":true});break;case\"S\":this.informViewers(this.ID,{\"smode\":false});break;}crrparms=(this.isAlpha(chkchar,type,isFwrd,SkyHndlr));return crrparms;");
   this.update=new Function("CObj","CPram","if (CObj == \"Target\"){if (CPram[\"toHndlrs\"]){this.PltClk=CPram[\"LDelay\"];this.CONST=CPram[\"KPdelay\"];this.informViewers(this.ID,{\"altkeys\":true,\"type\":CPram[\"ID\"]});}}");
   this.getId=new Function("return this.ID;");this.pause=new Function("return this.CONST;");
}
function MMSmsg()
{
    this.identifier="MMSmsg";this.MAX_PAGES=4;this.PAGE_COUNTER=0;
    this.Mpage=new Array(null,null,null,null);
    this.addMPage=new Function("index","if ((this.Mpage[index]) == null){this.Mpage[index]=new MMSobj(\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",\"\",0,0,0,0,0,0);this.PAGE_COUNTER++;return true;}else{Trace_Print(\"Cannot Add To Page[\"+index+\"] Because It Has Already Been Assigned.\",\" MMSmsg(): \");return false;}");
    this.remvMPage=new Function("Mpage","var j,i, npage=new Array(); if (this.PAGE_COUNTER > 0){for (j=i=0; i <= this.MAX_PAGES; i++){if (i != Mpage)npage[j]=this.Mpage[i];else{j--;this.Mpage[i]=null}}this.PAGE_COUNTER--;return npage;}else{Trace_Print(\"Cannot Remove From Empty Container\",\" MMSmsg(): \");return false;}");
    this.getMPage=new Function("index","if ((index < this.MAX_PAGES)&&(index >=0))return this.Mpage[index];else return false;");
    this.setMPage=new Function("index","M0","C0","var locp,lC0,lM0,i,k=0; if ((index < this.MAX_PAGES)&&(index >=0)){locp=this.Mpage[index];lC0=locp.getCond();lM0=locp.getMedia();for(i in M0)lM0[i]=M0[i];for (i in lC0){if ((lC0[i] == 0)||(lC0[i] == 1)){lC0[i]=C0[k]|lC0[i];}else{ lC0[i]=C0[k];} k++;}if(locp != null){locp.setMedia(lM0);locp.setCond(lC0);locp.setId(this.PAGE_COUNTER);this.Mpage[index]=locp;}else return false;}else return false;");
    this.isMFull=new Function("if (this.PAGE_COUNTER == this.MAX_PAGES){Trace_Print(\"Page Max Has Been Reached.\",\" MMSmsg(): \"); return true;}else return false;");
    this.isMFree=new Function("index","if (this.Mpage[index] == null)return true;else{Trace_Print(\"No Pages Left.\",\" MMSmsg(): \"); return false;}");this.getMCnt=new Function("return this.MAX_PAGES;");
    this.setMItem=new Function("index","type","value","var page; if ((index < this.MAX_PAGES)&&(index >= 0)){page=this.Mpage[index];eval(\"page\"+type+\"(\"+value+\");\");this.Mpage[index]=page;}else return false;");
    this.getId=new Function("return this.identifier;");this.setId=new Function("value","this.identifier=value;");
}
function MMSobj(s0,t0,t1,t2,t3,t4,t5,t6,t7,t8,t9,c0,c1,c2,c3,c4,c5)
{
    this.identifier=-1;
    this.recpnt=new Array();this.CC=new Array();this.BCC=new Array();
    this.identifier=0;this.pages=0;this.subj=s0;this.msg=new Array();
    this.media={"mp4":t0,"mid":t1,"wav":t2,"amr":t3,"jpeg":t4,"bmp":t5,"wbmp":t6,"png":t7,"gif":t8,"agif":t9}
    this.cond={"insert_image":c0,"record_image":c1,"insert_audio":c2,"record_audio":c3,"insert_video":c4,"record_video":c5}
    this.getMsg=new Function("return ((new String(this.msg)).toLowerCase());");
    this.getSubj=new Function("return ((new String(this.subj)).toLowerCase());");
    this.getRecpnt=new Function("if (this.recpnt.length == undefined) return \"\"; else return this.recpnt;");
    this.getPhone=new Function("return ((new String(this.phone)).toLowerCase());");
    this.getPages=new Function("return this.pages;");
    this.getMedia=new Function("type","var i,f=false;if((type == undefined)||(type == null))return this.media; else{for (i in this.media){if (i == type){f=true;break;}} if(f) return this.media[i];else return f;}");
    this.setMsg=new Function("value","var cnt=this.msg.length; this.msg[cnt]=value;");
    this.setSubj=new Function("value","this.subj=value;");
    this.setRecpnt=new Function("value","var cnt=this.recpnt.length; this.recpnt[cnt]=value;");
    this.setCC=new Function("value","var cnt=this.CC.length; this.CC[cnt]=value;");
    this.setBCC=new Function("value","var cnt=this.BCC.length; this.BCC[cnt]=value;");
    this.setPhone=new Function("value","this.phone=value;");
    this.setPages=new Function("num","this.pages=num;");
    this.setMedia=new Function("MedaArrval","if (MedaArrval.length == this.media.length)this.media=MedaArrval;else return false;");
    this.Reset=new Function("var item; eval(\"this.\"+item+\"=new Array();\");");
    this.getId=new Function("return this.identifier;");
    this.setId=new Function("value","this.identifer=value;");
    this.getCond=new Function("type","var i,f=false;if((type == undefined)||(type == null))return this.cond; else{for (i in this.cond){if (i == type){f=true;break;}} if(f) return this.cond[i];else return f;}");
    this.setCond=new Function("CondArrval","if (CondArrval.length == this.cond.length)this.cond=CondArrval;else return false;");
    this.showMedia=new Function("type","with(this){var i; for (i in this.media){Trace_Print(i+\"=\"+this.media[i]);}}");
    this.getCC=new Function("if (this.CC.length == undefined) return \"\"; else return this.CC");
    this.getBCC=new Function("if (this.BCC.length == undefined) return \"\"; else return this.BCC");
}
function SkyMobileObject()
{
    SkyMobileObject.prototype.informViewers=informViewers;
    this.ID="MobileObject";SkyMobileObject.prototype.regObserver=regObserver;
    this.ObsVect=new Array();this.args=new Array();this.IIP=false;this.mode;this.cmd;this.lcmd;
    this.RTobjs={"ChHndlr":(new CharHndlr()),"SkyHndlr":(new SkyKPHndlr())};this.halt=false;
    this.Platforms={"ANASTA":(new ANASTA()),"N101":(new N101()),"N200":(new N200())}
    this.modes={"auto":"1","manual":"0"};this.rval=false;this._com=false;this._lc=false;
    this.ttable={"U":"^","D":"V","L":"<","R":">","I":":@","b":":C","r":"[","l":"]","e":"E"};
    this.nextInt=new Function("IN","_f","_p","_host","var _r=new (_p.res)();if (_f.FileExists(_p.path+_r._paths[\"_src\"]+_r.pause)){Debug_Print(\"###### Pausing... ######\");while(_f.FileExists(_p.path+_r._paths[\"_src\"]+_r.pause)){try{_host.Sleep(500);}catch(e){}}}else{if (_f.FileExists(_p.path+_r._paths[\"_src\"]+_r.stop)){Debug_Print(\"###### Halting... ######\");try{_host.Sleep(500);this.halt=true;}catch(e){}}};this.IIP=IN;this.IIP++;return this.IIP;");
    this.getTarget=new Function("runner","var e=new Error(); if(this.Platforms[runner] != null){this.informViewers(this.ID,{\"platform\":runner});return this.Platforms[runner];}else throw e;");
    this.translate=new Function("key","try{return(((this.ttable[key] != undefined)||(this.ttable[key]!= null))?this.ttable[key]:key);}catch(e){Trace_Print('No Entryr For: '+key,'Exception: ');return key;}");
    this.delayCmd=new Function("cmd","last","block","var i=0;this.args[\"last\"]=last;this.args[\"noBlock\"]=block;if(this.args[\"last\"])this.lcmd='';else{if(this.mode==\"auto\"){this.lcmd=(new String(this.cmd[0])).concat(\"\\\"\"+this.translate(cmd)+\"\\\"\"+this.cmd[1]);}else this.lcmd=cmd;};this.send();return cmd;");
    this.delOldReg=new Function("var REG_SUCCESS=1,REG_FAILED=0,ipath=\"SOFTWARE\\\\slientAT\";rst=(!accReg(ipath,\"\\\\\",\"D\", null,false))?REG_FAILED:REG_SUCCESS;(rst==REG_FAILED)?(_e=\"Error: Registry Delete Failed.\",Trace_Print(_e,' delreg: '),_e):true;");
    this.initHndlrs=new Function("this.RTobjs[\"ChHndlr\"].regObserver(this.RTobjs[\"SkyHndlr\"]);this.regObserver(this.Platforms[\"ANASTA\"]);this.regObserver(this.Platforms[\"N101\"]);this.regObserver(this.Platforms[\"N200\"]);this.Platforms[\"N200\"].regObserver(this.RTobjs[\"ChHndlr\"]);this.Platforms[\"N101\"].regObserver(this.RTobjs[\"ChHndlr\"]);this.Platforms[\"ANASTA\"].regObserver(this.RTobjs[\"ChHndlr\"]);this.RTobjs[\"ChHndlr\"].informViewers(this.RTobjs[\"ChHndlr\"].getId(),{\"smode\":0});return this.RTobjs;");
    this.setAttrib=new Function("mode","cmd","this.mode=mode;this.cmd=cmd;return;");
}
function res()
{
    this.TIME_SLICE=50;
    this.TIME_INTERVAL=16;
    this.RETURN_KEY=13;
    this.srtcmd="";this.endcmd;this.mode="";this.str=new String("");
    this._html=new String("<html><head><title>AT-Util v1.1</title><script language=\"jscript\">"+_setPram+_setCom+SkyMobileObject+res+rsMgr+threadCmn+threadA+threadB+_kp+accReg+"var SkyMobile,f_obj,WSHost,JI,ie,shell,_res,_pMgr,getPath,_da;Trace_Print(\"'AT-Util v1.1' Launched Successfully...\",\" recorder: \");try{_da=window.dialogArguments;}catch(e){};if (_da[3]==_da[5].cnst[\"_rec\"]){_setPram(_da);}<\/script></head><body id=\"xbdy\" style=\"direction: ltr;\" onunload=\"Trace_Print('\\\'AT-Util v1.1\\\' Unloaded Successfully....',' recorder: ');_da[4].cntxLock=false;if(_da[4].truload){JI.quit(this);}return;\">");
    this._t1=new String("<div id='idiv' STYLE=\"height:'100%';width:'100%';top:'0%';left:'0%';border:'groove';background:'#000000';\" onactivate=\"if(this.cnt==null){this.cnt=0;this.issue='at-type';}return;\" onbeforeupdate=\"var e=new Error();try{if((event._type =='_kp-stop')||(event._type =='_kp-done')){this.style.background='#000000';}}catch(e){}event.returnValue=false;event.cancelBubble=true;\">");
    this._t2=new String("<div id='iidiv' style=\"background:'#778899'; height:'45px;'width:'100%';border:'groove ';padding:'0px';border:'0px slategrey';color:'#C0C0C0';position:'relative';top:'0';left:'0';font-size:'8pt';z-index:'4'\">Enter Command</div><input type=text value=\"\" name=\"txtbox\" id=\"txtbox\" style=\"height=21; width=550;\" onkeydown=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];");
    this._t3=new String("oe._type='keypress';odoc.getElementById('iispn').fireEvent('onkeydown',oe);\" onkeyup=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];odoc.getElementById('iispn').fireEvent('onkeyup',oe);\" onkeypress=\"if ((event.issue=='rcd-start')||(event.issue=='unload')||(event.issue=='rcd-stop')||(event.issue=='plybck-play')||(event.issue=='comport')||(event.issue=='command')||(event.issue=='mode')||(event.issue=='at-type')||(event.issue=='resize')||(event.issue=='plybck-done'))_kp('KEYPRESS');else{_kp('KEYEVENT');}event.returnValue=false;event.cancelBubble=true; \"onbeforeupdate=\" event.returnValue=false;event.cancelBubble=true;\">");
    this._t4=new String("<select id=\"slct\" style=\"width:'9%'\" onbeforeactivate=\"var oo,args=_pMgr._c1(self),odoc=args[0],oe=args[1],_opt='OPTION';try{if(this.firstChild.tagName==_opt)_od=true;else _od=false;}catch(e){_od=false;}if(!_od){for (var i=0;i<10;i++){oo=odoc.createElement('<'+_opt+' id=o'+i+'>');this.insertBefore(oo);if (i!=0){odoc.getElementById('o'+i).innerText=");
    this._t5=new String("(new String('COM'+i)).toString();}}}event.returnValue=false;event.cancelBubble=true;return false;\" onchange=\"try{rmsel0.style.visibility='hidden';}catch(e){}\" onclick=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];if (!slct.disabled){try{if (slct.selectedIndex != -1)_chk=true;else _chk=false;}catch(e){_chk=false;}if((_chk)&&(slct.selectedIndex!=0)){slct.disabled=true;oe.com=new String(self.parent.window.document.getElementById('o'+slct.selectedIndex).innerText);oe.issue='comport';odoc.getElementById('txtbox').fireEvent('onkeypress',oe);event.returnValue=false;event.cancelBubble=true;return false;}}\"></select>");
    this._t6=new String("<button id=\"zbtn\" style=\"cursor:hand;border:'groove yellow';position:'absolute';top:'18';left:'610';z-index:6;background:'#000000';width:'18';height:'18%';\" onmousedown=\"this.style.border='groove red';this.blur();event.returnValue=false;");
    this._t7=new String("event.cancelBubble=true;return false;\" onmouseup=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];oe._reset=true;oe._type='';this.style.border='groove yellow';_pMgr._rst(odoc,oe);this.blur();event.returnValue=false;event.cancelBubble=true;return false;\"><button id=\"ybtn\" style=\"cursor:hand;border:'groove cyan';position:'absolute';top:'29';left:'610';z-index:6;background:'#000000';width:'18';height:'17%';");
    this._t8=new String("\" onmousedown=\"this.style.border='groove red';this.blur();event.returnValue=false;event.cancelBubble=true;return false;\" onmouseup=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];if (this._s){this._s=false;oe._h=300;oe._w=642;}else{this._s=true;oe._h=83;oe._w=642;}oe.issue='resize';this.style.border='groove cyan';this.blur();oe._type='';odoc.getElementById('txtbox').fireEvent('onkeypress',oe);event.returnValue=false;");
    this._t9=new String("event.cancelBubble=true;return false;\"><button id=\"btn\"; style=\"cursor:hand;border:'outset white';background:'#AFEEEE';top:'60%';left:'64%';width:'25%';top:'0%';height:'8%';\" onclick=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];if(odoc.getElementById('ispn').name==\'plybck-play\')odoc.getElementById('ispn').name=\'plybck-done\';else odoc.getElementById('ispn').name=\'plybck-play\';oe.issue=odoc.getElementById('ispn').name;");
    this._tA=new String("odoc.getElementById('txtbox').fireEvent('onkeypress',oe);oe.issue=odoc.getElementById('ispn').name;odoc.getElementById('iispn').fireEvent('onkeypress',oe);event.returnValue=false;event.cancelBubble=true;\"><button id=\"iiibtn\"; style=\"cursor:hand;border:'outset white';background:'#9F0C3E';top:'60%';left:'64%';width:'25%';top:'0%';height:'8%';");
    this._tB=new String("\" onclick=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];if(odoc.getElementById('iidiv').name==\'auto\')odoc.getElementById('iidiv').name=\'manual\';else odoc.getElementById('iidiv').name=\'auto\';oe.issue='mode';oe._type='';oe.mode=odoc.getElementById('iidiv').name;odoc.getElementById('txtbox').fireEvent('onkeypress',oe);oe.issue=odoc.getElementById('iidiv').name;");
    this._tC=new String("odoc.getElementById('ispn').fireEvent('onkeypress',oe);event.returnValue=false;event.cancelBubble=true;\"><button id=\"vbtn\"; style=\"cursor:hand;border:'outset white';background:'#445AFE';top:'60%';left:'64%';width:'25%';top:'0%';height:'8%';\" onclick=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];oe.cmd=odoc.getElementById('idiv');odoc.getElementById('iiispn').fireEvent('onkeypress',oe);");
    this._tD=new String("event.returnValue=false;event.cancelBubble=true;return;\"><button id=\"ibtn\" style=\"cursor:hand;background:'#7FFF00';border:'outset white';top:'60%';left:'93%';width:'25%';height:'8%';\" onclick=\"var args=_pMgr._c1(self),odoc=args[0],oe=args[1];if(odoc.getElementById('ibtn').name==\'rcd-start\')odoc.getElementById('ibtn').name=\'rcd-stop\';else odoc.getElementById('ibtn').name=\'rcd-start\';");
    this._tE=new String("oe.issue=odoc.getElementById('ibtn').name;odoc.getElementById('iispn').fireEvent('onkeypress',oe);odoc.getElementById('txtbox').fireEvent('onkeypress',oe);event.returnValue=false;event.cancelBubble=true;\"></button></button></button></button></div><div id='spnd' style=\"cursor:hand;position:absolute;");
    this._tF=new String("top:50;left:3;background:'#FFFFFF'; border:2px groove #FFFFFF; width:99%; height:17px; font-family:verdana; font-size:7pt;\"><span id=\"ispn\" style=\"background:'lightgrey';height:'25%';width:'33%';\" onbeforeupdate=\"var e=new Error();if(event._type ==\'_kp-mode\'){this.innerText='MODE:';this.style.color='#000000';}event.returnValue=false;event.cancelBubble=true;\"  onkeypress=");
    this._tG=new String("\"var e=new Error(),s='MODE: AUTO',args=_pMgr._c1(self),odoc=args[0],oe=args[1];try{if (event.issue=='manual'){this.innerText='MODE: MANUAL';this.style.color='purple';_pMgr.mode='manual';}else{ this.innerText=s;_pMgr.mode='auto';this.style.color='#2F4F4F';}}catch(e){}event.returnValue=false;event.cancelBubble=true;\">MODE:</span><span id=\"iiispn\" style=\"background:'lightgrey';height:'25%';width:'34%';\" ");
    this._tH=new String("onbeforeupdate=\"var e=new Error();if(event._type ==\'_kp-cmd\'){this.innerText='COMMAND:';this.style.color='#000000';}event.returnValue=false;event.cancelBubble=true;\" onkeypress=\"var e=new Error(),ocmd,cmd=new Array('at+ckpd=','at+sky=',''),end=new Array(',1,1','',''),div,args=_pMgr._c1(self),odoc=args[0],oe=args[1];try{if (event.cmd.tagName!=null){div=event.cmd;if (div.cnt==cmd.length-1)div.cnt=0;else div.cnt+=1;");
    this._tI=new String("ocmd=new Array(cmd[div.cnt],end[div.cnt]);this.style.color='sienna';this.innerText=new String('COMMAND: '+ocmd[0]+' [END: '+ocmd[1]+']');}}catch(e){}_pMgr.cmd=ocmd;oe.issue='command';oe.cmd=ocmd;oe._type='';odoc.getElementById('txtbox').fireEvent('onkeypress',oe);event.returnValue=false;event.cancelBubble=true;return;\">COMMAND:</span><span id=\"iispn\" style=\"background:'lightgrey';height:'25%';width:'33%';\" onbeforeupdate=\"var e=new Error();if(event._type ==\'_kp-stat\'){this.idle=this.innerText='STATUS: IDLE';");
    this._tJ=new String("this.style.color='#000000';}event.returnValue=false;event.cancelBubble=true;\" onkeypress=\"var e=new Error(),args=_pMgr._c1(self),odoc=args[0],oe=args[1],s='STATUS: IDLE';if (event.issue==\'rcd-start\'){odoc.getElementById('btn').disabled=true;this.idle=this.innerText='STATUS: RECORDING...';}if (event.issue==\'rcd-stop\')");
    this._tK=new String("{odoc.getElementById('btn').disabled=false;odoc.getElementById('ibtn').disabled=false;this.color='#000000';this.idle=this.innerText=s;}if (event.issue==\'plybck-play\'){odoc.getElementById('vbtn').disabled=true;odoc.getElementById('ibtn').disabled=true;odoc.getElementById('iiibtn').disabled=true;this.idle=this.innerText='STATUS: PLAYBACK...';}if (event.issue==\'plybck-done\'){this.style.color='#000000';");
    this._tL=new String("odoc.getElementById('vbtn').disabled=false;odoc.getElementById('ibtn').disabled=false;odoc.getElementById('iiibtn').disabled=false;this.idle=this.innerText=s;}event.returnValue=false;event.cancelBubble=true;return;\" onkeydown=\"if (event._type==\'delay\')this.innerText='STATUS: SLEEPING...';if (event._type==\'keypress\')this.innerText='STATUS: TYPING...';else this.innerText='STATUS: IDLE';event.returnValue=false;event.cancelBubble=true;return;\" onkeyup=\"this.innerText=this.idle;event.returnValue=false;event.cancelBubble=true;\">STATUS: IDLE</span></div>");
    this._s1=new String("<div id=\"cDiv\" STYLE=\"background:'#000000'; border:'1px solid #FFFFFF'; width:'100%'; height:'30px'; font-family:'verdana'; font-size:'7pt'; border:'1px white'; z-index:'3'; \"><div id=\"oTitle\" STYLE=\"position:'relative'; width:'100%'; height:'50%'; background:'#FF99CCFF'; height:10px; font-weight:bold; padding:5px; font-size:7pt; filter:progid:DXImageTransform.Microsoft.Gradient( gradientType='1' endColorstr=#FF99CCFF, startColorstr=#FF0000FF);\">");
    this._s2=new String("</div><div id=\"oLink\" STYLE=\"cursor:'hand'; font-weight:'bold';color:'#6699CC'; padding:'5px'\" onmouseover=\"this.style.background='#cccccc'\" onmouseout=\"this.style.background='#ffffff'\" onclick=\"var _d=window.document,_cobj=_d.getElementById('cDiv').arg,_p=_cobj[9](_cobj[0].ScriptFullName,false,false);_cobj[8]=(new String(_p+_cobj[5]._paths['_lib'])).concat(_cobj[5]._files['_lib']);_cobj[4].nw_hndl(40,642,150,150,true,_cobj);return false;\">Enable Recorder<div id=\"rLink\" style=\"display:none\" ></div></div></div></div>");
    
    //== Non-Numeric KeyPad Buttons ==// 
    this._KB0=new String("<html><head><style>DIV.kp{cursor:hand;filter:progid:DXImageTransform.Microsoft.Iris(irisStyle=\"CROSS\", motion=\"in\")progid:DXImageTransform.Microsoft.Wave(Add=\"false\", LightStrength=8, Phase=70, Strength=0,  Freq=60) progid:DXImageTransform.Microsoft.Shadow(color=\"#333333\", Direction=335, Strength=6)progid:DXImageTransform.Microsoft.Glow(Color=#777777,Strength=2)progid:DXImageTransform.Microsoft.Gradient(endColorstr=\"#444444\", startColorstr=\"#eeeeee\", gradientType=\"1\");");
    this._KB1=new String("width=20px;height:20px;position:absolute;border:\"1px outset black\";color:slategrey;background:#AAAAAA;<\/style><head></head><body id=\"kbbdy\" style=\"filter:progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion='forward')progid:DXImageTransform.Microsoft.Gradient(endColorstr='#EEEEEE', startColorstr='#111111', gradientType='0');\" onactivate=\"this.filters[0].Apply();this.filters[1].gradientType=0;this.filters[0].Play();event.returnValue=false;event.cancelBubble=true;return;\">");
    this._KB2=new String("<script language=\"jscript\">var spcbar=\"                          SPACEBAR\",e=new Error(),_prntDlg,_res,_pMgr,getPath,_da=window.dialogArguments;_setPram;if(_da){_prntDlg=_da[6],WSHost=_w[0],JI=_w[2];}var _evntHndlr=new Function(\"src\",\"type\",\"var opdoc=_prntDlg.window.document,oe=opdoc.createEventObject();try{oe.AltKey=((src.id==spcbar)?\\\" \\\":(new String(src.id)).toLowerCase());}catch(e){}switch(type){case(3):opdoc.getElementById('txtbox').fireEvent('onkeypress',oe);oe._type='keypress';_s='onkeydown';");
    this._KB3=new String("break;case(2):oe._type='delay';_s='onkeydown';break;default:oe._type='';_s='onkeyup';break;}opdoc.getElementById('iispn').fireEvent(_s,oe);event.returnValue=false;event.cancelEvent=true;return;\");var span=\"<span style='width:10px;cursor:arrow;height:5px;position:absolute;'>\";var divhead=\"<div id=\";var divclass=\" class=\\\"kp\\\" style=\\\"color:white;cursor:hand;\\\"\";var divB1=\"onmouseover=\\\"if(!((this.over)?(this.over=1,this.out=0,this.over):this.over)){this.filters[2].Color='#111111';");
    this._KB4=new String("this.filters[4].startColorstr='#444444';this.filters[4].endColorstr='#444444';}return;\\\"\";var divB2=\"onmouseout=\\\"if(!((this.out)?(this.out=1,this.over=0,this.out):this.out)){this.filters[2].Color='#333333';this.filters[4].startColorstr='#444444';this.filters[4].endColorstr='#EEEEEE';}return;\\\"\";var divB3=\"onmousedown=\\\"this.filters[0].Apply();this.filters[3].Strength='1';_evntHndlr(this,3);this.filters[0].Play();\\\" onmouseup=\\\"this.filters[1].Apply();this.filters[3].Strength='2';");
    this._KB5=new String("_evntHndlr(this,2);this.filters[1].Play();\\\">\";var R1=new Array('Q','W','E','R','T','Y','U','I','O','P');var R2=new Array('A','S','D','F','G','H','J','K','L');var R3=new Array('Z','X','C','V','B','N','M','<','>');var sb=new Array(spcbar);var colPairs=new Array(),spnPairs=new Array(),cntx=cnty=0;var owin=self.parent.window,odoc=owin.document,obdy=odoc.body,_insertion=odoc.getElementById('kbbdy');function getRow(elements,offsetX,cx,cy,w){var cntx=cx,cnty=cy;for (var i=0;i<elements.length;i++){");
    this._KB6=new String("cntx+=cx;cnty=cy;colPairs[i]=odoc.createElement(divhead+\"\\\"\"+elements[i]+\"\\\"\"+divclass+divB1+divB2+divB3);colPairs[i].style.left=cntx+offsetX;colPairs[i].style.top=cnty;(w)?(colPairs[i].style.width=w,true):false;spnPairs[i]=odoc.createElement(span);colPairs[i].innerText=spnPairs[i].id=\" \"+elements[i];spnPairs[i].style.left=cntx+offsetX;spnPairs[i].style.width=cnty;(w)?(spnPairs[i].style.top=w,true):false;window.onunload=new Function(\"var opdoc=_da[6].document,");
    this._KB7=new String("oe=opdoc.createEventObject();oe.issue='unload';opdoc.getElementById('txtbox').fireEvent('onkeypress',oe);_evntHndlr();event.returnValue=false;event.cancelEvent=true;return;\");_insertion.insertBefore(colPairs[i]);_insertion.insertBefore(spnPairs[i]);}}getRow(R1,-60,40,5);getRow(R2,-30,39,38);getRow(R3,-40,39,72);getRow(sb,-35,47,112,300);try{_setPram(_da);}catch(e){Trace_Print(\"Warning - Unable To Initialize Local Variables...\",\" keypad: \");}<\/script></body></html>");

    //== Non-Numeric KeyPad Solution ==// 
    this._dirH0=new String("<html><head><style>SPAN.horizontal{cursor:hand;filter:progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion=\"forward\")progid:DXImageTransform.Microsoft.RandomDissolve( Duration=1)progid:DXImageTransform.Microsoft.Shadow(color=\"#444444\", Direction=315, Strength=4)progid:DXImageTransform.Microsoft.Gradient(endColorstr=\"#111111\", startColorstr=\"#FFFFFF\", gradientType=\"0\");");
    this._dirH1=new String("height:30px;width:60px;border:2px inset white;background:black;position:absolute;}SPAN.vertical{cursor:hand;filter:progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion=\"forward\")progid:DXImageTransform.Microsoft.RandomDissolve( Duration=1)progid:DXImageTransform.Microsoft.Shadow(color=\"#444444\", Direction=315, Strength=4)progid:DXImageTransform.Microsoft.Gradient(endColorstr=\"#EEEEEE\", ");
    this._dirH2=new String("startColorstr=\"#111111\",gradientType=\"1\");height:40px;width:30px;border:2px inset white;background:black;position:absolute;}DIV.ikey{cursor:hand;filter:progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion=\"forward\")progid:DXImageTransform.Microsoft.Wave(Add=\"false\",LightStrength=40, Phase=30, Strength=0,Freq=10)progid:DXImageTransform.Microsoft.Shadow(color=\"#444444\",");
    this._dirH3=new String(" Direction=335, Strength=6)progid:DXImageTransform.Microsoft.Glow(Color=black,Strength=1);border-style:inset;height:31px;width:34px;top:51;left:87;background:#AAAAAA;font-size:7pt;position:absolute;z-index:5;}SPAN.skey{cursor:hand;filter:progid:DXImageTransform.Microsoft.Iris(irisStyle=\"CROSS\", motion=\"in\")progid:DXImageTransform.Microsoft.Wave(Add=\"false\", LightStrength=10, Phase=70, Strength=1,  Freq=10)");
    this._dirH4=new String("progid:DXImageTransform.Microsoft.Shadow(color=\"#444444\", Direction=335, Strength=6)progid:DXImageTransform.Microsoft.Glow(Color=black,Strength=1);border-style:outset;position:absolute;background:#AAAAAA;color:skyblue;}SPAN.npad{cursor:hand;filter:progid:DXImageTransform.Microsoft.Iris(irisStyle=\"CROSS\", motion=\"in\");border-style:groove;color:highlighttext;background:#444444;color:skyblue;} BODY{filter:progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion='forward')progid:DXImageTransform.Microsoft.Gradient(endColorstr=\"#eeeeee\", startColorstr=\"#444444\", gradientType=\"0\");}<\/style>");
    this._dirA=new String("<script language='jscript'>var e=new Error(),_da=window.dialogArguments,_prntDlg=_da[6],_res,_pMgr,getPath;var xkeyMMV=new Function(\"tag\",\"args\",\"filts\",\"if(!((tag.over)?(tag.over=1,tag.out=0,tag.over):tag.over)){tag.filters[1].Apply();tag.filters[2].Color=args['_color'];tag.filters[3].startColorstr=args['start_color'];tag.filters[3].endColorstr=args['end_color'];tag.filters[1].Play();}return tag;\");");
    this._dirB=new String("var _evntHndlr=new Function(\"src\",\"type\",\"var opdoc=_prntDlg.window.document,oe=opdoc.createEventObject();try{oe.AltKey=src.id;}catch(e){}switch(type){case(3):opdoc.getElementById('txtbox').fireEvent('onkeypress',oe);oe._type='keypress';_s='onkeydown';break;case(2):oe._type='delay';_s='onkeydown';break;default:oe._type='';_s='onkeyup';break;}opdoc.getElementById('iispn').fireEvent(_s,oe);event.returnValue=false;");
    this._dirC=new String("event.cancelEvent=true;return;\");var xkeyMPress=new Function(\"tag\",\"args\",\"filts\",\"tag.filters[2].Strength=args['strength_value'];tag.filters[0].Apply();tag.filters[0].Play();return tag;\");var ckeyMMV=new Function(\"tag\",\"args\",\"filts\",\"if(!((tag.over)?(tag.over=1,tag.out=0,tag.over):tag.over)){tag.filters[1].Apply();tag.filters[2].Color=args['_color'];tag.filters[1].Play();}return tag;\");var n");
    this._dirD=new String("keyMPress=new Function(\"tag\",\"args\",\"filts\",\"tag.filters[0].Apply();tag.style.color=args['_color'];tag.style.background=args['background_color'];tag.filters[0].Play();return tag;\");window.onunload=new Function(\"var opdoc=_da[6].document,oe=opdoc.createEventObject();oe.issue='unload';opdoc.getElementById('txtbox').fireEvent('onkeypress',oe);_evntHndlr();event.returnValue=false;event.ca");
    this._dirE=new String("ncelEvent=true;return;\");try{_setPram(_da);}catch(e){Trace_Print(\"Warning - Unable To Initialize Local Variables...\",\" joystick: \");}<\/script></head><body style=\"background:'slategrey'\" onactivate=\"this.filters[0].Apply();this.filters[1].gradientType=1;this.filters[0].Play();event.returnValue=false;event.cancelBubble=true;return;\"><span id=\"U\" class=\"vertical\" style=\"top:8;left:89;\"onmouseover=\"var args={'_color':'cyan','start_color':'#AACEEE','end_color':'#111111'};xkeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444'");
    this._dirF=new String(",'start_color':'#111111','end_color':'#EEEEEE'};xkeyMMV(this,args);return;\"onmousedown=\"var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\" onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"><\/span><span id=\"D\" class=\"vertical\" style=\"top:81;left:89;\"onmouseover=\"var args={'_color':'cyan','start_color':'#AACEEE','end_color':'#111111'};xkeyMMV(this,arg");
    this._dirG=new String("s);return;\"onmouseout=\"var args={'_color':'#444444','start_color':'#111111','end_color':'#EEEEEE'};xkeyMMV(this,args);return;\"onmousedown=\"var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\" onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"><\/span><div id=\"I\" class=\"ikey\"onmouseover=\"if(!((this.over)?(this.over=1,this.out=0,this.over):this.over)){this.filters[0].Apply();");
    this._dirH=new String("this.filters[0].Motion='forward';this.style.background='#FFFFFF';this.filters[2].Color='blue';this.filters[0].Play();}return;\"onmouseout=\"if(!((this.out)?(this.out=1,this.over=0,this.out):this.out)){this.filters[0].Apply();this.filters[0].Motion='reverse';this.style.background='#AAAAAA';this.filters[2].Color='#444444';this.filters[0].Play();}return;\"onmousedown=\"this.filters[3].Strength='0';this.filters[2].Strength=1;_evntHndlr(this,3);return;\" ");
    this._dirI=new String("onmouseup=\"this.filters[3].Strength='1';this.filters[2].Strength=6;_evntHndlr(this,2);return;\"></div><span id=\"L\" class=\"horizontal\" style=\"top:50;left:26;\"onmouseover=\"var args={'_color':'cyan','start_color':'#111111','end_color':'#AACEEE'};xkeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444','start_color':'#EEEEEE','end_color':'#111111'};xkeyMMV(this,args);return;\"onmousedown=\"var args={'strength_value':'1'};");
    this._dirJ=new String("xkeyMPress(this,args);_evntHndlr(this,3);return;\" onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"><\/span><span id=\"R\" class=\"horizontal\" style=\"top:50;left:123;\"onmouseover=\"var args={'_color':'cyan','start_color':'#111111','end_color':'#AACEEE'};xkeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444','start_color':'#EEEEEE','end_color':'#111111'};xkeyMMV(this,args);return");
    this._dirK=new String(";\"onmousedown=\"var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\" onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"><\/span><table style=\"font-size:8pt;top:0;left:50;position:absolute\"><tbody><tr style=\"position:absolute;top:0;left:0;\"><td style=\"font-size:8pt;position:absolute;left:0;top:0;\"><span id=\"LS\" class=\"skey\" style=\"position:absolute;");
    this._dirL=new String("width:10px;height:1px;\"onmouseover=\"var args={'_color':'purple'};ckeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444'};ckeyMMV(this,args);return;\"onmousedown=\"var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\" onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"><\/span><span style=\"position:absolute;font-size:8pt;top:0;left:0;z-index:5;\">L<\/span></td><td style=\"font-size:8pt;position:absolute;left:86;top:0;\"><span id=\"RS\" class=\"skey\" style=\"position:absolute;width:10px;height:1px;\"onmouseover=\"var args={'_color':'purple'};ckeyMMV(this,args);return;\"onmouseout=\"");
    this._dirM=new String("var args={'_color':'#444444'};ckeyMMV(this,args);return;\"onmousedown=\"var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\" onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"><\/span><span style=\"position:absolute;font-size:8pt;top:0;left:0;z-index:5;\">R<\/span></td></td></tr><tr style=\"position:absolute;top:85;left:0;\"><td style=\"font-size:8pt;position:absolute;left:0;top:0;\"><span id=\"d\" class=\"skey\" style=\"position:absolute;width:15px;height:10px;\"onmouseover=\"var args={'_color':'green'};ckeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444'};ckeyMMV(this,args);");
    this._dirN=new String("args={'_color':'black'};ckeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444'};ckeyMMV(this,args);return;\"onmousedown=\"var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"><\/span></td></tr><tr style=\"position:absolute;top:85;left:0;\"><td style=\"font-size:8pt;position:absolute;left:43;top:43;\"><span id=\"BK\" class=\"skey\" style=\"position:absolute;width:15px;height:10px;\"onmouseover=\"var args={'_color':'black'};ckeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444'};ckeyMMV(this,args);return;\"onmousedown=\"");
    this._dirO=new String("var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);_evntHndlr(this,2);return;\"></span></td></tr><tr style=\"position:absolute;top:85;left:0;\"><td style=\"font-size:8pt;position:absolute;left:82;top:0;\"><span id=\"E\" class=\"skey\" style=\"position:absolute;width:15px;height:10px;\"onmouseover=\"var args={'_color':'red'};ckeyMMV(this,args);return;\"onmouseout=\"var args={'_color':'#444444'};ckeyMMV(this,args);return;\" onmousedown=\"var args={'strength_value':'1'};xkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'strength_value':'6'};xkeyMPress(this,args);");
    this._dirP=new String("_evntHndlr(this,2);return;\"><\/span></td></tr></tbody></table><table style=\"border:height:35%;width:10%;font-size:28pt;top:165;left:64px;position:absolute\"><tbody><tr style=\"position:absolute;top:0;left:0;\"><td style=\"font-size:8pt;left:0;top:2;\"><span id=\"1\" class=\"npad\" style=\"padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);");
    this._dirQ=new String("_evntHndlr(this,2);return;\">1<\/span><span style=\"position:absolute;top:18;left:8;\"> ~ <\/span><span id=\"2\" class=\"npad\" style=\"margin-left:4px;padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">2<\/span><span style=\"position:absolute;top:18;left:36;\">ABC<\/span><span id=\"3\" class=\"npad\" ");
    this._dirR=new String("style=\"margin-left:1px;padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">3<\/span><span style=\"position:absolute;top:18;left:64;\">DEF<\/span></td></tr><tr style=\"position:absolute;top:40;left:0;\"><td style=\"font-size:8pt;left:0;top:2;\"><span id=\"4\" class=\"npad\" style=\"padding:6;z-index:5;\"");
    this._dirS=new String("onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">4<\/span><span style=\"position:absolute;top:18;left:8;\">GHI<\/span><span id=\"5\" class=\"npad\" style=\"margin-left:1px;padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"");
    this._dirT=new String("onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">5<\/span><span style=\"position:absolute;top:18;left:36;\">JKL<\/span><span id=\"6\" class=\"npad\" style=\"margin-left:1px;padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"");
    this._dirU=new String("onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">6<\/span><span style=\"position:absolute;top:18;left:64;\">MNO<\/span></td></tr><tr style=\"position:absolute;top:80;left:0;\"><td style=\"font-size:8pt;left:0;top:2;\"><span id=\"7\" class=\"npad\" style=\"padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"");
    this._dirV=new String("onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">7<\/span><span style=\"position:absolute;top:18;left:2;\">PQRS<\/span><span id=\"8\" class=\"npad\" style=\"margin-left:1px;padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"");
    this._dirW=new String("onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">8<\/span><span style=\"position:absolute;top:18;left:34;\">TUV<\/span><span id=\"9\" class=\"npad\" style=\"margin-left:1px;padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"");
    this._dirX=new String("onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">9<\/span><span style=\"position:absolute;top:18;left:60;\">WXYZ<\/span></td></tr><tr style=\"position:absolute;top:120;left:0;\"><td style=\"font-size:8pt;left:0;top:2;\"><span id=\"*\" class=\"npad\" style=\"padding:6;z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"");
    this._dirY=new String("onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">*<\/span><span style=\"position:absolute;top:18;left:14;\"> ! <\/span><span id=\"0\" class=\"npad\" style=\"margin-left:4px;padding:6;z-index:5;\"onmouseover=\"");
    this._dirZ=new String("this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">0<\/span><span style=\"position:absolute;top:18;left:44;\"> - <\/span><span id=\"#\" class=\"npad\" style=\"margin-left:4px;padding:6;");
    this._dir0=new String("z-index:5;\"onmouseover=\"this.style.color='white';this.style.background='black';return;\"onmouseout=\"this.style.color='skyblue';this.style.background='#444444';return;\"onmousedown=\"var args={'_color':'#444444','background_color':'skyblue'};nkeyMPress(this,args);_evntHndlr(this,3);return;\"onmouseup=\"var args={'_color':'skyblue','background_color':'#444444'};nkeyMPress(this,args);_evntHndlr(this,2);return;\">#<\/span><span style=\"position:absolute;top:18;left:73;\"> $ <\/span></td></tr></tbody></table></body></html>");

    //== Serial-Protocol Information==//
    this.HKLM=new String("HKLM\\");
    this.REG_SZ=new String("REG_SZ");
    this.err1=new String("Error: 'ThreadA' -> {1:Write()}.");
    this.err2=new String("Error: 'ThreadA' -> {2:Write()}.");
    this.err3=new String("Error: 'ThreadA' -> {3:Write()}.");
    this.err4=new String("Exception Occurred - [Cause]: 'Delete()'.\n");
    this.err5=new String("Error: '_kp' -> {1:Write()}.");
    this.err6=new String("Exception Occurred - [Cause]: 'ReadAll()'.\nMake Sure Input File Is Not Empty.");
    this.err7=new String("Exception Occurred - [Cause]: 'OpenTextFile()'.\nMake Sure Input File Exists.");
    this.err8=new String("Attention: Cannot Locate Required File P4.exe.\nWSHost Host Is Now Terminating. This May Cause Program Instability...");
    this.err9=new String("Error: 'ThreadB' -> {1:delayCmd()}.");
    this.err10=new String("Error: The Menu Is Experencing Problems.\nYou May Need To Restart The Application To Correct This Issue...");
    this.err11=new String("Error: Could Not Register Comport Port Number");
    this.err14=new String("Error: Cannot Export File. The Source Cannot Be Located No Longer Exists.");
    this.err15=new String("Error: Exception Thrown. The Command Was Not Successful.");
    this.err16=new String("Error: Unable To Setup Environment. Aborting...");
    this.errFatal=new String("Fatal Error: An Unrecoverable Error Has Occured. Terminating Application...");
    this.err17=new String("Failed To Create Temp File....");
    this.err18=new String("File 'Create' Operation Failed.");
    this.err19=new String("File 'Read' Operation Failed.");
    this.err20=new String("ERROR: An Error While Updating Settings.");
    this.err23=new String("Fatal Error: Access To Parent Dialog Has Been Denied. Aborting...");  
    this.err25=new String("Fatal Error: Access To Child Dialog Has Been Denied.");
    this.err24=new String("Error: File Is Being Used By Another Process. Cannot Open File...");
    this.err26=new String("Verify Comport Setting Is Correct.");
    this.app=new String("AT-Util v1.0 -- Web Page Dialog");
    this.RegPath=new String("SOFTWARE\\slientAT\\volatile");
    this.str1=new String("       <    SkyPlayer V1.0    >       \n   Copyright © 2004. - SKY MobileMedia.\n\n.");
    this.str2=new String("*****Error: Cannot Locate Required File(s)******\nAborting...");
    this.str3=new String("Abort Was Asserted By Guest Process. Aborting...");
    this.str4=new String("Unknown Command: 'accReg()'.");
    this.reg={"abort":'A',"runner":'R',"hold":'G',"comport":'C',"go":'S',"done":'D',"final":'F',"success":'1',"failed":'0',"token":"S"}
    this.RWflag={"IODirFlag":"IODirFlag","vReadCmd":"vReadCmd"}
    this.WPD=new String("AT-Util v1.0 -- Web Page Dialog");
    this._nslct0=new String("<select style=\"WIDTH: 330px;visibility:hidden;position:absolute;\" size=1 id='l1' name='List1' onclick=\"rmselx.style.visibility='visible';sd.style.visibility='visible';\"  onbeforeupdate=\"\" onchange=\"Trace_Print('MMS List Activated.',' List1: ');onMMSList();return;\">");
    this._nslct1=new String("<select style=\"WIDTH: 330px;visibility:hidden;position:absolute;top:25;\" size=1 id='l2' name='List2' onclick=\"rmsely.style.visibility='visible';sd.style.visibility='visible';\" onbeforeupdate=\"\" onchange=\"if(!_pMgr.slct){_pMgr.slct++;Trace_Print('WAP List Activated',' List2: ');onWAPList();}else{_pMgr.slct=!_pMgr.slct;onListChange();}return;\">");
    //== misc ==//
    this.Ntfy={"_com":"] Was Successfully Updated To ["};  
    this.alrt={"_mms":"[MMS]: ","_wap":"[WAP]: ","_added":"Has Been Added To List."}
    this._sAT=new String("////////////////-----------------| SlientAT |----------------/////////////////");
    this._warn=new String("<center><b style='font-size:14pt;'>Working...");
    this._bn0=new String("<div class=\"banner\" id=\"img\" style=\"z-index:0;position:absolute:0;height:0px;width:0px;left:expression(this.parentElement.clientWidth);top:0px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='");
    this._bn1=new String("',sizingMethod='scale')\" >");
    this._hMsg0=new String("<div style=\"position:absolute; top:0; left:0; width:400px; height:200px; border:1px solid black; background:#eeeeee;\"><div style=\"background:white; border-bottom:5px solid #cccccc\"><img src=\"");
    this._hMsg1=new String("\" style=\"size:'60%'\"></div><br><center>&#169;2004 Sky MobileMedia. All rights reserved. </center></div>");
    this._xdlgArgs=new String("<script language='jscript'>var e=new Error();try{var _da=window.dialogArguments;WSHost=_da[0];JI=_da[2];_pMgr=_da[4];_res=_da[5];}catch(e){}<\/script>");
    this.cnst={"OKU":"onkeyup","OKD":"onkeydown","DLY":"delay","KE":"KEYEVENT","KP":"KEYPRESS","db":"rcd.shs","sp":"bin\\engine\\p4.exe","OBU":"onbeforeupdate",
        "Rstart":"rcd-start","Rstop":"rcd-stop","Pback":"plybck-play","Pdone":"plybck-done","AB":"afterBegin","rsz":"resize","_":"_.js","_pop":"POP",
        "com":"comport","cmd":"command","md":"mode","tbl":"TABLE","_prst":"_prstcfg()","_sav":"SAVAS","_rec":"REC","_TA":"threadA(_pMgr)","_TB":"threadB(_pMgr)","_TB_1":"threadB(_pMgr,1)","_TA_1":"threadA(_pMgr,1)","_com":"COM",
        "_abt":"about","_msg":"MSGS","_wpro":"WAP","_bkm":"BOOKMARKS","_mpro":"MMS","_pro":"PROFILES","_cfg":"CFG","_extkp":"_extkpad()","_xkp":"_xKB()","_launch":'LAUNCH',"_run":"RUNNER","_start":"START","_kill":"KILL","_in":"Input: "}
    this._files={"_rt":"_SkyPlayer.js","_lib":"_RtLib.js","_img":(new Array('_logo.gif','_mail.gif','_smmrk.gif','_lrgmrk.gif','_abs_arrow.gif','larrow.gif','rarrow.gif','slider.gif','_Sky.png','_back.gif','$.gif')),"_eng":"p4.exe","_ji":"JI.CORE",
                     "_tmp":"tmp.dat","_instr":"_RtInst.js","_prf":"_RtProfile.js","_pf":"t_pf.txt","_bmd":"bkmrk.dat","_msgd":"mmst.txt","_il":"_Instructions.log","_run":"run.js","_tl":"_Track.log","_rcd":"rcd.shs"}
    this._paths={"_rt":"\\","_lib":"\\bin\\lib\\","_img":"\\bin\\images\\","_eng":"\\bin\\engine\\","_src":"\\bin\\source\\","_com":"\\bin\\com\\","_mod":"\\bin\\mods\\",
                       "__rt":"file://","__lib":"/bin/lib/","__img":"/bin/images/","__eng":"/bin/engine/","__src":"/bin/source/","__com":"/bin/com/","__mod":"/bin/mods/"}
    this._colors=new Array("ff","ee","dd","cc","bb","aa","99","88","77","66","55","44","33","22","11","00");
    this._smt=new String("");this._smt1=new String("<!---|-Do_Not_Remove-|--->");this._dm={"d1":"//<!--","d2":"--><script language='jscript'>window.document.all(0).replaceAdjacentText('beforeBegin','');<\/script>"};
    this._cnt1=new String("<div id=\"_qc\" class=\"field\" style=\"width:200px;height:15px;position:absolute;top:expression(parseInt(this.offsetParent.style.top));left:expression(parseInt(this.offsetParent.style.left)+259);border:'1px white outset';z-index:30;color:darkgrey;\">");
    this._cnt2=new String("<b><span id='_pauseX' class=\"mask\" DISABLED onmousedown=\"var _id=window.document.getElementById;if(!_id('_pauseX').disabled){_id('_pauseX').style.color='#FFFFFF';_id('_pauseX').style.background='#FF0000';_id('_stopX').style.color='#FFFFFF';}return;\" onmouseup=\"_id=window.document.getElementById;if(!_id('_pauseX').disabled){_id('_pauseX').filters[0].Apply();_id('_pauseX').tog=!_id('_pauseX').tog;if((_id('_runX').style.color==\'#ffffff\')&&(_id('_stopX').style.color==\'#ffffff\')){_id('_pauseX').style.color='#FFFFFF';}else{if(_id('_runX').style.color!=\'#ffffff\'){if(_id('_pauseX').tog)_id('_pauseX').style.color='#FF0000';if(!_id('_pauseX').tog)_id('_pauseX').style.color='#FFFFFF';}}_id('_pauseX').style.background=_id('fbdy').filters[0].StartColorStr;_id('_pauseX').filters[0].Play();}return;\">Pause</span>");
    this._cnt3=new String("<span id='_stopX' class=\"mask\" DISABLED onmousedown=\"var _id=window.document.getElementById;if(!_id('_stopX').disabled){_id('_stopX').style.color='#FFFFFF';_id('_stopX').style.background='#7F9F9F';}return;\" onmouseup=\"_id=window.document.getElementById;if(!_id('_stopX').disabled){_id('_stopX').filters[0].Apply();_id('_runX').style.color='#FFFFFF';_id('_pauseX').style.color='#FFFFFF';_id('_stopX').style.color='#7F9F9F';_id('_stopX').style.background=_id('fbdy').filters[0].StartColorStr;_id('_pauseX').tog=1;_id('_runX').style.background=_id('fbdy').filters[0].StartColorStr;_id('_stopX').filters[0].Play();}return;\">Stop</span>");
    this._cnt4=new String("<span id='_runX' class=\"mask\" style=\"width:34%;\" DISABLED onmousedown=\"var _id=window.document.getElementById;if(!_id('_runX').disabled){_id('_runX').style.color='#FFFFFF';_id('_runX').style.background='#0000FF';_id('_pauseX').style.color='#FFFFFF';_id('_stopX').style.color='#FFFFFF';}return;\" onmouseup=\"_id=window.document.getElementById;if(!_id('_runX').disabled){_id('_runX').filters[0].Apply();_id('_runX').style.color='#0000FF';_id('_pauseX').tog=0;_id('_runX').style.background=_id('fbdy').filters[0].StartColorStr;_id('_runX').filters[0].Play();}return;\">Run</span></b></div>");
    this.filters=new Array(new String("progid:DXImageTransform.Microsoft.Gradient(GradientType='1', StartColorStr=,'#0000FF' EndColorStr='#000000')"),new String("progid:DXImageTransform.Microsoft.Glow(Color=blue,Strength=6)"),new String("progid:DXImageTransform.Microsoft.Shadow(color=#666666, Direction=135, Strength=15)"),new String("progid:DXImageTransform.Microsoft.RandomDissolve( Duration=1)"),
                           new String("progid:DXImageTransform.Microsoft.dropshadow(OffX=5, OffY=5, Color='black', Positive='true')"),new String("progid:DXImageTransform.Microsoft.Iris(irisStyle='CROSS', motion='in')"),new String("progid:DXImageTransform.Microsoft.Iris(irisStyle='CROSS', motion='in')"),new String("progid:DXImageTransform.Microsoft.Light();"),new String("progid:DXImageTransform.Microsoft.RandomBars()"),new String("progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=0,motion='forward')"));
    ///Dialog Resources
    this.status={"_run":"RUNNING","_idle":"IDLE","_load":"LOADING"}
    this.pkg={"usa":new Array("cingular","sky"),"china":new Array("csl","smartone","sunday","orange","newworld","peoples","chinamob","unicom"),
    "france":new Array("france1","france2"),"hongkong":new Array("hongkong1","hongkong2"),"malysia":new Array("malysia1","malysia2"),
    "MEXICO":new Array("GPRSTelcel","CSDTelcel"),"RUSSIA":new Array("MobilTeleSys","BeeLine","MegaFon"),
    "TAIWAN":new Array("ChungHwa"," FarEastTone","TwnGsm","Mobitai","TransAsia"),"THAILAND":new Array("AIS"," DTAC","THI Orange"),     
    "UK":new Array("VodaFoneGPRS"," OrangeGPRS","TMobileGPRS","O2GPRS")}
    this._script=new String("<html><head><script language='jscript'>");
    this._filter=new String("<\/script></head><body id='nBody' value='' style='direction:ltr;filter:");
    this._header=new String("'><h1>");
    this._form_name=new String("</h1><div><span><form name='f");
    this._button_name=new String("'>");
    this._input_name=new String("<button name='");
    this._onclick=new String("' style=\"position:'realitive';background-color:'button'; font-size:'5pt';\" onclick=\"");
    this._button_txt=new String(";return;\">");
    this._cmdOpen=new String("<input type=file name='cmuds' id='cmuds' style=\"position:'realitive';cellpadding:'0'; cellspacing:'0'\">");
    this._end=new String("</button></form></span></div></body></html>");
    this._sav0={"t":"<table id='_savdiv'><tbody><tr><td>","_t":"</td></tr><tr><td>","_z":"</div></td></tr></tbody><table>","s":"<div id='iidiv' style=\"background:'#778899'; height:'45px;'width:'100%';border:'groove ';padding:'0px';border:'0px slategrey';color:'#C0C0C0';position:'relative';top:'0';left:'0';font-size:'8pt';z-index:'4'\"><iframe style='width:90%;height:90%;' src=\"file://","e":"\"></iframe></div><script language='jscript'>_da=window.dialogArguments;window.onload=new Function(\"window.document.recalc();\");<\/script>"}
    this._ls=new String("<div id=\"cDiv\" style=\"font-size:30pt;color:");
    this._lm=new String(";background:black;\" onbeforeupdate=\"var _oe=window.document.createEventObject();_oe._doc=this.arg['_doc'];this.firstChild.fireEvent('onbeforeupdate',_oe);event.returnValue=false;event.cancelBubble=true;return false;\"><span style=\"background:white;\" id=\"pops\" onbeforeupdate=\"this.doc=event._doc;event.returnValue=false;event.cancelBubble=true;return false;\">");
    this._le=new String("</span></div>");
    this._tb0=new String("<div id='txtbox' onkeypress=\"var _w=window,_d=_w.document,_id=_d.getElementById,_enableSelect=new Function('_iid','_slct','try{_iid(_slct).disabled=false;}catch(e){}return;');try{args=_pMgr._c1(self);odoc=args[0];oe=args[1];}catch(e){}try{i=(_da[6].location.pathname)?_da[6].location.pathname:window.location.pathname;}catch(e){i=window.location.pathname;}try{_setCom(slct.selectedIndex,_da[7],getPath,i);}catch(e){}try{_enableSelect(_id,'slct');}catch(e){}oe.click='txtbox';_id('port').fireEvent('onclick',oe);return false;\"></div>");
    this._tbA=new String("<div id='txtbox' onkeypress=\"var args,_w=window,_d=_w.document,_id=_d.getElementById,_all=_d.all,oe,_enableSelect=new Function('_iid','_slct','try{_iid(_slct).disabled=false;}catch(e){}return;'),_did=_xwin.document.getElementById;try{args=_pMgr._c1(self);odoc=args[0];oe=args[1];}catch(e){}");
    this._tbB=new String("try{if(_xwin!=null){oe.com=event.com;try{_did('port').innerHTML=_id('_spnx').innerHTML;_did('rbr').replaceAdjacentText('beforeBegin','');}catch(e){return false;}try{_setCom(slct.selectedIndex,f_obj,getPath,_da[6].location.pathname);Trace_Print('Updating Settings For [COM'+slct.selectedIndex+'] ...',' res(): ');}catch(e){Trace_Print(_res.err11);}_enableSelect(_did,'slct');_xwin.document.recalc();}}catch(e){}_did('txtbox').replaceNode(_xwin.document.createElement(_res._tb0));_did('obj').click();window.close();return false;\">");
    this._scport=new String("Select&nbsp;Comport");
    this._aImg1=new String("<img id='i1' width=250 height=90>");this._aImg2=new String("<img id='i2'>");
    this._mLoad=new String("<span style=\"fontStyle:'bold';fontSize:'14pt';color:'red';top:'100%';left:'100%'\">LOADING</span>");
    this._fLoad=new String("<span style=\"top:'100%';left:'100%'\"></span>");
   
    this._bnr0=new String("<span id='_spnx' style='font-size:14pt;top:0;left:0;position:absolute;filter:"+this.filters[1]+this.filters[2]+";'><u><div><span id='scid'>");
    this._bnr1=new String("</div></span></u><center id=\"rbr\"><br>&nbsp;&nbsp;&nbsp;");
    this._bnr2=new String("</center></div><script language='jscript'>window.onbeforeunload=new Function(\"_id=window.document.getElementById;try{self.parent.window.clearInterval(arg[4].issue);}catch(e){}_ff=_xwin.document.body.filters[0];_ff.StartColorStr=_ff.EndColorStr='#000000';if ((!(_id('slct').selectedIndex+1))&&(!isNaN(_id('slct').selectedIndex+1))){_xwin.close();}else{_xd=_w.document;xoe=_xd.createEventObject();xoe.com=_id('slct').selectedIndex;_xd.getElementById('txtbox').fireEvent('onbeforeupdate',xoe);}\");");
    this._flash=new String("var _w=self.parent.window,_d=_w.document,_id=_d.getElementById,_b=new Function(\"if(_spnx.t<=10){self.parent.window.setTimeout(_b,1000);_spnx.cnt=(!_spnx.cnt)?(scid.style.visibility='hidden',1):(scid.style.visibility='visible',((scid.style.color!='white')?(scid.style.color='white',_spnx.filters[0].Color='blue',true):(scid.style.color='red',_spnx.filters[0].Color='white',false)),_spnx.t++,0);}\"),arg=_w.dialogArguments;try{f_obj=arg[7];_xwin=arg[6];}catch(e){_xwin=_w;}_spnx.t=0;try{_id('img').removeNode(false);}catch(e){}try{_id('slct').style.width='100px';}catch(e){}_b();<\/script><div style='top:30;left:0;'></div></span>");
    this._sfsl=new String("<span id='_span' style=\"fontSize='10px';width:'30%';height:'15%';fontStyle:'italic';\">");
    this._abtImg2=new String("<img id='i2'>");
    this.OM1=new Array("[","]:|> Attempting To "," File: ");this.OM2=new Array("[","]:|> success");this.OF2=new Array("[","]:|> Failed");this.OE1=new Array("[ERROR]:|> Could Not "," Specified File.!!!");
    this.appsw=new String("File Download - Security Warning");this.appsa=new String("Save As");
    this._new={"name":"new","ss":"width:150px;height:300px;","bs":"progid:DXImageTransform.Microsoft.dropshadow(OffX=5, OffY=5, Color='black', Positive='true')","onclick":"_id('btn').fireEvent('onactivate',_d.createEventObject());return;","script":"","input":"","head":"New...","btntxt":"OK"}
    this._open={"name":"_open","ss":"width:150px;height:300px;",
    "bs":"progid:DXImageTransform.Microsoft.dropshadow(OffX=5, OffY=5, Color='black', Positive='true')",
    "onclick":"var oe=_win.document.createEventObject(),_val;eval('_val=_d.all.f'+_res._open['name']+'.cmuds.value');if(!_val){Trace_Print('Notice: This Operation Requires A File Name',' open: ');}else{try{_pMgr.loadFile(self.parent.window,'text',_val,_da);}catch(e){}oe.name=_res._open['name'];oe.win=window;oe._da=_da;_da[6].document.all._new.fireEvent('onbeforeupdate',oe);}return;",
    "script":"var _w=window,_d=_w.document,_id=_d.getElementById,_da=_w.dialogArguments,_win=_da[6];f_obj=_da[7];_pMgr=_da[4];_res=_da[5];this.onmouseup=function(){_da[6].document.getElementById('_open').onbeforeupdate.call(_da[6].document.createEventObject());return;};_w.onbeforeunload=new Function(\"_pMgr.menuLock=false;return;\");","input":this._cmdOpen,"head":"Open...","btntxt":"OK"}
    this._save={"name":"save","ss":"width:150px;height:300px;","bs":"progid:DXImageTransform.Microsoft.dropshadow(OffX=5, OffY=5, Color='black', Positive='true')","onclick":"_id('btn').fireEvent('onactivate',document.createEventObject());return;","script":"","head":"Save...","btntxt":"OK"}
    this._abt0=new String("<html><head><table height='200'><tr><td><center id='c1'></center>");
    this._abt1=new String("<br><br><font style='position:relative; font-family:arial; font-size:11; text-decoration:none;' >");
    this._abt2=new String("<u><center><A id='a1' style='color:cyan' HREF=javascript:contact('_s');>Automation Run-Time Library</a></u><br><center style=color:white;id='c1'>Author:<b> Phillip Walker</b><center>Copyright © 2006. - SKY MobileMedia Inc. </font><br>");
    this._abt3=new String("<font style='font-family:arial; font-size:11; color:#000099'><br><center id='c2'>");
    this._abt4=new String("<br><center><A HREF=javascript:contact('_c');>Contact Us...</A></u><br><br></font></td></tr></table></head><body>");
    this._abtx=new String("<span id='aspn' style='filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=\'1\', StartColorStr=\'#000000\', EndColorStr=\'#0000FF\');font-size:60pt;border:\'2px black outset\''>");
    this._abt5=new String("<script language='jscript'>var _w=window,_da=_w.dialogArguments;_w.onbeforeunload=function(){try{_w.clearInterval(_da[4].issue);}catch(e){}}<\/script></body></html>");   
    this.File=new String("tmp.dat");this.bms=new String("t_pf.txt");this.srcbms=new String("country.dat");this.mms=new String("mmst.txt");this.stop=new String("stop");this.srcmms=new String("mmst.dat");this.pause=new String("pause");this.undef=new String("undefined");
    //
    res.prototype.mkP=function()
   {
        this.init=new String("~~~~~~~~~~~~~~~~~~~~\n");
        this.preCountry=new String(":");
        this.preXCountry=new String(" \"                   -_-");
        this.postCountry=new String("-_-                 \"[x]\n");
        this.preProfile=new String("\n  + ");
        this.postProfile=new String("\n\nHas Been Added To List.                [? OK ]");
        this.final=new String("\n::");
    }
}
function rsMgr()
{
    rsMgr.prototype.res=res;
    this.profiles=new Array();this.cntry=new Array();this.agg=new Array();this.buffer=new Array();this.bufferx=new Array();this.parsed=new Array();this.str=new String("");this.truload=false;this.index=new Array();
    this.oPop;this.f_obj;this.comport;this.path=null;this._Tr=false;this._Tk=false;this._Ti;this.f_hndl;this.fExp;this.hExp;this._m="`ok";this._c="red";this.init=false;this.f_hndl='';this.lx=-1;this.halt=false;this._obj=null;this._target;this.comLOCK=false;this.LCM=null;this.LM=null;this.path;this.cbwin;this.slct=0;this.mode;
    this.sdiv='?';this.issue='?';this.tout=0;this.cntxLock=false;this.direction=true;this.args;this.timeout;this._Tc;this.count=0;this.tmp;this.lcnt=0;this.nkey=false;this.Tout;this._t=5000;this._tmp=0;this.initLock=false;this.fire=false;this._reg=true;this.winx;this.winy;this.FN;this.DT="";this._initstart=false;this.index=0;this.cmd;this.node;
    this.Light_X= 20;this.Light_Y = 20;this.Light_Z = 40;this.r = 100;this.Mhndl;this.Whndl;this.MCI;this.WCI;this.deg = 280;this.pause=0;this.stop=0;this.conversion = (2 * 3.1415917)/360;this._opt=1;this.GlobalLock=false;this.persistLock=false;this.keyLock=false;this.menuLock=false;this.xportLock=false;this.final;this.ieState;this._hndl=false;this.idHndl;this.id;this.Iout;this._t1;this.com;
    this.move=0;this.lclk=0;this.tclk=0;this.startpos=0;this.endpos=0;this.max=0;this.P4Launch;this.selectedObj;this.X;this.dset;this.cntryF;this.cmd=0;this.profileF;this.srcFile=0;this.destFile=0;this.settings=0;this.min=0;this.lrgcng=0;this.sliderInit=false;this.smlcng=0;this.curpos=0;this.value=0;this.aSize=0;this.value=0;this.state;this.offset=0;
    this.enabled=new Function("return((typeof(window.external.version) == \"string\"));return;");
    this.print=new Function("_p","xie","Trace_Print('Attempting To Instantiate Printer Dialog...',' rsMgr: ');try{xie.ExecWB(6,1);}catch(e){try{ie.ExecWB(6,1);}catch(e){}}Trace_Print('Printer Dialog: Operation Completed.',' rsMgr: ');return;");
    this.getfullPath=new Function("item","offset","switch(item){case(\"file\"):return((new String(getPath(offset['path'],false,false))).concat('\\\\bin\\\\source\\\\')+eval('this.'+offset['name']));break;default:break;}");
    this.path=new Function("var path;try{path=new String(getPath(self.parent.window.location.pathname,false,false)+\"bin\\\\source\\\\\");}catch(e){Trace_Print(e.message);try{path=new String(getPath(WSHost.ScriptFullName,false,false)+\"\\\\bin\\\\source\\\\\");}catch(e){path=\"\";}} return path;");
    this._c1=new Function("myself","return (new Array(myself.parent.window.document,myself.parent.window.document.createEventObject()));");
    this._rst3=new Function("odoc","oe","odoc.getElementById('slct').selectedIndex=-1;odoc.getElementById('txtbox').disabled=false;odoc.getElementById('txtbox').innerText=\"\";odoc.getElementById('slct').disabled;try{_pMgr.winx.window.close();}catch(e){} try{_pMgr.winy.window.close();}catch(e){}this.NtfyKill(_da[6]);return;");
    this._rst2=new Function("odoc","oe","oe._type=\"_kp-mode\";odoc.getElementById('ispn').fireEvent(\"onbeforeupdate\",oe);oe._type=\"_kp-stat\";odoc.getElementById('iispn').fireEvent(\"onbeforeupdate\",oe);oe._type=\"_kp-cmd\";odoc.getElementById('iiispn').fireEvent(\"onbeforeupdate\",oe);return false;");
    this._rst=new Function("odoc","oe","oe.issue=\"_rcd-stop\";odoc.getElementById('iispn').fireEvent(\"onkeypress\",oe);oe.issue=\"_plybck-done\";odoc.getElementById('iispn').fireEvent(\"onkeypress\",oe);this._rst2(odoc,oe);event.returnValue=false;event.cancelBubble=true;return false;");
    this.fillPopup=new Function("title","text","link","oTitle.innerText=title;oText.innerText=text; rLink.innerText=link;");
    this.getDset=new Function("_p","_flg=false;try{if((this.dset.constructor==null)||(this.dset.constructor==undefined)){_flg=true;}}catch(e){_flg=true;}if(_flg){this.dset=new Array();this.dset['container']=new ActiveXObject(\"Scripting.Dictionary\");this.dset['mtypes']=new ActiveXObject(\"Scripting.Dictionary\");this.dset['parm']=new ActiveXObject(\"Scripting.Dictionary\");}else{try{if((_p)&&(this.dset)){return (this.dset[_p]);}}catch(e){}return (this.dset);}");
    this.goPopup=new Function("oH","oW","top","left","inTxt","args","id","this.getPopup();Trace_Print('Launching New Popup. ID: '+id,' rsMgr: ');var odoc=this.oPop.document,oPBody=odoc.body;oPBody.innerHTML=inTxt;this.oPop.show(top, left, oW, oH, document.body);if((args)?(oPBody.document.getElementById('cDiv').arg=args,true):false){oPBody.document.getElementById('cDiv').fireEvent('onbeforeupdate');}return;");
    this.openFile=new Function("f_obj","file","mode","flg","var e=new Error();Trace_Print('Opening File: '+file,' rsMgr: ');try{this.f_hndl=f_obj.OpenTextFile(file,mode,flg);}catch(e){return null;}return this.f_hndl;");
    this.fade=new Function("func","val","this.tout=val; this.issue=self.parent.window.setInterval(func,this.tout,\"JScript\");return this.issue;");
    this.getNext=new Function("odoc","oe","x","var _x,_b=(x==null)?(this.buffer):(this.bufferx);this.nkey=false;if((this.lcnt>=this.time)||(this.time==undefined)){this.lcnt=0;this.lx++;odoc.getElementById('iispn').fireEvent(\"onkeydown\",oe);k=(new String(this.parsed[this.lx])).split(\"_\");this.time=k[1];if (this.time==undefined){odoc.getElementById('btn').fireEvent(\"onclick\",oe);oe.issue=\"plybck-done\";odoc.getElementById('iispn').fireEvent(\"onbeforeupdate\",oe);this.halt=true;return 0;}_b.push(k[0]);this.nkey=true;}else{this.lcnt++;return((_b.length-1 >= 0)?true:false);}return false;");
    this.clrBuffer=new Function("x","return ((x==null)?(this.buffer=new Array(),this.str=new String(\"\"),this.buffer):(this.bufferx=new Array(),this.str=new String(\"\"),this.bufferx));");
    this.changePos=new Function("var el = window.event.srcElement,_doc=window.document,_id=_doc.getElementById;switch (el.id) {case 'lArrow': this.value = this.value - this.smlcng;break;case 'rArrow': this.value = this.value + this.smlcng; break;default: if (window.event.x - this.lclk < this.curpos) { this.value = this.value - this.lrgcng; } else { this.value = this.value + this.lrgcng;}}if (this.value < this.min) { this.value = this.min}if (this.value > this.max) {this.value = this.max}this.setCurrentPos();_id('slider').style.left = this.curpos;return;");
    this.setCurrentPos=new Function("var vsize;this.asize = this.endpos - this.startpos;vsize = this.max - this.min;this.curpos = Math.floor(this.asize /vsize) * ((this.value - this.min)) + this.startpos;return;");
    this.setCounter=new Function("_l","_f","_c","_n","_w","var _win=(_w)?_w:window;_doc=_win.document,_id=_doc.getElementById,oe=_doc.createEventObject();oe.opt=(_f)?_f:\"+\";oe.num=(_n)?_n:\"?\";oe.colon=_c;oe.objLeft=_id(_l).style.left;oe.notify=_l;_id(_l).fireEvent('onbeforeupdate',oe);return;");
    this.onArrow=new Function("id","var _doc=window.document,_id=_doc.getElementById;this.state='a';if (((this.startpos) <= (this.value)) && ((this.value) <= (this.endpos))){this.curpos =((this.curpos<=this.startpos)&&(_id('lArrow').id==id))?(this.startpos):(((this.curpos>=this.endpos)&&(_id('rArrow').id==id))?(this.endpos):(((_id('rArrow').id==id)&&((this.curpos+this.smlcng)<this.max))?(this.curpos+this.smlcng):(((_id('lArrow').id==id)&&((this.curpos-this.smlcng)>this.min))?(this.curpos-this.smlcng):((_id('rArrow').id==id)?this.max:((_id('lArrow').id==id)?this.min:this.curpos)))));this.value= Math.floor((this.curpos - this.startpos) / ((this.endpos - this.startpos) / (this.max - this.min))) + this.min;this.setCurrentPos();_id('slider').style.left = this.curpos;_pMgr.Notify('fbdy','slider=_pMgr.curpos;','onbeforeupdate');}this.drag=this.move=0;this.mPos();return;");
    this.mDown=new Function("var _doc=window.document,_id=_doc.getElementById;this.state='d';if(this.drag){switch(this.state){case ('LA'):this.offset=-this.smlcng;break;case('RA'):this.offset=this.smlcng;break;default:this.offset=0;break;}this.lclk = this.offset+this.X - parseInt(_id('slider').style.left);_id('slider').style.zIndex += 1;this.move = 1;}return;");
    this.mMove=new Function("var _doc=window.document,_id=_doc.getElementById;this.state='m';if (this.move) {if (((this.X - this.lclk) >= (this.startpos)) && ((this.X - this.lclk) <= (this.endpos))){this.curpos = this.X - this.lclk;this.value = Math.floor((this.curpos - this.startpos) / ((this.endpos - this.startpos) / (this.max - this.min))) + this.min;_id('slider').style.left = this.curpos;}else this.value =15;}else this.move=0;return;");
    this.mStop=new Function("try{window.event.returnValue=false;window.event.cancelBubble=true;}catch(e){}return false;");this.mUp=new Function("this.move=0;this.mPos();return;");
    this.AMorPM = new Function("time","var AM = \"AM\", PM = \"PM\";if (time < 12) return AM;else return PM;");
    this.Hours = new Function("time","var num; num = new Number(time.getHours() % 12);if ((time.getHours() == 12)||(time.getHours() == 0)){num = new Number(12);return (num.toString(10));}else return (num.toString(10));");
    this.Time = new Function("var c, s=\"/\";var time = new Date();if (time.getMinutes() < 10)c = \":0\";else c = \":\";return \">: \"+this.Hours(time)+c+time.getMinutes()+this.AMorPM(time.getHours())+\" on \"+((time.getMonth() + 1)+s)+(time.getDate()+s)+time.getYear();");
    this.exportFile=new Function("_p","_nd","_optArgs","var _res=_optArgs[5],getPath=_optArgs[9],f_obj=_optArgs[7],_fh,_id=window.document.getElementById;try{if(f_obj){}}catch(e){try{f_obj=new ActiveXObject(\"Scripting.FileSystemObject\");}catch(e){Trace_Print('Cannot Create File!!! Aborting...');return;}}try{_fh=f_obj.CreateTextFile((getPath(window.location.pathname,false,false)+_res._paths['_src']+_p),1);_fh.Write(_res._dm['d1']);for(var i=0;i<250;i++)_fh.Write(_res._smt);_fh.Write('['+this.Time()+']');_fh.Write(_res._dm['d2']);_fh.WriteLine(_res._smt1);_fh.WriteLine(_nd);_fh.Close();Trace_Print((new String(_res.OM2[0]+_da[3]+_res.OM2[1])).toLowerCase());}catch(e){Trace_Print((new String(_res.OE1[0]+_da[3]+_res.OE1[1])).toLowerCase());}return;");
    this.mPos=new Function("try{Trace_Print('Marker Value: '+this.curpos,' slider: ');}catch(e){};return;");
    this.rplNode=new Function("_doc","_nN","_oL","_oN","_loc","_f","oe=_doc.getElementById(_oL).insertAdjacentElement(_loc,_nN);_oN.removeNode(_f);return oe;");
    this.rmvNode=new Function("start","name","all","for(var i=0;i<start.length;i++){if(start(i).tagName==name)start(i).removeNode(all);}return;");
    this.getBuffer=new Function("x","return ((x==null)?(this.buffer):(this.bufferx));");
    this.rqstNew=new Function("sig","rsnds","var i;Trace_Print('Updating Screen....',' rsMgr: ');for (i in rsnds)window.document.getElementById(rsnds[i]).fireEvent(sig);return;");
    this.prompt=new Function("_w","_msg","_p","id","_bo","_fo","_fb","_to","_tv","_dly","_pa","var _cb=_p,_d=_w.document,_id=_d.getElementById,_r=new (this.res)(),_err=false;try{(_d.body.pHndl=this.getPopup(this.goPopup(_pa[0],_pa[1],_pa[2],_pa[3],_msg,_id(_bo),id))).document.getElementById(_fo).firstChild.style.background=(_id(_to).style.visibility==_tv)?_fb:_id(_bo).style.filter;}catch(e){_err=true;};_w.setTimeout(_cf=function(){try{_d.body.pHndl.hide();_d.body.pHndl=null;}catch(e){}return;},_dly);return (!_err);");
    this.NtfyKill=new Function("_pwh","try{if(SkyMobile){Sky=SkyMobile;}}catch(e){Sky=new SkyMobileObject();}try{((_pwh)?(_pwh):(window)).clearTimeout(this.MCI);}catch(e){};try{((_pwh)?(_pwh):(window)).clearTimeout(this.WCI);}catch(e){};try{this.Mhndl.close();}catch(e){};try{this.Whndl.close();}catch(e){}this.GlobalLock=false;Sky.delOldReg();Sky.delayCmd(\"done\",true,true);return;");
    this._hT=new Function("_w","_cbt","try{_w.clearInterval(_cbt);}catch(e){}return;");
    this.getXObj=new Function("_t","if(!this.xwin)return;if(_t=='_w')return (this.xwin);if(_t=='_d')return (this.xwin.document);if(_t=='_id')return (this.xwin.document.getElementById);return 0;");
    this.loadFile=new Function("_lwin","srcNode","FN","_da","var _txt, lFN=new String(FN),_res,_xwin=_da[6],f_obj=_da[7],_pMgr=_da[4],_res=_da[5],_did=_xwin.document.getElementById;this.openFile(f_obj,FN,1,0);if(this.f_hndl!=null){try{_txt=new String(this.f_hndl.ReadAll());if(_txt.indexOf(_res._smt1)!=-1)_txt=_txt.slice(((_txt.indexOf(_res._smt1)+1)+(new String(_res._smt1)).length)+1,_txt.length);}catch(e){_txt='';}_did(srcNode).innerText=_txt;_al=lFN.split('\\\\');lFN=_al[(!_al.length)?0:(_al.length-1)];if(lFN.length>13){_end=lFN.slice((lFN.indexOf('.')),lFN.length);lFN=(new String(lFN.slice(0,8))).concat('~1'+_end);}_did('inF').nextSibling.nextSibling.nextSibling.style.visibility='visible';_did('inF').nextSibling.nextSibling.nextSibling.innerText=new String(\" \"+lFN);Trace_Print((new String(_res.OM2[0]+_da[3]+_res.OM2[1])).toLowerCase());}else Trace_Print((new String(_res.OE1[0]+_da[3]+_res.OE1[1])).toLowerCase(),' rsMgr: ');try{_lwin.close();}catch(e){}this.f_hndl.Close();return;");
    this.setBuffer=new Function("buf","x","var _t=(x==null)?(this.buffer):(this.bufferx);_t=buf;");
    this.advCnt=new Function("_r","if (this.direction){this.tout -= 1;if (this.tout == -1){this.direction=!this.direction;this.tout=-1;}}if (!this.direction){this.tout+=1;if (this.tout ==(_r._colors.length)){this.direction=!this.direction;this.tout=(_r._colors.length-1);}}if ((this.tout < 0)||(this.tout > (_r._colors.length-1)))this.tout=0;");
    this.getBufChar=new Function("x","return ((x==null)?(_c=this.buffer.pop(),_c):(_c=this.bufferx.pop(),_c));");
    this.showOut=new Function("_n","_xw","_tog","var _d=_xw.document,_id=_d.getElementById,oe=_d.createEventObject();oe.set=_tog;_id(_n).fireEvent('onclick',oe);return;");
    this.setBufChar=new Function("x","_b=(x==null)?(this.buffer):(this.bufferx);_b.push();return;");
    this.gFtn=new Function("a","b","c","x","q","var i=0,s1=\"((\"+X+a+X,s2=X+b+X+\")?((\"+c+\"(\",s3=\")),true):false)\";s1=s1.concat(q+s2);for (i;i<x.length;i++){s1=s1.concat(\"\\\"\"+x[i]+\"\\\",\");}s1=s1.slice(0,s1.length-i);s1=s1.concat(s3);return (eval(s1));");
    this.nw_hndl=new Function("height","width","top","left","center","_optArgs","mode","var _trupath,_h,_w,_t,_l;Trace_Print('Launching New Dialog. ID: '+_optArgs[3],' rsMgr: ');_chk=new Function(\"_p\",\"return ((new String(_p)).concat((!(isNaN(_p)))?'px;':';'));\");_h=_chk(height);_l=_chk(left);_t=_chk(top);_w=_chk(width);_trupath=new String(_optArgs[9](window.location.pathname,false,true)+_optArgs[5]._paths['__lib']+_optArgs[5]._files['_lib']);try{_trupath=(_optArgs[8])?_optArgs[8]:_trupath;}catch(e){Trace_Print(\"Defaulting To: \"+_trupath,\" rsMgr(): \");}eval(\"this._hndl=window.\"+(new String((!mode)?\"showModelessDialog\":\"showModalDialog\"))+\"(_trupath,_optArgs,'dialogHeight:\"+_h+\" dialogWidth:\"+_w+\" dialogTop:\"+_t+\" dialogLeft:\"+_l+\" center:\"+center+\"; edge: sunken; dialogHide: Yes; scroll: No; help: No; unadorned: yes;resizable: No; status: No;')\");return this._hndl;");
    this.chksrc=new Function("pth","var flag=false;for (i in _res.FNs){if (!f_obj.FileExists(new String(pth+\"\\\\\"+_res.FNs[i]))){flag=true;break;}else flag=false;}return flag;");
    this.fill_nw=new Function("_opt","return(new String(_res._script+eval(\"_res.\"+_opt+\"['script']\")+_res._filter+eval(\"_res.\"+_opt+\"['bs']\")+_res._header+eval(\"_res.\"+_opt+\"['head']\")+_res._form_name+eval(\"_res.\"+_opt+\"['name']\")+_res._button_name+eval(\"_res.\"+_opt+\"['input']\")+_res._input_name+eval(\"_res.\"+_opt+\"['name']\")+_res._onclick+eval(\"_res.\"+_opt+\"['onclick']\")+_res._button_txt+eval(\"_res.\"+_opt+\"['btntxt']\")+_res._end));");
    this.getPopup=new Function("if((this.oPop==null)||(this.oPop==undefined)){try{this.oPop=self.parent.window.createPopup();}catch(e){return -1;}}return this.oPop;");
    this.Notify=new Function("dest","_pkg","_evnt","var _doc=window.document,oe, _id=_doc.getElementById;oe=_doc.createEventObject();eval('oe.'+_pkg);oe.id=_id;_id(dest).fireEvent(_evnt,oe);return;");
    this.getProfile=new Function("country","profile","num","_res","mkp=new (res.mkP)();return(new String(mkp.init+mkp.preCountry+country+mkp.preXCountry+country+mkp.postCountry+mkp.preProfile+num+'. '+profile+mkp.postProfile+mkp.final));");
    this.closePopup=new Function("this.oPop.hide();return;");
}
function InitSlider(type)
{    var _toggle=true, _pwin=self.parent.window, _doc=window.document, _id=_doc.getElementById;
      var mMove=new Function("_pMgr.X=window.event.x;window.setTimeout('_pMgr.mMove()',1);_pMgr.Notify('fbdy','slider=_pMgr.curpos;','onbeforeupdate');return;"),mDown=new Function("_pMgr.X=window.event.x;window.setTimeout('_pMgr.mDown()',1);return;"),
           mUp=new Function("window.setTimeout('_pMgr.mUp()',1);return;"), mStop=new Function("window.setTimeout('_pMgr.mStop()',1);return false;");
      if(type){
          Trace_Print('Initializing Slider...',' Slider: ');
      __slider.style.pixelHeight = 20;__slider.style.pixelWidth = 200;
      _pMgr.smlcng=5;_pMgr.value=_pMgr.min=_pMgr.curpos=_pMgr.startpos =(_pMgr.smlcng*3);
      _pMgr.max=_pMgr.endpos = parseInt(__slider.style.pixelWidth) - 25;
      _id('blackRuler').style.width = parseInt(__slider.style.pixelWidth) - 40;
      _id('whiteRuler').style.width = parseInt(__slider.style.pixelWidth) - 40;
      _id('rArrow').style.left = parseInt(__slider.style.pixelWidth) - 10;
      _path=getPath(window.location.pathname,false,false)
      for(var i=0;i<=_pMgr.endpos-_pMgr.startpos;i+=5){
          if(_toggle){_t=3;_img=_res._files["_img"][3];}else {_t=8;_img=_res._files["_img"][2];} 
          _toggle=!_toggle;_img=new String(_path+_res._paths["_img"]+_img);
         _doc.all.__slider.insertBefore(_doc.createElement(
         "<img id=\"img"+i+"\" src=\""+_img+"\" style=\"position:absolute;z-index:0;top:expression("+_t+");left:expression(20+__slider.offsetLeft+"+i+");\">"));
     }
      _doc.all.__slider.style.background='menu';
      _id('slider').attachEvent('onmousemove',mMove);
      _id('slider').attachEvent('onmousedown',mDown);
      _id('slider').attachEvent('onmouseup',mUp);
      _id('slider').attachEvent('ondragstart',mStop);}
      else{
          if((_id('__slider').style.visibility!='visible')&&(_id('port').style.visibility!='visible'))
          {_id('__slider').style.visibility='visible';_id('port').style.visibility='visible';}
      }
      return _pMgr;
}
function ParseList(_pMgr,f_obj,_doc,_ne,_all,_id,type)
{
     var _list;
     if(!type){_list=(_pMgr.srcFile.ReadAll()).split("*********");
      for (var i=0; i<_list.length;i++){
            _set=(_list[i].split("+++++"));
            _pMgr.cntry[i]=_set[0];
            _pMgr.profiles[i]=_set[1];
     }}
     else _pMgr.index=(new String(_pMgr.srcFile.ReadAll())).split("|");   
     _pMgr.srcFile.Close();
     return _pMgr;   
}
function onProfile(_pMgr,f_obj,sobj,_doc,_ne,_all,_id,_mkp)
{
    _pMgr.profileF=sobj[_all.List2.selectedIndex];
    _pMgr.destFile.WriteLine(_pMgr.getProfile(_pMgr.cntryF,_pMgr.profileF,_pMgr.index));
    return;   
}
function onListChange()
{
    var _doc=_pMgr.agg["_doc"],_ne=_pMgr.agg["_ne"],_all=_doc.all;
    var _flg=_pMgr.agg["_flg"],f_obj=_pMgr.agg["f_obj"],_id=_pMgr.agg["_id"];
    var index=_all.List2.selectedIndex;
    _selection=new String(_all.List2.options[index].text);
     Debug_Print(_res.alrt['_wap']+_selection+_res.alrt['_added']);
    clear(_pMgr,_doc,'l2',_res._nslct1,_doc.all.List2);
    WAPList(_pMgr,f_obj,_pMgr.cntry,_doc,_ne,_all,_id,0);
    _pMgr.setCounter("_w","+");
    return;   
}
function WAPList(_pMgr,f_obj,obj,_doc,_ne,_all,_id,flg)
{
   var _msg=(_res._ls+"red;"+_res._lm+"LOADING..."+_res._le),_d=new Array(38,210,30,330);
    _pMgr.prompt(window,_msg,_pMgr," WAP:","fbdy","cDiv","white","slt","visible",2000,_d);
    _pMgr.selectedObj=obj;
    for(var i=0;i<obj.length;i++){
         opt=_ne("<OPTION VALUE="+i+">");
         _id('l2').insertBefore(opt);      
         try{_id('l2').options(i).text=obj[i];}catch(e){}
         _doc.recalc();
    }
     _pMgr.agg={"f_obj":f_obj,"obj":obj,"_doc":_doc,"_ne":_ne,"_all":_all,"_id":_id,"_flg":flg};
    return listing;
}
function clear(_pMgr,_doc,_old,_new,_list)
{ var newNode, _doc=_pMgr.agg["_doc"];
    newNode=_doc.createElement(_new);
    newNode.style.visibility="visible";
    oe=_pMgr.rplNode(_doc,newNode,_old,_list,"beforeBegin",true);
}
function onWAPList()
{
    var _doc=_pMgr.agg["_doc"],_ne=_pMgr.agg["_ne"],_all=_doc.all;
    var _flg=_pMgr.agg["_flg"],f_obj=_pMgr.agg["f_obj"],_id=_pMgr.agg["_id"];
    var bookname,concnt,index=_all.l2.selectedIndex;
    if (!_flg){  
        _pMgr.cntryF=_pMgr.cntry[index];
        clear(_pMgr,_doc,'l2',_res._nslct1,_doc.all.List2);
        WAPList(_pMgr,f_obj,(_pMgr.profiles[index]).split(":"),_doc,_ne,_all,_id,1);
    }
    if(((_pMgr.getPopup()).isOpen)?(((_pMgr.getPopup()).hide()),true):false);
    window.event.returnValue=false;
    window.event.cancelBubble=false;
    return false;
}
function MMSList(_pMgr,f_obj,_doc,_ne,_all,_id,flg)
{
    var nline, i=0;
    var _msg=(_res._ls+"red;"+_res._lm+"LOADING..."+_res._le),_d=new Array(38,210,30,330);;
    _pMgr.prompt(window,_msg,_pMgr," MMS:","fbdy","cDiv","white","slt","visible",2000,_d);
    for (i=0;i<_pMgr.index.length;i++){
        _all.List1.insertBefore(_ne("<OPTION VALUE="+i+">"));      
        try{_all.List1.options(i).text=_pMgr.index[i];}catch(err){}
        _doc.recalc();
    }
    _pMgr.agg={"f_obj":f_obj,"obj":obj,"_doc":_doc,"_ne":_ne,"_all":_all,"_id":_id,"_flg":flg};
    return listing;
}
function onMMSList()
{
    var _doc=_pMgr.agg["_doc"],_ne=_pMgr.agg["_ne"],_all=_doc.all,i=0;
    var _flg=_pMgr.agg["_flg"],f_obj=_pMgr.agg["f_obj"],_id=_pMgr.agg["_id"];
    var index=_all.List1.selectedIndex,tbox=_id("tbl"),bookname,concnt;
    while(isNaN(escape(((new String(_all.List1.options[index].text)).concat('|')).charAt(i))))i++;
    _selection=((new String(_all.List1.options[index].text)).concat('|')).slice(i,((new String(_all.List1.options[index].text)).concat('|')).length);
    _pMgr.destFile.WriteLine(_selection);
    Debug_Print(_res.alrt['_mms']+_selection+_res.alrt['_added']);
    clear(_pMgr,_doc,'l1',_res._nslct0,_doc.all.List1);
    if(((_pMgr.getPopup()).isOpen)?(((_pMgr.getPopup()).hide()),true):false);
    MMSList(_pMgr,f_obj,_doc,_ne,_all,_id,0);
    _pMgr.setCounter("_m","+");
    window.event.returnValue=false;
    window.event.cancelBubble=false;
    return false;
}
function MMSStart(f_obj,_doc,_ne,_all,_id)
{
      _path=getPath(window.location.pathname,false,false);
      try{_pMgr.destFile.Close();}catch(e){}try{_pMgr.srcFile.Close();}catch(e){}try{_pMgr.settings.Close();}catch(e){}
      _pMgr.destFile=f_obj.CreateTextFile((_path+_res._paths["_src"]+_res.mms),1);_pMgr.destFile.WriteLine('|');
      _pMgr.srcFile=f_obj.OpenTextFile((_path+_res._paths["_src"]+_res.srcmms),1); 
      try{_pMgr.settings=_obj.OpenTextFile((_path+_res._paths["_src"]+_res.File),1);}catch(e){}
      _id('l1').style.visibility='visible';
      _pMgr=ParseList(_pMgr,f_obj,_doc,_ne,_all,_id,1);
      MMSList(_pMgr,f_obj,_doc,_ne,_all,_id,0);
     return;   
}
function WAPStart(f_obj,_doc,_ne,_all,_id)
{
      _path=getPath(window.location.pathname,false,false);
      try{_pMgr.destFile.Close();}catch(e){}try{_pMgr.srcFile.Close();}catch(e){}try{_pMgr.settings.Close();}catch(e){}
      _pMgr.destFile=f_obj.CreateTextFile((_path+_res._paths["_src"]+_res.bms),1);
     _pMgr.srcFile=f_obj.OpenTextFile((_path+_res._paths["_src"]+_res.srcbms),1);
      try{_pMgr.settings=f_obj.OpenTextFile((_path+_res._paths["_src"]+_res.File),1);}catch(e){}
      _id('l2').style.visibility='visible';
      _pMgr=ParseList(_pMgr,f_obj,_doc,_ne,_all,_id,0);
      WAPList(_pMgr,f_obj,_pMgr.cntry,_doc,_ne,_all,_id,0);
     return;   
}
function _mkList(type)
{
      var _doc=window.document, _id=_doc.getElementById;
      var _ne=_doc.createElement, _all=_doc.all;
      if(type) MMSStart(f_obj,_doc,_ne,_all,_id);else WAPStart(f_obj,_doc,_ne,_all,_id);
      return;   
}
function _extkpad()
{  
    if (!_pMgr.keyLock){_pMgr.keyLock=true;
    Trace_Print("Launching USER Controls..."," Recorder: ");
    _pMgr.winx=_pMgr.nw_hndl(340,220,100,150,"yes",new Array(WSHost,ie,JI,_res.cnst['_extkp'],_pMgr,_res,window,f_obj,(getPath(WSHost.ScriptFullName,false,false)+_res._paths["_lib"]+_res._files["_lib"]),getPath,shell,_da[6].location.pathname,SkyMobile));
    _pMgr.winy=_pMgr.nw_hndl(180,450,385,200,"yes",new Array(WSHost,ie,JI,_res.cnst['_xkp'],_pMgr,_res,window,f_obj,(getPath(WSHost.ScriptFullName,false,false)+_res._paths["_lib"]+_res._files["_lib"]),getPath,shell,_da[6].location.pathname,SkyMobile));
    _pMgr.truload=true;
     }return;
}
function _mvLight(_pMgr)
{
    var step=0;
    switch(_pMgr._opt){
     case(1):
        _pMgr.Light_X = _pMgr.r + _pMgr.r * Math.cos(_pMgr.deg * _pMgr.conversion);
        _pMgr.Light_Y = _pMgr.r + _pMgr.r * Math.sin(_pMgr.deg * _pMgr.conversion);   
        _pMgr.deg += 10;
        if (_pMgr.deg <= 360) {_pMgr.deg = 0;clearTimeout(_pMgr.Tout);_pMgr._opt=2;_pMgr.deg=0;}
            _pMgr._tmp=0;_pMgr._obj.filters[0].moveLight(0, _pMgr.Light_X, _pMgr.Light_Y, _pMgr.Light_Z, 1);
    break;
    case(2):
        if (_pMgr.deg<900){if(_pMgr.deg>=700){Xfactor="_pMgr.deg+_pMgr._tmp";Yfactor="(_pMgr.deg/1.5)-_pMgr._tmp";}else {Xfactor="_pMgr.deg";Yfactor="_pMgr.deg/1.5";}
            _pMgr.deg+=50;_pMgr._obj.filters[0].moveLight(0, (_pMgr.Light_X+eval(Xfactor)*2), (_pMgr.Light_Y+_pMgr.deg+(eval(Yfactor)*2)), _pMgr.Light_Z, 1);
            _pMgr._tmp+=1;_pMgr._obj.filters.item(_pMgr._t).addAmbient(0,0,_pMgr._tmp,70+_pMgr._tmp);
            }else{clearTimeout(_pMgr.Tout);_pMgr._obj.filters.item(_pMgr._t).enabled='false';return;}
    break;
    }
    _pMgr.Tout=setTimeout('_mvLight(_pMgr)', 50);
}
function _rndrImg(_pMgr,type)
{  
    var _id=_pMgr.idHndl,id=_pMgr.id;
    var _p=parseInt,pnd=_id(id).parentElement,_pw=_p(pnd.clientWidth),_ph=_p(pnd.clientHeight);
    var _nt=_id(id).style.top,_nl=_id(id).style.left,_nw=_id(id).style.width,_nh=_id(id).style.height;
    var _ratio=Math.round(((_p(_pw)/_p(_ph))/2));
    if(type){
        if(_p(_nl) <= 0){_id(id).style.left="0px";_id(id).style.width=(new String(_p(_pw))).concat("px");}else {_id(id).style.left=(new String(_p(_nl)-(_ratio*2))).concat("px");_id(id).style.width=(new String(_p(_nw)+(_ratio*4))).concat("px");}
        if(_p(_nt) <= 0){_id(id).style.top="0px";_id(id).style.height=(new String(_p(_ph))).concat("px");}else {_id(id).style.top=(new String(_p(_nt)-(_ratio/_ratio))).concat("px");_id(id).style.height=(new String(_p(_nh)+((_ratio/_ratio)*2))).concat("px");}
        if((_p(_nt)==0)&&(_p(_nl)==0)){clearTimeout(_pMgr.Iout);return;}
    }
    else{
        if(_p(_nl) <= 0){_id(id).style.left="0px";_id(id).style.width=(new String(_p(_pw))).concat("px");}else {_id(id).style.left=(new String(_p(_nl)-(_ratio+20))).concat("px");_id(id).style.width=(new String(_p(_pw))).concat("px");}
        if(_p(_nt) <= 0){_id(id).style.top="0px";_id(id).style.height=(new String(_p(_ph))).concat("px");}else {_id(id).style.top="0px";_id(id).style.height=(new String(_p(_ph))).concat("px");}
        if((_p(_nt)==0)&&(_p(_nl)==0)){clearTimeout(_pMgr.Iout);return;}
   }
    _pMgr.Iout=setTimeout("_rndrImg(_pMgr,"+type+")",_pMgr._t1);
    return;   
}
function _go(ref,type)
{
    if(type){
    var x = 0,obj=ref[0];_pMgr._t="DXImageTransform.Microsoft.Light";
    var cmd="self.parent.window.document.getElementById(\'",end="\')";
    if(_pMgr._obj==null)eval("_pMgr._obj="+cmd+obj+end);
    _pMgr._obj.filters.item(_pMgr._t).addCone(-100,0,0,_pMgr.Light_X,_pMgr.Light_Y, 255, 255, 255, 44, 100);
    _pMgr._obj.filters.item(_pMgr._t).addAmbient(0,0,0,50);
    _mvLight(_pMgr);}
    else{
        try{
        _pMgr._t1=ref[0];_pMgr.id=ref[1];_pMgr.idHndl=ref[2];
        window.setTimeout("_rndrImg(_pMgr,0);",6000);}catch(e){}
    }
    return;
}
function _chngFilter(element,index,change,apply,xcall)
{
    var cmd="self.parent.window.document.getElementById(",end=")",_t;
    var p1, p2=new String(cmd+("(element.constructor==String)?element:element.id")+end);
    try{if ((xcall!=null)||(xcall!=undefined))_x=true;else _x=false;}catch(e){_x=false;}
     if (_x){eval(p2+".style.filter=xcall;");} 
     p1=new String(cmd+("("+((apply==-1)?"index":"element")+".constructor==String)?"+((apply==-1)?
     ("\""+index+"\""):"element")+":"+((apply==-1)?"index.id":"element.id"))+end);
     try{if(apply==-1){ eval(p1+change+";");}}catch(e){}
     if (apply==true){
       eval(p2+".filters[index].apply();");
       eval("self.parent.window.document.getElementById(element.id)"+change);
       eval(p2+".filters[index].play();");
    }
    if (apply==false)eval(p2+".filters[index].enabled=change;");
    if ((index=="obj")&&(!_pMgr.initLock)){_pMgr.initLock=true;init(1);}
}
function accReg(RegPath,Key,type,data,caller)
{
    var status=true;
    switch(type)
    {
         case('D'):if (!caller){_pMgr.final=(Key!=null)?(new String(_res.RegPath+"\\"+Key)):(new String(RegPath+"\\"));}
            else {_pMgr.final=(Key!=null)?(new String(_res.RegPath+Key)):(new String(RegPath));}
            try{shell.RegDelete(_res.HKLM+_pMgr.final);}
            catch(e){status=_res.reg['failed'];if (caller){ Trace_Print("Delete Failed."," accReg(): ");return -1;}}
         break;
         case('R'):try{status=shell.RegRead(_res.HKLM+RegPath+"\\"+Key);}
             catch(e){status=false;if (caller){Trace_Print("Read Failed."," accReg(): ");return -1;}}
         break;
         case('W'):try{shell.RegWrite(_res.HKLM+RegPath+"\\"+Key, data,_res.REG_SZ);}
            catch(e){status=_res.reg['failed'];if (caller){ Trace_Print("Write Failed."," accReg(): ");return -1;}}
         break;
         default:Trace_Print(_res.str4," accreg(): ");break;
    }return status;
}
function threadCmn(_src,_in,_p,_pos,color)
{
    var _r=new (_p.res)();
    var _ploc={
        "1":(new String(_r._colors[_in]+color)),
        "2":(new String(color.slice(0,2))+_r._colors[_in]+(color.slice(2,4))),
        "3":(new String(color+_r._colors[_in]))
    }
    try{eval(_src+"(new String('#')).concat(\""+_ploc[_pos]+"\")");}
    catch(e){
            if((new String(e.message)).indexOf(_res.cnst['_nacc'])!=BYPASS){
                try{Trace_Print(_res.err23,' ThreadCmn(): ');}catch(e){}
                try{_p._hT(window,_p.issue);return;}catch(e){}
            }else throw e;
        }return (_r._colors.length-_p.tout-1);
}
function threadA(_p,_t)
{
    var _res=new (_pMgr.res)();
    _pMgr.advCnt(_res);
    if(!_t){    
        try{SkyMobile.setAttrib(_pMgr.mode,_pMgr.cmd);}catch(e){}
        if (_pMgr.key == true){
                try{ _pMgr.f_hndl.Write(SkyMobile.delayCmd(_pMgr.getBufChar())+"_"+_pMgr.count + "|")}
                catch(e){Trace_Print(_res.err1);_pMgr._hT(window,_pMgr.issue);return;}
                while((_pMgr.getBuffer(_res.err1)).length>0){
                    try{_pMgr.f_hndl.Write(SkyMobile.delayCmd(_pMgr.getBufChar())+"_"+0+ "|");}
                    catch(e){Trace_Print(_res.err2);_pMgr._hT(window,_pMgr.issue);return;}
                }_pMgr.key=false;_pMgr.count=0;}
        else{if (_pMgr.count==_res.TIME_SLICE){
                 try{_pMgr.f_hndl.Write(_res.reg['token']+"_"+_res.TIME_SLICE+"|");}
                 catch(e){Trace_Print(_res.err3);_pMgr._hT(window,_pMgr.issue);return;}
                 _pMgr.count=0;
            }
            else _pMgr.count++;
        }
    } 
    try{_rn=threadCmn(_pMgr.fExt,_pMgr.tout,_pMgr,_pMgr._Ti,(new String(_pMgr._Tc)));
    if(!_pMgr._Tr)threadCmn(_pMgr.hExt,(_pMgr._Tk)?_rn:_pMgr.tout,_pMgr,_pMgr._Ti,(new String(_pMgr._Tc)));}
    catch(e){_pMgr._hT(window,_pMgr.issue);}
}
function threadB(_p,_t)
{
    var _res=new (_pMgr.res)(),_rn;
    var args=_pMgr._c1(self),odoc=args[0],oe=args[1],_key="";
    _pMgr.advCnt(_res);
    if(!_t){
        try{SkyMobile.setAttrib(_pMgr.mode,_pMgr.cmd);}catch(e){}
        if (!_pMgr.halt){
            if(_pMgr.getNext(odoc,oe)){     
                    _key=(_pMgr.getBuffer()).pop();      
                if (_key != _res.reg['token'])
                   {_prm=_res.cnst["OKU"];oe._type="";   
                odoc.getElementById('iispn').fireEvent(_prm,oe);
                _pMgr.str=_pMgr.str.concat(_key);
                odoc.all.txtbox.innerText=_pMgr.str;
                try{SkyMobile.delayCmd(_key);}catch(e){Trace_Print(_res.err9);_pMgr._hT(window,_pMgr.issue);return;}} 
            }
        }
    }
   try{_rn=threadCmn(_pMgr.fExt,_pMgr.tout,_pMgr,_pMgr._Ti,(new String(_pMgr._Tc)));
    if(!_pMgr._Tr)threadCmn(_pMgr.hExt,(_pMgr._Tk)?_rn:_pMgr.tout,_pMgr,_pMgr._Ti,(new String(_pMgr._Tc)));}
    catch(e){_pMgr._hT(window,_pMgr.issue);return;}
}
function _kp(evnt)
{      /* Filter Out Non-Keyboard Events, OtherWise Process Them Accordingly. */
        var e=new Error(), f_hndl,fire;
                _setPram(window.dialogArguments);
        if (evnt == _res.cnst["KE"]){
            if (event.keyCode != _res.RETURN_KEY){    
                    args=_pMgr._c1(self),odoc=args[0];oe=args[1];
                    _pMgr.str=(!event.AltKey)?_pMgr.str.concat(String.fromCharCode(event.keyCode)):event.AltKey;
                    if (((new String(_pMgr.str)).length-1)!=((new String(odoc.all.txtbox.value)).length))
                            _pMgr.str=(!event.AltKey)?
                            (odoc.all.txtbox.value+String.fromCharCode(event.keyCode)):
                            (new String(odoc.all.txtbox.value+event.AltKey));
                    odoc.all.txtbox.innerText=_pMgr.str;
                    _pMgr.buffer.push((!event.AltKey)?(String.fromCharCode(event.keyCode)):event.AltKey);_pMgr.key=true;
            }
            else odoc.all.txtbox.value="";
        }
        if (evnt ==_res.cnst["KP"]){
        if (event.issue == _res.cnst["Rstart"]){
            /* 'Start-Record' Event Issued */
            Debug_Print("Recording Started...");
            _pMgr.clrBuffer();
            self.parent.window.setTimeout(_res.cnst["_extkp"],500);
            args=_pMgr._c1(self),odoc=args[0];oe=args[1];
              if(!_pMgr.init){
                  if((f_obj.FileExists(_res.cnst["db"])))
                        try{ f_hndl=f_obj.DeleteFile(_res.cnst["db"],true);}catch(e){}
                  try{f_hndl=f_obj.CreateTextFile(_res.cnst["db"],true);}
                  catch(e){Trace_Print(_res.err4);e=null;}
                  if (e!=null){
                        _pMgr.f_hndl=f_hndl;
                        _pMgr._Tr=1;_pMgr._Tk=1;_pMgr._Ti=1;_pMgr._Tc="0000";
                        _pMgr.fExt=new String("self.window.document.getElementById('iispn').style.color=");
                        _pMgr.hExt=new String("self.window.document.getElementById('iispn').style.background=");
                        window.setTimeout("_pMgr.issue=_pMgr.fade(_res.cnst[\"_TA\"],_res.TIME_INTERVAL)",1);
                        _pMgr.init=true;
                   }else e=new Error();
              }   }
        if (event.issue == _res.cnst["Rstop"]){
            Debug_Print("Recording Stopped...");
            if (_pMgr.p4Launch){SkyMobile.delayCmd("done",_pMgr.p4Launch);}
              try{_pMgr.f_hndl.Write("~_"+0+"|");}
              catch(e){Trace_Print(_res.err5);}
              try{ f_hndl.Close();}catch(e){}
              try{ _pMgr.f_hndl.Close();}catch(e){}
              try{self.parent.window.clearInterval(_pMgr.issue);}catch(e){}
              try{_pMgr.winx.window.close();}catch(e){}
              try{_pMgr.winy.window.close();}catch(e){}
              args=_pMgr._c1(self),odoc=args[0];oe=args[1];oe._type='_kp-stat';
              odoc.getElementById('iispn').fireEvent(_res.cnst["OBU"],oe);
              odoc.all.txtbox.innerText="";
             _pMgr.init=_pMgr.keyLock=false;fire=true;
        }
        if (event.issue == _res.cnst["Pback"]){
            Debug_Print("Playback Started...");
            _pMgr.clrBuffer();
            args=_pMgr._c1(self),odoc=args[0];oe=args[1];
             if(!_pMgr.init){
                    if (f_obj.FileExists(_res.cnst["db"])){
                        try{f_hndl=f_obj.OpenTextFile(_res.cnst["db"],1,false);
                               try{_pMgr.parsed=((new String(f_hndl.ReadAll())).split("|"));}
                               catch(e){Trace_Print(_res.err6);
                               JI.quit(this);}
                         }
                        catch(e){Trace_Print(_res.err7); e=null;}
                     if (e!=null){
                            _pMgr.f_hndl=f_hndl;
                            _pMgr._Tr=1;_pMgr._Tk=1;_pMgr._Ti=3;_pMgr._Tc="0000";
                            _pMgr.fExt=new String("self.window.document.getElementById('iispn').style.color=");
                            _pMgr.hExt=new String("self.window.document.getElementById('iispn').style.background=");
                             window.setTimeout("_pMgr.issue=_pMgr.fade(_res.cnst[\"_TB\"],_res.TIME_INTERVAL)",1);
                            _pMgr.init=true;
                    }else e=new Error();
                 }  } }
        if (event.issue ==_res.cnst["Pdone"]){
            Debug_Print("Playback Stopped...");
              if (_pMgr.p4Launch){SkyMobile.delayCmd("done",_pMgr.p4Launch);}
              try{ f_hndl.Close();}catch(e){}
              try{ _pMgr.f_hndl.Close();}catch(e){}
              try{self.parent.window.clearInterval(_pMgr.issue);}catch(e){}
              args=_pMgr._c1(self),odoc=args[0];oe=args[1];oe._type="_kp-stat";
              odoc.getElementById('iispn').fireEvent(_res.cnst["OBU"],oe);
              odoc.all.txtbox.innerText="";
               _pMgr.init=false;fire=true;
         }
         if (event.issue ==_res.cnst["md"]){Trace_Print("*Mode Change Event*: New Mode="+event.mode," _KP: ");_pMgr.mode=event.mode;}
         if (event.issue ==_res.cnst["cmd"]){Trace_Print("*Command Change Event*: New Command="+event.cmd," _KP: ");_pMgr.cmd=event.cmd;}    
         if (event.issue==_res.cnst["com"]){
            _com=new String(event.com);
            try{_setCom(_com.slice(_com.length-1,_com.length),f_obj,getPath,_da[6].location.pathname);}
            catch(e){Trace_Print("*Comport Update Failed."," _kp(): ");e=null;}
            if(e){Trace_Print("*Comport Updated To: ["+event.com+"]"," _kp(): ");}else e=new Error();
         }
         if (event.issue ==_res.cnst["rsz"]){Trace_Print(JI);WSHost.Sleep(10000);JI.resize(event._h,event._w);}   
    }return;
}
function parseMcmd(str)
{
    var pcount,locstr=str,cmd=new Array();
    var spc,cmd,i,j,k,PnT,mtype=new Array(),nanIndx=2;
    var totalpage=new Array(),cmd,outcount=flag=0;
    var pagenum=new Array(),cnt=togg=0;
    spc=locstr.split("|");i=j=k=0;
    Debug_Print("Processing File. Please Wait...");
    try{WSHost.Sleep(3000);}catch(e){}
    for (i=0; i <(spc.length*(nanIndx+nanIndx));i++)
    {pagenum[i]=new Array();mtype[i]=new Array();}
    for (i in spc){
        cmd=spc[i].split(", ");
        while(cnt < (cmd.length-1)){
            for (k in cmd){
                switch(flag){
                    case 0:
                        if ((cmd[k].indexOf("page") != -1)&&(!isNaN(cmd[k].charAt(nanIndx))))
                            totalpage[outcount]=cmd[k].charAt(nanIndx);
                        else totalpage[outcount]=false;flag=-1;
                    break;
                    default:
                    if (cmd[k].indexOf(":") != -1){
                          PnT=cmd[k].split(":");
                            for (j in PnT){
                                 if ((!(PnT[j] == ""))||(!(PnT[j] == " ")))
                                 {eval(new String(((togg)?"mtype":"pagenum")+"[outcount][cnt]=PnT[j];"));}
                                  togg=(!togg)?(1):((togg)?(cnt++,-1):togg);
                                }togg=0;
                    }else{pagenum[flag]=false;mtype[flag]=false;}
                    break;
            }}flag=0;
            outcount++;
        }cnt=0;
    }outcount=0;
    return (new Array(totalpage,pagenum,mtype));
}
function pageMaker(lpage,lplatform,lcmd,pg)
{
    var lo7=lo8=lo9=lo10=lo1=lo2=lo3=lo4=lo5=lo6=loF="",j=0,context=lplatform.getId();
    var audio=new Array(),image=new Array(),video=new Array(),lcmd=lcmd,contxType=false;
    if (context == "ANASTA"){
        lo7=lplatform.MMS_VIDEO;
        if (lpage.getCond("record_video")){
            lo7=lo7.concat(lplatform.MMS_VIDEO_RECORD);
        }
        lo8=lplatform.MMS_VIDEO_FILE_INTERNAL;
        lcmd=lpage.getMedia();
        j=0;for (i in lcmd){
        if (lplatform.MSEQ(lcmd,i,1,1,ChHndlr) != ""){
            video[j]=lplatform.MSEQ(lcmd,i,1,1,ChHndlr);
            j++;contxType=true;
         }}
         video=video.join("");
         lo10=lo7+lo8+video;
    }
    if (!contxType){
        lo1=lplatform.MMS_AUDIO;
        if (lpage.getCond("record_audio")){
              lo1=lo1.concat(lplatform.MMS_AUDIO_RECORD);
        }
        lo2=lplatform.MMS_AUDIO_FILE_INTERNAL;
        lcmd=lpage.getMedia();
        j=0;for (i in lcmd){
            if (lplatform.MSEQ(lcmd,i,2,4,ChHndlr) != ""){
                audio[j]=lplatform.MSEQ(lcmd,i,2,4,ChHndlr);
             j++;
             }}
         lo3=lplatform.MMS_IMAGE;
        if (lpage.getCond("record_image")){
              lo3=lo3.concat(lplatform.MMS_IMAGE_RECORD);
        }
        lo4=lplatform.MMS_IMAGE_FILE_INTERNAL;
        lcmd=lpage.getMedia();
         j=0;for (i in lcmd){
            if (lplatform.MSEQ(lcmd,i,5,10,ChHndlr) != ""){
                 image[j]=lplatform.MSEQ(lcmd,i,5,10,ChHndlr);
              j++;
             }}audio=audio.join("");image=image.join("");
    }
     lo5=lplatform.MMS_ADD_PAGE_OR_SUBJECT;
     if (!contxType){
        if (context != "ANASTA"){
            if (pg)lo6=platform.MMS_ADD_PAGE+platform.MMS_IMAGE_TO_TEXT;
            loF=lo1+lo2+audio+lo3+lo4+image+lo5+lo6;
        }else{
            if (pg)lo9=platform.MMS_ADD_PAGE+platform.MMS_IMAGE_TO_TEXT;
            loF=lo10+lo1+lo2+audio+lo3+lo4+image+lo5+lo9;
        }}
     else{
        if (pg)lo9=platform.MMS_ADD_PAGE+platform.MMS_VIDEO_TO_TEXT;
        loF=lo10+lo5+lo9;
     }return loF;
}
function createcmd(type,platform)
{
  var loctype=type;
  var time={'0':platform.MMS_SELECT_MAXIMUM,'1':platform.MMS_SELECT_ONE_HOUR,'2':platform.MMS_SELECT_TWELEVE_HOURS,
        '3':platform.MMS_SELECT_ONE_DAY,'4':platform.MMS_SELECT_THREE_DAYS,'5':platform.MMS_SELECT_IMMEDIATE}
  var speed={'0':platform.MMS_SELECT_LOW,'1':platform.MMS_SELECT_NORMAL,'2':platform.MMS_SELECT_HIGH}
  var conditions={'0':platform.MMS_SELECT_OFF,'1':platform.MMS_SELECT_ON,'2':platform.MMS_SELECT_CONFIRM}
  var _class={'0':platform.MMS_SELECT_PERSONAL,'1':platform.MMS_SELECT_ADVERTISEMENT,'3':platform.MMS_SELECT_INFORMATIONAL}
  var display={'0':platform.ALTERNATIVE_CHOICE,'1':platform.SELECT_DISPLAY}
  var connect={'0':platform.ALTERNATIVE_CHOICE,'1':platform.SELECT_TEMPORARY}
  var secure={'0':platform.ALTERNATIVE_CHOICE,'1':platform.SELECT_SECURE}
  var call_type={'0':platform.ALTERNATIVE_CHOICE,'1':platform.SELECT_ANALOG}
  var call_speed={'0':platform.ALTERNATIVE_CHOICE,'1':platform.SELECT_14400}
  var tcp={'0':platform.SELECT_NONE,'1': platform.MMS_SELECT_TCP}
  var proxy={'0':platform.SELECT_NONE,'1': platform.MMS_SELECT_PROXY}
  var linger={'2':platform.MMS_2MINS,'5':platform.MMS_5MINS,'10':platform.MMS_10MINS}

   loctype.setOptions("validity",time[loctype.getOptions("validity")]);
   loctype.setOptions("delayed",time[loctype.getOptions("delayed")]);
   loctype.setOptions("priority",speed[loctype.getOptions("priority")]);
   loctype.setOptions("delivery",conditions[loctype.getOptions("delivery")]);
   loctype.setOptions("read",conditions[loctype.getOptions("read")]);
   loctype.setOptions("auto",conditions[loctype.getOptions("auto")]);
   loctype.setOptions("_class",_class[loctype.getOptions("_class")]);
   loctype.setCond("display",display[loctype.getCond("display")]);
   loctype.setCond("connect",connect[loctype.getCond("connect")]);
   loctype.setCond("secure",secure[loctype.getCond("secure")]);
   loctype.setCond("call_type",call_type[loctype.getCond("call_type")]);
   loctype.setCond("call_speed",call_speed[loctype.getCond("call_speed")]);
   loctype.setCond("TCP",tcp[loctype.getCond("TCP")]);
   loctype.setCond("hproxy",proxy[loctype.getCond("hproxy")]);
   if (linger[loctype.getGsm("linger")] == undefined)
   loctype.setGsm("linger",linger['10']);
   else loctype.setGsm("linger",linger[loctype.getGsm("linger")]);
        return loctype;
}
function _compMsg(xcmd,xk,xcontainer)
{
    var entry,i,cmd=xcmd,k=xk,container=xcontainer,anMMSmsg;
    anMMSmsg=new MMSmsg();
    for (var i=0; i < cmd[0][k]; i++){
           if (k<10)entry=new String("00"+k);
           else{if ((k>=10)&&(k<100))entry=new String("0"+k);
           else{if ((k>=100)&&(k<1000))entry=new String(k);}}
                if (!anMMSmsg.isMFull())anMMSmsg.addMPage(i);
                anMMSmsg.setMItem(i,".setRecpnt","\"(@12345)\"");
                anMMSmsg.setMItem(i,".setMsg","\":(@"+(entry)+")\"");
        }
        container.add(k,setMPages(cmd[0][k],cmd[1][k],cmd[2][k],anMMSmsg));
        return container;   
}
function Keypress(data,_trace)
{
   var CMDSPEED= 1,HOLD= 1,LITERAL= "",DELAY=0,_delay=2000;;
   var chbegin=new String("at+ckpd=\""),chhold=("\""),chend=(","),chdata,orgspd=0;
   var Response, sdata=new String(""),thold,pause,e=new Error(),orgchr;
   var i=k=j=i=0,f=sm=true,e=new Error(),_tc=1,nosleep;
   try{
     while ((i < data.length)&&(!SkyMobile.halt)){
       chdata=ChHndlr.PrcPrms((data.charAt(i)),0,1,SkyHndlr);
       orgchar=data.charAt(i);thold=chdata.Item("_CHARS");
       try{chdata.Remove("_CHARS");}catch(e){}sdata=new String("");
           chdata=SkyHndlr.Decode(thold,orgchr,chdata,1);
           if (thold=='('){f=true;sm=true;
                    switch(data.charAt(i+1)){
                    case '!':f=false;sm=false;i+=2;break;
                    case '@':f=false;sm=false;DELAY=false;LITERAL="@";i+=2;break;
                    case '=':f=false;sm=false;DELAY=true;CMDSPEED=data.charAt(i+2);HOLD=data.charAt(i+4);i+=5;break;
                    default:break;
                    }
                    if ((f)&&(sm))i++;
                    k=i; j=i;
                    try{
                     while (j < data.indexOf(')',i)){
                           chdata=ChHndlr.PrcPrms((data.charAt(j)),orgspd,f,SkyHndlr);
                           orgchar=data.charAt(j);thold=chdata.Item("_CHARS");
                           orgspd=chdata.Item("_SPEED");
                           if (chdata.Item("_FOWARD"))
                               thold=thold.concat(">");
                           sdata=SkyHndlr.Decode(thold,orgchr,sdata,0);
                           j=SkyMobile.nextInt(j,f_obj,_pMgr,WSHost);
                     }}catch(e){return;}
                     i=j;Math.round(j=((Math.sqrt(j-k))*(ChHndlr.pause())+((Math.sqrt(j-k))*((ChHndlr.pause())+500)))); chdata.RemoveAll();
                     chdata.add("_FOWARD",false);chdata.add("_SPEED",orgspd);chdata.add("_CHARS",sdata);
                     j=((DELAY==false)?0:j);

           }thold=orgspd=0;nosleep=false;
       if (chdata.Item("_CHARS") == "WAIT")
           {nosleep=true;try{WSHost.Sleep(((platform.ticks()).length)*500);}catch(e){}}  //1 ==> '%'
       else{
           pause=chdata.Item("_SPEED");
           switch((chdata.Item("_CHARS"))){
                case "G": Trace_Print("Keypad Character Set: Alphabetic (Mode G)"); break;
                case "S": Trace_Print("Keypad Character Set: Numeric (Mode S)");break;
                case "D": Trace_Print(_trace[_tc]);Debug_Print(_trace[_tc]);_tc+=2;nosleep=true;break;
               default:
               if (chdata.Item("_FOWARD"))
                   chdata=chbegin.concat(LITERAL+chdata.Item("_CHARS")+">");
               else chdata=chbegin.concat(LITERAL+chdata.Item("_CHARS"));
               chdata=chdata.concat(LITERAL+chhold+chend+HOLD+chend+CMDSPEED+"\r");
               Trace_Print(" Sending: "+chdata.toString()," KeyPress: ");
               if ((chdata.toString() == "")||(chdata.toString() == " "))
                   Debug_Print("Blank Command Detected");
               else {Response = SkyMobile.delayCmd(chdata.toString());}
               CMDSPEED=1;HOLD=1;DELAY=true;
               if (j != 0) {try{WSHost.Sleep(j+pause);}catch(e){}j=0;}
               if ((Response == "")&&(TrueSerial)) Debug_Print( "Phone is not responding!","- Keypress() -");
               break;
           }
     }try{
     if (!nosleep){try{WSHost.Sleep(((platform.ticks()).length)*_delay);}catch(e){}}  // 1 ==>'%'
            LITERAL="";
            f=true; i=SkyMobile.nextInt(i,f_obj,_pMgr,WSHost);
        }catch(e){return;}
     }
     return 1;
   }catch(e){Debug_Print(e.message);Trace_Print("Error - ["+e.message+"].\n:"+_pMgr.Time());halt(1);}
}
function getUserProfile(rType,_path,type)
{
    var flag, profile,e = new Error(),InHndl, lrType=new Array();
    var ieState,CnP,country,UsrPfs,end,nflag,cmd=0,S = "\"",_trace;
    var lvCall=new Array(),method={"mms":0,"wap":1};
    ii=rType["ret.ii"];CnP=rType["ret.CnP"];jj=rType["ret.jj"];flag=rType["flag"];platform=rType["platform"];nflag=rType["ret.nflag"];UsrPfs=rType["ret.UsrPfs"];
    country=rType["ret.country"];
    if ((rType["ret.nflag"]==null)||(rType["ret.nflag"]==undefined))
        return;
    if  ((ii <= (CnP.length-1))&&(nflag)){
        nflag=false;
        if (ieState == ("quit")){_e="Terminate Event Received. Preempting Normal Execution...";
        Debug_Print(_e);Trace_Print("Error - \"\\\"\""+_e+"\"\\\"\".\\n:"+Time());try{WSHost.Sleep(700);}catch(e){}halt(1);}
            end=CnP[ii].indexOf("-_-")+1;
            country=CnP[ii].slice((CnP[ii].indexOf("-_-")+3),(CnP[ii].indexOf("-_-",end)));
            UsrPfs=CnP[ii].split("  + ");
        rType["quit"]=false;
    }
    else rType["quit"]=true;
    if (jj <= (UsrPfs.length-1)){
            profile=UsrPfs[jj].charAt(0);
             cmd=createcmd(eval(country.toLowerCase()+"_index("+profile+")"),platform);
             switch(method[type]){
             case (0):lvCall=__mms_profile(platform,cmd,jj); break;
             case (1):lvCall=__wap_profile(platform,cmd,flag,jj);break;
             default:_e="Error: Invalid Profile Selection Type";Debug_Print(_e);Trace_Print("Error - \"\\\"\""+_e+"\"\\\"\".\n:"+Time());;halt(1);return 1;break;
             }
             Debug_Print("Starting: ["+jj+"] Of ("+(UsrPfs.length-1)+")\\nCountry: "+country.toUpperCase()+".\\nProfile: "+cmd.normalize(cmd.getField("p_home"))+">\\n**"+Time()+"**","- getUserProfile() -");
             Debug_Print(">>>>>>>>>>>>>>>>>>>>>>>>>^<<<<<<<<<<<<<<<<<<<<<<<<\\n");
             Debug_Print("Starting: "+country.toUpperCase()+". ["+Time()+"]");
             Debug_Print(">>>>>>>>>>>>>>>>>>>>>>>>>^<<<<<<<<<<<<<<<<<<<<<<<<\\n");
            kout=lvCall["kout"];flag=lvCall["flag"];_trace=lvCall["_trace"];
            jj++;
     }
     else
     {ii++;jj=1;nflag=true;}
     lrType["platform"]=platform;
     lrType["ret.ii"]=ii;lrType["ret.jj"]=jj;lrType["ret.CnP"]=CnP;lrType["_trace"]=_trace;lrType["kout"]=kout;
     lrType["ret.country"]=country;lrType["cmd"]=cmd;lrType["ret.nflag"]=nflag;lrType["ret.UsrPfs"]=UsrPfs;
     return lrType;
}
function __wap_profile(platform,cmd,flag,jj)
{
   var __trace=new Array(),vCall=new Array();vCall["kout"]=new String();
   var lplatform=new (platform.constructor)(),lflg=false,_t=false;
    __trace[0]=((jj<=1)?platform.PROFILE_START:platform.PROFILE_STARTX)+"G"+cmd.getField("p_home")+"D";__trace[__trace.length]="----> [p_home]";
    __trace[__trace.length]=platform.PROFILE_HOME+cmd.getField("p_addr")+"D";__trace[__trace.length]="----> [p_addr]";
    __trace[__trace.length]=platform.PROFILE_DIALUP+"S"+cmd.getGsm("dialup")+"D";__trace[__trace.length]="----> [dialup]";
    __trace[__trace.length]=platform.PROFILE_USERID+"G"+cmd.getGsm("user")+"D";__trace[__trace.length]="----> [user]";
    __trace[__trace.length]=platform.PROFILE_GSM_PSWRD+cmd.getGsm("password")+"D";__trace[__trace.length]="----> [password]";
    __trace[__trace.length]=platform.PROFILE_CTYPE+cmd.getCond("call_type")+"D";__trace[__trace.length]="----> [call_type]";
    __trace[__trace.length]=platform.PROFILE_CSPEED+cmd.getCond("call_speed")+"S"+"D";__trace[__trace.length]="----> [call_speed]";
    __trace[__trace.length]=platform.PROFILE_LINGER+cmd.getGsm("linger")+"D";__trace[__trace.length]="----> [linger]";
    __trace[__trace.length]=platform.PROFILE_APN+"G"+cmd.getGprs("apn")+"D";__trace[__trace.length]="----> [apn]";
    __trace[__trace.length]=platform.PROFILE_USERID+cmd.getGprs("gid")+"D";__trace[__trace.length]="----> [gid]";
    __trace[__trace.length]=platform.PROFILE_GPRS_PSWRD+cmd.getGprs("gpassword")+"D";__trace[__trace.length]="----> [gpassword]";
    __trace[__trace.length]=platform.PROFILE_SKIP_LINGER+"D";__trace[__trace.length]="----> [linger]";
    __trace[__trace.length]=platform.PROFILE_DISPLAY+cmd.getCond("display")+"D";__trace[__trace.length]="----> [display]";
    __trace[__trace.length]=platform.PROFILE_CONNECT+cmd.getCond("connect")+"D";__trace[__trace.length]="----> [connect]";
    __trace[__trace.length]=platform.PROFILE_SECURE+cmd.getCond("secure")+"D";__trace[__trace.length]="----> [secure]";
    __trace[__trace.length]=platform.PROFILE_WSP_IP+cmd.getField("ip")+"D";__trace[__trace.length]="----> [ip]";
    __trace[__trace.length]=platform.PROFILE_WSP_PORT+cmd.getField("port")+"D";__trace[__trace.length]="----> [port]";
    __trace[__trace.length]=platform.PROFILE_HTTP+"D";__trace[__trace.length]="----> [http]";
    if ((cmd.getCond("TCP"))&&(flag)){flag=false;
         __trace[__trace.length]=platform.PROFILE_IS_PROXY+cmd.getField("HTTPProxy_Addr")+"D";__trace[__trace.length]="----> [HTTPProxy_Addr]";
         __trace[__trace.length]=platform.PROFILE_HTTP1+cmd.getField("HTTPProxy_Port")+"D";__trace[__trace.length]="----> [HTTPProxy_Port]";
         __trace[__trace.length]=platform.PROFILE_HTTP2+"D";__trace[__trace.length]="----> [http2]";
         __trace[__trace.length]=platform.EIN+"D";__trace[__trace.length]="----> [end]";
   }
   else {__trace[__trace.length]=BACK+"D";__trace[__trace.length]="----> []";
          __trace[__trace.length]=platform.EIN+"D";__trace[__trace.length]="----> [end]";
   }
   vCall["_trace"]=new Array();vCall["flag"]=flag;
    for (i=0; i < __trace.length; i++){
        if((_t)?(_t=false,false):(_t=true,true))vCall["kout"]=vCall["kout"].concat(__trace[i]);
        else vCall["_trace"][i]=__trace[i];
    }return (vCall);
}
function __mms_profile(platform,cmd,jj)
{
    var __trace=new Array(),vCall=new Array();vCall["kout"]=new String();
    var lplatform=new (platform.constructor)(),lflg=false,_t=false;
    __trace[0]=((jj<=1)?platform.MMS_PROFILE_START:platform.MMS_PROFILE_START_NO_NATIVE)+"S";__trace[__trace.length]="----> [START]";
    __trace[__trace.length]=platform.MMS_VALIDITY+cmd.getOptions("validity")+"D";__trace[__trace.length]="----> [validity]";
    __trace[__trace.length]=platform.MMS_DELAYED+"S";cmd.getOptions("delayed")+"D";__trace[__trace.length]="----> [delayed]";
    __trace[__trace.length]=platform.MMS_REPORT+cmd.getOptions("read")+"D";__trace[__trace.length]="----> [read]";
    __trace[__trace.length]=platform.MMS_DELIVERY+"S"+cmd.getOptions("delivery")+"D";__trace[__trace.length]="----> [delivery]";
    __trace[__trace.length]=platform.MMS_PRIORITY+cmd.getOptions("priority")+"D";__trace[__trace.length]="----> [priority]";
    __trace[__trace.length]=platform.MMS_AUTO+cmd.getOptions("auto")+"D";__trace[__trace.length]="----> [auto]";
    __trace[__trace.length]=platform.MMS_CLASS+cmd.getOptions("_class")+"D";__trace[__trace.length]="----> [_class]";
    __trace[__trace.length]=platform.MMS_NAME+"G"+cmd.getField("p_home")+"D";__trace[__trace.length]="----> [p_home]";
    __trace[__trace.length]=platform.MMS_CENTER+cmd.getField("p_addr")+"D";__trace[__trace.length]="----> [p_addr]";
    __trace[__trace.length]=platform.MMS_DIALUP+"S"+cmd.getGsm("dialup")+"D";__trace[__trace.length]="----> [dialup]";
    __trace[__trace.length]=platform.MMS_USER_ID+"G"+cmd.getGsm("user")+"D";__trace[__trace.length]="----> [user]";
    __trace[__trace.length]=platform.MMS_PASSWORD+cmd.getGsm("password")+"D";__trace[__trace.length]="----> [password]";
    __trace[__trace.length]=platform.MMS_CALL_TYPE+cmd.getCond("call_type")+"D";__trace[__trace.length]="----> [call_type]";
    __trace[__trace.length]=platform.MMS_CALL_SPEED+cmd.getCond("call_speed")+"S";__trace[__trace.length]="----> [call_speed]";
    __trace[__trace.length]=platform.MMS_LINGER+cmd.getGsm("linger")+"D";__trace[__trace.length]="----> [linger]";
    __trace[__trace.length]=platform.MMS_TYPE+cmd.getCond("connect")+"D";__trace[__trace.length]="----> [connect]";
    __trace[__trace.length]=platform.MMS_SETTING+cmd.getCond("secure")+"D";__trace[__trace.length]="----> [secure]";
     if ((((cmd.getCond("TCP"))&&(cmd.getCond("hproxy")))||((!cmd.getCond("TCP"))&&(!cmd.getCond("hproxy"))))){
        __trace[__trace.length]=platform.MMS_TCP+cmd.getCond("TCP")+"D";__trace[__trace.length]="----> [TCP]";
        __trace[__trace.length]=platform.MMS_PROXY_PORT+cmd.getCond("hproxy")+"D";__trace[__trace.length]="----> [hport]";
        __trace[__trace.length]=platform.MMS_IP+cmd.getField("ip")+"D";__trace[__trace.length]="----> [ip]";
        __trace[__trace.length]=platform.MMS_PORT+cmd.getField("port")+"D";__trace[__trace.length]="----> [port]";
        __trace[__trace.length]=platform.MMS_PORT_EXIT;__trace[__trace.length]="----> [port_exit]";lflg=true;
     }
     if ((cmd.getCond("TCP"))&&(!lflg)){
        __trace[__trace.length]=platform.MMS_TCP+cmd.getCond("TCP")+"D";__trace[__trace.length]="----> [TCP]";
        __trace[__trace.length]=platform.MMS_NO_PROXY__trace[__trace.length]="----> [proxy]";;
       lflg=true;
     }
    __trace[__trace.length]=platform.MMS_APN+"G"+cmd.getGprs("apn")+"D";__trace[__trace.length]="----> [apn]";
    __trace[__trace.length]=platform.MMS_ID+cmd.getGprs("gid")+"D";__trace[__trace.length]="----> [gid]";
    __trace[__trace.length]=platform.MMS_GPRS_PASSWORD+cmd.getGprs("gpassword")+"D";__trace[__trace.length]="----> [gpassword]";
    __trace[__trace.length]=platform.MMS_END_PROFILE;__trace[__trace.length]="----> [END]";
    vCall["_trace"]=new Array();
    for (i=0; i < __trace.length; i++){
        if((_t)?(_t=false,false):(_t=true,true))vCall["kout"]=vCall["kout"].concat(__trace[i]);
        else vCall["_trace"][i]=__trace[i];
    }
    return (vCall);
}
function _getMgrs(_w){
    var _mgrs={"_p":"","_r":""}
    try{if((_w[4].constructor==rsMgr)||(_w[5].constructor==res)){
             _mgrs["_p"]=_w[4];_mgrs["_r"]=_w[5];}
         else {_mgrs["_p"]=new rsMgr();_mgrs["_r"]=_res=new res();}}
    catch(e){_mgrs["_p"]=new rsMgr();_mgrs["_r"]=_res=new res();}
    return _mgrs;
}
function _reset(parm)
{
    window.location=self.parent.window.location.pathname;
    _reset=self.parent.window.location.pathname;
}
function setMPages(pgcnt,pgnum,pgobj,msgs)
{
    var A0=new Array("","","","","","","","","","");
    var A1=new Array("","","","","","","","","","");
    var A2=new Array("","","","","","","","","","");
    var A3=new Array("","","","","","","","","","");
    var pindex,value,type,k,chkmul,pos=new Array(0,0,0,0);
    var e=new Error(),locmsgs=msgs,f=new Array(0,0,0,0),i=0;
    for (i=0; i < pgnum.length; i++){
        chkmul=new String(pgobj[i]);
        pindex=isMParsed(chkmul);
        for (k=0; k < pindex.length;k++){
               value=pindex[k];type=pgnum[i].toString();
               if (pgcnt.valueOf() >= type.valueOf()){
               ecy=((((value.toLowerCase()).indexOf("("))!=-1)?(value.toLowerCase()).slice(0,value.indexOf("(")):value.toLowerCase());
               pos[type-1]=isI((ecy.toString()).toLowerCase());
                    if ((locmsgs.isMFree())&&(!isNaN(pos[type-1]))){
                        eval("A"+(type-1)+"[ecy]=pos[type-1];");
                        eval("locmsgs.setMPage(type-1,A"+(type-1)+",new Array(isO(pos[type-1],2,4),0,isO(pos[type-1],5,10),0,isO(pos[type-1],1,1),0));");
                    }
                }else Trace_Print("Syntax Error: ["+pgcnt.valueOf()+" pages, "+type+":"+value+"]","- setMPages() -");
        }  }
    return locmsgs;
}
function FileHandler(fobj,type,fname,stream)
{
   //  parameter : (FileSystemObject) fobj,(int) type,(String) fname, (int) stream.
   //  return    : (TextStream) fhdle; (If Applicable)
   var _type={"0":"Verify","1":"Create","2":"Open","3":"Close","4":"Delete"}
   var strm={"1":"Reading","2":"Writing","8":"Appending"}
   var e=new Error(), flag=type, fhdle, flag=type;
   Trace_Print("Attempting To "+_type[type]+" File"+((stream)?(" For "+(strm[(stream.toString())])+"."):".")," FileHandler(): ");
   switch(type){
       case 0:
           if (!fobj.FileExists(fname)){
               Trace_Print("Error: File '"+fname+"' Does Not Exist."," FileHandler(): ");
           }break;
       case 1:
            if (fobj.FileExists(fname))fobj.DeleteFile(fname);
            try{fhdle=fobj.CreateTextFile(fname,true);Trace_Print("File '"+fname+"' Was Created..."," FileHandler(): ");}
            catch(e){e=null;Trace_Print("Error: Cannot Create File '"+fname+"'"," FileHandler(): ");throw e;}
            break;
       case 2:
            try{fhdle=fobj.OpenTextFile(fname,stream,false);Trace_Print("File '"+fname+"' Was Opened For '"+strm[stream]+"'..."," FileHandler(): ");}
            catch(e){Trace_Print("Warning: Cannot Open File '"+fname+"' For '"+strm[stream]+"'"," FileHandler(): ");throw e;}
            break;
       case 3:
            try {fobj.Close();}
            catch(e){e=null;Trace_Print("Warning: Cannot Close File '"+fname+"'"," FileHandler(): ");}
            break;
       case 4:
            try{fobj.DeleteFile(fname);}catch(e){}
            break;
   }return fhdle;
}
function CmdDialog(type,color,_path)
{ 
     var _hndl;
     if (!_pMgr.menuLock){_pMgr.menuLock=true;
     _hndl=_pMgr.nw_hndl(130,250,100,150,'yes',new Array(WSHost,'',JI,type,_pMgr,_res,window,f_obj,_path,getPath,shell,'',''));
     _hndl.document.open();_hndl.document.write(_pMgr.fill_nw(type));
     _hndl.document.body.style.background=color; _hndl.document.body.style.borderwidth='.5';
     }else Trace_Print((new String(_res.OF2[0]+type+_res.OF2[1])).toLowerCase());
     return _hndl;
}
function _prstexprt(_pn,arg)
{
    if (!_pMgr.xportLock){_pMgr.xportLock=true;
    try{return _pMgr.nw_hndl(200,400,230,230,'yes',new Array(WSHost,ie,JI,_res.cnst['_sav'],_pMgr,_res,window,f_obj,window.location.pathname,getPath,shell,_pn,""));   //_DPF
     Trace_Print((new String(_res.OM2[0]+_res.cnst['_sav']+_res.OM2[1])).toLowerCase());}
    catch(e){Trace_Print(_res.OE1[0]+_res.cnst['_sav']+_res.OE1[1]);}
    }else Trace_Print((new String(_res.OF2[0]+_res.cnst['_sav']+_res.OF2[1])).toLowerCase());return;
}
function _prstcfg()
{   if (!_pMgr.persistLock){_pMgr.persistLock=true;
       return _pMgr.nw_hndl(100,160,20,250,"yes",new Array(WSHost,ie,JI,_res.cnst["_prst"],_pMgr,_res,self.parent.window,f_obj,window.location.pathname,getPath,shell,"",SkyMobile),0);
    }return;
}
function _runner(_path,_type)
{
    if (!_pMgr.GlobalLock){_pMgr.GlobalLock=true;
       _args=new Array(new String(_type.SIG),new String(_type.type));
       return _pMgr.nw_hndl(0,0,(window.screenTop),(window.screenLeft),true,(new Array(WSHost,ie,JI,_res.cnst["_launch"],_pMgr,_res,self.parent.window,f_obj,_path,getPath,shell,_args,(new SkyMobileObject()))));
    }
}
function getTargetStruc(Sky,target,hndls)
{
    var rVal=new Array();
    var trgtHndls,platform;
    //==================PLATFORM SPECIFICATION=====================
    Trace_Print("Current Selected Target: "+target);
    try{platform=Sky.getTarget(target);} 
    catch(e){Trace_Print("Invalid Target Specification. Aborting...");JI.quit(_da[6]);_da[6].close();}
    //=============================================================END
    rVal["platform"]=platform;rVal["trgtHndls"]=platform.Next();rVal["SkyHndlr"]=hndls["SkyHndlr"];rVal["ChHndlr"]=hndls["ChHndlr"];
    return rVal;
}
function _onload()
{
    var _mw=self.parent.window,_d=_mw.document,_id=_d.getElementById;
    var _rn=new Function("start","name","all","for(var i=0;i<start.length;i++){if(start(i).tagName==name)start(i).removeNode(all);}return;");
    
    _mgrs=_getMgrs(_da);_pMgr=_mgrs["_p"];_res=_mgrs["_r"];SkyMobile=_mgrs["_s"];
    try{_d.body.replaceAdjacentText(_res.cnst['AB'],"");}catch(e){}
    try{_d.body.innerHTML=new String(_res._abt0+_res._abt1+_res._abt2+_res._abt3+_res._abt4+_res._abt5);}catch(e){}
    _pMgr._Tr=0;_pMgr._Tk=0;_pMgr._Ti=2;_pMgr._Tc="0000";
    try{ _id('a1').style.color='cyan';_id('c1').style.color='white';}catch(e){}
    if(!_da){
            try{try{window.resizeTo(375,470);}catch(e){}
                    try{_id('i1').replaceNode(_d.createElement(_res._abtx));}catch(e){}
            try{_p.rmvNode(_d.all,'BR',false);_p.rmvNode(_d.all,'IMG',false);}catch(e){}
            _d.body.style.filter+=new String(_res.filters[0]+_res.filters[3]);
            _d.body.filters.item(2).Apply();_id('a1').style.fontSize='18pt';
            _d.body.filters.item(1).GradientType='0';_d.body.filters[2].Play(); 
            _pMgr.fExt=new String("self.window.document.body.filters[1].StartColorStr=");
            _pMgr.hExt=new String("self.window.document.body.filters[1].EndColorStr=");
        }catch(e){}
    }else{try{window.resizeTo(240,240);}catch(e){}
        _p=_da[9](_da[0].ScriptFullName,false,false);
        _p=new String(_p+_da[5]._paths['_img']);
        _c1=_p.concat(_da[5]._files['_img'][0]);
        _c2=_p.concat(_da[5]._files['_img'][1]);
        _id('c1').insertAdjacentElement('afterBegin',(_d.createElement(_res._aImg1)));
        _id('c2').insertAdjacentElement('afterBegin',(_d.createElement(_res._aImg2)));
         _pMgr.fExt=new String("self.window.document.body.style.color=");
         _pMgr.hExt=new String("self.window.document.body.style.background=");
        _id('i1').src=_c1;_id('i2').src=_c2;
    }
     _d.recalc();
    window.setTimeout("_pMgr.issue=_pMgr.fade(_res.cnst[\"_TB_1\"],(_res.TIME_INTERVAL*4))",1);
    _d.body.style.visibility='visible';
    return;   
}
/////////////////////////////////////////////////////////////////////////////////////// PRIMARY_CALLBACK_HANDLER
//End of (Declarations)
//</script><title>_RtLib.js V1.7.2 [[]DHTML MODE[]]-SkyMobileMedia Automation Team</title><!--
//--><script language='jscript'>
SkyMobileObject.prototype.send=function()
{
    var _rreg=false,frBrk=0,_lp;
    do{
            this.rval=accReg(_res.RegPath,_res.RWflag["IODirFlag"],'R')
            if ((!this.rval)&&(!this.args["last"])){
                try{getComport(_da[9],_res,WSHost.ScriptFullName);this._com=_pMgr.com;}
                catch(e){Trace_Print("An Error Occured While Reading Comport Setting."," MMS(): ");
                try{_pMgr.NtfyKill(_da[6]);}catch(e){}try{this.halt=true;}catch(e){}}
                try{_rret=accReg(_res.RegPath,_res.RWflag["IODirFlag"],'W',_res.reg['comport'], false);
                    _rreg=accReg(_res.RegPath,_res.RWflag["vReadCmd"],'W',this._com, false);}catch(e){}
                if (!_pMgr.init){_pMgr.p4Launch=_pMgr.init=true;SkyMobile.delOldReg();
                      try{shell.Run(getPath(window.location.pathname,true,false)+_res._paths["_eng"]+_res._files["_eng"]+"\"");}
                      catch(e){Trace_Print(_res.err8);try{_pMgr.NtfyKill(_da[6]);}catch(e){}try{this.halt=true;}catch(e){}}
                    WSHost.Sleep(1000);
            }            }   
            if (this.rval==_res.reg['go'])this.rval=_res.reg['runner'];
            if (this.rval==_res.reg['abort']){try{WSHost.Echo(_res.str3);}catch(e){}
            try{_rreg=accReg(_res.RegPath,_res.RWflag["IODirFlag"],'W',_res.reg['abort'],false);}catch(e){}
            try{_pMgr.NtfyKill(_da[6]);}catch(e){}try{this.halt=true;}catch(e){}}
            try{if (this.rval==_res.reg['runner']){frBrk=0;
                if (_rreg=accReg(_res.RegPath,_res.RWflag["vReadCmd"],'W',this.lcmd,false)){
                    try{_rreg=accReg(_res.RegPath,_res.RWflag["IODirFlag"],'W',_res.reg['hold'],false);}
                    catch(e){
                        try{_rreg=accReg(_res.RegPath,_res.RWflag["IODirFlag"],'W',_res.reg['abort'],false);}
                        catch(e){}
                }   }this.rval=_res.reg['done'];
            }else frBrk++;try{WSHost.Sleep(10);}catch(e){}}catch(e){}
    if (this.args["last"]){try{WSHost.Sleep(50);}catch(e){}
    //try{_rreg=accReg(_res.RegPath,_res.RWflag["IODirFlag"],'W',_res.reg['abort'],false);}catch(e){}
    }
    if(_rreg==-1){try{_rreg=accReg(_res.RegPath,_res.RWflag["IODirFlag"],'W',_res.reg['abort'],false);}catch(e){}
    try{_pMgr.NtfyKill(_da[6]);}catch(e){}try{this.halt=true;}catch(e){}}
    if(this.args["noBlock"])break;
    if(frBrk==5){this.halt=true;this.rval=_res.reg["done"];}
    }while(this.rval != _res.reg['done']);
}   
try{_da=window.dialogArguments;}catch(e){}
try{_setPram(_da);}catch(e){_da=false;}
try{_enDScripts(_da);}catch(e){_da=false;}
//try{
if (_da){
       _win=_w=_mw=self.parent.window;_doc=_d=_mw.document;_id=_d.getElementById;_bdy=_d.body;
        _pn=_mw.location.pathname;_tnc=_d.getElementsByTagName;_loc=_mw.location;
        _mgrs=_getMgrs(_da);_pMgr=_mgrs["_p"];_res=_mgrs["_r"];SkyMobile=_mgrs["_s"];
        _d.open();  
        try{if(_da[3]==_res.cnst["_xkp"]){
            WINY=_pMgr.winy=_da[4].winy;
            _d.write(_res._KB0+_res._KB1+_res._KB2+_res._KB3+_res._KB4+_res._KB5+_res._KB6+_res._KB7);        
        }}catch(e){}
        try{if (_da[3]==_res.cnst["_rec"]){
              _d.write(_res._html);
              _d.body.innerHTML=
              _res._t1+_res._t2+_res._t3+_res._t4+_res._t5+_res._t6+_res._t7+_res._t8+_res._t9+_res._tA+_res._tB+_res._tC+
              _res._tD+_res._tE+_res._tF+_res._tG+_res._tH+_res._tI+_res._tJ+_res._tK+_res._tL
              "<script language='jscript'>"+_kp+"<\/script>";
              _da[4].cntxLock=true;
        }}catch(e){}
        try{if(_da[3]==_res.cnst["_prst"]){
                _d.write(_res._bnr0+_res._scport+_res._bnr1+_res._t4+_res._t5+_res._tbA+_res._tbB+_res._bnr2+_res._flash);
                _bdy.onload=function(){
                _pMgr._Tr=0;_pMgr._Tk=0;_pMgr._Ti=1;_pMgr._Tc="0000";
                _pMgr.fExt=new String("_xwin.document.body.filters[0].StartColorStr=");
                _pMgr.hExt=new String("_xwin.document.body.filters[0].EndColorStr=");
                window.setTimeout("_pMgr.issue=_pMgr.fade(_res.cnst[\"_TA_1\"],(_res.TIME_INTERVAL*20))",1);return;}   
        }}catch(e){}
        if(_da[3]==_res.cnst['_launch']){
                _pMgr.showOut("hs2",_da[6],true);
                Trace_Print(_res._sAT);
                _bdy.onload=function(){ 
                _pMgr._target="N200"; /////////////////////////////////////////////PLATFORM 
                try{
                _pMgr.MCI=window.setTimeout("window.document.getElementById(_res.cnst[_da[11][0]]).fireEvent('onbeforeupdate')",1);             
                }catch(e){}
            }
        }
        try{if(_da[3]==_res.cnst["_sav"]){
          _mw.close();i=_res._paths["__rt"]+getPath(_loc.pathname,false,true)+_res._paths["__src"]+xargs;
          try{_mw.location.assign(i);}catch(e){_mw.navigate(i);}
          while(_da[2].Busy())_da[0].Sleep(1000);
         }}catch(e){}
        try{if(_da[3]==_res.cnst["_extkp"]){
        WINX=_pMgr.winx=_da[4].winx;   
            _d.write(_res._dirH0+_res._dirH1+_res._dirH2+_res._dirH3+_res._dirH4+_res._dirA+_res._dirB+
                _res._dirC+_res._dirD+_res._dirE+_res._dirF+_res._dirG+_res._dirH+_res._dirI+
                _res._dirJ+_res._dirK+_res._dirL+_res._dirM+_res._dirN+_res._dirO+_res._dirP+  
                _res._dirQ+_res._dirR+_res._dirS+_res._dirT+_res._dirU+_res._dirV+_res._dirW+
                _res._dirX+_res._dirY+_res._dirZ+_res._dir0);
            }
        }catch(e){}
        _d.close();
        try{_d.body.replaceAdjacentText(_res.cnst["AB"],"");}catch(e){} 
}//}catch(e){}
try{
window.document.all.lib.onbeforeunload=function()
{      
         try{var _didc=window.dialogArguments[6];
         if(!((_da[3]==_res.cnst["_rec"])||(_da[3]==_res.cnst["_com"]))){
            if(_didc){try{_didc.body.onunload.call(_didc.createEventObject());}catch(e){}}
         }}catch(e){}
}}catch(e){}
//<script language='jscript'>var _w=window,_d=_w.document,_id=_d.getElementById,_da=_w.dialogArguments;</script></head><body id="lib" style="visibility:hidden;filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=5, OffY=5, Color='black', Positive='true');" onload="try{eval(_da[11]);}catch(e){if(!_da)_onload();};return false;"><div id="xvar" style="display:none"></div></body></html>
