import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function ImageAvatar() {
  return (
    <Avatar>
      <AvatarImage
        src="https://www.facebook.com/photo/?fbid=1407576160705550&set=a.110844813712031"
        alt="@shadcn"
        className="grayscale"
      />
      <AvatarFallback>RH</AvatarFallback>
    </Avatar>
  );
}
