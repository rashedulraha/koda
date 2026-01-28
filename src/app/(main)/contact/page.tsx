import Container from "@/components/Responsive/Container";
import CardComponent from "./_Shared/Card/Card";
import { CiCircleCheck } from "react-icons/ci";

import Call_To_Action from "./_Shared/Call_To_Action/Call_To_Action";
import Link from "next/link";

const Contact = () => {
  return (
    <Container>
      <div className="mt-8 md:mt-14 lg:mt-20">
        <div className="text-center">
          <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold">
            How can we help?
          </h1>
          <p className="text-muted-foreground text-sm md:text-xl lg:text-lg mt-2 md:mt-3 lg:mt-5">
            Get in touch with our sales and support teams for <br /> demos,
            onboarding support, or product questions.
          </p>
        </div>
        <div className="flex items-center flex-col md:flex-row w-full gap-5 md:gap-8 my-5 md:my-10 lg:my-14 ">
          <div className="flex-1 w-full">
            <CardComponent
              data={{
                title: "Sales",
                subTitle:
                  "Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.",
                button: "Talk to sales",
              }}
            />
          </div>
          <div className="flex-1 w-full">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 my-5 md:my-10 lg:my-14">
          <div>
            <Call_To_Action
              data={{
                title: "Join the community",
                subTitle:
                  "More than 20,000 Linear users share questions and best practices in our Slack community.",
                action: "Join slack",
              }}
            />
          </div>
          <div>
            <Call_To_Action
              data={{
                title: "General communication",
                subTitle:
                  "For other queries, please get in touch with us via email.",
                action: "hello@linear.app",
              }}
            />
          </div>
          <div>
            <Call_To_Action
              data={{
                title: "Documentation",
                subTitle:
                  "Get an overview of Linear's features, integrations, and how to use them",
                action: "Koda docs",
              }}
            />
          </div>
          <div>
            <Call_To_Action
              data={{
                title: "Developers",
                subTitle:
                  "Learn how to use the GraphQL API and TypeScript SDK to extend Linear.",
                action: "Koda api",
              }}
            />
          </div>
        </div>

        <div className="mt-10 flex items-center gap-1 justify-center my-5 md:my-10 lg:my-14 text-blue-500 hover:underline ">
          <CiCircleCheck />

          <Link href={"/all-system-operation"}>All system operation</Link>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
