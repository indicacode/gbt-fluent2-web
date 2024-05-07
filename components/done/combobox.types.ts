import * as React from "react"

import { Input } from "@/components/done/index"
import { Command } from "@/components/reviewing/command"

export interface MultipleSelectorProps {
  /** Props of `CommandInput` */
  inputProps?: Omit<
    React.ComponentPropsWithoutRef<typeof Input>,
    "variant" | "className"
  >

  variant?: "outline" | "underline" | "filledDark" | "filledLight"

  /** Props of `Command` */
  commandProps?: React.ComponentPropsWithoutRef<typeof Command>

  /** async search */
  onSearch?: (value: string) => Promise<Option[]>

  /** When the number of selected options exceeds the limit, the onMaxSelected will be called. */
  onMaxSelected?: (maxLimit: number) => void

  onChange?: (options: Option[]) => void

  /** Hide the placeholder when there are options selected. */
  hidePlaceholderWhenSelected?: boolean

  /** Loading component. */
  loadingIndicator?: React.ReactNode

  /** Empty component. */
  emptyIndicator?: React.ReactNode

  /**
   * Only work with `onSearch` prop. Trigger search when `onFocus`.
   * For example, when user click on the input, it will trigger the search to get initial options.
   **/
  triggerSearchOnFocus?: boolean

  /**
   * First item selected is a default behavior by cmdk. That is why the default is true.
   * This is a workaround solution by add a dummy item.
   *
   * @reference: https://github.com/pacocoursey/cmdk/issues/171
   */
  selectFirstItem?: boolean

  /** Default value for the Combobox.
   * @remarks
   * DO NOT pass duplicated values, they are used as keys*/
  defaultOptions?: Option[]

  /** Callback when the open/closed state of the dropdown changes */
  onOpenChange?: () => void

  /** Control the size of the combobox. */
  size?: "sm" | "md" | "lg"

  badgeClassName?: string

  /** Where the portal children are mounted on DOM
   * @remarks
   * The default value is `{@link portalRoot} or undefined */
  mountNode?: HTMLElement

  /** Whether the combobox allows multiple selections. */
  multiselect?: boolean

  placeholder?: string

  /** Limit the maximum number of selected options. */
  maxSelected?: number

  /** Whether the combobox is open by default.
   *
   * @remarks
   * Use only when combobox is uncontrolled.
   * */
  defaultOpen?: boolean

  /** Allow user to create option when there is no option matched. */
  creatable?: boolean

  /** Determine if the input will have a clearable icon/function */
  clearable?: boolean

  /** Custom classes for the combobox
   * @remarks
   * This styles will be applied to the {@link Input} component*/
  className?: string

  disabled?: boolean

  /** Manually controlled options. */
  options?: Option[]

  /** Group the options base on provided key. */
  groupBy?: string

  selectedOptions?: Option[]

  /** Debounce time for async search. Only work with `onSearch`. */
  delay?: number

  /** Whether the combobox will display tags for selected options.
   *
   * @remarks
   * Only work if `multiselect === true`.
   */
  tags?: boolean

  /** Control the open/close state of the dropdown.
   *
   * @remarks
   * Use together with onOpenChange to fully control the dropdown's visibility*/
  open?: boolean
}

export interface MultipleSelectorRef {
  selectedValue: Option[]
  input: HTMLInputElement
}

export interface Option {
  value: string
  label: string
  disable?: boolean
  /** fixed option that can't be removed. */
  fixed?: boolean

  /** Group the options by providing key. */
  [key: string]: string | boolean | undefined
}

export interface GroupOption {
  [key: string]: Option[]
}
