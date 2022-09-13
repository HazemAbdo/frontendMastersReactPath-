// Keys help React identify which items have changed, are added, or are removed.
// Keys should be given to the elements inside the array to give the elements a stable identity:
import { useState, useEffect, useContext } from "react";
import Results from "./Results";
import useBreedList from "./useBreedList";
import ThemeContext from "./ThemeContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  //*----------------------Use state hooks------------------------------------
  //whenever a state is updated, the component is re-rendered
  const [location, setLocation] = useState("");
  const [animal, SetAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breeds] = useBreedList(animal);
  //*----------------------Use state hooks------------------------------------
  const [theme] = useContext(ThemeContext);
  //* ----------------------Use effect hooks------------------------------------
  //only when the dependencies change, the effect is run
  //empty array means that the effect is run only once
  //not array will run the effect every time the component is re-rendered
  //[a,b] will run the effect when a or b changes
  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  //* ----------------------Use effect hooks------------------------------------

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();
    setPets(json.pets);
  }
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => SetAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds &&
              breeds.map((breed) => (
                <option value={breed} key={breed}>
                  {breed}
                </option>
              ))}
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
