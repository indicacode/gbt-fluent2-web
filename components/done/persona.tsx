import { Avatar, AvatarFallback, AvatarImage } from "@/components/done/avatar"
import { StatusBadge } from "@/components/done/status-badge"

type PersonaProps = Omit<typeof Avatar, "children"> & {
  avatar: {
    src: string
    name: string
    status?: "online" | "offline" | "away"
    size: "sm" | "md" | "lg"
  }
  presenceOnly?: boolean
  textPosition?: "before" | "after" | "below"
  quaternaryText?: string
  secondaryText?: string
  tertiaryText?: string
  name: string
}

export default function Persona({
  avatar,
  name,
  secondaryText,
  tertiaryText,
  quaternaryText,
  presenceOnly = false,
  textPosition = "after",
  ...props
}: PersonaProps) {
  let flexDirection
  switch (textPosition) {
    case "before":
      flexDirection = "flex-row-reverse"
      break
    case "after":
      flexDirection = "flex-row"
      break
    case "below":
      flexDirection = "flex-col"
      break
    default:
      flexDirection = "flex-row"
  }
  let size
  switch (avatar?.size) {
    case "sm":
      size = "h-2 w-2"
      break
    case "md":
      size = "h-3 w-3"
      break
    case "lg":
      size = "bottom-0.5 right-0.5 h-4 w-4"
      break
    default:
      size = "h-2 w-2"
  }
  return (
    <div className={"flex items-center gap-2 " + flexDirection}>
      {presenceOnly ? (
        <span
          className={"relative aspect-square rounded-full bg-red-500 " + size}
        >
          <StatusBadge
            className={"right-0 bottom-0"}
            size={avatar?.size}
            status={avatar?.status}
          />
        </span>
      ) : (
        <Avatar status={avatar?.status} size={avatar?.size} {...props}>
          <AvatarImage src={avatar?.src} />
          <AvatarFallback>{avatar?.name}</AvatarFallback>
        </Avatar>
      )}
      <div className="flex flex-col">
        {name && <h2>{name}</h2>}
        {secondaryText && <h2>{secondaryText}</h2>}
        {tertiaryText && <h2>{tertiaryText}</h2>}
        {quaternaryText && <h2>{quaternaryText}</h2>}
      </div>
    </div>
  )
}
