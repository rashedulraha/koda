import Link from "next/link";
import { menuLinkType, props } from "../_Types/Types";

export const NavLink = ({ data }: props) => {
  return (
    <div className="hover:bg-background/30 p-2 rounded w-full">
      <Link href={data.to}>
        <h2 className="text-sm font-medium">{data.title}</h2>
        <p className="text-sm text-muted-foreground">{data.subTitle}</p>
      </Link>
    </div>
  );
};

export const MenuLink = ({ data }: menuLinkType) => {
  return (
    <div>
      <Link
        href={data.to}
        className="py-2 text-muted-foreground px-3 rounded-md hover:bg-(--nav-link-hover) hover:text-foreground">
        {data.label}
      </Link>
    </div>
  );
};
