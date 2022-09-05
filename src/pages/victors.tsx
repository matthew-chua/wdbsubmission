import type { NextPage } from "next";
import { useState, useEffect } from "react";
import NavBar from "../components/nav-bar";
import PastVictorsCard from "../components/PastVictorsCard";
import classes from "./Victors.module.css";

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json"
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

const Victors: NextPage = (props) => {
  const DUMMY_DATA = [
    {
      name: "name 1",
      year: "2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "name 2",
      year: "2020",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "name 3",
      year: "2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const [victors, setVictors] = useState([]);

  useEffect(() => {
    setVictors(props.data.victors);
  }, []);
  return (
    <>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.left}>
          <div className={classes.title}>Past Victors</div>
          <p className={classes.desc}>
            The Grand Cheese Race has been the most elite sporting event for
            thousands of years. Every year, each country sends one honorable
            representative to compete for the Double Gloucester cheese.
            <br /> <br /> To remember all of the legendary victors, we keep a
            list of the past winners and a description of their victory.
          </p>
        </div>
        <div className={classes.right}>
          <div className={classes.title}>Scores</div>
          <PastVictorsCard data={victors} />
        </div>
      </div>
    </>
  );
};

export default Victors;
