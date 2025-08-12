"use client";

import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./alert-dialog";
import { AspectRatio } from "./aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";
import { Button } from "./button";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./breadcrumb";
import { Calendar } from "./calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { Checkbox } from "./checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./collapsible";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./command";
import { AlertTriangle, User, Image as ImageIcon, Bell, CheckCircle, ChevronDown, Home, Settings, Users, Calendar as CalendarIcon, BarChart3, FileText, Search } from "lucide-react";

export function UIComponentsDemo() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">UI Components Demo</h1>
        <p className="text-muted-foreground">Showcasing all the new UI components</p>
      </div>

      {/* Button Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Default Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon"><Bell className="h-4 w-4" /></Button>
        </div>
      </section>

      {/* Badge Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge className="bg-blue-500 text-white">Custom</Badge>
        </div>
      </section>

      {/* Alert Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        <div className="space-y-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              This is a default alert with an icon and description.
            </AlertDescription>
          </Alert>
          
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              This is a destructive alert for errors and warnings.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Avatar Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Avatars</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          
          <Avatar>
            <AvatarFallback>
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
          
          <Avatar className="h-16 w-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="Large avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </section>

      {/* Aspect Ratio Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Aspect Ratio</h2>
        <div className="max-w-md">
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">16:9 Aspect Ratio</p>
              </div>
            </div>
          </AspectRatio>
        </div>
      </section>

      {/* Alert Dialog Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alert Dialog</h2>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Open Alert Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      {/* Breadcrumb Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Breadcrumbs</h2>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/settings">Settings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Profile</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

      {/* Calendar Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Calendar</h2>
        <div className="max-w-sm">
          <Calendar
            mode="single"
            selected={new Date()}
            className="rounded-md border"
          />
        </div>
      </section>

      {/* Card Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>This is the main content of the card.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Save</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Another Card</CardTitle>
              <CardDescription>With different content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Team members</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Carousel</h2>
        <div className="max-w-2xl">
          <Carousel className="w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">Slide {index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Checkbox Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Checkboxes</h2>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Accept terms and conditions
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="newsletter" defaultChecked />
          <label htmlFor="newsletter" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Subscribe to newsletter
          </label>
        </div>
      </section>

      {/* Collapsible Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Collapsible</h2>
        <Collapsible className="w-full max-w-md">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Click to expand
              <ChevronDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              This content can be collapsed and expanded. It's useful for organizing information without taking up too much space.
            </div>
          </CollapsibleContent>
        </Collapsible>
      </section>

      {/* Command Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Palette</h2>
        <div className="max-w-md">
          <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  <span>Analytics</span>
                </CommandItem>
                <CommandItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>Documents</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Interactive Demo</h2>
        <div className="flex gap-4">
          <Button onClick={() => setShowAlert(!showAlert)}>
            {showAlert ? 'Hide' : 'Show'} Custom Alert
          </Button>
          
          {showAlert && (
            <Alert className="animate-in fade-in-0 duration-300">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <AlertTitle>Interactive Alert</AlertTitle>
              <AlertDescription>
                This alert can be toggled on and off!
              </AlertDescription>
            </Alert>
          )}
        </div>
      </section>
    </div>
  );
}
