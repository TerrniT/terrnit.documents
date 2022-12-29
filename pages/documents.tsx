import type { NextPage } from "next";

import libs from "../data/libraries";

import Grid from "../components/grid";
import CommandPallete from "../components/commandPallete";
import Container from "../components/container";
import Libcard from "../components/Libcard";
import Hero from "../components/hero";

const Documents: NextPage = () => {
  return (
    <>
      <Container>
        <Hero />
        <CommandPallete />
        <Grid>
          {Object.entries(libs).map(([id, data]) => (
            <Libcard key={id} {...data} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Documents;
