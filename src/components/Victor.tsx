import React, { useState } from "react";
import classes from "./Victor.module.css";
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

export default function Victor(props) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div className={classes.root}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <div className={classes.title}>
            Contestant <span className={classes.name}>{props.data.name} </span>
          </div>
          {props.data.year} {props.data.score} Winner
        </div>
        <button onClick={toggleOpen}>
            {open && <BsChevronUp />}
            {!open && <BsChevronDown />}
        </button>
      </div>
      {open && <div className={classes.desc}>{props.data.description}</div>}
    </div>
  );
}
