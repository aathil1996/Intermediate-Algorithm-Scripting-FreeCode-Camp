function pairElement(str) {
    var length = str.length;
    var array = [];
    for(let i=0;i<=length;i++){
      if(str.charAt(i) === 'A'){
        array.push(['A','T']);
      }
      else if(str.charAt(i) === 'T'){
        array.push(['T','A']);
      }
      else if(str.charAt(i) === 'C'){
        array.push(['C','G']);
      }
      else if(str.charAt(i) === 'G'){
        array.push(['G','C']);
      }
      
    }
    return array;
  }
  
  pairElement("GCG");
  