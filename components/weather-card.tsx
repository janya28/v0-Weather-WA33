import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Cloud, CloudRain, CloudSun, MapPin, Sun } from "lucide-react"

interface WeatherCardProps {
  city: string
  country: string
  temperature: number
  condition: string
  high: number
  low: number
  icon: "sun" | "cloud" | "cloud-rain" | "cloud-sun"
}

export function WeatherCard({ city, country, temperature, condition, high, low, icon }: WeatherCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "sun":
        return <Sun className="h-8 w-8 text-yellow-500" />
      case "cloud":
        return <Cloud className="h-8 w-8 text-gray-500" />
      case "cloud-rain":
        return <CloudRain className="h-8 w-8 text-blue-500" />
      case "cloud-sun":
        return <CloudSun className="h-8 w-8 text-orange-500" />
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-sky-50 p-4 dark:bg-sky-900/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-sky-500" />
            <span className="font-medium">
              {city}, {country}
            </span>
          </div>
          {getIcon()}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid gap-2">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-bold">{temperature}°C</span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{condition}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>H: {high}°</span>
            <span>L: {low}°</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
