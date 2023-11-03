import { INTEGER_TO_ROMAN_MAPPING } from "./integer_to_roman_constants";

export function convertIntegerToRoman(num: number): string {
  if (INTEGER_TO_ROMAN_MAPPING[num]!==undefined) {
   // return getRomanEquivalentFromMap(num);
   return INTEGER_TO_ROMAN_MAPPING[num]
  } else {
    //loop through map and see it is less than which key
     //= getRangeForNumber(num);
    const [fromInt, toInt] = getRangeForNumber(num);
    const midOfRange = Math.ceil((fromInt + toInt)/2);
    if (num <= midOfRange) {
      return INTEGER_TO_ROMAN_MAPPING[fromInt] + convertIntegerToRoman(num-fromInt);
    }
    else
      return convertIntegerToRoman(toInt-num) + INTEGER_TO_ROMAN_MAPPING[toInt]
   // upperEndInteger/2;
    //find the half of key - (key-1)/2 5-1/2 = 2+1,  10-5 = 5/2 +1 
   // return correspondingRoman;

  };
}

/*export function getRomanEquivalentFromMap(num: number): string {
  let romanValue = INTEGER_TO_ROMAN_MAPPING.get(num);
  if (romanValue !== undefined) return romanValue;
  else return "none";
}*/
export function getRangeForNumber(num: number):[number,number] {
  let fromInt = '1';
  let toInt = '1';
  for (toInt in INTEGER_TO_ROMAN_MAPPING) {
    if( Number(toInt)>=num)
      return ([Number(fromInt),Number(toInt)]);
    fromInt = toInt;
  
  }
  return [Number(fromInt),num];
}

