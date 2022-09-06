import { useEffect, useState } from "react";

//types
import type { NextPage } from "next";
import type { Runner, Victor, APIData, Props } from "./victors";

//compoenents
import NavBar from "../components/nav-bar";
import Participant from "../components/participant";

//css
import classes from "./Voting.module.css";

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

const Voting: NextPage = (props:Props) => {
  const [runners, setRunners] = useState<Runner[]>([]);

  useEffect(() => {
    setRunners(props.data.voting);
  }, []);

  return (
    <>
      <NavBar />
      <div className={classes.particpantContainer}>
        {runners.map((data) => (
          <Participant
            key={data.name}
            runner={data}
            runners={runners}
            setRunners={setRunners}
          />
        ))}
      </div>
    </>
  );
};

export default Voting;
