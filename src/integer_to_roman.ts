import {
  INTEGER_TO_ROMAN_MAPPING,
  SPLIT_FOR_RANGE,
} from "./integer_to_roman_constants";

export const convertIntegerToRoman = (num: number): string => {
  if (num > 3000) return "Input has to be less than or equal to 3000";
  if (num === 0) return "";
  if (INTEGER_TO_ROMAN_MAPPING[num] !== undefined) {
    return INTEGER_TO_ROMAN_MAPPING[num];
  } else {
    const [fromInt, toInt] = getRangeForNumber(num);
    const splitOfRange = SPLIT_FOR_RANGE[toInt];
    //splitOfRange is undefined when num is greater than 1000. Hence to handle numbers greater than 1000, I am checking for undefined.
    if (num < splitOfRange || splitOfRange === undefined) {
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
};

export const getRangeForNumber = (num: number): [number, number] => {
  let fromInt = "1";
  let toInt = "1";
  for (toInt in INTEGER_TO_ROMAN_MAPPING) {
    if (Number(toInt) >= num) return [Number(fromInt), Number(toInt)];
    fromInt = toInt;
  }
  return [Number(fromInt), num];
};
