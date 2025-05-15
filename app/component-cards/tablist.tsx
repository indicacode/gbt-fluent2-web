import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/reviewing/tabs"
import { GiBanana } from "@react-icons/all-files/gi/GiBanana"
import { GiCarrot } from "@react-icons/all-files/gi/GiCarrot"
import { GiMeat } from "@react-icons/all-files/gi/GiMeat"
import { GiOrange } from "@react-icons/all-files/gi/GiOrange"
import { GiShinyApple } from "@react-icons/all-files/gi/GiShinyApple"

export const tablist_card = {
  header: "Tablist",
  subText:
    "A tab list provides single selection from tabs. When a tab is selected, the application displays content associated with the selected tab and hides other content. Each tab typically contains a text header and often includes an icon.",
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <Tabs defaultValue={"fruits"} className={"w-[full]"}>
          <TabsList className={"w-full"}>
            <TabsTrigger value={"fruits"}>Fruits</TabsTrigger>
            <TabsTrigger value={"vegetables"}>Vegetables</TabsTrigger>
            <TabsTrigger value={"meat"}>Meat</TabsTrigger>
          </TabsList>
          <TabsContent value={"fruits"}>
            <div className={"flex w-[20%] flex-row justify-between"}>
              <GiShinyApple className={"mr-1"} size={160} />
              <GiOrange className={"mr-1"} size={160} />
              <GiBanana className={"mr-1"} size={160} />

              <GiShinyApple className={"mr-1"} size={160} />
              <GiOrange className={"mr-1"} size={160} />
              <GiBanana className={"mr-1"} size={160} />
            </div>
          </TabsContent>
          <TabsContent value={"vegetables"}>
            <div className={"flex w-[20%] flex-row justify-between"}>
              <GiCarrot className={"mr-1"} size={160} />
              <GiCarrot className={"mr-1"} size={160} />
            </div>
          </TabsContent>
          <TabsContent value={"meat"}>
            <div className={"flex w-[20%] flex-row justify-between"}>
              <GiMeat size={160} />
              <GiMeat size={160} />
            </div>
          </TabsContent>
        </Tabs>
      ),
    },
  ],
}
