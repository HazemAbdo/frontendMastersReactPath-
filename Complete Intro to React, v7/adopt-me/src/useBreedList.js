import { useState, useEffect, useDebugValue } from "react";
const localCache = {};
//* -------------------custom hook------------------------------------
export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState("");
  const [status, setStatus] = useState("unloaded");
  //* useDDebugValue will show the value of the hook in the React DevTools
  useDebugValue("number of values in cache:" + Object.keys(localCache).length);
  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requireBreedList();
    }
    async function requireBreedList() {
      setBreedList([]);
      setStatus("loading");
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);
  return [breedList, status];
}
