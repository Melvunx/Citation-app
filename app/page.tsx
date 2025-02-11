import { buttonVariants } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Navigation</CardTitle>
      </CardHeader>
      <CardContent>
        <Link
          href="/admin"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Admin
        </Link>
      </CardContent>
      <CardDescription>App page</CardDescription>
    </Card>
  );
}
