"use client";

import React, { useState } from "react";
import { data } from "./data";
import Checkbox from "@/components/Checkbox";
export default function NestedCheckbox() {
  const [selected, setSelected] = useState({});
  return (
    <div className="mt-8">
      <Checkbox data={data} selected={selected} setSelected={setSelected} />
    </div>
  );
}
