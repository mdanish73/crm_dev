"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export default function Profits() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} color={"bg-green-500"} className="w-[100%]" />
}
