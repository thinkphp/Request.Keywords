Request.Keywords
=======================
Request.Keywords is plugin MooTools which tries to find keywords connected to a certain term.

![Screenshot](http://farm5.static.flickr.com/4151/4836983051_5006fe627c_z.jpg)

How to use
----------

First you must to include the JS files in the head of your HTML document.
       
       #HTML
       <script type="text/javascript" src="core.js"></script>
       <script type="text/javascript" src="jsonp.js"></script>
       <script type="text/javascript" src="Request.Keywords.js"></script>

In your JavaScript source: 

       #JS 
       window.addEvent('domready',function(){ 
             new Request.Keywords('mootools', 'us', 'en', {
                                      onSuccess: function(o) {
                                           if(window.console) {console.log(o);}
                                             if(o.query.results.keywords) {
                                                  var term = o.query.results.keywords.search;
                                                  var kw = o.query.results.keywords.terms;
                                                  var language = o.query.results.keywords.language;
                                                  var region = o.query.results.keywords.region;
                                                  var out = '<h2>You searched for <span>'+term+'</span> in <span> '+ language +'</span></h2>'+
                                                       '<p>We found these related keywords:</p>'+
                                                       '<p class="termslist">'+kw.replace(/,/g,', ')+'</p>';
                                                   $('keywords').set('html',out);
                                             } else {
                                                   $('keywords').set('text','There was an error, please try again.');
                                             }
                                      },
                                      onRequest: function(script) {
                                           if(window.console) {console.log(script);}
                                           $('keywords').set('text','Loading...');
                                      }
            }).send();              

            $('another_keywords').loadKeywords('python');
      }

In your HTML source: 

       #HTML
       <div id="keywords"></div>
       <div id="another_keywords"></div>
Dependencies

      MooTools Core 1.2.4
      MooTools More: Request.JSONP