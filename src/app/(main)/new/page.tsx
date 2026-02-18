import prisma from "@/lib/prisma";

const New = async () => {
  // check get data

  const users = await prisma.user.findMany();
  console.log(users);

  return (
    <div>
      <h1>New </h1>
    </div>
  );
};

export default New;
