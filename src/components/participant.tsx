import React from "react";
import Image from "next/image";
import classes from "./Participant.module.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

export default function Participant(props) {
  const increaseScore = (name) => {
    const newRunners = props.runners.map((runner) => {
      if (runner.name === name) {
        return { ...runner, score: runner.score + 1 };
      }
      return runner;
    });
    props.setRunners(newRunners);
  };

  const decreaseScore = (name) => {
    const newRunners = props.runners.map((runner) => {
      if (runner.name === name) {
        return { ...runner, score: runner.score - 1 };
      }
      return runner;
    });
    props.setRunners(newRunners);
  };

  return (
    <div>
      <Image
        src={props.runner.image}
        alt="runner image"
        width={400}
        height={200}
        layout="responsive"
      />
      <div className={classes.bottomCard}>
        <div>
          <div className={classes.participantName}>{props.runner.name}</div>
          <div>{props.runner.score}</div>
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
