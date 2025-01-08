import { buttonVariants } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Link from "next/link";

export default async function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Navigation : /admin</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Link
          className={buttonVariants({ size: "lg", variant: "outline" })}
          href="/admin/citation/new"
        >
          Create citation
        </Link>
      </CardContent>
    </Card>
  );
}
