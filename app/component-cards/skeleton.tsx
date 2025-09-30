import Skeleton from "@/components/reviewing/skeleton"

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
      cardComponent: <Skeleton className={"h-4 w-full"} />,
    },
    {
      cardHeader: "Appearance",
      cardSubtext:
        "You can specify the appearance of the Skeleton. This is useful for instances where you want to render a Skeleton with a MaterialOS theme",
      cardComponent: (
        <div className={"flex w-full flex-col"}>
          <Skeleton appearance="opaque" className={"h-4 w-full"} />
          <h2>Opaque Appearance</h2>
          <Skeleton appearance="translucent" className={"mt-6 h-4 w-full"} />
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
          <Skeleton animation="wave" className={"mt-1 h-4 w-full"} />
          <h2>Wave Animation</h2>
          <Skeleton animation="pulse" className={"mt-1 h-4 w-full"} />
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
            <Skeleton shape="circle" className={"mt-2 h-8 w-8 animate-pulse"} />
            <Skeleton className={"mt-2 ml-2 h-8 w-full"}></Skeleton>
          </div>
          <div className={"flex w-full flex-row items-center"}>
            <Skeleton shape="circle" className={"mt-3 h-8 w-8 animate-pulse"} />
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
        <div className={"flex w-full flex-col gap-3"}>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>8</h2>
            <Skeleton size={8} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>12</h2>
            <Skeleton size={12} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>16</h2>
            <Skeleton size={16} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>20</h2>
            <Skeleton size={20} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>24</h2>
            <Skeleton size={24} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>28</h2>
            <Skeleton size={28} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>32</h2>
            <Skeleton size={32} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>36</h2>
            <Skeleton size={36} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>40</h2>
            <Skeleton size={40} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>48</h2>
            <Skeleton size={48} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>56</h2>
            <Skeleton size={56} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>64</h2>
            <Skeleton size={64} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>72</h2>
            <Skeleton size={72} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>96</h2>
            <Skeleton size={96} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>120</h2>
            <Skeleton size={120} className={"w-full"} />
          </div>
          <div className={"flex w-full flex-row items-center gap-2"}>
            <h2>128</h2>
            <Skeleton size={128} className={"w-full"} />
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Shape",
      cardSubtext:
        "The shape of the Skeleton can be set to circle, rectangle, or square.",
      cardComponent: (
        <div className={"flex w-full items-center gap-3"}>
          <Skeleton shape="square" className={"ml-2 h-20 w-20"} />
          <Skeleton shape="circle" className={"mt-2 ml-6 h-20 w-20"} />
          <Skeleton shape="rectangle" className={"mt-2 ml-2 h-12 w-48"} />
        </div>
      ),
    },
  ],
}
