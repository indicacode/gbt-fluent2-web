# Fluent Design - Web

Implementação do design system em React + NextJS com TailWind CSS, Radix primitives, Tailwind Variants, com alguns componentes importados do ShadCN.

![image](https://github.com/grbtec/gbt-fluent2-web/assets/1107735/ce17ba93-95ae-4eb6-9384-3a76a37f46b3)

# 🚀 Roadmap

### Accordion
O accordion se subdivide em alguns sub-componentes, e usa a estratégia de composição, como pode ser visto na   
[implementação oficial em React](https://master--628d031b55e942004ac95df1.chromatic.com/?path=/docs/components-accordion--default).

👀 código exemplo:  
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

✅ tarefas:  
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

