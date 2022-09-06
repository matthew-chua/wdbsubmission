import React from "react";
import Image from "next/image";
import classes from "./Participant.module.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

//types
import type { Runner } from "../pages/victors";

interface Props {
  key: string;
  runner: Runner;
  runners: Runner[];
  setRunners: (runners: Runner[]) => void;
}

export default function Participant(props: Props) {
  const increaseScore = (name: string) => {
    const newRunners = props.runners.map((runner: Runner) => {
      if (runner.name === name) {
        return { ...runner, score: runner.score + 1 };
      }
      return runner;
    });
    props.setRunners(newRunners);
  };

  const decreaseScore = (name: string) => {
    const newRunners = props.runners.map((runner: Runner) => {
      if (runner.name === name) {
        return { ...runner, score: runner.score - 1 };
      }
      return runner;
    });
    props.setRunners(newRunners);
  };

  return (
    <div className={classes.root}>
      {/* <Image
        src={props.runner.image}
        alt="runner image"
        width={400}
        height={200}
        layout="responsive"
      /> */}
      <img src={props.runner.image} className={classes.image}/>
      <div className={classes.bottomCard}>
        <div>
          <div className={classes.participantName}>{props.runner.name}</div>
          <div>{props.runner.score.toLocaleString()}</div>
        </div>
        <div className={classes.spacer} />
        <div>
          <button
            className={classes.button}
            onClick={() => increaseScore(props.runner.name)}
          >
            <BsChevronUp />
          </button>
          <button
            className={classes.button}
            onClick={() => decreaseScore(props.runner.name)}
          >
            <BsChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}
