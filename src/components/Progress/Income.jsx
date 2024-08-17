"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export default function Income() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(73), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} color={"bg-yellow-500"} className="w-[100%] mb-2" />
}
