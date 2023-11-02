import { INTEGER_TO_ROMAN_MAPPING } from "./integer_to_roman_constants";

export function convertIntegerToRoman(num: number): string {
  if (INTEGER_TO_ROMAN_MAPPING.has(num)) {
    return getRomanEquivalentFromMap(num);
  } else return "others";
}

export function getRomanEquivalentFromMap(num: number): string {
  let romanValue = INTEGER_TO_ROMAN_MAPPING.get(num);
  if (romanValue !== undefined) return romanValue;
  else return "none";
}
