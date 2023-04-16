import { useState } from "react";

//TODO: This seems to be unused. Confirm?
const AllergenButton = ({
  allergen,
  selectedAllergens,
  setSelectedAllergens,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setSelectedAllergens([...selectedAllergens, allergen]);
    } else {
      setSelectedAllergens(selectedAllergens.filter((a) => a !== allergen));
    }
  };

  return (
    <button
      className={`allergen-button ${isActive ? "active" : "inactive"}`}
      onClick={handleClick}
    >
      {allergen}
    </button>
  );
};

export default AllergenButton;
