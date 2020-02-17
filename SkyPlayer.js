//<!--
/* -->
 <!--CRC: AE03B933
 /*********************COPYRIGHT NOTICE************************                                                                                                                                  
 *            Copyright © 2004 Sky MobileMedia. All rights reserved.               *       
 *                                                                                                           *
 *          This software is confidential and proprietary information of             *   
 *     Sky MobileMedia. The receipt of or possession of this software does     *
 *        not convey any rights to reproduce or disclose its contents or to       *   
 *      manufacture, use, or sell anything it may describe, in whole, or in      *    
 *         part, without the specific written consent of Sky MobileMedia.          *       
 *                                                                                                          *   
 ` --------------------------------_SkyPlayer.js----------------------------------   `
 `                     Sky Automation Utility - '_SkyPlayer' V0.0.1    [File: 1 of 3]`
 `                         Copyright © 2004. - SKY MobileMedia.                          `
 `                                     Author: Phillip Walker                                      `
 `____________________________________________________________ `
   *************************************************************
  #***************************************************************#
  # Usage:                                                                   [Engine]                    #
  #=================================================#
  #  1. _SilentAT.js                                                     : [WScript Engine]        #
  *****************************************************************
                                                                                                          -->
<!doctype html public "-//w3c//dtd html 4.0 transitional//en" "http://www.w3.org/tr/html4/loose.dtd">
<html xmlns:t ="urn:schemas-microsoft-com:time"><head><?import namespace="t" implementation="#default#time2">
<title>SilentAT V1.0.1- SkyMobileMedia Automation Team</title>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta http-equiv="Page-Enter" content="blendTrans(Duration=4.0)"> 
<link rel=stylesheet href="bin/_rtstyles.css" type="text/css">
<style type="text/css">
    .time{ behavior:'url(#default#time2)';}
    .field{filter:progid:DXImageTransform.Microsoft.Shadow(color="#FFFFFF", Direction=335, Strength=3);
            z-index:100;border:'1px outset gold';background:expression(fbdy.style.background);position:absolute;font-size:8pt;}
    body{background:'black';font-family:'Helvetica';font-size:'8pt';margin:0;border:0;overflow-x:auto;border:outset powderblue;width:924px;height:400px;
             filter:progid:DXImageTransform.Microsoft.Gradient(GradientType='1', StartColorStr=,'#000000' EndColorStr='#000000');}
    .button{filter:progid:DXImageTransform.Microsoft.MaskFilter(Color="#000000");position:absolute;top:0;width:'18.48px';height:9;left:92.4;}
    .digit{background:yellow;position:absolute;top:5;width:9;z-index:100;left:expression(9+this.previousSibling.offsetLeft);height:13;}
    .digitx{background:purple;position:absolute;top:5;width:9;z-index:100;left:expression(12+this.previousSibling.offsetLeft);height:13;}
    .Menu{filter:progid:DXImageTransform.Microsoft.Wipe(GradientSize=1.0,wipeStyle=1,motion='forward')
                progid:DXImageTransform.Microsoft.RandomBars()
                progid:DXImageTransform.Microsoft.dropshadow(OffX=-5, OffY=5, Color='black', Positive='true')
                progid:DXImageTransform.Microsoft.Compositor(function=2);position:'absolute';top=150;background:menu;}
    .rt{color:lightgreen;position:absolute;left:145;}
    .mask{color:'white';font-size:12pt;border:'1px cyan inset';text-align:center;height:100%;width:33%;filter:progid:DXImageTransform.Microsoft.Fade(duration=1,overlap=0);}
    .notify{filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#FFD700', EndColorStr='#000000');border:'2px white inset';height:21;}
    .hide{z-index:100;position:absolute;border:'1px outset cyan';color:'red';background:expression(fbdy.style.background);width:10px;height:10px;font-size:8pt;}
    .x{z-index:100;border:'1px outset cyan';color:'red';background:expression(fbdy.style.background);position:absolute;top:40;width:10px;height:6px;font-size:8pt;}
    .switch{border:'2px outset #444444';color:'cyan';z-index:100;background:expression(fbdy.style.background);position:absolute;width:30px;height:25px;font-size:14pt;}
    .arrow{width:10; height:10; position:absolute; cursor: hand; z-index: 30;}
    .mview{font-size:8pt;height:5%;top:0;width:5%;}
    .banner{position:absolute;width:462px;height: 124px; top: 0pt;}
    .led{z-index:30;filter:progid:DXImageTransform.Microsoft.BasicImage(Rotation=1);width:4%;height:80px;position:absolute;}
    table{filter:progid:DXImageTransform.Microsoft.Shadow(color='#FFFFFF', Direction=335, Strength=1)
            progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#000000', EndColorStr='#0000FF');
            border-style:inset;color:highlighttext;align-text:center;letter-spacing:1;line-height:1;margin:0;xfont-family:Arial;z-index:0;xfont-size:8pt;font:menu;padding:0pt;border:0pt;}
    .bodytext{filter:progid:DXImageTransform.Microsoft.Gradient(GradientType=0, StartColorStr='#000000', EndColorStr='#FFFFFF')
    progid:DXImageTransform.Microsoft.Shadow(color='#FFFFFF', Direction=85, Strength=1);
    font-size:'10px';font-weight:'normal';font-family:'Arial';}
</style></head>
<body id="fbdy" oncontextmenu="if(!_pMgr.cntxLock){_pMgr.goPopup(40,160,(event.offsetY+10),(event.offsetX+10),(_res._s1+_res._s2),(new Array(WSHost,ie,JI,'REC',_pMgr,_res,window,f_obj,'',getPath,shell,'',SkyMobile)),' recorder: ');} return false;"
           onload="var _da=window.dialogArguments,_win=self.parent.window,_doc=_win.document,_id=_doc.getElementById,_ce=_doc.createElement,_res=new res(),i=0;if(_da[3]!=_res.cnst['_launch']){if(_da[4])_pMgr=_da[4];while(i<=1){_id((!i)?'rmselx':'rmsely').insertAdjacentElement('BeforeBegin',_ce((!i)?_res._nslct0:_res._nslct1));i++}if(1){_win.setTimeout('_chngFilter(fbdy,0,\'.style.background=\\\'white\\\'\',1,_res.filters[3])+\';\'');_win.setTimeout('_chngFilter(fbdy,0,\'.style.background=\\\'#000000\\\',obj.style.visibility=\\\'visible\\\'\',1,_res.filters[0])+\';\'',6000);if(_da[3]==_res.cnst['_com']){_win.setTimeout('(_go(new Array(\'ttbl\'),1),_go(new Array(0,\'img\',window.document.getElementById),0))',3000);}}}return;"  
           onclick="return ((event.srcElement.id==fbdy.id)?(_mu.Hide(),false):false);">
<script language='jscript'>var MOD_PATH=new String("\\bin\\mods"), LIB_PATH=new String("\\bin\\lib"),PLT_PATH=new String("\\bin\\platforms"),_mu,_rst=new Function("i","var item,_ms=\"DXImageTransform.Microsoft.\";item=((i.children.length==undefined)||(i.children.length<=1))?(_len=1,new Array(i)):(_len=_id(i).children.length,_id(i).children);for(var j=0;j<_len;j++){try{item[j].filters.item(_ms+\"Glow\").Strength=item[j].s;}catch(e){}try{item[j].filters.item(_ms+\"Glow\").Color=item[j].c;}catch(e){}try{item[j].filters.item(_ms+\"dropshadow\").offX=item[j].filters.item(_ms+\"dropshadow\").offY=item[j].o;}catch(e){}}return;");</script>
<!--*//*--><div id='RUN' style="display:none"><div id="cFile" style="visibility:hidden;"></div></div>
<script language="JScript">var _w=window,_d=_w.document,_da=_w.dialogArguments,_lp=_da[9](window.location.pathname,false,false),_id=_d.getElementById,_lib=new String(_lp+LIB_PATH),_mod=new String(_lp+MOD_PATH),_plt=new String(_lp+PLT_PATH),_loadCMods=new Function("_path","_Node","_da","_ref","var _w=window,_d=_w.document,_id=_d.getElementById,_cNode=_Node,f_c,_file,_rid;f_c=new Enumerator((_da[7].GetFolder(_path)).files);for (;!f_c.atEnd();f_c.moveNext()){_file=new String(f_c.item());if(_ref){_rid=_file.split(\"\\\\\");_rid=_rid[_rid.length-1];_rid=_rid.slice(0,_rid.indexOf(\".\"));_cNode.insertAdjacentElement(\"beforeBegin\",_d.createElement(\"<div id='\"+_rid+\"' name='\"+_rid+\"' style='display:none;'>\"));}_cNode.insertAdjacentElement(\"afterEnd\",_d.createElement(new String(\"<script language='jscript' src='\"+_file+\"'>\")));_cNode=_cNode.nextSibling;}return _cNode;");
i=_loadCMods(_plt,_id("cFile"),_da,false);i=_loadCMods(_lib,i,_da,false);try{if(_da[3]==_da[5].cnst["_launch"]){_loadCMods(_mod,i,_da,true);}}catch(e){}
</script><!--*///--><script language='jscript'>
var WSHost,ie,JI,_pMgr,_res,f_obj,shell,getPath,xargs,e=new Error();
//*************************************************************INSTANCE_VARIABLES
var tcp, flag=true,profile,bkmark=new Array(),kout,mmscs,page,cnt=0,msg,itc,itp,itt,audio=new String(), image=new String(),ieState,WAPHndl,MMSHndl,cmd,cnt=0;
var out0=out1=out2=outF="",out=new Array(),cmdseq,k,anMMSmsg,delcnt=0,cnt0,i,cnt=ct=entry=k=0,item,lcnt,stuff,media,index,msgs,index,pagecnt,root,_t=false;
var pause=stop=run=0,fillList2=false, listarr=new Array(),listing=new Array(),_ret=new Array(),counter=0,cnt,last,p_num,tstart=false,e = new Error(),rType=new Array();
var InHndl,cmd,S = "\"",i=0,_trace,SkyMobile,ieState,country,t0,t1,t2,s0,c1,c2,container,_ret,f_hndl,kout,display="t2",oPop,gtimer=0,otimer,t,lock=0;
var _xehnlr_event=function(){
    try{window.document.body.onunload.call(window.document.body.createEventObject());}catch(e){}
    try{ie.quit();}catch(e){}try{WScript.Quit(0);}catch(e){}try{WSHost.Quit(0);}catch(e){}
}
var _setdsply=new Function("host","_path","var _com=new String(\"JI.CORE\"),JI;try{JI=_ckdsply(host,new String(_path+\"\\\\\"+\"bin\\\\\com\\\\\"),_com);}catch(e){try{_xehnlr_event();}catch(e){}}try{host.ConnectObject(JI,\"_xehnlr\");}catch(e){}try{JI.host=host;JI.srcPath=host.ScriptFullName;return JI;}catch(e){return 0;}");
var _ckdsply=new Function("host","_path","_com","var JI,shell;try{shell=new ActiveXObject(\"WScript.Shell\");}catch(e){throw undefined;}try{JI=new ActiveXObject(_com);JI.shell=shell;}catch(e){shell.Run(new String(\"regsvr32 /s \"+_path+_com),10,0);try{host.Sleep(1000);}catch(e){}try{JI=new ActiveXObject(_com);JI.shell=shell;}catch(e){throw undefined;}}return JI;"); 
//</script><!--
//--><script language='JScript'><!--
var _ud=new String("- Updating... -"),_fix=0,OK=6,FAIL=5,_ss=new String("The Operation Completed Successfully. Any Changes Made Have Been Restored.");
var _ieFix=new String("HKCU\\Software\\Microsoft\\Internet Explorer\\Main\\FeatureControl\\FEATURE_LOCALMACHINE_LOCKDOWN\\"),_cv,_dv,_msg2=new String("Updating Settings. Please Wait...");
var objerr=new String(dv+"Critical Error!!!"+dv+"\nCould Not Create And/Or Initialize System Components.\n\n"+dv+"  Aborting..."),dv="                               ",_att=new String("- Attention -");
var _err0=new String("Automation Was Unable To Adjust Environment Settings. Please Contact Author For Further Assistance."),_rw=new String("iexplore.exe");
var _msg0=new String("The Current Security Restrictions Are Preventing Some Automation Components From Initializing.\nAutomation Can Temporarily Disable These Restrictions; However ");
var _msg1=new String("This Will Require Access And Permission To Modify Registry Values.\n\nNote: Automation Will Automatically Restore Security Settings After ByPassing The Security Check Point.");
var _chkIE=function(type,_val){
    switch(type){
    case('d'):try{shell.RegDelete(_ieFix+_rw);return OK;}catch(e){return FAIL;}break
    case('r'):try{return(shell.RegRead(_ieFix+_rw));}catch(e){return FAIL;}break;
    case('w'):try{shell.RegWrite(_ieFix+_rw,_val,"REG_DWORD");return(eval('arguments.callee(\'r\')'));}catch(e){return FAIL;}break;
    default:WScript.Quit(1);break;
    }
}
var _pd=function(_o){if(_o!=FAIL){try{_chkIE('w',_o);}catch(e){}}else{_chkIE('d');}return;}
function generic(){this.app=new Array(new String("SkyPlayer.js V1.0.1 [[]DHTML MODE[]] - SkyMobileMedia Automation Team -- Web Page Dialog"),
new String("_RtLib.js V1.7.2 [[]DHTML MODE[]] - SkyMobileMedia Automation Team -- Web Page Dialog"));
this.createPopup=this.returnValue=this.location=this.cancelBubble=this.parent=this.window=this.open=this.write=this.replaceAdjacentText=new Function("");
this.alert=new Function("m","WScript.Echo(m);");this.close=new Function("p","try{_p=(p==null)?0:p;}catch(e){_p=0;}WScript.Quit(_p);");}
try{window=new generic();}catch(e){}try{document=new generic();}catch(e){}try{event=new generic();}catch(e){}try{self=new generic();}catch(e){}
//--></script><!--
/*-->
<t:animate dur="5" onend="var _win=window,_doc=_win.document,_da=_win.dialogArguments,_id=_doc.getElementById,oe=_doc.createEventObject();_id('slt').style.visibility=_id('out').style.visibility='hidden';for(var i=0;i<_id('pnd').children.length-1;i++){oe.objLeft=_id('pnd').children(i).style.left;oe.notify=_id('pnd').children(i).id;_id('pnd').children(i).fireEvent('onbeforeupdate',oe);}try{_id('otdiv').style.visibility='hidden';}catch(e){}try{(_pMgr.getPopup()).hide();}catch(e){};try{if(_da[3]==_res.cnst['_com']){_mu._enTB(_id);_win.setTimeout('window.document.body.pHndl=_prstcfg()',3000);}}catch(e){}return;"/>
<div id="oCxt" style="display:none"><div style="position:absolute; top:0; left:0; width:400px; height:200px; border:1px solid black; background:#eeeeee; "><div id='_logo' style="background:white; border-bottom:5px solid #cccccc"></div><br><hr><center>&#169;2004 Sky MobileMedia. All rights reserved. </center></div></div><script language="JavaScript1.2"></script>
<table border="0" cellspacing="0" cellpadding="0" style="width: 924px; height: 124px"><tbody><tr><td id='bParent'></td><td>
<object class="banner" id="obj" style="visibility: hidden;left: 462px;" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000">
    <param name="_cx" value="11959"><param name="_cy" value="4180"><param name="flashvars" value=""><param name="movie" value="bin/images/_sky.swf"><param name="src" value="bin/images/_sky.swf"><param name="wmode" value="window">
    <param name="play" value="1"><param name="loop" value="-1"><param name="quality" value="high"><param name="salign" value=""><param name="menu" value="-1"><param name="base" value=""><param name="allowscriptaccess" value="always">
    <param name="scale" value="showall"><param name="devicefont" value="0"><param name="embedmovie" value="1"><param name="bgcolor" value="white"><param name="swremote" value=""><param name="moviedata" value="">
    <param name="seamlesstabbing" value="1"><param name="profile" value="0"><param name="profileaddress" value=""><param name="profileport" value="0">
    <embed src="bin/images/_sky.swf" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application\x-shockwave-flash" width="80" height="120"/></object></td></tr></tbody></table><br><div id='mdiv' style="position:absolute;top:125">
<table border="0" cellpadding="0" id="iFile" class="Menu" style="left:0;top:20px;display:none;" cellspacing="4"><tbody>
    <tr><td id="_new" name="_new" onclick="var _d=window.document,oe=_d.createEventObject(),xoe=_d.createEventObject(),bu='onbeforeupdate',_nm=false;_mu.Hide();try{_nm=event.name;}catch(e){_nm=false;}_pMgr.rqstNew(bu,new Array('slt'));if(!_nm){xoe.clear=oe.clear=!_nm;text.fireEvent(bu,oe);inF.fireEvent(bu,xoe);}return;" 
                                  onbeforeupdate="var _d=window.document,oe=_d.createEventObject();try{if(event.name==_open.id){try{oe._da=event._da;}catch(e){}event.win.close();oe.name=event.name;this.fireEvent('onclick',oe);}}catch(e){Trace_Print(_res.err15);}return;"> New </td></tr>
          <tr><td id="_open" onclick="_mu.Hide();CmdDialog(this.id,'purple',(_res._paths['__rt']+getPath(window.location.pathname,0,1)+_res._paths['__lib']+_res._files['_lib']));"> Open </td></tr>
    <tr><td id="_export" onclick="_mu.Hide();try{_pMgr.exportFile('undefined',text.innerText,new Array(WSHost,'',JI,this.id,_pMgr,_res,self.parent.window,f_obj,0,getPath,shell,'',SkyMobile));this.sc=this.style.color;this.disabled=true;_prstexprt('undefined');window.execScript(JI.getSource('chkwin'));}catch(e){Trace_Print(_res.err15);};return;"> Export </td></tr>
    <tr><td onclick="_mu.Hide();try{_pMgr.print(this);}catch(e){Trace_Print(_res.err15);}"> Print...</td></tr><tr><td onclick="_mu.Hide();window.document.body.onunload.call(window.document.createEventObject());"> Quit </td></tr></tbody></table>
<table border="0" cellpadding="0" id="iTests" class="Menu" style="top:20px;font-size:7pt;left:30px;display:none;" cellspacing="5"><tbody><tr><td id="_mslct"></td></tr><tr><td id="_wslct"></td></tr></tbody></table>
<table border="0" cellpadding="0" id="s1" cellspacing=5 class="Menu" style="top:35;left:86;display:none;"><tbody><tr id='ext1'></tr><tr></tr></tbody></table>
<table border="0" cellpadding="0" cellspacing=5 id="s2" class="Menu" style="top:60px;left:86px;display:none;"><tbody><tr id='ext2'></tr><tr></tr></tbody></table>
<table id="iAct" class="Menu" border="0" cellpadding="0" cellspacing="3" style="top:20px;left:125px;display:none;"><tbody><tr><td id="_rslct"></td></tr><tr><td><hr style="position:absolute;"></td></tr><tr><td id="p0"> Pause...</td></tr><tr><td id="s0"> Stop...</td></tr></tbody></table>
<table border="0" cellpadding="0" id="a1" class="Menu" style="top:20px;font-size:7pt;left:175px;display:none;" cellspacing="5"><tbody><tr><td id="__mslct"></td></tr><tr><td id="__wslct"></td></tr></tbody></table>
<table border="0" cellpadding="0" id="b1" cellspacing=5 class="Menu" style="top:20;left:235;display:none;"><tbody><tr id='ext3'></tr><tr></tr></tbody></table>
<table border="0" cellpadding="0" id="e1" cellspacing=5 class="Menu" style="top:55;left:235;display:none;"><tbody><tr id='ext4'></tr><tr></tr></tbody></table>
<table border="0" cellpadding="0" id="iHelp" class="Menu" style="left:171;display:none;top:20px;" cellspacing="4"><tbody><tr>
    <td id="v0" onclick="try{_mu.Hide();Trace_Print('No help available yet;under construction.');window.alert('No help available yet;under construction.');}catch(e){Trace_Print(_res.err15);}return;">Help</td></tr>
    <tr><td id="v1" onclick="try{_mu.Hide();_pMgr.nw_hndl(250,270,150,350,true,(new Array(WSHost,ie,JI,'about',_pMgr,_res,'',f_obj,(new String(new String(getPath(window.location.pathname,false,false)+_res._paths['_lib']+_res._files['_lib']))),getPath,'','_onload()',SkyMobile)));}catch(e){Trace_Print(_res.err15);}return;"> About </td></tr>
    <tr><td id='xsig' style='display:hidden;' onbeforeupdate="if (event.sig)eval(event.sig);return;"></td></tr></tbody></table>
<table border="0" cellspacing="0" cellpadding="4" id='Table'  style="top:10;height:20px;left:0px;width:260px;"><tbody><tr><td id='_iF' class="mview" style="left:5;position:absolute;" onclick="_mu.Menu(this,iFile);" onmouseover="_mu.Over(this,iFile);"> File </td>
    <td id='_iT' class="mview" style="left:35;position:absolute;" onclick="_mu.Menu(this,iTests);" onmouseover="_mu.Over(this,iTests);"> Tests </td><td id='ext' class="mview" style="left:75;position:absolute;" onclick="_mu.Menu(this,iExt);" onmouseover="_mu.Over(this,iExt);if (!_pMgr.sliderInit){_pMgr.sliderInit=true;_pMgr=InitSlider(1);}InitSlider(0);return;"> Settings </td>
    <td id='_iA' class="mview" style="left:130;position:absolute;" onclick="_mu.Menu(this,iAct);" onmouseover="_mu.Over(this,iAct);"> Action </td><td id='_iH' class="mview" style="left:175;position:absolute;" onclick="_mu.Menu(this,iHelp);" onmouseover="_mu.Over(this,iHelp);"> ? </td>
    <td onclick="_mu.Hide();return;" width="100%"></td></tr></tbody>
</table>
<table border="0" cellspacing="0" cellpadding="0" id="iExt" style="left:45;display:none;top:30;"><tr>
<td style="position:absolute;top:120;left:45;"><span id='rmsel1' class='rt' style="top:100;" onclick="this.style.visibility='visible';return;">zoom:<div id='__slider' style="position:absolute;z-index:30;top:20;left:0;"><span id='slidcnt' style='width:5px;height:5px;left:9;'></span>
    <div id="lArrow" class="arrow" style="left:0;"></div><div id="rArrow" class="arrow" style="left:50;"></div><div id="sctnt" style="" onmouseleave="_pMgr.move=0;"><div id="slider" style="position:absolute;left:15;top:0;width:10;height:10;cursor:hand;z-index:20;"></div><div id="ruler" style="position:absolute;left:20;top:9;width:125;height:1;z-index:10;">
    <hr id="blackRuler" style="color: #000000;position:absolute; left:0; top:0; width:130; height:1;"><hr id="whiteRuler" style="color: #FFFFFF;position:absolute; left:0; top:1; width:130; height:1;"></div></div></div><span id='hs0' class="hide" style="top:5;left:190;" onclick="try{_pMgr.sliderInit=false;}catch(e){}return _shd(__slider,rmsel1);">|HIDE|</span></span></td></tr>
    <tr><td style="position:absolute;top:30;left:35;"><span id='rmsel0' class='rt' style="top:20;" onclick="this.style.visibility='visible';return;">comport:<div id='port' style="top:20px;"></div><span id='hs1' class="hide" style="top:15;left:112;" onbeforerupdate="return _shd(port,rmsel0);" onclick="return _shd(port,rmsel0);">|HIDE|</span></span></td><td style="position:absolute;top:50;left:40;">
    <span id='rmselS' class='rt' style="left:0;top:70;" onclick="">Trace:<span id='hs2' class="switch" style="top:30;" onbeforeupdate="var _e=event.srcElement;this.c=!this.c;if(_e.id=='tsely'){if(!this.c)event.issue(this.id,'cyan','[Enable]');else event.issue(this.id,'red','[Disable]');}return false;">[Enable]</span></td></tr>
</table>
<div id='plcmnt'>
<table border="0" cellspacing="0" cellpadding="0" id="ttbl" style="filter:progid:DXImageTransform.Microsoft.Light()">
     <tbody><tr>
     <!--<td><div class="notify" style="filter:progid:DXImageTransform.Microsoft.Shadow(color=#8D88FF, Direction=335, Strength=8);width:100%;height:20%;"><span class="bodytext" style="filter:progid:DXImageTransform.Microsoft.Shadow(color=#FFFFFF, Direction=335, Strength=5);height:20%;width:100%;"><nobr><div class="filter" style="height:50;"><span class="bodytext" id='sNd' style="color:white;font-size:30pt;width:100%;"><INPUT onclick="SetTrace()" type='radio' name='ind0'><INPUT onclick="SetTrace()" type='radio' name='ind1'></span></div></nobr><span class='bodytext' style="color:cyan;">TezXt</span><span class='mask' style="filter:progid:DXImageTransform.Microsoft.dropshadow(OffX=-5, OffY=5, Color='white', Positive='false');background:expression(this.offsetParent.style.background);color:cyan;">TezXt</span><span class='field' style="filter:progid:DXImageTransform.Microsoft.MaskFilter(Color='#000000');width:30%;height:20%;color:cyan;">TezXt</span></span></div></td>-->
     <!--<tbody><tr><td><div class="mask" style="filter:progid:DXImageTransform.Microsoft.ICMFilter(colorSpace='bin/images/rsv.icm' intent='0');position:absolute;top:expression(this.offsetParent.style.top);width:100%;height:20%;"><span class="button" id='sNd' style="color:white;font-size:30pt;width:100%;"><nobr><hr><div class="hide" style="filter:"><span class="notify" style="filter:progid:DXImageTransform.Microsoft.Shadow(color=#FFFFFF, Direction=335, Strength=5);height:20%;"></span></div></nobr></span></div></td>-->
     <td><div id="sd" style="color:white;width:15%;position:absolute;visibility:hidden;left:405;top:350;font-size: 8pt">Selection:
     <span class="hide" id='rmselx' style="top:20;left:0;">|HIDE|</span><span class="hide" id='rmsely' style="top:60;left:0;">|HIDE|</span></div></td></tr>
     <tr id='volitle' class='bodytext'><td id="slt" style="font-size:10pt;visibility:visible;" colspan=2><span id='inF' onbeforeupdate="if(event.clear)this.nextSibling.nextSibling.nextSibling.innerText='';return false;">Input:</span>
     <span id='tselx' class="x" style="left:expression(parseInt(d1.style.width)-parseInt(slt.style.fontSize)-24);">&nbsp;x&nbsp;</span><span id="_fnb" style="display:hidden;color:cyan;font-family:Courier;"></span><div id='d1' style="left:0;width: 461px; height: 400px;">
     <textarea id='text' cols=15 rows=20 style="overflow-y:auto;overflow-x:auto;left:0;width: 461px;height: 400px;" contenteditable='true' onbeforeupdate="if(event.clear)this.innerText='';return;"></textarea>
     </div></td><td id="out" style="font-size:10pt" colspan=2><span>Output:</span><span id='tsely' class="x" style="top:38;left:expression((parseInt(d1.offsetWidth)*2)-(parseInt(slt.style.fontSize)*2)-16);">&nbsp;x&nbsp;</span><div id='d2' style="width:461px;height:400px;">
     <table id="stdout" border="0" cellspacing="0" cellpadding="0" style="overflow-x:auto;left:0;width:461px;height:400px;" onbeforeupdate="if(event.clear)this.innerText='';return;"><tbody><tr></tr></tbody></table></div></td></tr></tbody>
</table>
</div>
<table border="0" cellspacing="0" cellpadding="0" id="menu" ><tbody><tr><td><div id='bsdiv' style='position:absolute;top:0;left:39;'><div id='_log' class='notify' style="font-size:7pt;position:absolute;left:422;top:0;width:461px;"><div><span class="button" style="left:0;">Status:</span><span id='_s' style="position:absolute;left:45;font-size:12px;font-weight:bolder;font-family:Time;top:0;color:white;width:80;height:19;"></span></div>
   <div id='pnd'><span id='_m' class="button" style="left:100;">mms:  </span><span id='_w' class="button"  style="left:162.0;">wap:  </span><span id='_t'  class="button"  style="left:224.0;">time:  </span><span id='_h'  class="button"  style="left:286.85;">done:  </span><span id="_l" class="button" style="left:348;">::speed::</span><span id='_e' style="display:none"></span></div></div></div></td></tr></tbody>
</table>
<script language='jscript'>
_mu=new MenuObj();
var _setParms=function(_da){
    try{_da=window.dialogArguments;}catch(e){_da=false;}if(_da){if(!WSHost)WSHost=_da[0];if(!ie)ie=_da[1];
    if(!JI)JI=_da[2];if(!_pMgr)_pMgr=_da[4];if(!_res)_res=_da[5];if(!f_obj)f_obj=_da[7];if(!shell)shell=_da[10];
    if(!getPath)getPath=_da[9];if(!SkyMobile)SkyMobile=_da[12];}
}
window.document.all.RUN.onbeforeupdate=function(){
    var _d=window.document,_id=_d.getElementById,_d=new Array(38,270,30,330);;
    var _msg=(_res._ls+"lightgreen;"+_res._lm+"PROCESSING..."+_res._le);
     if(event.cmd==_res.cnst['_run']){
          _pMgr.prompt(window,_msg,_pMgr," RUN:","fbdy","cDiv","white","RUN","visible",1000,_d);
          window.document.all.RUN.SIG=event.SIG;window.document.all.RUN.TYPE=event.type;
          window.setTimeout("_pMgr.Mhndl=_runner(window.location.pathname,window.document.all.RUN)",1000);
    }
    event.returnValue=false;
    event.cancelBubble=true;
     return false;
}
</script>
<script language='jscript'>
 var _run=function(shell){
    var e=new Error();
    try{shell.Run("loader\\_run.bat",false);}
    catch(e){}
 }   
 var _change=function(){
    var ldoc=self.parent.window;
    if (lock==0){lock=1;_run(shell);}
    if (t){ldoc.document.all._span.innerHTML=_res._mLoad;t=false;}
    else{t=true;ldoc.document.all._span.innerHTML="";}
    if (gtimer == 60){
        ldoc.clearInterval(otimer);ldoc.document.all._span.innerHTML=_res._fLoad;
        ldoc.document.getElementById('ffsl').disabled='false';ldoc.document.getElementById('ffsl').style.background='darkgreen';
        ldoc.document.all._span.removeNode(false);ldoc.document.getElementById('xdiv').removeNode(false);lock=0;
    }else gtimer++; 
    }
 var _ffsl=function(){
    var s=new String(),i,nspan,ldoc=self.parent.window.document,ffsl=document.getElementById('ffsl');
    nspan=ldoc.createElement(_res._sfsl);
    ldoc.getElementById('xdiv').insertBefore(nspan);otimer=self.parent.window.setInterval(_change,500);
    event.returnValue=false;event.cancelBubble=true;
 }</script>
<table border="0" cellspacing="0" cellpadding="0" id="FFS" style="left:0;top:0;">
 <tbody><tr><td><div style="position:absolute;width:10px;top:0;align:center;left:0;">
 <div id="mtdiv" style="display:none;position:absolute;top:1;left:200;z-index:30;height:10px;width:60px;">
 </div></td></tr></tbody>
 <table>
<script language='jscript'>
     var _rmclk=new Function("_p","_o","_n","_ro","if(_ro.parentNode.children(_n).style.visibility=='hidden'){sd.style.visibility='hidden';if(_ro.parentNode.children(_n-1).style.visibility=='hidden'){try{_p.index=0;_p.srcFile.Close();_p.destFile.Close();_p.settings.Close();}catch(e){}}}_o.style.visibility='hidden';_ro.style.visibility='hidden';event.returnValue=false;event.cancelBubble=true;return false;");
     var _shd=new Function("_t","_o","_t.style.visibility=_o.style.visibility='hidden';event.returnValue=false;event.cancelBubble=true;return false;"), _x1stb=new String("<td onclick=\"try{_mu.SubSideOut("), _xrs0=new String("<td id=\""), _xstb=new String("<td onclick=\"_mu.Hide();try{window.setTimeout('_mkList(");
     var _xste=new String(")',1);}catch(e){Trace_Print(_res.err15);Trace_Print(e.message);}return;\" onmouseenter=\"_mu.SubOver(this);\" onmouseleave=\"_mu.SubOut(this);\">"), _xrec0=new String("\" onclick=\"_=_pMgr._c1(self),_d=_[0],oe=_[1];_mu.Hide();try{oe.cmd=_res.cnst[this.");
     var _xrec1=new String("];oe._cbw=window;mdiv.fireEvent('onbeforeupdate',oe);}catch(e){Trace_Print(_res.err15);}return;\" onmouseenter=\"_mu.SubOver(this);\" onmouseleave=\"_mu.SubOut(this);\">"),_rent=new Function("_mu.SubOver(this);_mu.SubOutAll();return false;");
     var _sover=new Function("_mu.SubOver(this);return;"),_sout=new Function("_mu.SubOut(this);return;"),_tout=new Function("_mu.Out(this);return;"), _sover=new Function("_mu.SubOver(this);return;"),_sout=new Function("_mu.SubOut(this);return;"),_sme0=new String("_mu.SubOver(this);_mu.SubSideOver("), _sme1=new String(");_mu.SubSideOut(");
     var _sme2=new String(");return;\""),_oDT=new Function("_pMgr.drag=1;return;"),_oDF=new Function("if(_pMgr.state!='d'){_pMgr.drag=0;}return;"),_hr=new String("<hr>");
     var _oCA=new Function("_pMgr.onArrow(this.id);return;"),_imgHndr=function(){
         this._w;this._d;this._id;this._a0;this._gp;this._r;this._a1;this._a2;this._a3;this._a4;
         this._setImg=new Function("_eE","_pP","_iI","_hH","_aA","_wW","_sS","try{this._id(_eE).insertAdjacentElement(_pP,this._d.createElement(this._a0+this._gp(this._w.location.pathname,false,false)+this._r._paths[\"_img\"]+this._r._files[\"_img\"][_iI]+((_sS)?new String(\" \"+_sS+\" \"):\" \")+this._a1+_aA+this._a2+_hH+this._a3+_wW+this._a4));}catch(e){}return;");
     }
     var _iH=new _imgHndr(),_w=_iH._w=window,_d=_iH._d=window.document,_id=_iH._id=_d.getElementById;
     var _w=window,_d=_w.document,_id=_d.getElementById,_sBK=new Function("this.style.background='#AADDAA';return;");
     var _togState=new Function("_node","try{window.document.getElementById(_node).onmousedown.call(window.document.createEventObject());window.document.getElementById(_node).onmouseup.call(window.document.createEventObject());}catch(e){}return;");
     var _sSrc=new Function("_t","_c","_s","var _id=window.document.getElementById;_id(_t).style.color=_c;_id(_t).innerText=_s;return;");
     var _sFG=new Function("this.style.background=this.parentElement.style.background;return;");
     var _obuS=new Function("var oe=_d.createEventObject();oe.visible='visible';this.children(1).visibility='visible';this.children(1).fireEvent('onbeforeupdate',oe);return;");
     var _obuE=new Function("this.style.visibility=this.previousSibling.parentNode.style.visibility='visible';event.returnValue=false;event.cancelBubble=true;return false;");
     var _ocEvt=new Function("xevnt","var _eid,__bu='onbeforeupdate',_a=_pMgr._c1(self),_d=_a[0],oe=_a[1],_e=(xevnt)?xevnt:(_eid=event.srcElement.id,event.srcElement);if(_eid=='tsely'){hs2.fireEvent('onclick',oe);}_e.parentElement.style.visibility='hidden';_e.style.visibility='hidden';return ((event)?(event.returnValue=false,event.cancelBubble=true,false):true);");
     var swH0=new String("var _a,_d,oe,__bu='onbeforeupdate',_a=_pMgr._c1(self),_d=_a[0],oe=_a[1];(event.set)?(this.c=event.set,true):(this.c=!this.c,false);oe.sig='_mu.Hide()';if(!this.c){_ocEvt(tsely);_sSrc(this.id,'cyan','[Enable]');");
     var swH1=new String("}else {_pMgr.rqstNew(__bu,new Array('out'));_sSrc(this.id,'red','[Disable]');}_d.all.xsig.fireEvent(__bu,oe);event.returnValue=false;event.cancelBubble=true;return false;return;");
     var RUNs=new String("var _w=window,_d=_w.document,_id=_d.getElementById,oe=_d.createEventObject(),type=undefined;_mu.Hide();oe.SIG='"),RUNe=new String("';if(type!=undefined)oe.type=type;oe.cmd=_res.cnst['_run'];_id('RUN').fireEvent('onbeforeupdate',oe);_togState('_runX');event.returnValue=false;event.cancelBubble=true;return false;");
     var PAUSE=new Function("_mu.Hide();if(!p0.tg)p0.tg=true;else p0.tg=false;if(p0.tg){try{f_obj.CreateTextFile(getPath(window.location.pathname,false,false,1)+_res._paths[\"_src\"]+_res.pause);}catch(e){Trace_Print(\"Pause Failed...\",\" Pause(): \");}}else{try{f_obj.DeleteFile(getPath(window.location.pathname,false,false,1)+_res._paths[\"_src\"]+_res.pause);}catch(e){}};_togState('_pauseX');event.returnValue=false;event.cancelBubble=true;return false;");
     var STOP=new Function("_mu.Hide();f_obj.CreateTextFile(getPath(window.location.pathname,false,false,1)+_res._paths[\"_src\"]+_res.stop);_togState('_stopX');event.returnValue=false;event.cancelBubble=true;return false;");
     var _lckExp=new Function("var _id=window.document.getElementById;if(!_pMgr.menuLock){_pMgr.xportLock=_id('_export').disabled=false;_id('_export').style.color=_id('_export').sc;try{_id('iFile').refresh();}catch(e){}}return;");
     var _getCount=function(_num,_eid,_oL,_win,_gp,_c){
          var i,_b="before",_a="after",_e="End",_g="Begin",_be=_b+_e,_bb=_b+_g,_ab=_a+_g,_ae=_a+_e,_elmt,_doc=_win.document,_id=_doc.getElementById,_co=_doc.createElement;
          var _ld=_doc.createDocumentFragment(),_ltn=_ld.getElementsByTagName,_lid=_ld.getElementById,_lco=_ld.createElement;
          var _tscl0=new String("new Function(\"return _rmclk(_pMgr,"),_tscl1=new String(");\");");_id('rmselx').onclick=eval(_tscl0+"l1,3,rmselx"+_tscl1);_id('rmsely').onclick=eval(_tscl0+"l2,1,rmsely"+_tscl1);
          var _gDgt=new Function("_n","_e","_d","_w","_gp","var _img={\"_h\":\"<img class=\\\"digit\\\" \",\"_x\":\"<img class=\\\"digitx\\\"\",\"_l\":\"<img class=\\\"led\\\" style=\\\"clip:rect(auto auto auto 15);position:absolute;top:0;left:378;\\\" \",\"_y\":\"id=\\\"__\",\"_s\":\"\\\" src=\\\"\",\"_i\":\"\\\" >\"};return (_d.createElement(new String(((_e==\"_h\")?_img[\"_x\"]:((_e==\"_l\")?_img[\"_l\"]:_img[\"_h\"]))+_img[\"_y\"]+_e+_n+_img[\"_s\"]+(new String(_gp(_w.location.pathname,false,false))).concat(_res._paths[\"_img\"]+\"_\"+((_e==\"_h\")?(_n+\"g\"):((_e==\"_l\")?(_n+\"L\"):_n))+\".gif\")+_img[\"_i\"])));");
                _ld.insertBefore(_lco("<html>"));_ltn('html').item(0).insertAdjacentElement(_be,_lco("<div>"));_ltn('div').item(0).insertAdjacentElement(_be,_lco("<span>"));_ltn('div').item(0).firstChild.id="_"+_eid;
                _ltn('div').item(0).firstChild.style.position="absolute";_ltn('div').item(0).firstChild.style.left=19+parseInt(_oL);if(_c)num=(new String('$')).concat(_num);for (i=_num.length-1;i >=0;i--)_ltn('div').item(0).firstChild.insertAdjacentElement(_ae,_gDgt(_num.charAt(i),_eid,_ld,_win,_gp));
          return ((_ltn('div')).item(0).cloneNode(true));
     };
     var _setHndlrs=new Function("_id","_f","_gp","var _s=new (new Function(\"this._gp;this.id;this.f;this.reg=new Function('_n','this.id(_n)._gp=this._gp;this.id(_n).onbeforeupdate=this.f;return;');return;\"))();_s.id=_id;_s._gp=_gp;_s.f=_f;for(var i=0;i<_id('pnd').children.length;i++)_s.reg(_id('pnd').children(i).id);return;");
     var _obu=new Function("if(event.notify==this.id){if(!(isNaN(event.num)))this.num=event.num;else{if(!this.reset){this.reset=!this.reset;this.num=0;}else {if((event.opt=='+')&&(this.num<=999))this.num++;else {if((event.opt=='-')&&(this.num>=0))this.num--;}}}if((new String(_id(this.id).nextSibling.tagName)).toLowerCase()!='span'){try{_id(this.id).nextSibling.replaceNode((_getCount(new String(this.num),this.id,event.objLeft,window,this._gp,event.colon)));}catch(e){}}else {try{_id(this.id).insertAdjacentElement(\"afterEnd\",_getCount(new String(this.num),this.id,event.objLeft,window,this._gp));}catch(e){}}}return;");
</script><script language='jscript'>
     _mu.initStyleSheet(window,1);
     if(_da[3]!=_res.cnst['_launch']){
     _gnn=_id('Table').firstChild.firstChild.children;
     for(var i=0;i<_gnn.length;i++)_gnn(i).onmouseout=_tout;
     _ynn=_id('iFile').firstChild.children;
     for(var i=0;i<_ynn.length;i++){_ynn(i).onmouseover=_sover;_ynn(i).onmouseout=_sout;
     };
     _Tfilt=_id('Table').filters[1];_Tfilt.GradientType=1;i=_Tfilt.StartColorStr;_Tfilt.StartColorStr=_Tfilt.EndColorStr;_Tfilt.EndColorStr=i;
     _id('slider').onmouseover=_id('ruler').onmouseover=_id('lArrow').onmouseover=_id('rArrow').onmouseover=_oDT;
     _id('slider').onmouseout=_id('ruler').onmouseout=_id('lArrow').onmouseout=_id('rArrow').onmouseout=_oDF;
     _id('lArrow').onclick=_id('rArrow').onclick=_oCA;

     _id('_mslct').innerText="MMS";_id('_wslct').innerText="WAP";_id('_rslct').innerText="Run";
     _id('__mslct').innerText="MMS...";_id('__wslct').innerText="WAP...";
     
     _id('ext1').insertAdjacentElement('afterBegin',_d.createElement(_xstb+"1"+_xste));
     _id('ext2').insertAdjacentElement('afterBegin',_d.createElement(_xstb+"0"+_xste));
     _id('ext3').insertAdjacentElement('afterBegin',_d.createElement(_xrs0+"_msg"+_xrec0+"id"+_xrec1));
     _id('ext4').insertAdjacentElement('afterBegin',_d.createElement(_xrs0+"_mpro"+_xrec0+"id"+_xrec1));
     
     _id('ext1').firstChild.innerText="Existing..."
     _id('ext2').firstChild.innerText="Existing...";
     _id('ext3').firstChild.innerText="Messages...";
     _id('ext4').firstChild.innerText="Profiles...";
     
    _id('ext1').nextSibling.insertAdjacentElement("afterBegin",_d.createElement(_x1stb+"s1"+_xste.slice(4,(_xste.length))));
     _id('ext2').nextSibling.insertAdjacentElement("afterBegin",_d.createElement(_x1stb+"s2"+_xste.slice(4,(_xste.length))));
     _id('ext3').nextSibling.insertAdjacentElement("afterBegin",_d.createElement(_xrs0+"_wpro"+_xrec0+"id"+_xrec1));
     _id('ext4').nextSibling.insertAdjacentElement("afterBegin",_d.createElement(_xrs0+"_bkm"+_xrec0+"id"+_xrec1));
     
     _id('ext1').nextSibling.firstChild.innerText="Create..."
     _id('ext2').nextSibling.firstChild.innerText="Create...";
     _id('ext3').nextSibling.firstChild.innerText="Profiles...";
     _id('ext4').nextSibling.firstChild.innerText="Bookmarks...";
     
     _id('ext1').nextSibling.firstChild.onmouseenter=_id('ext2').nextSibling.firstChild.onmouseenter=_id('ext3').nextSibling.firstChild.onmouseenter=_id('ext4').nextSibling.firstChild.onmouseenter=_sover;
     _id('ext1').nextSibling.firstChild.onmouseleave=_id('ext2').nextSibling.firstChild.onmouseleave=_id('ext3').nextSibling.firstChild.onmouseleave=_id('ext4').nextSibling.firstChild.onmouseleave=_sout;
     _id('ext1').nextSibling.onmouseenter=_id('ext2').nextSibling.onmouseenter=_id('ext3').nextSibling.onmouseenter=_id('ext4').nextSibling.onmouseenter=_sover;
     _id('ext1').nextSibling.onmouseleave=_id('ext2').nextSibling.onmouseleave=_id('ext3').nextSibling.onmouseleave=_id('ext4').nextSibling.onmouseleave=_sout;
     
     _id('v0').onmouseenter=_id('v1').onmouseenter=_sover;
     _id('v0').onmouseleave=_id('v1').onmouseleave=_sout;
     _id('s0').onmouseenter=_id('p0').onmouseenter=_rent;
     _id('s0').onmouseleave=_id('p0').onmouseleave=_sout;
     
     _id('mtdiv').outerHTML=_res._cnt1+_res._cnt2+_res._cnt3+_res._cnt4;
     _id('ext3').firstChild.onclick=new Function(RUNs+"_msg"+RUNe);
     _id('ext4').firstChild.onclick=new Function(RUNs+"_pro';type='_mpro"+RUNe);
     _id('ext3').nextSibling.firstChild.onclick=new Function(RUNs+"_bkm"+RUNe);
     _id('ext4').nextSibling.firstChild.onclick=new Function(RUNs+"_pro';type='_wpro"+RUNe);
     _id('p0').onclick=_id('_pauseX').onclick=PAUSE;
     _id('s0').onclick=_id('_stopX').onclick=STOP;
     
     eval("_mselE=new Function(\""+_sme0+"s1,s2"+_sme1+"s2"+_sme2+");");
     eval("_wselE=new Function(\""+_sme0+"s2,s1"+_sme1+"s1"+_sme2+");");
     eval("_rselE=new Function(\""+_sme0+"a1,a1"+_sme2+");");
     
     _id('_mslct').onmouseenter=_mselE;_id('_wslct').onmouseenter=_wselE;_id('_rslct').onmouseenter=_rselE;
     _id('_mslct').onmouseleave=_id('_wslct').onmouseleave=_id('_rslct').onmouseleave=_sout;
     
     eval("_mmscb=new Function(\""+_sme0+"b1,e1"+_sme1+"e1"+_sme2+");");
     eval("_wapcb=new Function(\""+_sme0+"e1,b1"+_sme1+"b1"+_sme2+");");

     _mu.regSubObj(new Array(_id('s1'),_id('s2'),_id('a1'),_id('b1'),_id('e1')));
     _id('__mslct').onmouseenter=_mmscb;_id('__mslct').onmouseleave=_sout;
     _id('__wslct').onmouseenter=_wapcb;_id('__wslct').onmouseleave=_sout;
     
     _id('slt').onbeforeupdate=_id('out').onbeforeupdate=_obuS;_id('hs2').onclick=new Function(swH0+swH1);
     _id('slt').children(1).onbeforeupdate=_id('out').children(1).onbeforeupdate=_obuE;_id('tselx').onclick=_id('tsely').onclick=_ocEvt;
     _id('tselx').onmouseenter=_id('tsely').onmouseenter=_id('hs0').onmouseenter=_id('hs1').onmouseenter=_id('hs2').onmouseenter=_id('rmselx').onmouseenter=_id('rmsely').onmouseenter=_sBK;
     _id('tselx').onmouseleave=_id('tsely').onmouseleave=_id('rmselx').onmouseleave=_id('rmsely').onmouseleave=_id('hs0').onmouseleave=_id('hs1').onmouseleave=_id('hs2').onmouseleave=_sFG;
     _id('text').onkeypress=_id('_open').onbeforeupdate=_id('_new').onmouseup=_lckExp;
     _id('fbdy')._lckExp=_lckExp;
    }
</script><script language='jscript'>
var _doc=window.document,_id=_doc.getElementById,xoe=_doc.createEventObject(),_da;
try{_setParms(_da);}catch(e){}
try{if(window.dialogArguments)_da=window.dialogArguments;}
catch(e){Trace_Print("Fatal Error: Components Missing. Aborting...");window.close();}
</script><script language='jscript'>
     _iH._a0=new String("<img src=\"file://");_iH._a1=new String("\" height=\"");
     _iH._a2=new String("\" align=\"");_iH._a3=new String("\" width=\""); 
     _iH._a4=new String("\">");_iH._gp=getPath;_iH._r=_res;
     _id('bParent').insertAdjacentElement("afterBegin",_d.createElement(_res._bn0+getPath(window.location.pathname,false,false)+_res._paths["_img"]+_res._files["_img"][8]+_res._bn1));
     _iH._setImg("_mslct","beforeEnd",4,"middle",10,20);
     _iH._setImg("_wslct","beforeEnd",4,"middle",10,20);
     _iH._setImg("_rslct","beforeEnd",4,"middle",10,20);
     _iH._setImg("__wslct","beforeEnd",4,"middle",10,20);
     _iH._setImg("__mslct","beforeEnd",4,"middle",10,20);
     _iH._setImg("lArrow","beforeEnd",5,"absbottom",11,11,"\" style=\"top:4;position:absolute;\"");
     _iH._setImg("rArrow","beforeEnd",6,"absbottom",11,11,"\" style=\"top:4;position:absolute;\"");
     _iH._setImg("_logo","afterEnd",0,"normal",150,400);
     _iH._setImg("slider","beforeEnd",7,"middle",20,10);
     _setHndlrs(window.document.getElementById,_obu,getPath);
if (window.dialogArguments){
    _args=window.dialogArguments,_w=window,_d=_w.document,_id=_d.getElementById;
     SkyMobile=new SkyMobileObject();_pMgr.getDset();
    if (_args[3] == _res.cnst["_com"]){
         WSHost=_args[0];f_obj=_args[7];
         shell=_args[10];getPath=_args[9];ie=_args[1];
         JI=_setdsply(WSHost,getPath(WSHost.ScriptFullName,false,false));
         if(JI){
            JI.contextManager=_pMgr;JI.contextResource=_res;
            JI.sleepInterval=50;JI.cfgout("IMODE",window);
            _pMgr.goPopup(200,402,230,230,window.document.getElementById("oCxt").innerHTML,""," Main: ");
        }
    }try{self.parent.window.document.body.replaceAdjacentText(_res.cnst["AB"],"");}catch(e){}
}//*///</script><script language="JScript">
if (!window.dialogArguments){
try{
      if(WScript.ScriptFullName==null)wsh=false;else wsh=true;}catch(e){wsh=false;}
      if (wsh){ //Establish and Persist WScript And IE via IDispatch.
            shell=new ActiveXObject("WScript.Shell");f_obj=new ActiveXObject("Scripting.FileSystemObject")
            try{_old=parseInt(WScript.Arguments(0));_fix=parseInt(WScript.Arguments(1));
                  if(_fix==FAIL){shell.PopUp(_err0,0,_ud,16);_pd(_old);WScript.Quit(1);}else _fix=OK;
            }
            catch(e){
            _old=_chkIE('r');
            if(_old){
                   if((shell.PopUp(_msg0+_msg1,0,_att,20))==OK){
                       shell.PopUp(_msg2,5,_ud,64);
                       shell.Run(WScript.ScriptName+" "+_old+" "+(_chkIE('w',0)),0);
                       WScript.Quit(0);
                   }else WScript.Quit(1);
               }else _fix=false;
           }
           ie=WScript.CreateObject("InternetExplorer.Application","_xehnlr");
           JI=_setdsply(WScript,shell.CurrentDirectory);JI.IE=ie;JI.cfgout("XMODE");
           if(JI){
                if(_fix==OK){_pd(_old);shell.PopUp(_ss,5,_ud,64);}
                if(ie){while(ie.ReadyState!=4){WScript.Sleep(1000);}}
                try{while(ie.ReadyState){WScript.Sleep(1000);}}catch(e){}
            }
           try{_ie.Stop();ie.Quit();}catch(e){}
           WScript.Quit(0);
  }    }
