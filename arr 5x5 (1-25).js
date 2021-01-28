var x=[], i, j;
 for (i=0; i<5; i++){
  x[i] = new Array();
for (j=0; j<5; j++){
   x[i][j]=(i*5)+j+1;
  }
  
 }
console.log(x);




let newArray = [];
  for (let i = 0; i < 5; i++) {
	let row = [];
    for (let j = 0; j < 1; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  console.log(newArray);