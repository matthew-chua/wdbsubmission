import NavBar from "../components/nav-bar";
import type { NextPage } from "next";
import Participant from "../components/participant";
import classes from "./Voting.module.css";

const Voting: NextPage = () => {
  const DUMMY_DATA = [
    {
      name: "name 1",
      image: "",
      score: 3400,
    },
    {
      name: "name 2",
      image: "",
      score: 3500,
    },
    {
      name: "name 3",
      image: "",
      score: 3600,
    },
  ];
  return (
    <>
      <NavBar />
      <div className={classes.particpantContainer}>
        {DUMMY_DATA.map((data) => (
          <Participant />
        ))}
      </div>
    </>
  );
};

export default Voting;
