import React from "react";

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import classes from "./Victor.module.css";

interface Props {
  key: string;
  name: string;
  year: number;
  description: string;
}

export default function Victor(props: Props) {
  return (
    <AccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Contestant <span className={classes.name}>{props.name}</span>
          <br />
          {props.year} Winner
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{props.description}</AccordionPanel>
    </AccordionItem>
  );
}
