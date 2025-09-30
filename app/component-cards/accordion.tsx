import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/done/accordion"
import { AiFillCheckCircle } from "@react-icons/all-files/ai/AiFillCheckCircle"

export const accordion_card = {
  header: "Accordion",
  subText:
    "An accordion allows users to toggle the display of content by expanding or collapsing sections.",
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <Accordion type="single" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger size="md">Is it easy to use?</AccordionTrigger>
            <AccordionContent>
              Yes. Try it for yourself, with a few lines of code you get9
              beautiful UI!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the Fluent2
              Aesthetic!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default with a smooth expanding motion, you
              can disable animations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      cardHeader: "Collapsible",
      cardSubtext:
        "An accordion can have multiple panels collapsed at the same time.",
      cardComponent: (
        <div>
          <Accordion
            defaultValue={["item-2"]}
            type="multiple"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger size="md">Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    {
      cardHeader: "Multiple",
      cardSubtext:
        "An accordion supports multiple panels expanded simultaneously. Since it's not simple to determine which panel will be opened by default, multiple will also be collapsed by default on the first render.",
      cardComponent: (
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger size="md">Is it easy to use?</AccordionTrigger>
            <AccordionContent>
              Yes. Try it for yourself, with a few lines of code you get
              beautiful UI!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the Fluent2
              Aesthetic!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default with a smooth expanding motion, you
              can disable animations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      cardHeader: "Navigation",
      cardSubtext: "An accordion supports keyboard navigation.",
      cardComponent: (
        <div>
          <Accordion
            defaultValue={["item-2"]}
            type="multiple"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger size="md">Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    {
      cardHeader: "Open Items",
      cardSubtext:
        " An accordion can have defined open items. If no open item is\n" +
        "              present, all panels will be closed by default.",
      cardComponent: (
        <div>
          <Accordion
            defaultValue={["item-2"]}
            type="multiple"
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger size="md">Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger size="md">Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger size="md">Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    {
      cardHeader: "Sizes",
      cardSubtext:
        "AccordionTrigger supports small, medium, large and extra-large sizes.",
      cardComponent: (
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger size="sm">Small Header</AccordionTrigger>
            <AccordionContent>Accordion Content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger size="md">Medium Header</AccordionTrigger>
            <AccordionContent>Accordion Content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger size="lg">Large Header</AccordionTrigger>
            <AccordionContent>Accordion Content</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger size="xl">Extra-Large Header</AccordionTrigger>
            <AccordionContent>Accordion Content</AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      cardHeader: "Heading Levels",
      cardSubtext:
        "An accordion trigger is a <div> by default, but according to WAI-ARIA specification, we recommend using a proper heading of any level in markup.",
      cardComponent: (
        <Accordion type="single">
          <AccordionItem value="item-1">
            <h1>
              <AccordionTrigger>Accordion Trigger as h1</AccordionTrigger>
              <AccordionContent>Accordion Content 1</AccordionContent>
            </h1>
          </AccordionItem>
          <AccordionItem value="item-2">
            <h2>
              <AccordionTrigger>Accordion Trigger as h2</AccordionTrigger>
              <AccordionContent>Accordion Content 2</AccordionContent>
            </h2>
          </AccordionItem>
          <AccordionItem value="item-3">
            <h3>
              <AccordionTrigger>Accordion Trigger as h3</AccordionTrigger>
              <AccordionContent>Accordion Content 3</AccordionContent>
            </h3>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      cardHeader: "Disabled",
      cardSubtext: "An accordion item can be disabled",
      cardComponent: (
        <Accordion type="single">
          <AccordionItem disabled value="item-1">
            <h1>
              <AccordionTrigger>Is it easy to use?</AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </h1>
          </AccordionItem>
          <AccordionItem disabled value="item-2">
            <h2>
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </h2>
          </AccordionItem>
          <AccordionItem disabled value="item-3">
            <h3>
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </h3>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      cardHeader: "Expand Icon",
      cardSubtext:
        "An accordion item can have a custom expand icon.",
      cardComponent: (
        <div>
          <Accordion type="single" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger icon={<AiFillCheckCircle />}>
                Is it easy to use?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger icon={<AiFillCheckCircle />}>
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger icon={<AiFillCheckCircle />}>
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default with a smooth expanding motion,
                you can disable animations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    {
      cardHeader: "Expand Icon Position",
      cardSubtext:
        " The expand icon can be placed at the start or end of the accordian header.",
      cardComponent: (
        <div>
          <Accordion type="single" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger position="left">
                Is it easy to use?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Try it for yourself, with a few lines of code you get
                beautiful UI!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the Fluent2
                Aesthetic!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
    },
    {
      cardHeader: "With Icon",
      cardSubtext: "An accordion header can contain an icon.",
      cardComponent: (
        <Accordion defaultValue={["item-2"]} type="multiple" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger size="md">
              <span className="flex items-center gap-2">
                <AiFillCheckCircle /> Is it easy to use?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              Yes. Try it for yourself, with a few lines of code you get
              beautiful UI!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger size="md">
              <span className="flex items-center gap-2">
                <AiFillCheckCircle /> Is it styled?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the Fluent2
              Aesthetic!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger size="md">
              <span className="flex items-center gap-2">
                <AiFillCheckCircle /> Is it animated?
              </span>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default with a smooth expanding motion, you
              can disable animations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
  ],
}
