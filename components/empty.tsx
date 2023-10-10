import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center">
      <div className="relative left-6 h-52 w-72">
        <Image alt="Empty" fill src="/static/images/empty.png" />
      </div>
      <p className=" p-7 text-muted-foreground text-md text-center">{label}</p>
    </div>
  );
};
