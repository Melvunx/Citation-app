"use client";
import { Card, CardHeader, CardTitle } from "@/src/components/ui/card";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function Error() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Error occured !</CardTitle>
      </CardHeader>
    </Card>
  );
}
