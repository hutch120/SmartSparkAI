interface IInputBox {
  title: string
  description: string
  updateState: React.Dispatch<React.SetStateAction<string>>
  value: string
  maxLength?: number
  setMessage: React.Dispatch<React.SetStateAction<string>>
  makeS3Safe?: boolean
  makeDBSafe?: boolean
  makeUpperCase?: boolean
  type?: string
  rows?: number
  numberCheck?: boolean
}

export function InputBox({
  title,
  description,
  updateState,
  value,
  maxLength = 2048,
  setMessage,
  makeS3Safe = false,
  makeDBSafe = false,
  makeUpperCase = false,
  type = 'text',
  rows = 5,
  numberCheck = false
}: IInputBox): JSX.Element {
  return (
    <label className="block pb-4">
      <span className="text-gray-400">{title}</span>
      <div className="text-gray-600">{description}</div>
      {type === 'text' && (
        <div>
          <input
            type={type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
             focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            value={value}
            onChange={(evt) => {
              let newValue = evt.target.value
              if (makeUpperCase) {
                newValue = newValue.toUpperCase()
              }
              if (makeS3Safe) {
                newValue = newValue.replace(/[^a-z0-9-]/gi, '')
              }
              if (makeDBSafe) {
                newValue = newValue.replace(/[^a-z0-9-. ]/gi, '')
              }
              if (numberCheck) {
                try {
                  if (isNaN(Number(newValue))) {
                    setMessage(`${title} is not a valid number.`)
                  } else {
                    updateState(newValue)
                  }
                } catch (error) {
                  setMessage(`${title} is not a valid number.`)
                }
              }
              if (maxLength !== 0 && newValue.length > maxLength) {
                setMessage(`${title} text too long. Max length ${maxLength}`)
              } else {
                setMessage('')
                updateState(newValue)
              }
            }}
          />
        </div>
      )}
      {type === 'textarea' && (
        <textarea
          rows={rows}
          className="mt-1 block w-full whitespace-pre-wrap p-2 bg-gray-50 border border-gray-300
           text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
           dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          value={value}
          onChange={(evt) => {
            let newValue = evt.target.value
            if (makeS3Safe) {
              newValue = newValue.replace(/[^a-z0-9-]/gi, '')
            }
            if (makeDBSafe) {
              newValue = newValue.replace(/[^a-z0-9-\r\n|\r|\n ]/gi, '')
            }
            if (maxLength !== 0 && newValue.length > maxLength) {
              setMessage(`${title} text too long. Max length ${maxLength}`)
            } else {
              updateState(newValue)
            }
          }}
        />
      )}
    </label>
  )
}
