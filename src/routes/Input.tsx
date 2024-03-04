import { Input } from "../components/library/Input";
import { Container } from "../components/site/Container";
import { Section } from "../components/site/Section";

export const InputPage = () => {
  return (
    <>
      {/* CONTENT INPUTS UI */}
      <Container
        title="Inputs"
        description="An inputs is a widgedt that allows users to provide data or specify options, which can be submitted as part of a form or used to interact with and manipulate content on a web page."
      >
        {/* BASIC INPUT */}
        <Section title="Basic" description=" Basic input with a placeholder.">
          {/* Basic Input */}
          <Input type="text" placeholder="Type things here!" />

          {/* Basic Input disabled */}
          <Input disabled type="text" placeholder="Disabled" />
        </Section>

        {/* INPUT LABEL*/}
        <Section title="Label" description="Input with a label.">
          <Input type="email" label="Email" placeholder="You@site.com" />
        </Section>

        {/* INPUT DESCRIPTION*/}
        <Section title="Description" description="Input with a description.">
          <Input
            type="password"
            label="Password"
            placeholder="your password supper secret"
            description="Don't share your password bruh"
          />
        </Section>
      </Container>
    </>
  );
};
