import Container from "@/components/Responsive/Container";

const Contact = () => {
  return (
    <Container>
      <div className="my-8 md:my-14 lg:my-20">
        <div className="text-center">
          <h1 className="text-foreground text-3xl md:text-5xl lg:text-6xl font-bold">
            How can we help?
          </h1>
          <p className="text-muted-foreground text-sm md:text-xl lg:text-lg mt-2 md:mt-3 lg:mt-5">
            Get in touch with our sales and support teams for <br /> demos,
            onboarding support, or product questions.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
