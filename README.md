# Fluent Design - Web

Implementation of Microsoft's [Fluent2 Design System](https://fluent2.microsoft.design/get-started/whatisnew) with [React](https://react.dev) + [NextJS](https://nextjs.org) com [TailWind CSS](https://tailwindcss.com), [Radix](https://www.radix-ui.com) primitives, [Tailwind Variants](https://www.tailwind-variants.org), and some other components inspired from [ShadCN](https://ui.shadcn.com/docs/components/accordion).

![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/ce17ba93-95ae-4eb6-9384-3a76a37f46b3)

# 🚀 Roadmap

### Accordion
An accordion allows users to toggle the display of content by expanding or collapsing sections.   
![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/99597c7a-b001-45f2-8112-d49b24bd59dd)
  
  
**Sample code:**  
```xml
import * as React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-components";

export const Default = () => (
  <Accordion>
    <AccordionItem value="1">
      <AccordionHeader>Accordion Header 1</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 1</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="2">
      <AccordionHeader>Accordion Header 2</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 2</div>
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem value="3">
      <AccordionHeader>Accordion Header 3</AccordionHeader>
      <AccordionPanel>
        <div>Accordion Panel 3</div>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
);
```

**Tasks:**  
- [ ] AccordionItem
  - [ ] disabled: disables opening/closing of panel. Concluído em dd/mm/aaaa por @brunnogrb.
- [ ] AccordionHeader
  - [ ] button: the component to be used as button in heading.
  - [ ] expandIcon: expand icon slot rendered before (or after) children content in heading.
  - [ ] icon: expand icon slot rendered before (or after) children content in heading.
  - [ ] as: "div" "h1" "h2" "h3" "h4" "h5" "h6".
  - [ ] expandIconPosition: the position of the expand icon slot in heading.
  - [ ] inline: indicates if the AccordionHeader should be rendered inline.
  - [ ] size: size of spacing in the heading. "small" "medium" "large" "extra-large".
- [ ] AccordionPanel
  - [ ] as: "div"
     
### Avatar
An Avatar is a graphical representation of a user, team, or entity.

Avatar can display an image, icon, or initials, and supports various sizes and shapes.  
![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/6b9b9040-7bc9-46b2-8559-747ebc08b068)



```xml
export const Default = (props: Partial<AvatarProps>) => (
  <Avatar aria-label="Guest" {...props} />
);

const argTypes: ArgTypes = {
  initials: {
    control: "text",
    type: "string",
  },
  badge: {
    control: {
      type: "inline-radio",
      options: [{ status: "away" }, { status: "busy" }],
    },
  },
  size: {
    control: {
      type: "select",
      options: [16, 20, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96, 120, 128],
    },
  },
  name: {
    control: {
      control: "text",
      type: "string",
    },
  },
};
```

### AvatarGroup
An AvatarGroup is a graphical representation of multiple people associated with a given entity. AvatarGroup leverages the Avatar component, with each Avatar representing a person and containing their image, initials, or an icon. An AvatarGroup can be represented in a spread, stack, or pie layout.  
![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/3f02a03b-b73a-472f-b6f9-7e9f123969fc)


### Badge  
A badge is a visual decoration for UI elements.
Different badges can display different content.

`Badge` displays text and/or an icon  
![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/da804efc-a3fa-4f8b-be75-845c1695400a)
  
`CounterBadge` displays numerical values  
![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/007e2929-022f-4270-8f3a-603d104f8534)
  
`PresenceBadge` displays status  
![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/c2ceef0f-9f12-4cd9-9cbc-639ff4d855be)



--- 
**Referências:**  
[FluentUI React - Github](https://github.com/microsoft/fluentui)  
implementação oficial para react. renderização lenta, e com grande número de issues abertas.

[FluentUI React - Demos](https://master--628d031b55e942004ac95df1.chromatic.com/?path=/docs/demos--demos)  
Demo da implementação oficial no storybook.
Ajuda a entender alguns comportamentos dos componentes inspirados no design system.

[FluentUI Web - Figma](https://www.figma.com/community/file/836828295772957889)  
Design no figma.





