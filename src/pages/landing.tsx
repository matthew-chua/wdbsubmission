import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box } from "@chakra-ui/react";

import classes from "./Landing.module.css";

const Landing: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <div>Grand Cheese Race</div>
        <div className={classes.subtitle}>
          It’s the race of the century! All victors return for <br /> one final
          race... who do you think will win?
        </div>
      </div>
    </>
  );
};

export default Landing;
