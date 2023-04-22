import { Layout } from './Layout'
import { API_SERVER_NAME } from '../config'
import { IGlobalState } from './OneRoutes'

interface IAuth {
  gs: IGlobalState
}

export function Auth({ gs }: IAuth) {
  const twitterLoginUrl = `${API_SERVER_NAME}/user/login/twitter`

  return (
    <Layout showMapHeaderMenu={true} title="SignIn" gs={gs}>
      <div className="relative py-16">
        <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-xl bg-white shadow-xl">
              {gs.isAuthenticated && (
                <div className="p-6 sm:p-16 bg-[#ededed]">
                  <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                    <div className="relative flex items-center space-x-4 justify-center">
                      <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                        Logout
                      </span>
                    </div>
                  </button>
                </div>
              )}
              {!gs.isAuthenticated && (
                <div className="p-6 sm:p-16 bg-[#ededed]">
                  <div className="space-y-4">
                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                      Sign in to unlock the <br /> best of SmartSparkAI.com
                    </h2>
                  </div>
                  <div className="mt-10 grid space-y-4">
                    <a href={twitterLoginUrl} className="grid">
                      <button className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300  hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100">
                        <div className="relative flex items-center space-x-4 justify-center">
                          <img src="" className="absolute left-0 w-5" alt="twitter logo" />
                          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                            Continue with Twitter
                          </span>
                        </div>
                      </button>
                    </a>
                  </div>

                  <div className="space-y-4 text-gray-600 text-center sm:-mb-8 mt-20">
                    <div className="text-xs">
                      By proceeding, you agree to our{' '}
                      <a href="#" className="underline">
                        Terms of Use
                      </a>{' '}
                      and confirm you have read our{' '}
                      <a href="/privacy.html" className="underline">
                        Privacy and Cookie Statement
                      </a>
                      .
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
