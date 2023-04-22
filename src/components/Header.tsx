import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from './Icons'
import { IGlobalState } from '../pages/OneRoutes'

interface IHeader {
  showMenu?: boolean
  gs: IGlobalState
}
// From  here: https://larainfo.com/blogs/react-responsive-navbar-menu-with-tailwind-css-example
export function Header({ showMenu = true, gs }: IHeader) {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav className="bg-blue-500 shadow z-20">
      <div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8 bg-blue-500">
        <div className="h-[64px] flex items-center justify-between py-3">
          <Link to="/">
            <img
              src="logo.png"
              className=""
              alt="wath illustration"
              loading="lazy"
              width="30"
              height="30"
            />
          </Link>
          {showMenu && (
            <Link to="/">
              <div className="pl-2 text-2xl font-bold text-white">SmartSparkAI.com</div>
            </Link>
          )}
          {showMenu && (
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <Icons.Close /> : <Icons.Bars3 />}
              </button>
            </div>
          )}
        </div>

        {showMenu && (
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <Link to="/">Home</Link>
                </li>
                {!gs.isAuthenticated && (
                  <li className="text-white hover:text-indigo-200">
                    <Link to="/auth">Sign In</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
