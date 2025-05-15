import Persona from "@/components/done/persona"

export const persona_card = {
  header: "Persona",
  subText: (
    <>
      A Persona is a visual representation of a person or status that showcases
      an Avatar, PresenceBadge, or an Avatar with a PresenceBadge.
    </>
  ),
  cards: [
    {
      cardHeader: "Default",
      cardSubtext: "",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Persona
            name={"John Walker"}
            secondaryText={"Available"}
            avatar={{
              status: "online",
              size: "lg",
              src: "https://images.pexels.com/photos/26898037/pexels-photo-26898037/free-photo-of-european-garden-spider-with-web.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
              name: "John Walker",
            }}
          ></Persona>
        </div>
      ),
    },
    {
      cardHeader: "Text Alignment",
      cardSubtext:
        "A Persona supports two text alignments, start being the default position.",
      cardComponent: (
        <div className="flex flex-row gap-2">
          <Persona
            name={"Alex Whittaker"}
            secondaryText={"Available"}
            avatar={{
              status: "online",
              size: "lg",
              src: "https://images.pexels.com/photos/27862762/pexels-photo-27862762/free-photo-of-a-man-standing-in-front-of-a-wall-with-a-bag.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
              name: "John Walker",
            }}
          ></Persona>
          <Persona
            name={"Roger Juniper"}
            secondaryText={"Available"}
            avatar={{
              status: "online",
              size: "lg",
              src: "https://images.pexels.com/photos/13925674/pexels-photo-13925674.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
              name: "John Walker",
            }}
          ></Persona>
          <Persona
            name={"Jonas Hill"}
            secondaryText={"Available"}
            avatar={{
              status: "online",
              size: "lg",
              src: "https://images.pexels.com/photos/27862762/pexels-photo-27862762/free-photo-of-a-man-standing-in-front-of-a-wall-with-a-bag.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",
              name: "John Walker",
            }}
          ></Persona>
        </div>
      ),
    },
  ],
}
