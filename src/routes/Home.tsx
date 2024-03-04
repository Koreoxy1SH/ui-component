import { Link } from "react-router-dom";
import { Container } from "../components/site/Container";
import { BlockLinkCard } from "../components/library/Card";
import { RxButton, RxIdCard, RxInput } from "react-icons/rx";

export const HomePage = () => {
  return (
    <Container title="Ui Components Home" description="Ballalalalalal">
      <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* <Link to="button">Button</Link>
        <Link to="card">Card</Link>
        <Link to="Input">Input</Link> */}

        <BlockLinkCard
          CustomLinkComponent={Link}
          CustomLinkProps={{
            to: "/button",
          }}
          text="Button"
          widthLimit="none"
        >
          <RxButton className="h-10 w-10" />
        </BlockLinkCard>

        <BlockLinkCard
          CustomLinkComponent={Link}
          CustomLinkProps={{
            to: "/card",
          }}
          text="Card"
          widthLimit="none"
        >
          <RxIdCard className="h-10 w-10" />
        </BlockLinkCard>

        <BlockLinkCard
          CustomLinkComponent={Link}
          CustomLinkProps={{
            to: "/input",
          }}
          text="Input"
          widthLimit="none"
        >
          <RxInput className="h-10 w-10" />
        </BlockLinkCard>
      </div>
    </Container>
  );
};
