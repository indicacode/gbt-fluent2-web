import { Button } from "@/components/done/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FloatingAction,
} from "@/components/not-done/card"
import { BsThreeDots } from "@react-icons/all-files/bs/BsThreeDots"

export const card_card = {
  header: "Card",
  subText:
    "A card is a container that holds information and actions related to a single concept or object, like a document or a contact Cards can give information prominence and create predictable patterns. While they're very flexible, it's important to use them consistently for particular use cases across experiences",
  cards: [
    {
      cardHeader: "Default Card",
      cardSubtext: "The default card variant is the filled commodity.  ",
      cardComponent: (
        <div className="flex flex-col items-center justify-center gap-10">
          <Card className="w-[540px]">
            <CardHeader image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cDhXXBPPmXB0TeWGmhYA-AHaE8%26pid%3DApi&f=1&ipt=cd7797c8ef5c996d9ca56b20a8c65b8df7bb69d45d9afe2e963243aa4e8c43cc&ipo=images">
              <CardTitle>New Sweet Stuff!</CardTitle>
              <CardDescription>Relaxing Kitty</CardDescription>
            </CardHeader>
            <CardContent>
              Donut chocolate bar oat cake. Dragée tiramisu lollipop bear claw.
              Marshmallow pastry jujubes toffee sugar plum.
            </CardContent>
            <CardFooter>
              <Button>Order Some!</Button>
              <Button variant="secondary">Pass up</Button>
            </CardFooter>
          </Card>
        </div>
      ),
    },
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <Card orientation="horizontal" selectable variant="filled-alt">
          <CardHeader image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cDhXXBPPmXB0TeWGmhYA-AHaE8%26pid%3DApi&f=1&ipt=cd7797c8ef5c996d9ca56b20a8c65b8df7bb69d45d9afe2e963243aa4e8c43cc&ipo=images">
            <CardTitle>Eat Candy!</CardTitle>
            <CardDescription>Relaxing Kitty</CardDescription>
          </CardHeader>
          <FloatingAction>
            <BsThreeDots />
          </FloatingAction>
        </Card>
      ),
    },
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <Card size="lg" variant="outline">
          <CardHeader>
            <CardTitle>Breakfast in Paris</CardTitle>
            <CardDescription>
              Start your day off right with a delicious and authentic Parisian
              breakfast.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div> A fresh croissant 🥐</div>
            <div> A cup of coffee ☕</div>
          </CardContent>
        </Card>
      ),
    },
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <Card variant="subtle">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>Card Content</CardContent>
          <CardFooter>Card Footer</CardFooter>
        </Card>
      ),
    },
  ],
}
