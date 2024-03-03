import { Section } from "./components/site/Section";
import { Container } from "./components/site/Container";
import { Layout } from "./components/site/Layout";
import { Button } from "./components/library/Button";
import { BlockLinkCard, ContentCard } from "./components/library/Card";
import { SiNextdotjs, SiVite } from "react-icons/si";
import { Input } from "./components/library/Input";

function App() {
  return (
    <Layout>
      {/* CONTENT BUTTON UI */}
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
              darkHoverBorder: "dark:hover:border-amber-500",
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
              darkHoverBorder: "dark:hover:border-rose-500",
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
              darkHoverBorder: "dark:hover:border-fuchsia-500",
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
              darkHoverBorder: "dark:hover:border-indigo-500",
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
              darkHoverBorder: "dark:hover:border-[#1da1f2]",
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
              darkHoverText: "dark:hover:text-amber-400",
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
              darkHoverText: "dark:hover:text-rose-400",
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
              darkHoverText: "dark:hover:text-fuchsia-400",
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
              darkHoverText: "dark:hover:text-indigo-400",
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
              darkHoverText: "dark:hover:text-[#71c9f8]",
            }}
          >
            Twitter blue
          </Button>
        </Section>

        {/* BUTTON DESTRUCTIVE */}
        <Section
          title="Destructive"
          description="Desctructive button blablablal"
        >
          <Button
            colors={{
              bg: "bg-red-500",
              hoverBg: "hover:bg-red-600",
              focusRing: "focus:ring-red-500",
            }}
          >
            Delete Button
          </Button>
          <Button
            variant="secondary"
            colors={{
              text: "text-red-500",
              hoverBorder: "hover:border-red-500",
              hoverBg: "hover:bg-red-500",
              focusRing: "focus:ring-red-500",
              darkHoverBorder: "dark:hover:border-red-500",
            }}
          >
            Unsubscribe
          </Button>

          <Button
            variant="tertiary"
            colors={{
              text: "text-gray-500",
              hoverText: "hover:text-gray-700",
              focusRing: "focus:ring-gray-500",
              darkHoverText: "dark:hover:text-zinc-400",
            }}
          >
            Cancel
          </Button>
        </Section>
      </Container>

      {/* CONTENT CARD UI */}
      <Container
        title="Card"
        description="A card is a flexible and extensible content container"
      >
        {/* SECTION SIMPLE CARD */}
        <Section
          title="Simple"
          description="Simple card display content and can provide a distinct link that can be selected."
        >
          {/* Simple Card */}
          <ContentCard
            title="Card Title"
            subtitle="CARD SUBTITLE"
            plaintext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero sed quisquam in doloremque, doloribus, iste "
            link={{
              url: "#",
              text: "Card link",
            }}
          ></ContentCard>
        </Section>

        {/* SECTION SIMPLE CARD WITH HEADER AND FOOTER */}
        <Section
          title="Simple card with a header and footer"
          description="add an optional header and footer within a card."
        >
          {/* Simple Card with header*/}
          <ContentCard
            header="Featured"
            title="Card Title"
            subtitle="card subtitle"
            plaintext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero sed quisquam in doloremque, doloribus, iste "
            link={{
              url: "#",
              text: "Card link",
            }}
          ></ContentCard>

          {/* Simple Card with footer*/}
          <ContentCard
            footer="Last updated 5 mins ago"
            title="Card Title"
            subtitle="card subtitle"
            plaintext="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vero sed quisquam in doloremque, doloribus, iste "
            link={{
              url: "#",
              text: "Card link",
            }}
          ></ContentCard>
        </Section>

        {/* CARD BLOCK LINK */}
        <Section
          title="Block Link"
          description="A simple card enchanced into a slectable block link"
        >
          {/* Vite card*/}
          <BlockLinkCard url="https://vitejs.dev/" text="Vite">
            <SiVite className="h-10 w-10" />
          </BlockLinkCard>

          {/* NextJS Card */}
          <BlockLinkCard url="https://nextjs.org/" text="Next.js">
            <SiNextdotjs className="h-10 w-10" />
          </BlockLinkCard>
        </Section>
      </Container>

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
    </Layout>
  );
}

export default App;
