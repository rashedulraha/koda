import Link from "next/link";
import { Call_to_Action } from "../../_Types/Types";
import { MoveUpRight } from "lucide-react";

const Call_To_Action = ({ data }: Call_to_Action) => {
  return (
    <div className="flex space-y-3 flex-col">
      <h2 className="text-sm md:text-lg text-foreground font-medium">
        {data.title}
      </h2>
      <p className="text-muted-foreground">{data.subTitle}</p>
      <Link href={"/join-slack"} className="w-fit flex items-center gap-1">
        {data.action} <MoveUpRight size={15} />
      </Link>
    </div>
  );
};

export default Call_To_Action;
