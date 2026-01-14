import Link from "next/link";

interface props {
  data: {
    title: string;
    subTitle: string;
    to: string;
  };
}

const NavLink = ({ data }: props) => {
  return (
    <div className="hover:bg-background/30 p-3 rounded">
      <Link href={"/plan"}>
        <h2 className="text-sm font-medium ">{data.title}</h2>
        <p className="text-sm text-muted-foreground ">{data.subTitle}</p>
      </Link>
    </div>
  );
};

export default NavLink;
