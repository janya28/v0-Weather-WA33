import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export function WeatherAlerts() {
  // In a real app, these would come from the API
  const alerts = [
    {
      id: 1,
      title: "Severe Thunderstorm Warning",
      description: "Possible heavy rain and strong winds in New York area until 8:00 PM.",
    },
  ]

  if (alerts.length === 0) {
    return null
  }

  return (
    <div className="w-full max-w-3xl space-y-4">
      <h3 className="text-xl font-bold">Weather Alerts</h3>
      {alerts.map((alert) => (
        <Alert key={alert.id} variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}
