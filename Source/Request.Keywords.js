Request.Keywords = new Class({
        Extends: Request.JSONP,
        options: {
           url: "http://query.yahooapis.com/v1/public/yql?q=use%20'http%3A%2F%2Fthinkphp.ro%2Fapps%2FYQL%2Fkeywordfinder%2F%2Fkeywordfinder.table.xml'%20as%20keyfinder%3Bselect%20*%20from%20keyfinder%20where%20term%3D%22{term}%22%20and%20region%3D%22{region}%22%20and%20language%3D%22{language}%22",
           data: {
              format: 'json',
              diagnostics: true 
           } 
        },
        initialize: function(term,language,region,options){
                       this.options.url = this.options.url.substitute({term: term,language: language, region: region});
                       this.parent(options);
        }  
}); 
