import React from "react";
import CottageCard from "../../../../assets/components/cottageCard/CottageCard";

export default function Wrapper() {
  return (
    <section className="p-10">
      <h2 className="c-p">Section</h2>
      <div className="w-100 d-flex flex-wrap justify-content-center">
        <CottageCard />
        <CottageCard />
        <CottageCard />
        <CottageCard />
        <CottageCard />
      </div>
    </section>
  );
}
