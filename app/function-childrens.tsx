import { ReactNode, useState } from "react"

export default function FunctionalChildrens({ children }: any) {
  const [test, setTest] = useState<"Sans" | "Papyrus">("Sans")

  function sansLaught(): ReactNode {
    if (test === "Sans") {
      return <>says: He</>
    }
    return <>says: {"spaghetti".toUpperCase()}</>
  }
  return <div> {children(test, setTest, sansLaught)} </div>
}
