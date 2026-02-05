"use client"

import {
  IconArrowRight,
  IconBrandGithubCopilot,
  IconChevronDown,
  IconCircleCheck,
  IconCloudCode,
  IconHeart,
  IconMinus,
  IconPin,
  IconPlus,
  IconUserCircle,
} from "@tabler/icons-react"
import {
  AlertTriangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  AudioLinesIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  FlipHorizontalIcon,
  FlipVerticalIcon,
  MoreHorizontalIcon,
  PercentIcon,
  RotateCwIcon,
  SearchIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react"
import { useState } from "react"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/registry/new-york-v4/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"
import { Field, FieldGroup } from "@/registry/new-york-v4/ui/field"
import { Input } from "@/registry/new-york-v4/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/new-york-v4/ui/input-group"
import { Label } from "@/registry/new-york-v4/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york-v4/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york-v4/ui/select"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { Textarea } from "@/registry/new-york-v4/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/new-york-v4/ui/tooltip"

export function ButtonGroupDemo() {
  const [currency, setCurrency] = useState("$")
  return (
    <div className="flex gap-12">
      <div className="flex max-w-sm flex-col gap-6">
        <ButtonGroup>
          <Button>Button</Button>
          <Button>
            Get Started <IconArrowRight />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button>Button</Button>
          <ButtonGroupSeparator className="bg-primary/80" />
          <Button>
            Get Started <IconArrowRight />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Button</Button>
          <Input placeholder="Type something here..." />
        </ButtonGroup>
        <ButtonGroup>
          <Input placeholder="Type something here..." />
          <Button variant="outline">Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Button</Button>
          <Button variant="outline">Another Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText>Text</ButtonGroupText>
          <Button variant="outline">Another Button</Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText asChild>
            <Label htmlFor="input">
              <IconCloudCode /> GPU Size
            </Label>
          </ButtonGroupText>
          <Input id="input" placeholder="Type something here..." />
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroupText>Prefix</ButtonGroupText>
          <Input id="input" placeholder="Type something here..." />
          <ButtonGroupText>Suffix</ButtonGroupText>
        </ButtonGroup>
        <div className="flex gap-4">
          <ButtonGroup>
            <Button variant="outline">Update</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Disable</DropdownMenuItem>
                <DropdownMenuItem variant="destructive">
                  Uninstall
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
          <ButtonGroup className="[--radius:9999px]">
            <Button variant="outline">Follow</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="!pl-2" variant="outline">
                  <ChevronDownIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="[--radius:0.95rem]">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <VolumeOffIcon />
                    Mute Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CheckIcon />
                    Mark as Read
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <AlertTriangleIcon />
                    Report Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserRoundXIcon />
                    Block User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShareIcon />
                    Share Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    Copy Conversation
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">
                    <TrashIcon />
                    Delete Conversation
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
          <ButtonGroup className="[--radius:0.9rem]">
            <Button variant="secondary">Actions</Button>
            <ButtonGroupSeparator />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="[--radius:0.9rem]">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <IconCircleCheck />
                    Select Messages
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconPin />
                    Edit Pins
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconUserCircle />
                    Set Up Name & Photo
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
        <Field>
          <Label htmlFor="amount">Amount</Label>
          <ButtonGroup>
            <Select onValueChange={setCurrency} value={currency}>
              <SelectTrigger className="font-mono">{currency}</SelectTrigger>
              <SelectContent>
                <SelectItem value="$">$</SelectItem>
                <SelectItem value="€">€</SelectItem>
                <SelectItem value="£">£</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Enter amount to send" />
            <Button variant="outline">
              <ArrowRightIcon />
            </Button>
          </ButtonGroup>
        </Field>
      </div>
      <div className="flex max-w-xs flex-col gap-6">
        <ButtonGroup className="[--spacing:0.2rem]">
          <Button variant="outline">
            <FlipHorizontalIcon />
          </Button>
          <Button variant="outline">
            <FlipVerticalIcon />
          </Button>
          <Button variant="outline">
            <RotateCwIcon />
          </Button>
          <InputGroup>
            <InputGroupInput placeholder="0.00" />
            <InputGroupAddon
              align="inline-end"
              className="text-muted-foreground"
            >
              <PercentIcon />
            </InputGroupAddon>
          </InputGroup>
        </ButtonGroup>
        <div className="flex gap-2 [--radius:0.95rem] [--ring:var(--color-blue-300)] [--spacing:0.22rem] **:[.shadow-xs]:shadow-none">
          <InputGroup>
            <InputGroupInput placeholder="Type to search..." />
            <InputGroupAddon
              align="inline-start"
              className="text-muted-foreground"
            >
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <ButtonGroup>
            <Button variant="outline">
              <IconBrandGithubCopilot />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <IconCloudCode />
                  <IconChevronDown />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="rounded-xl p-0 text-sm">
                <div className="px-4 py-3">
                  <div className="font-medium text-sm">Agent Tasks</div>
                </div>
                <Separator />
                <div className="p-4 *:[p:not(:last-child)]:mb-2">
                  <Textarea
                    className="mb-4 resize-none"
                    placeholder="Describe your task in natural language."
                  />
                  <p className="font-medium">Start a new task with Copilot</p>
                  <p className="text-muted-foreground">
                    Describe your task in natural language. Copilot will work in
                    the background and open a pull request for your review.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </ButtonGroup>
        </div>
        <FieldGroup className="grid grid-cols-2 gap-4 [--spacing:0.22rem]">
          <Field>
            <Label htmlFor="width">Width</Label>
            <ButtonGroup>
              <InputGroup>
                <InputGroupInput id="width" />
                <InputGroupAddon className="text-muted-foreground">
                  W
                </InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className="text-muted-foreground"
                >
                  px
                </InputGroupAddon>
              </InputGroup>
              <Button size="icon" variant="outline">
                <IconMinus />
              </Button>
              <Button size="icon" variant="outline">
                <IconPlus />
              </Button>
            </ButtonGroup>
          </Field>
          <Field className="w-full">
            <Label htmlFor="color">Color</Label>
            <ButtonGroup className="w-full">
              <InputGroup>
                <InputGroupInput id="color" />
                <InputGroupAddon align="inline-start">
                  <Popover>
                    <PopoverTrigger asChild>
                      <InputGroupButton>
                        <span className="size-4 rounded-xs bg-blue-600" />
                      </InputGroupButton>
                    </PopoverTrigger>
                    <PopoverContent
                      align="start"
                      alignOffset={-8}
                      className="max-w-48 rounded-lg p-2"
                      sideOffset={8}
                    >
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "#EA4335", // Red
                          "#FBBC04", // Yellow
                          "#34A853", // Green
                          "#4285F4", // Blue
                          "#9333EA", // Purple
                          "#EC4899", // Pink
                          "#10B981", // Emerald
                          "#F97316", // Orange
                          "#6366F1", // Indigo
                          "#14B8A6", // Teal
                          "#8B5CF6", // Violet
                          "#F59E0B", // Amber
                        ].map((color) => (
                          <div
                            className="size-6 cursor-pointer rounded-sm transition-transform hover:scale-110"
                            key={color}
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                </InputGroupAddon>
                <InputGroupAddon
                  align="inline-end"
                  className="text-muted-foreground"
                >
                  %
                </InputGroupAddon>
              </InputGroup>
            </ButtonGroup>
          </Field>
        </FieldGroup>
        <ButtonGroup>
          <Button variant="outline">
            <IconHeart /> Like
          </Button>
          <Button
            asChild
            className="pointer-events-none px-2 text-muted-foreground"
            variant="outline"
          >
            <span>1.2K</span>
          </Button>
        </ButtonGroup>
        <ExportButtonGroup />
        <ButtonGroup>
          <Select defaultValue="hours">
            <SelectTrigger id="duration">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hours">Hours</SelectItem>
              <SelectItem value="days">Days</SelectItem>
              <SelectItem value="weeks">Weeks</SelectItem>
            </SelectContent>
          </Select>
          <Input />
        </ButtonGroup>
        <ButtonGroup className="[--radius:9999rem]">
          <ButtonGroup>
            <Button size="icon" variant="outline">
              <IconPlus />
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <InputGroup>
              <InputGroupInput placeholder="Send a message..." />
              <Tooltip>
                <TooltipTrigger asChild>
                  <InputGroupAddon align="inline-end">
                    <AudioLinesIcon />
                  </InputGroupAddon>
                </TooltipTrigger>
                <TooltipContent>Voice Mode</TooltipContent>
              </Tooltip>
            </InputGroup>
          </ButtonGroup>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="sm" variant="outline">
            <ArrowLeftIcon />
            Previous
          </Button>
          <Button size="sm" variant="outline">
            1
          </Button>
          <Button size="sm" variant="outline">
            2
          </Button>
          <Button size="sm" variant="outline">
            3
          </Button>
          <Button size="sm" variant="outline">
            4
          </Button>
          <Button size="sm" variant="outline">
            5
          </Button>
          <Button size="sm" variant="outline">
            Next
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup className="[--radius:0.9rem] [--spacing:0.22rem]">
          <ButtonGroup>
            <Button variant="outline">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">4</Button>
            <Button variant="outline">5</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size="icon" variant="outline">
              <ArrowLeftIcon />
            </Button>
            <Button size="icon" variant="outline">
              <ArrowRightIcon />
            </Button>
          </ButtonGroup>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonGroup>
            <Button variant="outline">
              <ArrowLeftIcon />
            </Button>
            <Button variant="outline">
              <ArrowRightIcon />
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Single navigation button">
            <Button size="icon" variant="outline">
              <ArrowLeftIcon />
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
      <div className="flex max-w-xs flex-col gap-6">
        <Field>
          <Label id="alignment-label">Text Alignment</Label>
          <ButtonGroup aria-labelledby="alignment-label">
            <Button size="sm" variant="outline">
              Left
            </Button>
            <Button size="sm" variant="outline">
              Center
            </Button>
            <Button size="sm" variant="outline">
              Right
            </Button>
            <Button size="sm" variant="outline">
              Justify
            </Button>
          </ButtonGroup>
        </Field>
        <div className="flex gap-6">
          <ButtonGroup
            aria-label="Media controls"
            className="h-fit"
            orientation="vertical"
          >
            <Button size="icon" variant="outline">
              <IconPlus />
            </Button>
            <Button size="icon" variant="outline">
              <IconMinus />
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Design tools palette" orientation="vertical">
            <ButtonGroup orientation="vertical">
              <Button size="icon" variant="outline">
                <SearchIcon />
              </Button>
              <Button size="icon" variant="outline">
                <CopyIcon />
              </Button>
              <Button size="icon" variant="outline">
                <ShareIcon />
              </Button>
            </ButtonGroup>
            <ButtonGroup orientation="vertical">
              <Button size="icon" variant="outline">
                <FlipHorizontalIcon />
              </Button>
              <Button size="icon" variant="outline">
                <FlipVerticalIcon />
              </Button>
              <Button size="icon" variant="outline">
                <RotateCwIcon />
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button size="icon" variant="outline">
                <TrashIcon />
              </Button>
            </ButtonGroup>
          </ButtonGroup>
          <ButtonGroup orientation="vertical">
            <Button size="sm" variant="outline">
              <IconPlus /> Increase
            </Button>
            <Button size="sm" variant="outline">
              <IconMinus /> Decrease
            </Button>
          </ButtonGroup>
          <ButtonGroup orientation="vertical">
            <Button size="sm" variant="secondary">
              <IconPlus /> Increase
            </Button>
            <ButtonGroupSeparator orientation="horizontal" />
            <Button size="sm" variant="secondary">
              <IconMinus /> Decrease
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  )
}

function ExportButtonGroup() {
  const [exportType, setExportType] = useState("pdf")

  return (
    <ButtonGroup>
      <Input />
      <Select onValueChange={setExportType} value={exportType}>
        <SelectTrigger>
          <SelectValue asChild>
            <span>{exportType}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem value="pdf">pdf</SelectItem>
          <SelectItem value="xlsx">xlsx</SelectItem>
          <SelectItem value="csv">csv</SelectItem>
          <SelectItem value="json">json</SelectItem>
        </SelectContent>
      </Select>
    </ButtonGroup>
  )
}
