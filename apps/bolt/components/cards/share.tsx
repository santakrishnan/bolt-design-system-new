"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york-v4/ui/avatar"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york-v4/ui/card"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/registry/new-york-v4/ui/item"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Separator } from "@/registry/new-york-v4/ui/separator"

const people = [
  {
    name: "Olivia Martin",
    email: "m@example.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Isabella Nguyen",
    email: "b@example.com",
    avatar: "/avatars/04.png",
  },
  {
    name: "Sofia Davis",
    email: "p@example.com",
    avatar: "/avatars/05.png",
  },
  {
    name: "Ethan Thompson",
    email: "e@example.com",
    avatar: "/avatars/01.png",
  },
]
export function CardsShare() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Share this document</CardTitle>
        <CardDescription>
          Anyone with the link can view this document.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Label className="sr-only" htmlFor="link">
            Link
          </Label>
          <Input
            className="h-8"
            id="link"
            readOnly
            value="http://example.com/link/to/document"
          />
          <Button className="shadow-none" size="sm" variant="outline">
            Copy Link
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <div className="font-medium text-sm">People with access</div>
          <ItemGroup>
            {people.map((person) => (
              <Item className="px-0 py-2" key={person.email}>
                <Avatar>
                  <AvatarImage alt="Image" src={person.avatar} />
                  <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <ItemContent>
                  <ItemTitle>{person.name}</ItemTitle>
                  <ItemDescription>{person.email}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <Select defaultValue="edit">
                    <SelectTrigger
                      aria-label="Edit"
                      className="ml-auto pr-2"
                      size="sm"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent align="end">
                      <SelectItem value="edit">Can edit</SelectItem>
                      <SelectItem value="view">Can view</SelectItem>
                    </SelectContent>
                  </Select>
                </ItemActions>
              </Item>
            ))}
          </ItemGroup>
        </div>
      </CardContent>
    </Card>
  )
}
