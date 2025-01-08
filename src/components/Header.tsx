import { PenSquare } from "lucide-react";
import { Card } from "./ui/card";

export function Header() {
  return (
    <Card className="p-4">
      <p className="flex ">
        Citation Master <PenSquare />{" "}
      </p>
    </Card>
  );
}
