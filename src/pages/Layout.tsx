import { Header } from '../components/Header'
import { Helmet } from 'react-helmet'
import { IGlobalState } from './OneRoutes'

interface ILayout {
  children: JSX.Element | JSX.Element[]
  scrollContent?: boolean
  showMapHeaderMenu: boolean
  title: string
  gs: IGlobalState
}

export function Layout({ children, showMapHeaderMenu, title, gs }: ILayout) {
  return (
    <div className="bg-gray-900">
      <Helmet>
        <title>SmartSparkAI.com - {title}</title>
      </Helmet>
      <Header showMenu={showMapHeaderMenu} gs={gs} />
      {children}
    </div>
  )
}
