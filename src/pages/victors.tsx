import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import classes from "./Victors.module.css";

const Victors: NextPage = () => {
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
        </div>
      </div>
    </>
  );
};

export default Victors;
