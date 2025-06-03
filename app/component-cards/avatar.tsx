import { Avatar, AvatarFallback, AvatarImage } from "@/components/done/avatar"

export const avatar_card = {
  header: "Avatar",
  subText: (
    <>
      An Avatar is a graphical representation of a user, team, or entity.
      <br />
      Avatar can display an image, icon, or initials, and supports various sizes
      and shapes.
    </>
  ),
  cards: [
    {
      cardHeader: "",
      cardSubtext: "",
      cardComponent: (
        <div className={"flex flex-row"}>
          <Avatar status="online" size="sm">
            <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
            <AvatarFallback>Josh Well</AvatarFallback>
          </Avatar>
          <Avatar status="online" size="sm">
            <AvatarFallback>Joshua Graham</AvatarFallback>
          </Avatar>
          <Avatar status={"busy"} size="sm">
            <AvatarFallback>Ane Parker</AvatarFallback>
          </Avatar>
          <Avatar status={"do-not-disturb"} size="sm">
            <AvatarFallback>Helen Pereira</AvatarFallback>
          </Avatar>
          <Avatar status="busy" size="sm">
            <AvatarFallback>Johnny Mans</AvatarFallback>
            <AvatarImage src="https://images.pexels.com/photos/23909935/pexels-photo-23909935/free-photo-of-moda-tendencia-amor-mulher.jpeg" />
          </Avatar>
          <Avatar status={"online"} size="sm">
            <AvatarFallback>Jordan Terrence</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/22884699/pexels-photo-22884699/free-photo-of-cafeina-cafe-copo-taca.jpeg"
              }
            />
          </Avatar>
          <Avatar status={"online"} size="sm">
            <AvatarFallback>Fernanda Almeida</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/22814807/pexels-photo-22814807/free-photo-of-moda-tendencia-mulher-modelo.jpeg"
              }
            />
          </Avatar>
        </div>
      ),
    },
    {
      cardHeader: "Image",
      cardSubtext:
        "An avatar can display an image, It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
      cardComponent: (
        <div className={"flex flex-row"}>
          <Avatar status={"away"}>
            <AvatarFallback>Jordan Herrera</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            />
          </Avatar>
          <Avatar status={"do-not-disturb"}>
            <AvatarFallback>Kaio Telmo </AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/24702820/pexels-photo-24702820/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"online"}>
            <AvatarFallback>Carlos John</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            />
          </Avatar>
          <Avatar status={"busy"}>
            <AvatarFallback>Ana Watson</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
        </div>
      ),
    },
    {
      cardHeader: "Badge",
      cardSubtext:
        "An avatar can have a badge to indicate presence status. See the status prop inside of the avatar component for more info.\n" +
        "\n",
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Avatar status={"away"}>
            <AvatarFallback>Jordan Cummings</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"do-not-disturb"}>
            <AvatarFallback>Kaio Karlos </AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/24702820/pexels-photo-24702820/free-photo-of-moda-tendencia-pessoas-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"online"}>
            <AvatarFallback>Jordan Herrera</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            />
          </Avatar>
          <Avatar status={"busy"}>
            <AvatarFallback>Piccarte Artsy</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
        </div>
      ),
    },
    {
      cardHeader: "Avatar Icon",
      cardSubtext:
        "An avatar can display an image.\n" +
        "It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Avatar status={"away"}>
            <AvatarFallback>Jordan Herrera</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/23961099/pexels-photo-23961099/free-photo-of-homem-casal-conjuges-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"away"}>
            <AvatarFallback>Kaio Pereira </AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/24279986/pexels-photo-24279986/free-photo-of-homem-terno-traje-amor.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"online"}>
            <AvatarFallback>Victoria Petes</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/21327991/pexels-photo-21327991/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"online"}>
            <AvatarFallback>Loucas Marquise</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
        </div>
      ),
    },
    {
      cardHeader: "Badge Icon",
      cardSubtext:
        "An avatar can display an image.\n" +
        "It is recommended to also include a name in addition to the image: the initials from the name are displayed while the image is loading, and the name makes the Avatar accessible to screen readers.",
      cardComponent: (
        <div className={"flex flex-row items-center"}>
          <Avatar status={"away"}>
            <AvatarFallback>Jordan Herrera</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/23961099/pexels-photo-23961099/free-photo-of-homem-casal-conjuges-mulher.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"offline"}>
            <AvatarFallback>Alonso Rencio </AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/24279986/pexels-photo-24279986/free-photo-of-homem-terno-traje-amor.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"busy"}>
            <AvatarFallback>Junior Silva</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/21327991/pexels-photo-21327991/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
          <Avatar status={"online"}>
            <AvatarFallback>Loucas Marquise</AvatarFallback>
            <AvatarImage
              src={
                "https://images.pexels.com/photos/23201952/pexels-photo-23201952/free-photo-of-comida-alimento-refeicao-restaurante.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              }
            />
          </Avatar>
        </div>
      ),
    },
  ],
}
