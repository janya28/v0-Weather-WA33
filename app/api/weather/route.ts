import { NextResponse } from "next/server"

// This would be a real API key in a production environment
// const API_KEY = process.env.OPENWEATHER_API_KEY

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")

  if (!city) {
    return NextResponse.json({ error: "City parameter is required" }, { status: 400 })
  }

  // In a real app, this would make a request to the OpenWeather API
  // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  // const data = await response.json()

  // For demo purposes, return mock data
  const mockData = {
    location: {
      name: city,
      country: "US",
      lat: 40.7128,
      lon: -74.006,
    },
    current: {
      temp_c: 23,
      condition: {
        text: "Partly cloudy",
        icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
      },
      wind_kph: 15,
      humidity: 65,
      feelslike_c: 24,
      uv: 5,
    },
    forecast: {
      forecastday: [
        {
          date: new Date().toISOString().split("T")[0],
          day: {
            maxtemp_c: 26,
            mintemp_c: 18,
            condition: {
              text: "Partly cloudy",
              icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
            },
          },
          hour: Array.from({ length: 24 }, (_, i) => ({
            time: `${i}:00`,
            temp_c: Math.floor(18 + Math.random() * 8),
            condition: {
              text: i > 6 && i < 18 ? "Partly cloudy" : "Clear",
              icon:
                i > 6 && i < 18
                  ? "//cdn.weatherapi.com/weather/64x64/day/116.png"
                  : "//cdn.weatherapi.com/weather/64x64/night/113.png",
            },
          })),
        },
      ],
    },
    alerts: {
      alert: [
        {
          headline: "Severe Thunderstorm Warning",
          severity: "Moderate",
          urgency: "Expected",
          areas: "New York City",
          desc: "The National Weather Service has issued a Severe Thunderstorm Warning for New York City until 8:00 PM.",
          effective: "2023-07-15T14:00:00Z",
          expires: "2023-07-15T20:00:00Z",
        },
      ],
    },
  }

  return NextResponse.json(mockData)
}
