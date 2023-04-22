const iconClasses = 'inline w-6 h-6 text-white'

// https://heroicons.com/

export function ChartPie(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#b76500"
      className={iconClasses}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
      />
    </svg>
  )
}

export function Tick(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#64c564"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}
export function Flag(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
      />
    </svg>
  )
}

export function CurrencyDollar(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export function EyeOpen(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export function EyeClosed(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  )
}

export function LockClosed(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  )
}

export function LockOpen(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  )
}

export function ArrowsPointingIn(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
      />
    </svg>
  )
}

export function ArrowsPointingOut(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
      />
    </svg>
  )
}

export function Help(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
      />
    </svg>
  )
}

export function Close(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m-15 0l15 15" />
    </svg>
  )
}

export function Sparkles(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  )
}

export function ArrowTrendingUp(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
      />
    </svg>
  )
}

export function ArrowDownCircle(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export function ArrowLongUp(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
      />
    </svg>
  )
}

export function ArrowLongRight(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  )
}

export function Check(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export function Clock(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )
}

export function Bars3(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconClasses}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  )
}

interface IWheel {
  color?: string
}
export function Wheel({ color = '#fff' }: IWheel): JSX.Element {
  const wh = 50
  const viewbox = `0 0 ${wh * 2} ${wh * 2}`
  return (
    <svg width={wh} height={wh} viewBox={viewbox} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m94.821 47.89c-2.688 0.901-5.354 0.92-6.272 0.895v-1.153h-1.643v-0.763h-2.676c-0.647-7.154-3.481-13.675-7.835-18.887l1.891-1.89-0.54-0.539 1.162-1.161-0.816-0.816c0.632-0.667 2.53-2.537 5.07-3.801 2.75-1.371 3.593-3.73 2.181-5.142s-3.771-0.569-5.142 2.181c-1.265 2.539-3.136 4.438-3.803 5.07l-0.815-0.816-1.161 1.162-0.54-0.54-1.89 1.891c-5.217-4.347-11.741-7.173-18.897-7.813v-2.673h-0.761v-1.643h-1.154c-0.025-0.918-6e-3 -3.584 0.896-6.272 0.976-2.914-0.098-5.178-2.094-5.178-1.997 0-3.07 2.264-2.093 5.178 0.901 2.688 0.92 5.354 0.895 6.272h-1.154v1.643h-0.762v2.677c-7.154 0.646-13.675 3.48-18.887 7.833l-1.89-1.89-0.539 0.54-1.161-1.161-0.815 0.815c-0.667-0.632-2.538-2.531-3.802-5.07-1.371-2.75-3.73-3.594-5.142-2.181-1.412 1.412-0.568 3.771 2.182 5.142 2.538 1.264 4.437 3.134 5.069 3.802l-0.815 0.815 1.16 1.161-0.538 0.539 1.892 1.892c-4.348 5.216-7.173 11.74-7.813 18.896h-2.676v0.762h-1.641v1.154c-0.917 0.024-3.584 4e-3 -6.273-0.896-2.914-0.977-5.179 0.095-5.179 2.092 0 1.998 2.265 3.07 5.179 2.094 2.689-0.9 5.356-0.921 6.273-0.896v1.154h1.641v0.761h2.678c0.647 7.155 3.48 13.676 7.833 18.889l-1.889 1.891 0.537 0.537-1.161 1.162 0.815 0.815c-0.631 0.667-2.528 2.539-5.069 3.803-2.75 1.37-3.592 3.73-2.181 5.141 1.411 1.413 3.771 0.569 5.142-2.182 1.264-2.538 3.135-4.438 3.802-5.068l0.815 0.815 1.161-1.16 0.539 0.538 1.892-1.892c5.216 4.348 11.74 7.174 18.896 7.813v2.675h0.761v1.643h1.154c0.026 0.918 6e-3 3.583-0.897 6.272-0.974 2.914 0.099 5.179 2.095 5.179 1.997 0 3.069-2.265 2.094-5.179-0.901-2.689-0.922-5.354-0.896-6.272h1.152v-1.643h0.762v-2.677c7.154-0.646 13.675-3.479 18.889-7.833l1.89 1.89 0.538-0.539 1.161 1.161 0.815-0.815c0.668 0.631 2.539 2.529 3.803 5.068 1.37 2.751 3.73 3.594 5.143 2.183 1.411-1.413 0.567-3.772-2.183-5.144-2.539-1.263-4.437-3.134-5.069-3.801l0.815-0.816-1.159-1.16 0.537-0.54-1.89-1.891c4.347-5.217 7.173-11.74 7.812-18.896h2.675v-0.762h1.643v-1.155c0.918-0.024 3.585-6e-3 6.272 0.896 2.913 0.975 5.179-0.098 5.179-2.094 1e-3 -1.996-2.265-3.07-5.178-2.092zm-75.614 2.959c-0.466 0-0.846-0.377-0.846-0.846s0.38-0.848 0.846-0.848c0.468 0 0.848 0.379 0.848 0.848s-0.38 0.846-0.848 0.846zm51.968-23.22c0.33-0.33 0.867-0.33 1.197 0 0.331 0.332 0.331 0.868 0 1.199-0.33 0.33-0.867 0.33-1.197 0-0.332-0.331-0.33-0.868 0-1.199zm-2.506 6.514 0.459 0.459 1.41-1.408c3.224 3.933 5.335 8.791 5.868 14.133h-1.992v0.649h-2.124v0.985c-0.722 0.021-2.802 2e-3 -4.902-0.765-1.778-0.649-3.233-0.229-3.793 0.793v-1.013h-2.136c-0.302-1.721-0.978-3.308-1.944-4.679l1.505-1.504-0.718-0.716c1.118 0.326 2.445-0.406 3.243-2.121 0.952-2.05 2.418-3.528 2.928-4.007l0.694 0.696zm-8.986 15.857c0 0.467-0.378 0.847-0.847 0.847-0.468 0-0.848-0.38-0.848-0.847 0-0.469 0.38-0.847 0.848-0.847 0.469 0 0.847 0.378 0.847 0.847zm-7.914-17.387c-0.768-2.101-0.785-4.18-0.765-4.903h0.984v-2.123h0.649v-1.995c5.344 0.525 10.204 2.63 14.142 5.849l-1.407 1.407 0.46 0.459-1.502 1.502 0.696 0.694c-0.479 0.511-1.957 1.975-4.007 2.927-1.715 0.798-2.446 2.125-2.121 3.243l-0.716-0.716-1.508 1.508c-1.375-0.965-2.966-1.632-4.687-1.929v-2.129h-1.013c1.022-0.562 1.444-2.018 0.795-3.794zm-8.615 23.034c0.331-0.329 0.866-0.329 1.198 0 0.331 0.331 0.331 0.869 0 1.199-0.332 0.331-0.867 0.33-1.198 0-0.332-0.329-0.332-0.867 0-1.199zm0-12.495c0.331-0.33 0.866-0.33 1.198 1e-3 0.331 0.33 0.331 0.866 0 1.198-0.331 0.331-0.867 0.331-1.198 0-0.332-0.331-0.332-0.867 0-1.199zm0.615 6.848c0-3.441 2.79-6.232 6.231-6.232s6.232 2.791 6.232 6.232-2.791 6.23-6.232 6.23-6.231-2.789-6.231-6.23zm11.88 5.648c0.332-0.33 0.867-0.33 1.198 0 0.33 0.33 0.33 0.868 0 1.198-0.331 0.33-0.867 0.331-1.198 0-0.331-0.329-0.331-0.867 0-1.198zm1.199-11.296c-0.331 0.331-0.867 0.33-1.198 0-0.331-0.332-0.331-0.868 0-1.199 0.332-0.33 0.867-0.33 1.198 0 0.33 0.331 0.33 0.867 0 1.199zm-6.848-25.989c0.467 0 0.847 0.378 0.847 0.847 0 0.467-0.38 0.847-0.847 0.847s-0.847-0.38-0.847-0.847c0-0.469 0.38-0.847 0.847-0.847zm0 21.954c0.467 0 0.847 0.38 0.847 0.847 0 0.468-0.38 0.848-0.847 0.848s-0.847-0.38-0.847-0.848c0-0.467 0.38-0.847 0.847-0.847zm-2.673-16.724v1.993h0.649v2.123h0.985c0.021 0.723 2e-3 2.803-0.765 4.903-0.649 1.776-0.227 3.232 0.793 3.793h-1.013v2.135c-1.719 0.302-3.308 0.977-4.678 1.946l-1.505-1.505-0.716 0.716c0.326-1.118-0.406-2.445-2.121-3.243-2.05-0.952-3.528-2.417-4.006-2.927l0.695-0.696-1.502-1.5 0.46-0.46-1.409-1.411c3.932-3.223 8.792-5.334 14.133-5.867zm-5.315 26.407c0 0.467-0.38 0.847-0.848 0.847-0.467 0-0.847-0.38-0.847-0.847 0-0.469 0.38-0.847 0.847-0.847 0.468 0 0.848 0.378 0.848 0.847zm-14.384-22.371c0.33-0.33 0.867-0.33 1.198 0 0.331 0.332 0.331 0.868 0 1.198-0.331 0.332-0.868 0.332-1.198 0-0.332-0.33-0.332-0.867 0-1.198zm1.812 5.592 1.407 1.407 0.459-0.459 1.502 1.5 0.694-0.695c0.511 0.479 1.975 1.958 2.927 4.007 0.798 1.715 2.125 2.446 3.243 2.121l-0.716 0.716 1.508 1.509c-0.962 1.374-1.631 2.964-1.928 4.685h-2.13v1.012c-0.56-1.02-2.016-1.441-3.793-0.792-2.1 0.768-4.181 0.787-4.903 0.766v-0.985h-2.122v-0.651h-1.996c0.526-5.343 2.631-10.204 5.848-14.141zm-0.614 39.153c-0.332 0.332-0.868 0.332-1.198 0-0.332-0.331-0.332-0.866 0-1.197 0.33-0.331 0.866-0.331 1.196 0 0.332 0.331 0.332 0.866 2e-3 1.197zm2.505-6.518-0.459-0.46-1.411 1.41c-3.223-3.935-5.334-8.792-5.866-14.133h1.993v-0.65h2.122v-0.984c0.722-0.021 2.804-4e-3 4.903 0.765 1.777 0.648 3.233 0.228 3.793-0.794v1.014h2.136c0.302 1.719 0.977 3.307 1.943 4.679l-1.504 1.504 0.717 0.716c-1.118-0.325-2.445 0.406-3.244 2.122-0.952 2.048-2.416 3.526-2.927 4.006l-0.695-0.694zm16.9 1.532c0.768 2.1 0.786 4.18 0.764 4.901h-0.983v2.123h-0.651v1.996c-5.342-0.526-10.203-2.63-14.14-5.85l1.407-1.405-0.46-0.459 1.502-1.502-0.695-0.695c0.479-0.511 1.958-1.976 4.006-2.928 1.716-0.798 2.446-2.125 2.121-3.243l0.717 0.717 1.508-1.508c1.374 0.963 2.964 1.632 4.685 1.928v2.13h1.013c-1.022 0.561-1.443 2.016-0.794 3.795zm1.769 14.255c-0.467 0-0.847-0.38-0.847-0.849 0-0.467 0.38-0.846 0.847-0.846s0.847 0.379 0.847 0.846c0 0.469-0.38 0.849-0.847 0.849zm0-21.96c-0.467 0-0.847-0.381-0.847-0.847 0-0.469 0.38-0.848 0.847-0.848s0.847 0.379 0.847 0.848c0 0.466-0.38 0.847-0.847 0.847zm2.674 16.722v-1.993h-0.65v-2.123h-0.984c-0.021-0.722-4e-3 -2.802 0.764-4.901 0.65-1.778 0.229-3.233-0.792-3.795h1.013v-2.135c1.72-0.302 3.308-0.977 4.68-1.943l1.503 1.503 0.717-0.716c-0.325 1.118 0.406 2.445 2.121 3.243 2.05 0.951 3.526 2.415 4.006 2.927l-0.694 0.695 1.502 1.501-0.461 0.46 1.411 1.41c-3.936 3.224-8.794 5.335-14.136 5.867zm19.698-4.031c-0.33 0.332-0.866 0.332-1.197 0-0.33-0.331-0.33-0.866 0-1.197 0.331-0.331 0.867-0.331 1.197 0 0.333 0.331 0.331 0.866 0 1.197zm-1.811-5.596-1.407-1.406-0.459 0.459-1.502-1.502-0.695 0.696c-0.511-0.48-1.975-1.958-2.928-4.006-0.798-1.717-2.124-2.446-3.242-2.121l0.716-0.717-1.507-1.507c0.964-1.375 1.632-2.966 1.93-4.687h2.129v-1.014c0.56 1.021 2.015 1.443 3.793 0.794 2.101-0.769 4.181-0.786 4.902-0.765v0.984h2.124v0.65h1.995c-0.526 5.345-2.632 10.205-5.849 14.142zm10.231-15.929c-0.467 0-0.847-0.377-0.847-0.846s0.38-0.848 0.847-0.848c0.468 0 0.848 0.379 0.848 0.848s-0.38 0.846-0.848 0.846z"
        fill={color}
      />
    </svg>
  )
}

