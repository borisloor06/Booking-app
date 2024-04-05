import { useState } from "react";
import SelectService from "./Steps/SelectService/SelectService";

function Booking() {
  const [page, setPage] = useState<number>(0);

  return (
    <>
      {page === 0 && (
        <SelectService />
      )}
      {/** Add footer and steps*/}
    </>
  );
}

export default Booking;
