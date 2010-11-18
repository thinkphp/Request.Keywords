/*
---
description: This is a quick hack based on MooTools which tries to find keywords connected to a certain term.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
 core/1.3.0: '*'
 more/1.3: Request.JSONP

provides: [Request.Keywords]
...
*/

Request.Keywords=new Class({Extends:Request.JSONP,options:{url:"http://query.yahooapis.com/v1/public/yql?q=use%20'http%3A%2F%2Fthinkphp.ro%2Fapps%2FYQL%2Fkeywordfinder%2F%2Fkeywordfinder.table.xml'%20as%20keyfinder%3Bselect%20*%20from%20keyfinder%20where%20term%3D%22{term}%22%20and%20region%3D%22{region}%22%20and%20language%3D%22{language}%22",data:{format:"json",diagnostics:true}},initialize:function(term,reg,lan,options){if(typeof reg=="string"&&reg){region=reg}else{region="us"}if(typeof lan=="string"&&lan){language=lan}else{language="en"}this.options.url=this.options.url.substitute({term:term,language:language,region:region});this.parent(options)}});Element.implement({loadKeywords:function(term,reg,lan){var elem=this;if(!reg){reg="us"}if(!lan){lan="en"}new Request.Keywords(term,reg,lan,{onSuccess:function(o){if(window.console){console.log(o)}if(o.query.results.keywords){var kw=o.query.results.keywords.terms;var out='<p class="termslist">'+kw.replace(/,/g,", ")+"</p>";elem.set("html",out)}else{elem.set("text","There was an error, please try again.")}},onRequest:function(script){if(window.console){console.log(script)}elem.set("text","Loading...")}}).send();return this}});