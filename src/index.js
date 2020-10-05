module.exports = function reverse (n) {
  let resArr=[];
  let arrOfN=n.toString().split('');
  if(n<0){      
      arrOfN.splice(0,1);
  }
  for(let i=arrOfN.length-1;i>=0;i--){
      resArr.push(arrOfN[i]);
  }
  return +(resArr.join(''));
}