export function PortMarker(): JSX.Element {
  const iconClassesLocal = 'inline w-6 h-6'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      className={iconClassesLocal}
    >
      <path d="M 21.75,13.5 A 8.25,8.25 0 0 0 13.5,5.25 0.75,0.75 0 0 0 12.75,6 v 6.75 H 6 a 0.75,0.75 0 0 0 -0.75,0.75 8.25,8.25 0 0 0 16.5,0 z" />
      <path d="M 11.25,3 A 0.75,0.75 0 0 0 10.5,2.25 8.25,8.25 0 0 0 2.25,10.5 0.75,0.75 0 0 0 3,11.25 h 7.5 a 0.75,0.75 0 0 0 0.75,-0.75 z" />
    </svg>
  )
}

export function StarboardMarker(): JSX.Element {
  const iconClassesLocal = 'inline w-6 h-6'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#40db00"
      className={iconClassesLocal}
    >
      <path d="M 2.25,13.5 A 8.25,8.25 0 0 1 10.5,5.25 0.75,0.75 0 0 1 11.25,6 v 6.75 H 18 a 0.75,0.75 0 0 1 0.75,0.75 8.25,8.25 0 0 1 -16.5,0 z" />
      <path d="M 12.75,3 A 0.75,0.75 0 0 1 13.5,2.25 8.25,8.25 0 0 1 21.75,10.5 0.75,0.75 0 0 1 21,11.25 H 13.5 A 0.75,0.75 0 0 1 12.75,10.5 Z" />
    </svg>
  )
}

