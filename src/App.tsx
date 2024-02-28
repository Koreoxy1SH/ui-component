import { Section } from "./components/site/Section";
import { Container } from "./components/site/Container";
import { Layout } from "./components/site/Layout";

function App() {
  return (
    <Layout>
      <Container
        title="Button component"
        description="ini adalah button component ui"
      >
        <Section
          title="NEW Section heading"
          description="Section description text"
        >
          <div className="bg-blue-500/50 p-3">component 1</div>
          <div className="bg-blue-500/50 p-3">component 1</div>
        </Section>
      </Container>
    </Layout>
  );
}

export default App;
