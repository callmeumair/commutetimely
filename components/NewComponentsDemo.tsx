"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Separator } from "./separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar";
import { Skeleton } from "./skeleton";

export function NewComponentsDemo() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">New Components Demo</h1>
        <p className="text-lg text-muted-foreground">
          Showcasing the newly added UI components
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Select Component Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Select Component</CardTitle>
            <CardDescription>
              A customizable select dropdown with keyboard navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={selectedValue} onValueChange={setSelectedValue}>
              <SelectTrigger>
                <SelectValue placeholder="Choose an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              Selected: {selectedValue || "None"}
            </p>
          </CardContent>
        </Card>

        {/* Separator Component Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Separator Component</CardTitle>
            <CardDescription>
              Horizontal and vertical separators for content organization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p>Content above</p>
              <Separator />
              <p>Content below</p>
            </div>
            <div className="flex items-center space-x-2">
              <span>Left</span>
              <Separator orientation="vertical" className="h-4" />
              <span>Right</span>
            </div>
          </CardContent>
        </Card>

        {/* Sheet Component Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Sheet Component</CardTitle>
            <CardDescription>
              A slide-out panel for mobile-friendly interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button>Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Sheet Title</SheetTitle>
                  <SheetDescription>
                    This is a sheet component that slides in from the side.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p>Sheet content goes here...</p>
                </div>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>

        {/* Skeleton Component Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Skeleton Component</CardTitle>
            <CardDescription>
              Loading placeholders for better user experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-8 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar Component Demo */}
      <Card>
        <CardHeader>
          <CardTitle>Sidebar Component</CardTitle>
          <CardDescription>
            A responsive sidebar with mobile support and keyboard shortcuts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SidebarProvider>
            <div className="flex h-96 border rounded-lg">
              <Sidebar>
                <SidebarHeader>
                  <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Dashboard">
                          Dashboard
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Settings">
                          Settings
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Profile">
                          Profile
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <SidebarTrigger />
                </SidebarFooter>
              </Sidebar>
              <SidebarInset>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Main Content</h3>
                  <p className="text-muted-foreground">
                    This is the main content area. Use the sidebar trigger button
                    or press Cmd/Ctrl + B to toggle the sidebar.
                  </p>
                </div>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          All components include proper accessibility features, keyboard navigation,
          and responsive design.
        </p>
      </div>
    </div>
  );
}
