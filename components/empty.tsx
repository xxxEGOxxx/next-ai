import Image from "next/image";
import { Bot } from "lucide-react";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center">
      {/* <div className="relative left-[36px] h-52 w-72">
        <Image alt="Empty" fill src="/empty.png" />
        <Bot className="h-52 w-52" />
      </div> */}
      <p className=" p-7 text-muted-foreground text-md text-center">{label}</p>
    </div>
  );
};
