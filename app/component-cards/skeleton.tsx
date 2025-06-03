import { Skeleton } from "@/components/not-done/skeleton"

export const skeleton_card = {
  header: "Skeleton",
  subText: (
    <>
      The Skeleton component is a temporary animation placeholder for when a
      service call takes time to return data and we don't want to block
      rendering the rest of the UI.
    </>
  ),
  cards: [
    {
      cardHeader: "Default",
      cardSubtext: "",
      cardComponent: (
        <div className={"flex w-full flex-row"}>
          <Skeleton className={"h-4 w-full"} />
        </div>
      ),
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "You can specify the appearance of the Skeleton. This is useful for instances where you want to render a Skeleton with a MaterialOS theme",
      cardComponent: (
        <div className={"flex w-full flex-col"}>
          <Skeleton className={"h-4 w-full"} />
          <h2>Opaque Appearance</h2>
          <Skeleton className={"mt-6 h-4 w-full opacity-80"} />
          <h2>Translucent Appearance</h2>
        </div>
      ),
    },
    {
      cardHeader: "Animation",
      cardSubtext:
        "You can specify the animation style of the Skeleton. The default is 'pulse'",
      cardComponent: (
        <div className={"flex w-full flex-col"}>
          <Skeleton className={"mt-1 h-4 w-full animate-pulse"} />
          <h2>Pulse Animation</h2>
        </div>
      ),
    },
    {
      cardHeader: "Row",
      cardSubtext:
        "You can specify the animation style of the Skeleton. The default is 'pulse'",
      cardComponent: (
        <div className={"flex w-full flex-col"}>
          <div className={"flex flex-row items-center"}>
            <Skeleton className={"mt-2 h-8 w-8 animate-pulse rounded-full"} />
            <Skeleton className={"mt-2 ml-2 h-8 w-full"}></Skeleton>
          </div>
          <div className={"flex w-full flex-row items-center"}>
            <Skeleton className={"mt-3 h-8 w-8 animate-pulse rounded-full"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
          </div>
          <div className={"flex w-full flex-row items-center"}>
            <Skeleton className={"mt-3 h-8 w-8 animate-pulse"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
            <Skeleton className={"mt-3 ml-2 h-8 w-[25%]"} />
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext:
        "You can specify the size of the Skeleton by using the classes. The size is a number that represents the height of the Skeleton in pixels",
      cardComponent: (
        <div className={"flex w-full flex-col"}>
          <div className={"flex w-full flex-row"}>
            <h2>2</h2>
            <Skeleton className={"ml-2 h-2 w-full"} />
          </div>
          <div className={"mt-5 flex w-full flex-row items-center"}>
            <h2>4</h2>
            <Skeleton className={"ml-2 h-4 w-full"} />
          </div>
          <div className={"mt-5 flex w-full flex-row items-center"}>
            <h2>6</h2>
            <Skeleton className={"ml-2 h-6 w-full"} />
          </div>
          <div className={"mt-5 flex w-full flex-row items-center"}>
            <h2>8</h2>
            <Skeleton className={"ml-2 h-8 w-full"} />
          </div>
          <div className={"mt-5 flex w-full flex-row items-center"}>
            <h2>12</h2>
            <Skeleton className={"ml-2 h-12 w-full"} />
          </div>
          <div className={"mt-5 flex w-full flex-row items-center"}>
            <h2>16</h2>
            <Skeleton className={"ml-2 h-16 w-full"} />
          </div>
          <div className={"mt-5 flex w-full flex-row items-center"}>
            <h2>24</h2>
            <Skeleton className={"mt-5 ml-2 h-24 w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center"}>
            <h2>32</h2>
            <Skeleton className={"ml-2 h-32 w-full"} />
          </div>
          <div className={"mt-5 flex w-full flex-row items-center"}>
            <h2>40</h2>
            <Skeleton className={"ml-2 h-40 w-full"} />
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Shape",
      cardSubtext:
        "The shape of the Skeleton can be set to circle, rectangle, or square.",
      cardComponent: (
        <div className={"flex w-full items-center justify-between"}>
          <div className={"flex w-full flex-row"}>
            <Skeleton className={"ml-2 h-20 w-20"} />
            <Skeleton className={"mt-2 ml-6 h-20 w-20 rounded-full"} />
          </div>
          <Skeleton className={"rounded-ml mt-2 ml-2 h-12 w-full"} />
        </div>
      ),
    },
  ],
}