export function PortMarkerLarge(): JSX.Element {
  const iconClassesLocal = 'inline w-[100px] h-[100px]'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      className={iconClassesLocal}
    >
      <path d="M 21.75,13.5 A 8.25,8.25 0 0 0 13.5,5.25 0.75,0.75 0 0 0 12.75,6 v 6.75 H 6 a 0.75,0.75 0 0 0 -0.75,0.75 8.25,8.25 0 0 0 16.5,0 z" />
      <path d="M 11.25,3 A 0.75,0.75 0 0 0 10.5,2.25 8.25,8.25 0 0 0 2.25,10.5 0.75,0.75 0 0 0 3,11.25 h 7.5 a 0.75,0.75 0 0 0 0.75,-0.75 z" />
    </svg>
  )
}

export function StarboardMarkerLarge(): JSX.Element {
  const iconClassesLocal = 'inline w-[100px] h-[100px]'
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#40db00"
      className={iconClassesLocal}
    >
      <path d="M 2.25,13.5 A 8.25,8.25 0 0 1 10.5,5.25 0.75,0.75 0 0 1 11.25,6 v 6.75 H 18 a 0.75,0.75 0 0 1 0.75,0.75 8.25,8.25 0 0 1 -16.5,0 z" />
      <path d="M 12.75,3 A 0.75,0.75 0 0 1 13.5,2.25 8.25,8.25 0 0 1 21.75,10.5 0.75,0.75 0 0 1 21,11.25 H 13.5 A 0.75,0.75 0 0 1 12.75,10.5 Z" />
    </svg>
  )
}

export function BetweenObjects(): JSX.Element {
  const iconClassesLocal = 'inline w-6 h-6'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={iconClassesLocal}>
      <polygon points="78.764,33.124 94.995,4.996 66.875,21.235 70.876,25.236 25.23,70.883 21.231,66.883 4.996,94.995 33.116,78.768   29.117,74.77 74.763,29.123 "></polygon>
    </svg>
  )
}

export function BetweenObjectsLarge(): JSX.Element {
  const iconClassesLocal = 'inline w-[100px] h-[100px]'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={iconClassesLocal}>
      <polygon points="78.764,33.124 94.995,4.996 66.875,21.235 70.876,25.236 25.23,70.883 21.231,66.883 4.996,94.995 33.116,78.768   29.117,74.77 74.763,29.123 "></polygon>
    </svg>
  )
}
