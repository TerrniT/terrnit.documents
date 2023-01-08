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
          {libs.map((lib) => (
            <Libcard key={lib.id} {...lib} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Documents;
