class Formatter {
   static capitalize(str){
    return str.charAt(0).toUpperCase()+ str.slice(1);
   }
   static sanitize(str){
    return str.replace(/[^A-Za-z0-9 '-]+/g, "");
   }
   static titleize(str){
    let hidden = ["a", "an","but","by","for","of","the", "and", "at", "from"]
    return str.split(" ").map((word, index)=>{
      if(index===0){
        return word.charAt(0).toUpperCase()+ word.slice(1)
      }
      if(hidden.includes(word)){
        return word;
      }else{
        return word.charAt(0).toUpperCase()+ word.slice(1)
      }
    }).join(" ")
   }
}