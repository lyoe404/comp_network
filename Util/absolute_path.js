
export function absolutePath(array){
for (let i = 0 ; i < array.length - 1 ; i++) {
  
  if (array[i+1] > array[i]) {

    console.log("absolted",`edge${array[i]}+${array[i+1]}`)
      document.getElementById(`edge${array[i]}+${array[i+1]}`).style.backgroundColor = "black";
      document.getElementById(`edge${array[i]}+${array[i+1]}`).style.height = "2px";
      document.getElementById(`edge${array[i]}+${array[i+1]}`).style.zIndex = "5";
    
  }
  if (array[i]>array[i+1]) {
    console.log("absolted",`edge${array[i+1]}+${array[i]}`);

      document.getElementById(`edge${array[i+1]}+${array[i]}`).style.backgroundColor = "black";
  document.getElementById(`edge${array[i+1]}+${array[i]}`).style.height = "2px";
  document.getElementById(`edge${array[i+1]}+${array[i]}`).style.zIndex = "5" ; 
    
} ;
};
}

export function reverseAbsolutePath (array) {
  for (let i = 0 ; i < array.length - 1 ; i++) {
    if (array[i+1] > array[i]) {
      document.getElementById(`edge${array[i]}+${array[i+1]}`).style.backgroundColor = "white";
    document.getElementById(`edge${array[i]}+${array[i+1]}`).style.height = "1px";
    document.getElementById(`edge${array[i]}+${array[i+1]}`).style.zIndex = "5";
    }
    else {document.getElementById(`edge${array[i+1]}+${array[i]}`).style.backgroundColor = "white";
    document.getElementById(`edge${array[i+1]}+${array[i]}`).style.height = "1px";
    document.getElementById(`edge${array[i+1]}+${array[i]}`).style.zIndex = "5" ; 
  } ;
  };
}