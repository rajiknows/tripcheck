import { Button } from "./ui/button";

export function OweCard({ title, amount }) {
  return (
    <Button
      className="flex h-auto w-full flex-col items-start rounded-xl p-6 text-white"
      variant={"owe"}
    >
      <span className="text-lg font-semibold">{title}</span>
      {/* indian rupee symbol+amount */}
      <span className="text-2xl font-bold">&#8377;{amount}</span>
    </Button>
  );
}
