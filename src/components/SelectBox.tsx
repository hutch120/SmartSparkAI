export interface ISelectBoxItem {
  key: string
  value: string
}

interface ISelectBox {
  title?: string
  description?: string
  updateState: React.Dispatch<React.SetStateAction<string>>
  value: string
  options: string[]
}

export function SelectBox({
  title,
  description,
  updateState,
  value,
  options
}: ISelectBox): JSX.Element {
  // Adpated from here: https://flowbite.com/docs/forms/select/
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
      {title && title !== '' && <span className="text-gray-700">Select a {title}</span>}
      {description && description !== '' && <div className="text-gray-300">{description}</div>}
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={value}
        onChange={(evt) => {
          const newValue = evt.target.options[evt.target.options.selectedIndex].getAttribute(
            'value'
          ) as string
          updateState(newValue)
        }}
      >
        {options.map((value: string) => {
          return (
            <option key={value} value={value}>
              {value}
            </option>
          )
        })}
      </select>
    </label>
  )
}
