function findWaterHeight(blocks,volume){
  blocks.reverse();
  let waterAccumulated=0;
  let i=0;
  let waterArray=[];
  while(waterAccumulated<=volume){
    waterAccumulated=waterAccumulated+(blocks[i+1]-blocks[i])*(i+1);
    waterArray.push(waterAccumulated);
    i++;
  }
  if(i===1){
  return parseInt(volume)+blocks[0];
  }
let waterRemaining=volume-waterArray[i-2];
return waterRemaining/(i)+blocks[i-1];
}
console.log(findWaterHeight([200, 150, 100], 100));
console.log(findWaterHeight([200, 150, 100], 2000));
console.log(findWaterHeight([200,100], 100));
console.log(findWaterHeight([200,130,100], 100));
console.log(findWaterHeight([200,150,100], 10));
console.log(findWaterHeight([200,150,100], 0));