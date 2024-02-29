import { Section } from "./components/site/Section";
import { Container } from "./components/site/Container";
import { Layout } from "./components/site/Layout";
import { Button } from "./components/library/Button";

function App() {
  return (
    <Layout>
      <Container
        title="Button"
        description="a button is a widget enalbe users to trigger or event, such as submiiting a form, opening dialog, acncelling an action, or performing a delete operation"
      >
        {/* BUTTON PRIMARY */}
        <Section
          title="Primary"
          description="Primary actions should be obvious, solid, high contract backgeound colors work get her"
        >
          <Button>Default Primary</Button>
          <Button disabled>Disabled Primary</Button>
          <Button
            colors={{
              bg: "bg-amber-500",
              hoverBg: "hover:bg-amber-600",
              focusRing: "focus:ring-amber-500",
            }}
          >
            Amber Primary
          </Button>

          <Button
            colors={{
              bg: "bg-rose-500",
              hoverBg: "hover:bg-rose-600",
              focusRing: "focus:ring-rose-500",
            }}
          >
            Rose
          </Button>

          <Button
            colors={{
              bg: "bg-fuchsia-500",
              hoverBg: "hover:bg-fuchsia-600",
              focusRing: "focus:ring-fuchsia-500",
            }}
          >
            Fuchsia
          </Button>

          <Button
            colors={{
              bg: "bg-indigo-500",
              hoverBg: "hover:bg-indigo-600",
              focusRing: "focus:ring-indigo-500",
            }}
          >
            Indigo
          </Button>

          <Button
            colors={{
              bg: "bg-[#1da1f2]",
              hoverBg: "hover:bg-[#1a8cd8]",
              focusRing: "focus:ring-[#1da1f2]",
            }}
          >
            Twitter Blue
          </Button>
        </Section>

        {/* BUTTON SECONDARY */}
        <Section title="Secondary" description="Secondary button blablablal">
          <Button variant="secondary">Default Secondary</Button>
          <Button variant="secondary" disabled>
            Default Secondary
          </Button>

          <Button
            variant="secondary"
            colors={{
              text: "text-amber-500",
              hoverBorder: "hover:border-amber-500",
              hoverBg: "hover:bg-amber-500",
              focusRing: "focus:ring-amber-500",
            }}
          >
            Amber Secondary
          </Button>

          <Button
            variant="secondary"
            colors={{
              text: "text-rose-500",
              hoverBorder: "hover:border-rose-500",
              hoverBg: "hover:bg-rose-500",
              focusRing: "focus:ring-rose-500",
            }}
          >
            Rose
          </Button>

          <Button
            variant="secondary"
            colors={{
              text: "text-fuchsia-500",
              hoverBorder: "hover:border-fuchsia-500",
              hoverBg: "hover:bg-fuchsia-500",
              focusRing: "focus:ring-fuchsia-500",
            }}
          >
            Fuchsia
          </Button>

          <Button
            variant="secondary"
            colors={{
              text: "text-indigo-500",
              hoverBorder: "hover:border-indigo-500",
              hoverBg: "hover:bg-indigo-500",
              focusRing: "focus:ring-indigo-500",
            }}
          >
            Indigo
          </Button>

          <Button
            variant="secondary"
            colors={{
              text: "text-[#1da1f2]",
              hoverBorder: "hover:border-[#1da1f2]",
              hoverBg: "hover:bg-[#1da1f2]",
              focusRing: "focus:ring-[#1da1f2]",
            }}
          >
            Twitter blue
          </Button>
        </Section>

        {/* BUTTON TERTIARY */}
        <Section title="Tertiary" description="Tertiary button blablablal">
          <Button variant="tertiary">Default tertiary</Button>
          <Button variant="tertiary" disabled>
            Default tertiary
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-amber-500",
              hoverText: "hover:text-amber-700",
              focusRing: "focus:ring-amber-500",
            }}
          >
            Amber Secondary
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-rose-500",
              hoverText: "hover:text-rose-700",
              focusRing: "focus:ring-rose-500",
            }}
          >
            Rose
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-fuchsia-500",
              hoverText: "hover:text-fuchsia-700",
              focusRing: "focus:ring-fuchsia-500",
            }}
          >
            Fuchsia
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-indigo-500",
              hoverText: "hover:text-indigo-700",
              focusRing: "focus:ring-indigo-500",
            }}
          >
            Indigo
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-[#1da1f2]",
              hoverText: "hover:text-[#1da1f2]",
              focusRing: "focus:ring-[#1da1f2]",
            }}
          >
            Twitter blue
          </Button>
        </Section>
      </Container>
    </Layout>
  );
}

export default App;
