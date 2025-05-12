"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WeatherCard } from "@/components/weather-card"
import { Search } from "@/components/search"
import { Plus, Trash2, Sun, CloudSun, Cloud, CloudRain } from "lucide-react"

export default function DashboardPage() {
  // In a real app, these would come from a database
  const [savedLocations, setSavedLocations] = useState([
    {
      id: 1,
      city: "New York",
      country: "US",
      temperature: 23,
      condition: "Partly Cloudy",
      high: 26,
      low: 18,
      icon: "cloud-sun" as const,
    },
    {
      id: 2,
      city: "London",
      country: "UK",
      temperature: 18,
      condition: "Rainy",
      high: 20,
      low: 15,
      icon: "cloud-rain" as const,
    },
    {
      id: 3,
      city: "Tokyo",
      country: "JP",
      temperature: 28,
      condition: "Sunny",
      high: 30,
      low: 25,
      icon: "sun" as const,
    },
  ])

  const removeLocation = (id: number) => {
    setSavedLocations(savedLocations.filter((location) => location.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your saved locations</p>
        </div>
        <Search />
      </div>

      <div className="mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Current Location</CardTitle>
            <CardDescription>Based on your device location</CardDescription>
          </CardHeader>
          <CardContent>
            <WeatherCard
              city="San Francisco"
              country="US"
              temperature={21}
              condition="Clear"
              high={24}
              low={17}
              icon="sun"
            />
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Saved Locations</h2>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Location
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {savedLocations.map((location) => (
            <div key={location.id} className="relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-2 z-10 bg-white dark:bg-gray-800"
                onClick={() => removeLocation(location.id)}
              >
                <Trash2 className="h-4 w-4 text-red-500" />
              </Button>
              <WeatherCard
                city={location.city}
                country={location.country}
                temperature={location.temperature}
                condition={location.condition}
                high={location.high}
                low={location.low}
                icon={location.icon}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
            <CardDescription>Extended forecast for San Francisco, US</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
              {Array.from({ length: 7 }).map((_, i) => {
                const date = new Date()
                date.setDate(date.getDate() + i)
                return (
                  <div key={i} className="flex flex-col items-center p-2 text-center">
                    <div className="font-medium">{date.toLocaleDateString("en-US", { weekday: "short" })}</div>
                    <div className="text-xs text-gray-500">
                      {date.toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </div>
                    {i === 0 ? (
                      <Sun className="my-2 h-8 w-8 text-yellow-500" />
                    ) : i === 1 || i === 5 ? (
                      <CloudSun className="my-2 h-8 w-8 text-orange-500" />
                    ) : i === 2 || i === 3 ? (
                      <Cloud className="my-2 h-8 w-8 text-gray-500" />
                    ) : (
                      <CloudRain className="my-2 h-8 w-8 text-blue-500" />
                    )}
                    <div className="font-bold">{Math.floor(15 + Math.random() * 15)}°</div>
                    <div className="text-xs text-gray-500">{Math.floor(10 + Math.random() * 10)}°</div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
