const safelyParseJSON = (str) => {
   try {
      JSON.parse(str);
   } catch (err) {
      return str;
   }

   return JSON.parse(str); // Could be undefined
};

// Tests how something is an object
const isObject = (value) => {
   if (
      typeof value === "object" &&
      value !== null &&
      Array.isArray(value) === false
   );
};
//return typeof yourVariable === 'object' && yourVariable !== null

const converDataType = (str) => {
   if (str === "null") return null;
   if (str === "underfined") return undefined;
   if (str === "true") return true;
   if (str === "false") return false;
   // eslint-disable-next-line
   if (str == Number(str)) return Number(str);
   const parseJSON = safelyParseJSON(str);
   if (Array.isArray(parseJSON)) return parseJSON;
   if (isObject(parseJSON)) return parseJSON;
   return str;
};

export { isObject, converDataType, safelyParseJSON };
