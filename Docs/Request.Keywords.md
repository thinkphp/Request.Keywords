Class: Request.Keywords {#Request.Keywords}
=========================================================

Request.Keywords is a simple plugin that tries to find keywords connected to a certain term.

### Implements:

Options, Events

### Extends:

Request.JSONP


Request.Keywords Method: constructor {#Request.Keywords: constructor}
----------------------------------------------------------------------------------


### Syntax:

    var keywords = new Request.Keywords(term, region, language);

### Arguments:

1. term - (*String*) (required) the mandatory term for which you will find the keywords connected.
2. region - (*String*) (required) the region in which you make search.
2. language - (*String*) (required) the language in which you make search.
                                      

### options:

* url  - (*String*)  the url to get the JSON data
* data - (*Object*)  additional key/value data to append to the url
...
added options obtained through inheritance.[Request.Keywords extends Request.JSONP]

### Returns:

a Request.Keywords instance

### Events:

### request

* (*function*) this event (function) is fired whenever the instance actually send a request.It is passed one argument.

### Signature

   onRequest(script)

#### Arguments
     1. script - is passed the markup 'SCRIPT' with the url stored in attribute 'src'.


### complete

* (*function*) this event is triggered whenever the instance receives a successful response from the server. It is passed one argument.

### Signature

   onComplete(data)

#### Arguments
     1. data - (*Object*) the data returns is passed.

### success

* (*function*) this function is fired whenever the request has been completed and the data returns from the server. It is passed one argument.

### Signature

   onSuccess(data)

#### Arguments
     1. data - (*Object*) data returns are passed.

## Element Method: loadKeywords

Updates the content of the Element with keywords founds at the term you defined.

### Syntax:

myElement.loadKeywords(term, region, language);

#### Arguments:
1. term (*String*) - (required) the term for which you wish to search for.
2. region (*String*) - (optional) the region over search (default: 'us').
3. language (*String*) - (optional) the language for which you want to search for. (default: 'en').

### Returns:

(*Element*) - the target Element

### Example:

       #HTML
       <div id="content">Loading content...</div>

       #JS
       $('content').loadKeywords('mootools');
            OR
       $('content').loadKeywords('mootools','us','en');