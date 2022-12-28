import type { NextPage } from "next";

import libs from "../data/libraries";

import Grid from "../components/grid";
import CommandPallete from "../components/commandPallete";
import Container from "../components/container";
import Libcard from "../components/Libcard";
import FakeInput from "../components/atoms/fakeInput";

const Documents: NextPage = () => {
  return (
    <Container>
      <CommandPallete />
      <FakeInput />
      <Grid>
        {Object.entries(libs).map(([id, data]) => (
          <Libcard key={id} {...data} />
        ))}
      </Grid>
    </Container>
  );
};

export default Documents;
