import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactCard } from "../../_Types/Types";

const CardComponent = ({ data }: ContactCard) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-sm md:text-lg text-foreground">
            {data.title}
          </CardTitle>
          <CardDescription className="text-sm md:text-lg text-muted-foreground">
            {data.subTitle}
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>{data.button}</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponent;
