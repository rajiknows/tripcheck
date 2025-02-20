"use client";

import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Welcome to TripCheck</h1>

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
