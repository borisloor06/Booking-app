import { useEffect, useState } from "react";
import { getCategories } from "../../../../../services/getCategories";
import Dropdown from "../../../../../Components/DropDown/Dropdown";
import { getServicesByCategory } from "../../../../../services/getServicesByCategory";

function SelectService() {
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    getCategories().then((_categories) => setCategories(_categories));
  }, []);

  return (
    <article className="border-2 p-2">
      {categories.length > 0 ? (
        categories.map((category) => (
          <Dropdown
            key={category}
            loadOptions={(dropdownName) => getServicesByCategory(dropdownName)}
            dropdownName={category}
            defaultValue={0}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </article>
  );
}

export default SelectService;
