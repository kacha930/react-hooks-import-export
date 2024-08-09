import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import { trees, wildlife } from "./parks/RockyMountain";

function ColoradoStateParks() {
  //howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
  <div>
      <MesaVerde />
  </div>
}


// This syntax lets us export one variable from a file which we can then import in another file.
export default ColoradoStateParks;