//<!--
/*-->
</script><script language='jscript'>
try{
window.document.all.fbdy.onunload=function(){
        var e=new Error(),_pMgr=new rsMgr(),_r=new (_pMgr.res)(),_w=window,_d=_w.document,_da=_w.dialogArguments,_id=_w.document.getElementById;
        var fDel={"1":_r.stop,"2":_r._files['_tmp'],"3":_r.pause,"4":_r._files['_rcd'],"5":_r.undef,"6":_r._files['_run']}

        try{_da[6].clearTimeout(_pMgr.MCI);}catch(e){}
        try{_da[6].clearTimeout(_pMgr.WCI);}catch(e){}
        try{_d.body.pHndl.close();}catch(e){}
        try{if(!((_da[3]==_r.cnst['_prst'])||(_da[3]==_r.cnst['_launch']))){  
            _pMgr.NtfyKill(_da[6]);
            try{_pMgr.Mhndl.close();}catch(e){}
            try{_pMgr.Whndl.close();}catch(e){}
            if(!f_obj)f_obj=_da[7];if(!getPath)getPath=_da[9];
             for (i in fDel){try{f_obj.DeleteFile((getPath(window.location.pathname,false,false)+_r._paths['_src']+fDel[i]),true);}catch(e){}
             try{f_obj.DeleteFile((getPath(window.location.pathname,false,false)+fDel[i]),true);}catch(e){}
             try{f_obj.DeleteFile((getPath(_da[6].location.pathname,false,false)+fDel[i]),true);}catch(e){}}
             JI.quit(window);
        }}catch(e){}
}}catch(e){}
</script>
</body></html>
<!--*/
//Allow Script initiated window without size or position
//-->