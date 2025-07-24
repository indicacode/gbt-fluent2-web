import Text from "@/components/not-done/text"

export const text_card = {
  header: "Text",
  subText:
    "Typography and styling abstraction component used to ensure consistency and standardize text throughout your application.",
  cards: [
    {
      cardComponent: (
        <Text>This is an example of the Text component's usage.</Text>
      ),
    },
    {
      cardHeader: "Presets",
      CardDescription:
        "Presets are a set of components with predefined styles for typography, based in our Theme Tokens. They are used to create and share a consistent look and feel.",
      cardComponent: (
        <div className="flex flex-col gap-2">
          <Text as="div" size={100}>Caption2</Text>
          <Text size={100} weight="semibold">Caption2Strong</Text>
          <Text size={200}>Caption1</Text>
          <Text size={200} weight="semibold">Caption1Strong</Text>
          <Text size={200} weight="bold">Caption1Stronger</Text>
          <Text size={300}>Body1</Text>
          <Text size={300} weight="semibold">Body1Strong</Text>
          <Text size={300} weight="bold">Body1Stronger</Text>
          <Text size={400}>Body2</Text>
          <Text size={400} weight="semibold">Subtitle2</Text>
          <Text size={400} weight="bold">Subtitle2Stronger</Text>
          <Text size={500} weight="semibold">Subtitle1</Text>
          <Text size={600} weight="semibold">Title3</Text>
          <Text size={700} weight="semibold">Title2</Text>
          <Text size={800} weight="semibold">Title1</Text>
          <Text size={900} weight="semibold">LargeTitle</Text>
          <Text size={1000} weight="semibold">Display</Text>
        </div>
      ),
    },
    {
      cardHeader: "Font",
      cardComponent: (
        <div>
          <Text font="base">This is the default font</Text>
          <Text font="numeric">This is numeric font</Text>
          <Text font="monospace">This is monospace font</Text>
        </div>
      ),
    },
    {
      cardHeader: "Size",
      cardComponent: (
        <div>
          <Text size={100}>100</Text>
          <Text size={200}>200</Text>
          <Text size={300}>300</Text>
          <Text size={400}>400</Text>
          <Text size={500}>500</Text>
          <Text size={600}>600</Text>
          <Text size={700}>700</Text>
          <Text size={800}>800</Text>
          <Text size={900}>900</Text>
          <Text size={1000}>1000</Text>
        </div>
      ),
    },
    {
      cardHeader: "Weight",
      cardComponent: (
        <div>
          <Text weight="regular">Regular weight</Text>
          <Text weight="medium">Medium weight</Text>
          <Text weight="semibold">Semibold weight</Text>
          <Text weight="bold">Bold weight</Text>
        </div>
      ),
    },
    {
      cardHeader: "Italic",
      cardComponent: <Text italic>Italic text</Text>,
    },
    {
      cardHeader: "Underline",
      cardComponent: <Text underline>Underlined text</Text>,
    },
    {
      cardHeader: "Strike Through",
      cardComponent: <Text strikethrough>Strikethrough text</Text>,
    },
    {
      cardHeader: "Truncate",
      cardComponent: (
        <Text truncate>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
          aliquam nisi numquam, fugit recusandae eligendi aspernatur odio minus?
          Incidunt maxime ipsam dolorem quia quas aliquam, quasi consequatur!
          Ea, minus eaque.
        </Text>
      ),
    },
    {
      cardHeader: "Alignment",
      cardComponent: (
        <div>
          <Text align="start">Aligned to start</Text>
          <Text align="center">Aligned to center</Text>
          <Text align="end">Aligned to end</Text>
          <Text align="justify">
            Justified text: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Praesentium accusamus voluptate autem? Recusandae alias
            corporis dicta quisquam sequi molestias deleniti, libero
            necessitatibus, eligendi, omnis cumque enim asperiores quasi quidem
            sit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Possimus repellat consectetur, sed aperiam ex nulla repellendus
            tempora vero illo aliquam autem! Impedit ipsa praesentium vero
            veritatis unde eos, fuga magnam!
          </Text>
        </div>
      ),
    },
  ],
}
