import { Button } from "./ui/button";

export function OwedCard({ title, amount }) {
  return (
    <Button
      className="flex h-auto w-full flex-col items-start rounded-xl p-6"
      variant={"owed"}
    >
      <span className="text-lg font-semibold">{title}</span>
      <span className="text-2xl font-bold">&#8377;{amount}</span>
    </Button>
  );
}
