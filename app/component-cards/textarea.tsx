import { Textarea } from "@/components/done/textarea"

export const textarea_card = {
  header: "Textarea",
  subText: <>Textarea allows the user to enter and edit multiline text.</>,
  cards: [
    {
      cardHeader: "Appearance",
      cardSubtext:
        "Textarea can have different appearances. The colors adjacent to the Textarea should have a sufficient contrast. Particularly, the color of input with filled darker and lighter styles needs to provide a contrast ratio greater than 3 to 1 against the immediate surrounding color to pass accessibility requirement.",
      cardComponent: (
        <div className={"flex w-full flex-col"}>
          <Textarea
            error={false}
            variant={"focus"}
            className=""
            labelText="TextArea"
          />
          <h2>A Textarea with a Outline Appearance</h2>
          <Textarea
            variant={"filledDark"}
            error={false}
            className=""
            labelText=" Dark TextArea"
          />

          <h2>A Textarea with a Filled Dark Appearance</h2>

          <Textarea
            variant={"filledLight"}
            error={false}
            className="w-full"
            labelText="Light TextArea "
          />
          <h2>Textarea with a Filled Light Appearance </h2>
        </div>
      ),
    },
    {
      cardHeader: "Placeholder",
      cardSubtext:
        "Any textarea or input field can have the placeholder attribute!",
      cardComponent: (
        <div className={"w-full"}>
          <Textarea
            error={false}
            placeholder={"This is placeholder text."}
            className="flex w-full font-bold text-black dark:text-white"
            labelText="TextArea"
          />
        </div>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext: "",
      cardComponent: (
        <div className={"w-full"}>
          <Textarea
            disabled={true}
            error={false}
            className="font-bold text-black dark:text-white"
            labelText="TextArea"
            placeholder={
              "This is a disabled textarea, you cant use it for anything."
            }
          />
        </div>
      ),
    },
    {
      cardHeader: "Uncontrolled",
      cardSubtext: "",
      cardComponent: (
        <div className={"w-full"}>
          <Textarea
            error={false}
            className="font-bold text-black dark:text-white"
            labelText="TextArea"
            placeholder={"This is a uncontrolled textarea"}
          />
        </div>
      ),
    },
    {
      cardHeader: "Resize",
      cardSubtext:
        " When typing inside of a textarea, if you run out of space for your entire message, the TextArea component will automatically grow expand the typing area vertically so you can finish your message.",
      cardComponent: (
        <div className={"w-full"}>
          <Textarea
            error={false}
            size={"sm"}
            className="font-bold text-black dark:text-white"
            labelText="TextArea"
            placeholder={
              "This textarea will expand upon its border being passed."
            }
          />
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardSubtext: "",
      cardComponent: (
        <div className={"flex w-full flex-col"}>
          <Textarea
            error={false}
            className="mt-4"
            labelText="TextArea"
            size="sm"
            placeholder={"This is a small textarea"}
          />
          <Textarea
            error={false}
            className="mt-4"
            labelText="TextArea"
            size="md"
            placeholder={"This is a medium  textarea"}
          />
          <Textarea
            error={false}
            className="mt-4"
            labelText="TextArea"
            size="lg"
            placeholder={"This is a large textarea"}
          />
        </div>
      ),
    },
  ],
}
