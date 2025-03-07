"use client"
import portalRoot from "@/utils/portal-root"
import { useDebounce } from "@/utils/useDebounce"
import { Command as CommandPrimitive } from "cmdk"
import { X } from "lucide-react"
import * as React from "react"
import {
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { tv } from "tailwind-variants"

import { CommandEmpty } from "@/components/done/customCommandEmpty"
import { Badge } from "@/components/not-done/badge"
import { cn } from "@/lib/utils"

import { Checkbox } from "@/components/reviewing/checkbox"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/reviewing/command"
import { Popover, PopoverContent, PopoverTrigger } from "../reviewing/popover"
import {
  GroupOption,
  MultipleSelectorProps,
  MultipleSelectorRef,
  Option,
} from "./combobox.types"
import { Input } from "./input"

//TODO ! Broken !
function transferToGroupOption(options: Array<Option>, groupBy?: string) {
  if (options.length === 0) {
    return {}
  }

  if (!groupBy) {
    return {
      "": options,
    }
  }

  const groupOption: GroupOption = {}
  options.forEach((option) => {
    const key = (option[groupBy] as string) || ""
    if (!groupOption[key]) {
      groupOption[key] = []
    }
    groupOption[key].push(option)
  })
  return groupOption
}

//-----------------------------STYLES---------------------------------//
const combobox = tv({
  slots: {
    badge:
      "data-disabled:bg-muted-foreground data-disabled:text-muted data-disabled:hover:bg-muted-foreground data-fixed:bg-muted-foreground data-fixed:text-muted data-fixed:hover:bg-muted-foreground bg-brand-primary flex cursor-pointer items-center justify-center gap-1 rounded-full py-1",
    badgeIcon: "text-muted-foreground hover:text-foreground h-3 w-3",
    commandList:
      "animate-in flex w-56 justify-start rounded-md border p-0.5 shadow-md outline-hidden",
    commandItem: "flex w-full cursor-pointer gap-1.5 rounded-none",
    input: "min-w-56 px-2",
    inputClearable: "absolute top-1/2 right-1 -translate-y-1/2",
  },
  variants: {
    disabled: {
      true: { commandItem: "text-muted-foreground cursor-default" },
    },
  },
})

const { badge, badgeIcon, commandItem, commandList, input, inputClearable } =
  combobox({})
//-----------------------------STYLES-------------------------------//

const Combobox = forwardRef<MultipleSelectorRef, MultipleSelectorProps>(
  (
    {
      defaultOptions: arrayDefaultOptions = [],
      maxSelected = Number.MAX_SAFE_INTEGER,
      triggerSearchOnFocus = false,
      hidePlaceholderWhenSelected,
      selectFirstItem = true,
      mountNode = portalRoot,
      options: arrayOptions,
      multiselect = false,
      clearable = false,
      creatable = false,
      loadingIndicator,
      selectedOptions,
      badgeClassName,
      emptyIndicator,
      onMaxSelected,
      onOpenChange,
      commandProps,
      tags = false,
      placeholder,
      defaultOpen,
      inputProps,
      className,
      onSearch,
      onChange,
      disabled,
      variant,
      groupBy,
      delay,
      size,
      open,
    }: MultipleSelectorProps,
    ref: Ref<MultipleSelectorRef>
  ) => {
    const [options, setOptions] = useState<GroupOption>(
      transferToGroupOption(arrayDefaultOptions, groupBy)
    )
    const [selected, setSelected] = useState<Option[]>(selectedOptions || [])
    const [isLoading, setIsLoading] = useState(false)
    const [inputValue, setInputValue] = useState("")

    const debouncedSearchTerm = useDebounce(inputValue, delay || 500)

    const inputRef = useRef<HTMLInputElement>(null)

    //------------------------------------------------------------------//

    useImperativeHandle(
      ref,
      () => ({
        selectedValue: [...selected],
        input: inputRef.current as HTMLInputElement,
      }),
      [selected]
    )

    //------------------------------------------------------------------//

    const handleUnselect = useCallback(
      (option: Option) => {
        const newOptions = selected.filter((s) => s.value !== option.value)
        setSelected(newOptions)
        onChange?.(newOptions)
      },
      [onChange, selected]
    )

    //------------------------------------------------------------------//

    useEffect(() => {
      if (selectedOptions) {
        setSelected(selectedOptions)
      }
    }, [selectedOptions])

    //----If `onSearch` is provided, do not trigger options updated.-----//
    useEffect(() => {
      if (!arrayOptions || onSearch) {
        return
      }
      const newOption = transferToGroupOption(arrayOptions || [], groupBy)
      if (JSON.stringify(newOption) !== JSON.stringify(options)) {
        setOptions(newOption)
      }
    }, [arrayDefaultOptions, arrayOptions, groupBy, onSearch, options])

    //------------------------------------------------------------------//

    useEffect(() => {
      const doSearch = async () => {
        setIsLoading(true)
        const res = await onSearch?.(debouncedSearchTerm)
        setOptions(transferToGroupOption(res || [], groupBy))
        setIsLoading(false)
      }

      const exec = async () => {
        if (!onSearch || !open) return

        if (triggerSearchOnFocus) {
          await doSearch()
        }

        if (debouncedSearchTerm) {
          await doSearch()
        }
      }

      void exec()
    }, [debouncedSearchTerm, groupBy, open, triggerSearchOnFocus])

    //------------------------------------------------------------------//

    function CreatableItem() {
      if (!creatable) return undefined

      if (selected[0]?.label.includes(inputValue)) return undefined

      function Item() {
        return (
          <CommandItem
            value={inputValue}
            className="cursor-pointer"
            onMouseDown={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
            onSelect={(value: string) => {
              if (selected.length >= maxSelected) {
                onMaxSelected?.(selected.length)
                return
              }
              setInputValue("")
              const newOptions = [...selected, { value, label: value }]
              setSelected(newOptions)
              onChange?.(newOptions)
            }}
          >{`Create "${inputValue}"`}</CommandItem>
        )
      }

      // For normal creatable
      if (!onSearch && inputValue.length > 0) {
        return <Item />
      }

      // For async search creatable. avoid showing creatable item before loading at first.
      if (onSearch && debouncedSearchTerm.length > 0 && !isLoading) {
        return <Item />
      }

      return undefined
    }

    //------------------------------------------------------------------//

    const EmptyItem = React.useCallback(() => {
      if (!emptyIndicator) return undefined

      // For async search that showing emptyIndicator
      if (onSearch && !creatable && Object.keys(options).length === 0) {
        return (
          <CommandItem value="-" disabled>
            {emptyIndicator}
          </CommandItem>
        )
      }

      return <CommandEmpty>{emptyIndicator}</CommandEmpty>
    }, [creatable, emptyIndicator, onSearch, options])

    //---Avoid Creatable Selector freezing or lagging when paste a long string.---//
    const commandFilter = React.useCallback(() => {
      if (commandProps?.filter) {
        return commandProps.filter
      }

      if (creatable) {
        return (value: string, search: string) => {
          return value.toLowerCase().includes(search.toLowerCase()) ? 1 : -1
        }
      }
      // Using default filter in `cmdk`. We don't have to provide it.
      return undefined
    }, [creatable, commandProps?.filter])

    //------------------------------------------------------------------//

    return (
      <Popover
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <div className="flex min-h-fit flex-col gap-1">
          Label
          {multiselect && tags && (
            <div className="flex h-fit gap-1">
              {selected.map((option) => (
                <Badge
                  key={option.value}
                  className={badge({ className: badgeClassName })}
                  data-fixed={option.fixed}
                  data-disabled={disabled}
                  onClick={() => handleUnselect(option)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option)
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                >
                  {option.label}

                  <X className={badgeIcon()} />
                </Badge>
              ))}
            </div>
          )}
          <Command
            onKeyDown={(e) => {
              if (
                e.key === "Backspace" &&
                !multiselect &&
                selected.length > 0
              ) {
                setSelected([])
                setInputValue("")
              }
              console.log(e.key)
            }}
            {...commandProps}
            className={cn(
              "overflow-visible bg-transparent",
              commandProps?.className
            )}
            shouldFilter={
              commandProps?.shouldFilter !== undefined
                ? commandProps.shouldFilter
                : !onSearch
            } // When onSearch is provided, we don't want to filter the options. You can still override it.
            filter={commandFilter()}
          >
            <PopoverTrigger className="relative">
              <Input
                className={input({ className })}
                disabled={disabled}
                value={inputValue}
                size={size}
                variant={variant}
                {...inputProps}
                ref={inputRef}
                onChange={(e) => {
                  if (!multiselect && selected.length > 0) {
                    console.log(selected.length)
                    return
                  }
                  setInputValue(e.target.value)
                  inputProps?.onChange?.(e)
                }}
                onBlur={(event) => {
                  inputProps?.onBlur?.(event)
                }}
                onFocus={(event) => {
                  triggerSearchOnFocus && onSearch?.(debouncedSearchTerm)
                  inputProps?.onFocus?.(event)
                }}
                placeholder={
                  hidePlaceholderWhenSelected && selected.length !== 0
                    ? ""
                    : placeholder
                }
              />
              {clearable && (
                <X
                  className={inputClearable()}
                  onClick={() => {
                    setSelected([])
                    setInputValue("")
                  }}
                />
              )}
            </PopoverTrigger>
            <CommandPrimitive.Input
              //@ts-ignore*
              value={inputValue}
              {...inputProps}
              hidden
            />
            <PopoverContent
              className="w-radix-popover-trigger"
              onOpenAutoFocus={(e) => e.preventDefault()}
              container={mountNode}
              autoFocus={false}
              asChild
            >
              <CommandList className={commandList()}>
                {isLoading ? (
                  <>{loadingIndicator}</>
                ) : (
                  <>
                    <EmptyItem />
                    <CreatableItem />
                    {!selectFirstItem && (
                      <CommandItem value="-" className="hidden" />
                    )}
                    {Object.entries(options).map(([key, dropdowns]) => (
                      <CommandGroup
                        className="h-full min-w-56 p-0"
                        heading={key}
                        key={key}
                      >
                        {dropdowns.map((option) => (
                          <CommandItem
                            disabled={option.disable}
                            value={option.value}
                            key={option.value}
                            onMouseDown={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                            }}
                            onSelect={() => {
                              if (!multiselect) {
                                setInputValue(option.label)
                                setSelected([option])
                                return
                              }
                              if (
                                selected.some(
                                  (item) => item.value === option.value
                                )
                              ) {
                                handleUnselect(option)
                                return
                              }
                              if (selected.length >= maxSelected) {
                                onMaxSelected?.(selected.length)
                                return
                              }
                              const newOptions = [...selected, option]
                              setSelected(newOptions)
                              onChange?.(newOptions)
                            }}
                            className={commandItem({
                              disabled: option.disable,
                            })}
                          >
                            {multiselect && (
                              <Checkbox
                                checked={selected.some((item) =>
                                  item.value.includes(option.value)
                                )}
                              />
                            )}
                            {option.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </>
                )}
              </CommandList>
            </PopoverContent>
          </Command>
        </div>
      </Popover>
    )
  }
)

Combobox.displayName = "Combobox"
export default Combobox
