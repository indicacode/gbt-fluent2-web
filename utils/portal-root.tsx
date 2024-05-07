"use client"

let portalRoot: HTMLDivElement | undefined = undefined
if (typeof document !== "undefined") {
  portalRoot = document?.getElementById("portal-root") as HTMLDivElement
}
export default portalRoot
