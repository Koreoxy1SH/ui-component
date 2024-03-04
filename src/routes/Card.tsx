import { Container } from "../components/site/Container";
import { Section } from "../components/site/Section";
import { BlockLinkCard, ContentCard } from "../components/library/Card";
import { SiNextdotjs, SiVite } from "react-icons/si";

export const CardPage = () => {
  return (
    <>
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
    </>
  );
};
