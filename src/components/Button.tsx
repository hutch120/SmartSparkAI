import { Spinner } from './Spinner'

interface IButton {
  label: string
  disabled?: boolean
  onClick?: () => void
  actionInProgress?: boolean
}
export function Button({ actionInProgress = false, label, onClick }: IButton) {
  return (
    <button
      disabled={actionInProgress}
      onClick={onClick}
      type="button"
      className="m-2 text-white bg-blue-700 
       font-medium rounded-lg text-sm px-5 py-2.5 text-center 
      dark:bg-blue-600  disabled:bg-gray-500"
    >
      <div className="block">
        <div className="inline-block h-[15px]">{actionInProgress && <Spinner />}</div>
        <div className="inline-block h-[15px]">{label}</div>
      </div>
    </button>
  )
}
