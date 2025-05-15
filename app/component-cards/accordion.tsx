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
      cardHeader: "Multiple",
      cardSubtext:
        "An accordion supports multiple panels expanded simultaneously.\n" +
        "              Since it's not simple to determine which panel will be opened by\n" +
        "              default, multiple will also be collapsed by default on the first\n" +
        "              render.",
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
      cardHeader: "Multi Panels",
      cardSubtext:
        "An accordion supports multiple panels expanded simultaneously.\n" +
        "              Since it's not simple to determine which panel will be opened by\n" +
        "              default, multiple will also be collapsed by default on the first\n" +
        "              render.",
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
      cardHeader: "Expand Icon Position",
      cardSubtext:
        " An accordion supports multiple panels expanded simultaneously. Since it's not simple to determine which panel will be opened by default, multiple will also be collapsed by default on the first render",

      cardComponent: (
        <div>
          <h2 className={"font-extrabold"}></h2>
          <h2></h2>
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
      cardHeader: "With Icon",
      cardComponent: (
        <div>
          <h2>
            An accordion header can contain an icon. <AiFillCheckCircle />
          </h2>
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
      cardHeader: "Collapsible",
      cardComponent: (
        <div>
          <h2 className={"font-extrabold"}></h2>
          <h2>This is collapsible</h2>
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
  ],
}
