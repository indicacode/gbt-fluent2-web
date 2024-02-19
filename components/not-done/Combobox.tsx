import React, { useState } from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/not-done/command"

export default function Combobox({
  input,
}: {
  input: { label: string; value: string }[]
}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Command>
      <CommandInput placeholder="Search framework..." />
      <CommandEmpty>No framework found.</CommandEmpty>
      <CommandGroup>
        {input.map((item) => (
          <CommandItem
            key={item.value}
            value={item.value}
            onSelect={(currentValue) => {
              setValue(currentValue === value ? "" : currentValue)
              setOpen(false)
            }}
          >
            <Check
              className={cn(
                "mr-2 h-4 w-4",
                value === item.value ? "opacity-100" : "opacity-0"
              )}
            />
            {item.label}
          </CommandItem>
        ))}
      </CommandGroup>
    </Command>
  )
}
