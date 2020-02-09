function fearNotLetter(str) {
 

    for(var i=0;i<str.length;i++){
      var ascii = str.charCodeAt(i);
      if(ascii !== str.charCodeAt(0) + i){
        return String.fromCharCode(ascii-1);
      }
     
    }
     return undefined;
   }
   
   fearNotLetter("abce");
   