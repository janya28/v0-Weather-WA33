import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, this would fetch alerts from a weather API
  // and filter based on user preferences and locations

  const mockAlerts = [
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
  ]

  return NextResponse.json(mockAlerts)
}
