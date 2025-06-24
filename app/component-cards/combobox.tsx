import Combobox from "@/components/not-done/combobox"

export const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export const combobox_card = {
  header: "Combobox",
  subText:
    "A combobox combines a text field and a dropdown giving people a way to select an option from a list or enter their own choice.",
  cards: [
    {
      cardComponent: (
        <Combobox
          emptyIndicator="uo"
          selectedOptions={[
            { value: "next.js", label: "Next.js" },
            { value: "remix", label: "Remix" },
          ]}
          tags
          multiselect
          placeholder="Select you favorite frameworks"
          options={frameworks}
        />
      ),
    },

    {
      cardHeader: "Filtering",
      cardSubtext:
        "We provide useComboboxFilter() hook to filter the options based on the user-typed string. It can be configured for a custom filter function, custom message, and custom render function. We recommend using filtering when creating a freeform Combobox.",
      cardComponent: (
        <Combobox
          emptyIndicator="No Items Found"
          tags
          multiselect
          creatable
          placeholder="Select you favorite frameworks"
          options={frameworks}
        />
      ),
    },
    {
      cardHeader: "Multiselect With Tags",
      cardSubtext:
        "Combobox can display multiselect values in custom tags. This example uses a controlled selection so the tags can be used to remove selected options.",
      cardComponent: (
        <Combobox
          emptyIndicator="uo"
          tags
          multiselect
          creatable
          placeholder="Select you favorite frameworks"
          options={frameworks}
        />
      ),
    },
    {
      cardHeader: "Multiselect With Value Strings",
      cardSubtext:
        "Multiselect Combobox supports using a controlled value to display selected options when not in focus, similar to v8 behavior.We recommend using tags rather than the value string when possible,since they have better UX and accessibility.s",
      cardComponent: (
        <Combobox
          emptyIndicator="uo"
          tags
          multiselect
          creatable
          placeholder="Select you favorite frameworks"
          options={frameworks}
        />
      ),
    },
  ],
}
