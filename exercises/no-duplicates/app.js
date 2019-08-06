function strng(str){
    let empty = " "
  for(i=0; i < str.length; i++){
      if(empty.indexOf(str[i])=== -1){
       empty += str[i]
    }
}
return empty
}
console.log(strng("Whatever string i want"))