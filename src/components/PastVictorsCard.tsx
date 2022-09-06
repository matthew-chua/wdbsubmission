import React from "react";
import { Accordion } from "@chakra-ui/react";
import Victor from "./Victor";

import type { VictorType } from "../pages/victors";
interface Props {
  data: VictorType[];
}

export default function PastVictorsCard(props: Props) {
  return (
    <Accordion defaultIndex={[]} allowMultiple>
      {props.data.map((victor: VictorType) => (
        <Victor
          key={victor.name + victor.year}
          name={victor.name}
          description={victor.description}
          year={victor.year}
        />
      ))}
    </Accordion>
  );
}
