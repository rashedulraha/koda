import Container from "@/components/Responsive/Container";
import CardComponent from "./_Shared/Card/Card";

const Contact = () => {
  return (
    <Container>
      <div className="mt-8 md:mt-14 lg:mt-20">
        <div className="text-center">
          <h1 className="text-foreground text-3xl md:text-5xl lg:text-6xl font-bold">
            How can we help?
          </h1>
          <p className="text-muted-foreground text-sm md:text-xl lg:text-lg mt-2 md:mt-3 lg:mt-5">
            Get in touch with our sales and support teams for <br /> demos,
            onboarding support, or product questions.
          </p>
        </div>
        <div className="flex items-center gap-3 md:gap-5 my-5 md:my-10 lg:my-14 ">
          <div className="flex-1">
            <CardComponent
              data={{
                title: "Sales",
                subTitle:
                  "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
                button: "Talk to sales",
              }}
            />
          </div>
          <div className="flex-1">
            <CardComponent
              data={{
                title: "Help and support",
                subTitle:
                  "Ask product questions, report problems, or leave feedback.",
                button: "Contact support",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
