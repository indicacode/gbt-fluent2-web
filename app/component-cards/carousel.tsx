import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/done/carousel"
import Autoplay from "embla-carousel-autoplay"

const plugin = Autoplay({ delay: 2000, stopOnInteraction: true })

export const carousel_card = {
  header: "Carousel",
  subText:
    "A Carousel component is a sliding window of elements controlled by previous, next, and direct pagination buttons.",
  cards: [
    {
      cardComponent: (
        <div className="flex h-full w-full items-center justify-center">
          <Carousel className="">
            <CarouselPrevious />
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  className="flex items-center justify-center"
                  key={index}
                >
                  <div className="flex h-40 w-full items-center justify-center rounded-xl border-2 border-[#115EA3] bg-white p-1 text-center text-black">
                    {index + 1}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      ),
    },
    {
      cardHeader: "Responsive",
      cardSubtext:
        "Carousel can have responsive cards that adjust their size based on the content, using autoSize prop on CarouselCard.",
      cardComponent: (
        <div className="flex h-full w-full items-center justify-center">
          <Carousel className="">
            <CarouselPrevious />
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  className="flex basis-1/2 items-center justify-center"
                  key={index}
                >
                  <div className="flex h-40 w-full items-center justify-center rounded-xl border-2 border-[#115EA3] bg-white p-1 text-center text-black">
                    {index + 1}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      ),
    },
    {
      cardHeader: "Autoplay",
      cardSubtext:
        "The Autoplay button must be present to enable autoplay as it is an accessibility requirement. To enable, any valid prop (recommended ariaLabel) must be passed in, while setting the autoplay prop in CarouselNav to undefined will disable and remove it.",
      cardComponent: (
        <div className="flex h-full w-full items-center justify-center">
          <Carousel plugins={[plugin]} className="">
            <CarouselPrevious />
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  className="flex items-center justify-center"
                  key={index}
                >
                  <div className="flex h-40 w-full items-center justify-center rounded-xl border-2 border-[#115EA3] bg-white p-1 text-center text-black">
                    {index + 1}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
          </Carousel>
        </div>
      ),
    },
  ],
}
