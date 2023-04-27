import React from "react";
import Fe from "./fe";
import Be from "./be";

function aboutSkill() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
        <Fe />
        <Be />
      </div>
    </div>
  );
}

export default aboutSkill;
