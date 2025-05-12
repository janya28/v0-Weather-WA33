"use client"

import { useEffect, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Bell, Info } from "lucide-react"

interface WeatherAlert {
  id: number
  type: "severe" | "warning" | "watch"
  title: string
  description: string
  location: string
  time: string
  expires: string
}

export default function AlertsPage() {
  const [alerts, setAlerts] = useState<WeatherAlert[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, this would fetch from the API
    // fetch("/api/alerts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setAlerts(data)
    //     setLoading(false)
    //   })

    // Mock data for demo
    setTimeout(() => {
      setAlerts([
        {
          id: 1,
          type: "severe",
          title: "Severe Thunderstorm Warning",
          description: "Possible heavy rain and strong winds in New York area until 8:00 PM.",
          location: "New York, US",
          time: "2023-07-15T14:00:00Z",
          expires: "2023-07-15T20:00:00Z",
        },
        {
          id: 2,
          type: "warning",
          title: "Heat Advisory",
          description: "Temperatures expected to reach 95°F (35°C) in Los Angeles area.",
          location: "Los Angeles, US",
          time: "2023-07-15T08:00:00Z",
          expires: "2023-07-15T20:00:00Z",
        },
        {
          id: 3,
          type: "watch",
          title: "Flood Watch",
          description: "Potential for flooding in Miami area due to heavy rainfall.",
          location: "Miami, US",
          time: "2023-07-15T10:00:00Z",
          expires: "2023-07-16T10:00:00Z",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "severe":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case "watch":
        return <Info className="h-5 w-5 text-blue-500" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  const getAlertVariant = (type: string) => {
    switch (type) {
      case "severe":
        return "destructive"
      case "warning":
        return "default"
      case "watch":
        return "outline"
      default:
        return "default"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Weather Alerts</h1>
        <p className="text-gray-500 dark:text-gray-400">Stay informed about severe weather conditions</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-sky-500"></div>
            <p>Loading alerts...</p>
          </div>
        </div>
      ) : alerts.length > 0 ? (
        <div className="grid gap-4">
          {alerts.map((alert) => (
            <Alert key={alert.id} variant={getAlertVariant(alert.type) as any}>
              <div className="flex items-start gap-4">
                {getAlertIcon(alert.type)}
                <div className="grid gap-1">
                  <div className="flex items-center gap-2">
                    <AlertTitle>{alert.title}</AlertTitle>
                    <Badge
                      variant={
                        alert.type === "severe" ? "destructive" : alert.type === "warning" ? "default" : "outline"
                      }
                    >
                      {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                    </Badge>
                  </div>
                  <AlertDescription>
                    <div className="grid gap-2">
                      <p>{alert.description}</p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <p>Location: {alert.location}</p>
                        <p>Issued: {formatDate(alert.time)}</p>
                        <p>Expires: {formatDate(alert.expires)}</p>
                      </div>
                    </div>
                  </AlertDescription>
                </div>
              </div>
            </Alert>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>No Active Alerts</CardTitle>
            <CardDescription>There are currently no weather alerts for your saved locations</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 dark:text-gray-400">
              We'll notify you when severe weather conditions are expected in your area.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
