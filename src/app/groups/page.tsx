import { Button } from "~/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card"
import Link from "next/link"

export default function Groups() {
  // This is just mock data for now
  const groups = [
    { id: 1, name: "Summer Vacation 2023" },
    { id: 2, name: "Road Trip" },
  ]

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">My Groups</h1>
      <div className="grid gap-4">
        {groups.map((group) => (
          <Card key={group.id}>
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={`/groups/${group.id}`}>View Group</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button asChild className="w-full">
        <Link href="/groups/create">Create New Group</Link>
      </Button>
    </div>
  )
}

