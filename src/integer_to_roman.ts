import {
  INTEGER_TO_ROMAN_MAPPING,
  SPLIT_FOR_RANGE,
} from "./integer_to_roman_constants";

export function convertIntegerToRoman(num: number): string {
  if (num === 0) return "";
  if (INTEGER_TO_ROMAN_MAPPING[num] !== undefined) {
    // return getRomanEquivalentFromMap(num);
    return INTEGER_TO_ROMAN_MAPPING[num];
  } else {
    //loop through map and see it is less than which key
    //= getRangeForNumber(num);
    const [fromInt, toInt] = getRangeForNumber(num);
    const splitOfRange = SPLIT_FOR_RANGE[toInt];
    if (num < splitOfRange) {
      return (
        INTEGER_TO_ROMAN_MAPPING[fromInt] + convertIntegerToRoman(num - fromInt)
      );
    } else
      return (
        convertIntegerToRoman(toInt - splitOfRange) +
        INTEGER_TO_ROMAN_MAPPING[toInt] +
        convertIntegerToRoman(num - splitOfRange)
      );
  }
}

export function getRangeForNumber(num: number): [number, number] {
  let fromInt = "1";
  let toInt = "1";
  for (toInt in INTEGER_TO_ROMAN_MAPPING) {
    if (Number(toInt) >= num) return [Number(fromInt), Number(toInt)];
    fromInt = toInt;
  }
  return [Number(fromInt), num];
}
