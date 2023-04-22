import { Layout } from './Layout'
import { IGlobalState } from './OneRoutes'
import * as Icons from '../components/Icons'
import { Link } from 'react-router-dom'

interface ILanding {
  gs: IGlobalState
}

export function Landing({ gs }: ILanding) {
  return (
    <Layout showMapHeaderMenu={true} title="SmartSparkAI" gs={gs}>
      <div className="p-10">
        <h1 className="pb-8 sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-2xl text-center sm:text-5xl md:text-4xl lg:w-auto lg:text-left xl:text-4xl dark:text-white">
          Smart{''}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            Spark{''}
          </span>
          AI
        </h1>
        <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">
          A smart AI that will answer life{"'"}s <br className="lg:block hidden" />{' '}
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            toughest questions{' '}
          </span>
          as your favorite persona!
        </h1>

        <div className="relative mt-8 md:mt-8 space-y-4 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
          <div>
            <Link to="">
              <button className="bg-blue-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <Icons.ArrowTrendingUp />
                <span className="pr-2 pl-2 text-white">Child</span>
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-12 md:mt-0 lg:w-7/12 max-w-[550px]">
          <div className="pt-10">
            <img
              src="images/robot_playing_with_boy.png"
              className="relative w-full opacity-[0.8]"
              alt="wath illustration"
              loading="lazy"
              width="320"
              height="280"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}
