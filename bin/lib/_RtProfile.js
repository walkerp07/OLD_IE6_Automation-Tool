/*
         ----------------------------------------------------------------------------------
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
  |                               Client Profile Data Objects V1.0.0            (_RtProfiles.js)|
  |                            Copyright © 2004. - SKY MobileMedia.                             |
  |                              Author: Matthew Hessing [4/21/05]                                |
  |                            Author(script): Phillip Walker [5/25/05]                             |
  |------------------------------------------------------------------------------------------|
 /                                                                                                                                 */

function country_listing()
{
    return (new array("china","france","hongkong","malaysia","mexico","russia","taiwan","thailand","uk","usa","unknown"));
}

//!               carriers.
//***************^**************************************************************
/* =========================================================================
**      wap
** ========================================================================= */
function china_index(identifer)
{
    if ((identifer)==("size"))return (new number(8));
    switch(identifer){
        case 1: profile=csl(); break;
        case 2: profile=smartone(); break;
        case 3: profile=sunday(); break;
        case 4: profile=orange(); break;
        case 5: profile=newworld(); break;
        case 6: profile=peoples(); break;
        case 7: profile=chinamob(); break;
        case 8: profile=unicom(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function csl()
{
    var csl=new Profile(
    "(csl)",                                    // profile name
    "(192.168.5)(81.71:8002)",           // mmsc
    "(19216859>51>)",                        // ip addr
    "(local)(host/)(wap)1010.(wml)",    // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    1,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    1,                                      // use tcp? 0 = wsp
    1,                                      // use http proxy?
    "(8080)",                                      // http proxy port
    "(14365>11012>)",                                      // http proxy address
     "(hkcsl)",                              // apn
      "",                                   // login id
      "",                                   // password
      "(172)",                             // dial number
      "",                                   // login id
      "",                                   // password
      "1",                                    // call type
      "0",                                    // call speed
      "(60)",                                   //profile type
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "3");                             //message class
return csl;
}
function smartone()
{
    var smartone=new Profile(
    "(smar)(tone)",                             // profile name
    "(mms).(smar)(tone).(com.hk)/(server)",    // mmsc
    "(10>9>9>9>)",                            // ip addr
    "(wap).(smar)(tone).(com.hk)",           // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(smar)(tone)",                           // apn
      "",                                   // login id
      "",                                   // password
      "(9010)(0011)",                           // dial number
      "",                                   // login id
      "",                                   // password
      1,                                    // call type
      0,                                    // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return smartone;
}

 function sunday()
{
    var sunday=new Profile(
    "(sunday)",                             // profile name
    "(mmsc).(mms).(sunday).(com:)(8002)",       // mmsc
    "(10>1312>1>)",                         // ip addr
    "(wap).(sunday).(com)",                 // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(sgprs)",                            // apn
      "",                                   // login id
      "",                                   // password
      "(1766888)",                              // dial number
      "",                                   // login id
      "",                                   // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return sunday;
}


  function orange()
{
    var orange=new Profile(
    "(orange)",                             // profile name
    "(10>30>15>51>)(:10021)(/mmsc)",        // mmsc
    "(10>30>3>151)",                            // ip addr
    "(3db.thr)(ee.com.hk)",                 // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(web-g.)(three)(.com)(.hk)",                 // apn
      "",                                   // login id
      "",                               // password
      "(1751000)",                              // dial number
      "",                                   // login id
      "",                                   // password
      1,                                    // call type
      0,                                    // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return orange;
}


function newworld()
{
    var newworld=new Profile(
    "(neww)(orld)",                             // profile name
    "(mmsc.nw)(mobility)(.com:)(8002)",     // mmsc
    "(1921681111>)",                        // ip addr
    "(wap.nwmobi)(lity.com)(/main.wml)",   // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(wap)",                              // apn
      "(wwm)",                                // login id
      "(wwm)",                                  // password
      "(178078)",                               // dial number
      "(wwm)",                                // login id
      "(wwm)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return newworld;
}


  function peoples()
{
    var peoples=new Profile(
    "(peoples)",                                // profile name
    "(mms.peop)(les.com.)(hk/mms)",     // mmsc
    "(17231>31>36>)",                           // ip addr
    "(color.pe)(oples.co)(m.hk/)",          // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(peopl)(es.net)",                        // apn
      "",                                   // login id
      "",                                   // password
      "(170170)",                               // dial number
      "",                                   // login id
      "",                                   // password
      1,                                    // call type
      0,                                    // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return peoples;
}

  function chinamob()
{
    var chinamob=new Profile(
    "(chin)(amob)",                         // profile name
    "(mmsc.)(monte)(rnet.com)",            // mmsc
    "(10>0>0>172)",                           // ip addr
    "(wap.m)(onter)(net.com)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(cmwap)",                              // apn
      "(wap)",                                // login id
      "(wap)",                                // password
      "(17266)",                              // dial number
      "(wap)",                                // login id
      "(wap)",                                // password
      1,                                    // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return chinamob;
}


function unicom()
{
    var unicom=new Profile(
   "(unicom)",                         // profile name
    "",                                      // mmsc
    "(21195>65>130)",                      // ip addr
    "(2110950656>)",                 // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "",                                    // apn
      "",                                    // login id
      "",                                    // password
      "(165)",                                // dial number
      "(wap)",                                // login id
      "(wap)",                                // password
      1,                                    // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return unicom;
}

function france_index(identifer)
{
    if ((identifer)==("size"))return (new number(1));
    switch(identifer){
        case 1: profile=francep1(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function francep1()
{
    var francep1=new Profile(
    "(fran)(cep1)",                             // profile name
    "(unknown)",                             // mmsc
    "(0>0>0>0>)",                              // ip addr
    "(unknown)",                              // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
     "(unknown)",                              // apn
      "(unknown)",                                // login id
      "(unknown)",                                // password
      "(0000)",                              // dial number
      "(unknown)",                                // login id
      "(unknown)",                                // password
      1,                                    // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return francep1;
}
function hongkong_index(identifer)
{
    if ((identifer)==("size"))return (new number(2));
    switch(identifer){
        case 1: profile=hongkongp1(); break;
        case 2: profile=hongkongp2(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function hongkongp1()
{
    var hongkongp1=new Profile(
    "(hongk)(ongp1)",                             // profile name
    "(unknown)",                            // mmsc
    "(0>0>0>0>)",                           // ip addr
    "(unknown)",                             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(unknown)",                              // apn
      "(unknown)",                                // login id
      "(unknown)",                                // password
      "(0000)",                              // dial number
      "(unknown)",                                // login id
      "(unknown)",                                // password
      1,                                 // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return hongkongp1;
}
function hongkongp2()
{
    var hongkongp2=new Profile(
    "(hongk)(ongp2)",                             // profile name
    "(unknown)",                            // mmsc
    "(0>0>0>0>)",                           // ip addr
    "(unknown)",                             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "",                                    // apn
      "",                                    // login id
      "",                                    // password
      "(0000)",                                // dial number
      "(unknown)",                                // login id
      "(unknown)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
 return hongkongp2;
}
function malaysia_index(identifer)
{
    if ((identifer)==("size"))return (new number(2));
    switch(identifer){
        case 1: profile=malaysiap1(); break;
        case 2: profile=malaysiap2(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function malaysiap1()
{
    var malaysiap1=new Profile(
    "(malay)(siap1)",                             // profile name
    "(unknown)",                           // mmsc
    "(0>0>0>0>)",                           // ip addr
    "(unknown)",                             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(unknown)",                              // apn
      "(unknown)",                                // login id
      "(unknown)",                                // password
      "(0000)",                              // dial number
      "(unknown)",                                // login id
      "(unknown)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return malaysiap1;
}
 function malaysiap2()
{
    var malaysiap2=new Profile(
    "(malay)(siap2)",                             // profile name
    "(unknown)",                           // mmsc
    "(0>0>0>0>)",                           // ip addr
    "(unknown)",                             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "",                                    // apn
      "",                                    // login id
      "",                                    // password
      "(0000)",                              // dial number
      "(unknown)",                                // login id
      "(unknown)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                  //linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return malaysiap2;
}
function mexico_index(identifer)
{
    if ((identifer)==("size"))return (new number(2));
    switch(identifer){
        case 1: profile=gprstelcel(); break;
        case 2: profile=csdtelcel(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function gprstelcel()
{
    var gprstelcel=new Profile(
    "(gprs )(telcel)",                          // profile name
    "(unknown)",                            // mmsc
    "(148233151240)",                      // ip addr
    "(upaapps).(telcel).(com:8)(582/t)(elcel)(wap.wml)",             // url
    "(9201)",                                   // port
    0,                                     // session mode
    0,                                     // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    1,                                      // use tcp? 0 = wsp
    1,                                      // use http proxy?
    "(8080)",                                   // http proxy port
    "(148233151240)",                      // http proxy address
      "(wap.)(itelc)(el.com)",                    // apn
      "(iesgprs)",                            // login id
      "(iesgp)(rs2002)",                        // password
      "(0000)",                               // dial number
      "(unknown)",                          // login id
      "(unknown)",                          // password
      1,                                 // call type
      1,                                    // call speed
      "(300)",                                  // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return gprstelcel
}
function csdtelcel()
{
    var csdtelcel=new Profile(
    "(csd )(telcel)",                               // profile name
    "(unknown)",                            // mmsc
    "(148233151245)",                      // ip addr
    "(upaapp)(s.tel)(cel.co)(m:858)(2/tel)(celwap)(.wml)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    1,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    1,                                      // use tcp? 0 = wsp
    1,                                      // use http proxy?
    "(8080)",                                   // http proxy port
    "(148233151245)",                      // http proxy address
      "(unknown)",                          // apn
      "(unknown)",                          // login id
      "(unknown)",                          // password

      "(*273)",                               // dial number
      "(iescsd)",                             // login id
      "(iescs)(d2002)",                         // password
      1,                                    // call type
      1,                                     // call speed
      "(120)",                                  // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return csdtelcel;
}
function russia_index(identifer)
{
    if ((identifer)==("size"))return (new number(3));
    switch(identifer){
        case 1: profile=mobiltelesys(); break;
        case 2: profile=beeline(); break;
        case 3: profile=megafon(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function mobiltelesys()
{
    var mobiltelesys=new Profile(
    "(mobile)( tele )(system)",                   // profile name
    "(mmsc)",                          // mmsc
    "(192168192168)",                      // ip addr
    "(wap.m)(ts.ru)",                    // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(wap.m)(ts.ru)",                         // apn
      "(mts)",                                // login id
      "(mts)",                                // password
      "(0885)",                               // dial number
      "(mts)",                                // login id
      "(mts)",                                // password
      0,                                     // call type
      1,                                     // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return mobiltelesys;
}
function beeline()
{
    var beeline=new Profile(
    "(beeline)",                         // profile name
    "(mms)",                           // mmsc
    "(19216817>1>)",                         // ip addr
    "(wap.bee)(line.ru)",                // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(wap.bee)(line.ru)",                     // apn
      "(beeline)",                            // login id
      "(beeline)",                            // password
      "(671)",                               // dial number
      "(beeline)",                            // login id
      "(beeline)",                            // password
      0,                                     // call type
      1,                                       // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return beeline;
}
function megafon()
{
    var megafon=new Profile(
    "(megafon)",                         // profile name
    "(10>22>65>)(1>:8002)",               // mmsc
    "(10>77>77>10>)", //"10.10.1.2",            // ip addr
    "(wap.meg)(awap.ru)",                // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(wap.msk)",                            // apn
      "(wap)",                                // login id
      "(wap",                       // password
      "(+79262)(909200)",                       // dial number
      "(wap)",                                // login id
      "(wap)",                                // password
      1,                                      // call type
      1,                                      // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return megafon;
}
function taiwan_index(identifer)
{
    if ((identifer)==("size"))return (new number(5));
    switch(identifer){
        case 1: profile=chunghwa(); break;
        case 2: profile=fareasttone(); break;
        case 3: profile=twngsm(); break;
        case 4: profile=mobitai(); break;
        case 5: profile=transasia(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function chunghwa()
{
    var chunghwa=new Profile(
    "(chung)( hwa)",                   // profile name
    "(mms.em)(ome.ne)(t:8002)",            // mmsc
    "(10>1>1>1>)",                             // ip addr
    "(wap.e)(mome)(.net)",                 // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(emome)",                              // apn
      "",                                   // login id
      "",                                   // password
      "(+886933)(000369)",                      // dial number
      "",                                   // login id
      "",                                   // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
 return chunghwa;
}

function fareasttone()
{
    var fareasttone=new Profile(
    "(farea)(stone)",          // profile name
    "(mms)",                           // mmsc
    "(210241199199)",                      // ip addr
    "(www.is)(tyle.c)(om.tw)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(fetn)(et01)",                           // apn
      "",                                   // login id
      "",                                   // password
      "(+88693)(6010010)",                      // dial number
      "",                                   // login id
      "",                                   // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return fareasttone;
}
function twngsm()
{
    var twngsm=new Profile(
    "(twn )(gsm)",          // profile name
    "(mms)",                           // mmsc
    "(10>1>1>2>)",                             // ip addr
    "(ewap)",                          // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(mms)",                                // apn
      "(wap)",                                // login id
      "(wap)",                                // password
      "(+886935)(120120)",                      // dial number
      "(wap)",                                // login id
      "(wap)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return twngsm;
}
function mobitai()
{
    var mobitai=new Profile(
    "(mobitai)",             // profile name
    "(mms.mo)(beelife)(.net/m)(ms/wa)(penc)",  // mmsc
    "(192168077005)",                      // ip addr
    "(www.mob)(eelif)(e.net)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(gprs1)",                              // apn
      "(gprs)",                               // login id
      "(gprs)",                               // password
      "(+886923)(570570)",                      // dial number
      "",                                   // login id
      "",                                   // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return mobitai;
}
function transasia()
{
    var transasia=new Profile(
    "(trans)(asia)",           // profile name
    "(mms)",                           // mmsc
    "(211078224100)",                      // ip addr
    "(www.h)(ank.n)(et.tw)",               // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(hank)",                               // apn
      "",                                   // login id
      "",                                   // password
      "(+886931)(777777)",                      // dial number
      "",                                   // login id
      "",                                   // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                     // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
 return transasia;
}
function thailand_index(identifer)
{
    if ((identifer)==("size"))return (new number(3));
    switch(identifer){
        case 1: profile=ais(); break;
        case 2: profile=dtac(); break;
        case 3: profile=torange(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function ais()
{
    var ais=new Profile(
    "(ais)",                                  // profile name
    "(mms.mo)(bilel)(ife.)(co.th)",          // mmsc
    "(20317022934>)",                       // ip addr
    "(wap.bug)(2mobi)(le.com)",            // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(wap)",                                // apn
      "",                                   // login id
      "",                                   // password
      "(900934)",                             // dial number
      "(ais)",                                // login id
      "(ais)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(90000)",                                // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return ais;
}
function dtac()
{
     var dtac=new Profile(
    "(dtac)",                                 // profile name
    "(mms.dt)(ac.co)(.th:8)(002/)",          // mmsc
    "(203155200133)",                      // ip addr
    "(wap.bu)(g2mobi)(le.com)",            // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(wap.d)(juice)(.co.th)",                   // apn
      "",                                   // login id
      "",                                   // password
      "(+66161)(20012)",                        // dial number
      "(dj)",                                 // login id
      "(dj)",                                 // password
      1,                                     // call type
      0,                                    // call speed
      "(90000)",                                // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return dtac;
}
function torange()
{
    var torange=new Profile(
    "(thi o)(range)",                               // profile name
    "(mms.o)(range)(.co.th)(:8002/)",        // mmsc
    "(10>4>4>4>)",                             // ip addr
    "(wap.)(orang)(e.co.th)",              // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(wap)",                                // apn
      "(orange)",                             // login id
      "(orange)",                             // password
      "(+66910)(09500)",                        // dial number
      "(orange)",                             // login id
      "(orange)",                             // password
      1,                                     // call type
      0,                                    // call speed
      "(90000)",                                // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return torange;
}

function uk_index(identifer)
{
    if ((identifer)==("size"))return (new number(4));
    switch(identifer){
        case 1: profile=vodafonegprs(); break;
        case 2: profile=orangegprs(); break;
        case 3: profile=tmobilegprs(); break;
        case 4: profile=o2gprs(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function vodafonegprs()
{
    var vodafonegprs=new Profile(
    "(vodafo)(ne gprs)",                             // profile name
    "(mms.vod)(afone.)(co.uk/)(servle)(ts/mms)",            // mmsc
    "(212183137012)",                           // ip addr
    "(live.v)(odafon)(e.com)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(pp.vod)(afone.)(co.uk)",                              // apn
      "(user@v)(odafo)(ne.net)",                                // login id
      "(user)",                                // password
      "(+447836)(900808)",                              // dial number
      "(user)(@vodaf)(one.net)",                                // login id
      "(user)(@vodaf)(one.net)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(180)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return vodafonegprs;
}
function orangegprs()
{
    var orangegprs=new Profile(
    "(orang)(e gprs)",                             // profile name
    "(mms.or)(ange.c)(o.uk/)",            // mmsc
    "(192168071035)",                           // ip addr
    "(wap.or)(ange.)(co.uk)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(oran)(gewap)",                              // apn
      "(orange)",                                // login id
      "(multi)(media)",                                // password
      "(+44797)(3100500)",                              // dial number
      "(orange)",                                // login id
      "(multi)(media)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(180)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return orangegprs;
}
function tmobilegprs()
{
    var tmobilegprs=new Profile(
    "(t-mobi)(le gprs)",                             // profile name
    "(mmsc.t-)(mobile.)(co.uk:)(8002)",            // mmsc
    "(1492541>10>)",                           // ip addr
    "(wap.on)(e2one)(.net)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(genera)(l.t-mo)(bile.uk)",                              // apn
      "(user)",                                // login id
      "(one2one)",                                // password
      "(+447953)(968999)",                              // dial number
      "(user)",                                // login id
      "(one2one)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(180)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return tmobilegprs;
}
function o2gprs()
{
    var o2gprs=new Profile(
    "(o2 gprs)",                             // profile name
    "(mmsc.m)(ms.o2.)(co.uk:)(8002)",            // mmsc
    "(193>113>200>195>)",                           // ip addr
    "(wap.o2.)(co.uk/)",             // url
    "(9201)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    1,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(payand)(go.o2.)(co.uk)",                              // apn
      "(payandgo)",                                // login id
      "(password)",                                // password
      "(+447712)(927927)",                              // dial number
      "(o2wap)",                                // login id
      "(pass)(word)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(180)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return o2gprs;
}
function usa_index(identifer)
{
    if ((identifer)==("size"))return (new number(2));
    switch(identifer){
        case 1: profile=cingular(); break;
        case 2: profile=sky(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}
function cingular()
{
    var cingular=new Profile(
    "#(cing)(ular)",                         // profile name
    "(mmsc.)(cingu)(lar.com)",                    // mmsc
    "(66>20911>61)",                         // ip addr
    "",                                      // url
    "(9201)",                                      // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
     "(wap.ci)(ngular)",                        // apn
     "(#wap@c)(ingula)(rgprs)(.com)",                // login id
      "(cing)(ular1)",                          // password
      "(*99)(*>*>*)(1#)",                                 // dial number
      "",                                   // login id
      "",                                   // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return cingular;
}
function sky()
{
    var sky=new Profile(
    "(sky)",                                // profile name
    "(63>204126196)(@:/am>)",                    // mmsc
    "(63>204126194)",                         // ip addr
    "(www.goo)(gle.com)",                                        // url
    "(9201)",                                      // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "(9201)",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                     // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "(8080)",                                      // http proxy port
    "(63>204126196)",                                      // http proxy address
     "(123)",                        // apn
     "(123)",               // login id
      "(123)",                          // password
      "(342357461)",                                 // dial number
      "",                                   // login id
      "",                                   // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                   // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return sky;
}
function unknown_index(identifer)
{  
    if ((identifer)==("size"))return (new number(2));
    switch(identifer){
        case 1: profile=Default(); break;
        default: profile=new Profile("","","","","",0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"","","","","","",
        0,0,0,0,0,0,0,0,0,0); break;
    }
      return profile;
}

function Default()
{
    var _default=new Profile(
    "(unknown)",                             // profile name
    "(unknown)",            // mmsc
    "(0>0>0>0>)",                           // ip addr
    "(unknown)",             // url
    "(0000)",                                   // port
    0,                                      // session mode
    0,                                      // auth type
    0,                                      // prompt password?
    0,                                      // enable security?
    0,                                      // show image?
    0,                                      // enable proxy authentication?
    "",                                      // proxy auth udp port
    "",                                      // proxy auth name
    "",                                      // proxy auth password
    0,                                      // connection type
    "",                                      // 2nd proxy port
    "",                                      // 2nd proxy ip addr
    0,                                      // use tcp? 0 = wsp
    0,                                      // use http proxy?
    "",                                      // http proxy port
    "",                                      // http proxy address
      "(unknown)",                              // apn
      "(unknown)",                                // login id
      "(unknown)",                                // password
      "(0000)",                              // dial number
      "(unknown)",                                // login id
      "(unknown)",                                // password
      1,                                     // call type
      0,                                    // call speed
      "(60)",                                    // linger time
      //start_extended_mms_profile_data
      "1",                            //validity period
      "4",                           //delayed delivery
      "0",                            //delivery report
      "1",                           //read report
      "2",                                //priority
      "2",                               // auto download
      "1");                             //message class
return _default;
}