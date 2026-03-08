import Container from "@/components/Responsive/Container";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Wifi } from "lucide-react";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <div className="mt-8 md:mt-14 lg:mt-20">
        <h1 className="capitalize font-bold text-lg md:text-2xl"> New</h1>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-10 flex items-end justify-between ">
        <div className="font-normal text-foreground text-sm md:text-base flex gap-5 capitalize">
          <Link href={"/new"}>All</Link>
          <Link href={"/changelog"}>Changelog</Link>
          <Link href={"/community"}>Community</Link>
          <Link href={"/news"}>News</Link>
          <Link href={"/craft"}>Craft</Link>
          <Link href={"/ai"}>Ai</Link>
          <Link href={"/practices"}>Practices</Link>
          <Link href={"/press"}>Press</Link>
        </div>
        <div>
          <Field>
            <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
            <ButtonGroup>
              <Input id="input-button-group" placeholder="Type to search..." />
              <Button variant="outline">Search</Button>
              <Button variant="outline">
                <Wifi />
              </Button>
            </ButtonGroup>
          </Field>
        </div>
      </div>

      <div className="mt-5 md:mt-8 lg:mt-10">{children}</div>
    </Container>
  );
};

export default layout;
