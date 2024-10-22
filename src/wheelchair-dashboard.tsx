import React from 'react'
import { Menu, Battery, MapPin, Ticket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const wheelchairData = [
  { id: 1, batteryLevel: 85, location: "Main Lobby", ticketNumber: "T1001" },
  { id: 2, batteryLevel: 72, location: "Emergency Room", ticketNumber: "T1002" },
  { id: 3, batteryLevel: 95, location: "Cafeteria", ticketNumber: "T1003" },
  { id: 4, batteryLevel: 60, location: "Radiology", ticketNumber: "T1004" },
  { id: 5, batteryLevel: 88, location: "Pediatrics", ticketNumber: "T1005" },
  { id: 6, batteryLevel: 45, location: "Cardiology", ticketNumber: "T1006" },
  { id: 7, batteryLevel: 79, location: "Orthopedics", ticketNumber: "T1007" },
  { id: 8, batteryLevel: 91, location: "Neurology", ticketNumber: "T1008" },
  { id: 9, batteryLevel: 55, location: "Oncology", ticketNumber: "T1009" },
  { id: 10, batteryLevel: 82, location: "Physical Therapy", ticketNumber: "T1010" },
]

export default function WheelchairDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#" className="text-sm font-medium hover:underline">Manage Carts</a>
                <a href="#" className="text-sm font-medium hover:underline">Scheduled Transfers</a>
                <a href="#" className="text-sm font-medium hover:underline">Error Reports</a>
                <a href="#" className="text-sm font-medium hover:underline">Settings</a>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="mr-4 hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Manage Carts</a>
              <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Scheduled Transfers</a>
              <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Error Reports</a>
              <a href="#" className="transition-colors hover:text-foreground/80 text-foreground/60">Settings</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Wheelchair Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wheelchairData.map((wheelchair) => (
            <Card key={wheelchair.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Wheelchair {wheelchair.id}
                </CardTitle>
                <span role="img" aria-label="wheelchair" className="text-2xl">♿️</span>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Battery className="h-4 w-4" />
                  <span>{wheelchair.batteryLevel}%</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{wheelchair.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Ticket className="h-4 w-4" />
                  <span>{wheelchair.ticketNumber}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}