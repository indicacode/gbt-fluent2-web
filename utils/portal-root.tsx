"use client"

import { ReactNode } from "react"

let portalRoot: ReactNode | undefined = undefined
if (typeof document !== "undefined") {
  portalRoot = document?.getElementById("portal-root") as ReactNode
}
export default portalRoot
