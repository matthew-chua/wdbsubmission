import NavBar from "../components/nav-bar";
import type { NextPage } from "next";
import Participant from "../components/participant";
import classes from "./Voting.module.css";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  
  const res = await fetch("https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json")
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

const Voting: NextPage = (props) => {

  const [runners, setRunners] = useState([]);

  useEffect(() => {
    setRunners(props.data.voting);
    console.log(runners)
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.particpantContainer}>
        {runners.map((data) => (
          <Participant runner={data} runners={runners} setRunners={setRunners} />
        ))}
      </div>
    </>
  );
};

export default Voting;
