"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export default function Expenses() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(37), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} color={"bg-red-500"} className="w-[100%]" />
}
