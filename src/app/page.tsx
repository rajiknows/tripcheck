"use client";

import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import Link from "next/link";
import { OweCard } from "~/components/owecard";
import { OwedCard } from "~/components/owedcard";
import { useState } from "react";

export default function Home() {
  const [owe, setOwe] = useState(0);
  const [owed, setOwed] = useState(0);
  return (
    <div className="space-y-4">
      {/* <h1 className="text-2xl font-bold">Welcome to TripCheck</h1> */}

      <div className="flex w-full gap-4">
        <OweCard title="You Owe" amount={owe} />
        <OwedCard title="You Are Owed" amount={owed} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Button asChild>
            <Link href="/groups/create">Create New Group</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/groups">View My Groups</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
