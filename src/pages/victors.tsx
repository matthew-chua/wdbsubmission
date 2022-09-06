import type { NextPage } from "next";
import { useState, useEffect } from "react";

//components
import NavBar from "../components/nav-bar";
import PastVictorsCard from "../components/PastVictorsCard";

//css
import classes from "./Victors.module.css";

export interface Runner {
  name: string;
  score: number;
  image: string;
}

export interface VictorType {
  name: string;
  year: number;
  description: string;
}

export interface APIData {
  voting: Runner[];
  victors: Victor[];
}

export interface Props {
  data: APIData;
}

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

const Victors: NextPage = (props: Props) => {

  const [victors, setVictors] = useState<VictorType[]>([]);

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
