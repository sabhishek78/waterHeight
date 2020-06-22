function findWaterHeight(blocks,volume){
  blocks.reverse();
  let waterAccumulated=0;
  let currentBlock=0;
  let waterArray=[];
  while(waterAccumulated<=volume){
    waterAccumulated=waterAccumulated+(blocks[currentBlock+1]-blocks[currentBlock])*(currentBlock+1);
    waterArray.push(waterAccumulated);
    currentBlock++;
  }
  if(currentBlock===1){
  return parseInt(volume)+blocks[0];
  }
let waterRemaining=volume-waterArray[currentBlock-2];
return waterRemaining/(currentBlock)+blocks[currentBlock-1];
}
console.log(findWaterHeight([200, 150, 100], 100));
console.log(findWaterHeight([200, 150, 100], 2000));
console.log(findWaterHeight([200,100], 100));
console.log(findWaterHeight([200,130,100], 100));
console.log(findWaterHeight([200,150,100], 10));
console.log(findWaterHeight([200,150,100], 0));