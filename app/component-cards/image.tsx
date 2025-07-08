import Image from "@/components/not-done/image"

export const image_card = {
  header: "Image",
  subText:
    "An image displays graphical content such as a photo or illustration.",
  cards: [
    {
      cardComponent: (
        <div className="flex justify-center">
          <Image
            src={
              "https://images.pexels.com/photos/5335216/pexels-photo-5335216.jpeg"
            }
            height={500}
            width={500}
          ></Image>
        </div>
      ),
    },
    {
      cardHeader: "Shape",
      cardSubtext:
        "Images can be styled as square (default), circular, or with rounded corners.",
      cardComponent: (
        <div className="flex justify-between">
          <Image
            shape="square"
            src={
              "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            shape="circular"
            src={
              "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            shape="rounded"
            src={
              "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg"
            }
            height={250}
            width={250}
          ></Image>
        </div>
      ),
    },
    {
      cardHeader: "Bordered",
      cardSubtext:
        "The bordered prop will apply a border style to images regardless of its shape.",
      cardComponent: (
        <div className="grid grid-cols-3 gap-4">
          <Image
            shape="square"
            src={
              "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            shape="circular"
            src={
              "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            shape="rounded"
            src={
              "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            bordered
            shape="square"
            src={
              "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            bordered
            shape="circular"
            src={
              "https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            bordered
            shape="rounded"
            src={
              "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg"
            }
            height={250}
            width={250}
          ></Image>
        </div>
      ),
    },
    {
      cardHeader: "Fallback",
      cardSubtext:
        "In cases when images fail to load, the Image component will result into the native <img/> browser fallback.",
      cardComponent: (
        <div className="flex justify-around">
          <Image
            bordered
            src={
              "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg"
            }
            height={250}
            width={250}
          ></Image>
          <Image
            bordered
            src={"https://fakelink.com"}
            alt="Non-existing image"
            height={250}
            width={250}
          ></Image>
        </div>
      ),
    },
    {
      cardHeader: "Block",
      cardSubtext:
        "An Image can be maximized in order to fill its parent container.",
      cardComponent: (
        <div className="flex flex-col gap-3">
          <Image
            block
            src={
              "https://fabricweb.azureedge.net/fabric-website/placeholders/900x50.png"
            }
            alt="Non-existing image"
          ></Image>
          <Image
            block
            src={
              "https://fabricweb.azureedge.net/fabric-website/placeholders/100x100.png"
            }
            alt="Non-existing image"
          ></Image>
        </div>
      ),
    },
    {
      cardHeader: "Fit",
      cardSubtext:
        "The fit prop is used to determine how the image should be resized in order to fit its container.",
      cardComponent: (
        <div className="box-border flex flex-col gap-3 text-2xl font-semibold">
          <p>None</p>
          <div className="h-32 w-96 overflow-hidden border border-black">
            <Image
              fit="none"
              className="object-left-top"
              src={
                "https://fabricweb.azureedge.net/fabric-website/placeholders/600x200.png"
              }
            ></Image>
          </div>
          <p>Center</p>
          <div className="flex h-32 w-96 items-center justify-center border border-black">
            <Image
              className="object-none object-center"
              src={
                "https://fabricweb.azureedge.net/fabric-website/placeholders/200x100.png"
              }
            ></Image>
          </div>
          <p>Contain</p>
          <div className="flex h-[200px] w-[450px] items-center justify-center overflow-hidden border border-black">
            <Image
              fit="contain"
              src={
                "https://fabricweb.azureedge.net/fabric-website/placeholders/400x200.png"
              }
            ></Image>
          </div>
          <p>Cover</p>
          <div className="flex h-[200px] w-[450px] items-center justify-center overflow-hidden border border-black">
            <Image
              fit="cover"
              src={
                "https://fabricweb.azureedge.net/fabric-website/placeholders/400x250.png"
              }
            ></Image>
          </div>
        </div>
      ),
    },
    {
      cardHeader: "Shadow",
      cardSubtext:
        "The shadow prop will apply box shadow styling to the image.",
      cardComponent: (
          <Image
            shadow
            src={
              "https://fabricweb.azureedge.net/fabric-website/placeholders/400x250.png"
            }
          ></Image>
      ),
    },
  ],
}
