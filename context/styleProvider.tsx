import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react"

type ContextProps = {
  field: string
  setField: Dispatch<SetStateAction<string>>
}

const StyleContext = createContext<ContextProps>({
  field: "",
  setField: () => "",
})

export default function StyleProvider({ children }: { children: ReactNode }) {
  const [field, setField] = useState("")

  return (
    <StyleContext.Provider value={{ field, setField }}>
      {children}
    </StyleContext.Provider>
  )
}

export const useStyleContext = () => useContext(StyleContext)
