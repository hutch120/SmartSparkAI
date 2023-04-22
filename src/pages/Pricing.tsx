import { Layout } from './Layout'
import { IGlobalState } from './OneRoutes'
import { Link } from 'react-router-dom'
import * as Icons from '../components/Icons'

interface IPricing {
  gs: IGlobalState
}

export function Pricing({ gs }: IPricing) {
  const featuresCurrent = ['TODO']

  const featuresRoadmap = ['TODO']

  return (
    <Layout showMapHeaderMenu={true} title="Pricing" gs={gs}>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="bg-white relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-4 sm:p-12 lg:py-10 lg:px-6 xl:p-12">
            <h2 className="font-bold text-dark text-[42px]">
              $20
              <span className="text-base text-body-color font-medium">/ year</span>
            </h2>
            <div className="text-base text-body-color font-medium">One time 3 month trial</div>

            <div className="text-base text-body-color pb-6 pt-6">
              Activate user licence at any time. During the three month trial all current features
              in the paid tier are available.
              <div className="pt-6">
                <Link to="/activate">
                  <button className="bg-blue-600 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span className="pr-2 pl-2 text-white">Activate account (Coming Soon)</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="border-b border-[#F2F2F2]" />
            <div className="mb-7">
              <div className="text-base text-body-color font-medium mt-5 mb-2">
                Major Components
              </div>
              <div>
                {featuresCurrent.map((feature) => {
                  return <FeatureCurrent key={feature} label={feature} />
                })}
              </div>
            </div>

            <div className="border-b border-[#F2F2F2]" />

            <div className="mb-7">
              <div className="text-base text-body-color font-medium mt-5 mb-2">Roadmap</div>
              <div>
                {featuresRoadmap.map((feature) => {
                  return <FeatureRoadmap key={feature} label={feature} />
                })}
              </div>
            </div>

            <BackgroundImage />
          </div>
        </div>
      </div>
    </Layout>
  )
}

interface IFeature {
  label: string
}

function FeatureCurrent({ label }: IFeature) {
  return (
    <div className="block">
      <div className="inline-block h-[15px] pr-2">
        <Icons.Tick />
      </div>
      <div className="inline-block h-[15px]">{label}</div>
    </div>
  )
}

interface IFeature {
  label: string
}

function FeatureRoadmap({ label }: IFeature) {
  return (
    <div className="block">
      <div className="inline-block h-[15px] pr-2">
        <Icons.ChartPie />
      </div>
      <div className="inline-block h-[15px]">{label}</div>
    </div>
  )
}

function BackgroundImage() {
  return (
    <div>
      <span className="absolute right-0 top-7 z-[-1]">
        <svg
          width="77"
          height="172"
          viewBox="0 0 77 172"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="86"
              y1="0"
              x2="86"
              y2="172"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3056D3" stopOpacity="0.09" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className="absolute right-4 top-4 z-[-1]">
        <svg
          width="41"
          height="89"
          viewBox="0 0 41 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="38.9138"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 38.9138 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 38.9138 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 38.9138 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 38.9138 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 38.9138 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 38.9138 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 38.9138 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="38.9138"
            cy="1.42021"
            r="1.42021"
            transform="rotate(180 38.9138 1.42021)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 26.4157 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 26.4157 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 26.4157 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 26.4157 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 26.4157 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 26.4157 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 26.4157 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="26.4157"
            cy="1.4202"
            r="1.42021"
            transform="rotate(180 26.4157 1.4202)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 13.9177 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 13.9177 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 13.9177 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 13.9177 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 13.9177 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 13.9177 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 13.9177 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="13.9177"
            cy="1.42019"
            r="1.42021"
            transform="rotate(180 13.9177 1.42019)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="87.4849"
            r="1.42021"
            transform="rotate(180 1.41963 87.4849)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="74.9871"
            r="1.42021"
            transform="rotate(180 1.41963 74.9871)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="62.4892"
            r="1.42021"
            transform="rotate(180 1.41963 62.4892)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="38.3457"
            r="1.42021"
            transform="rotate(180 1.41963 38.3457)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="13.634"
            r="1.42021"
            transform="rotate(180 1.41963 13.634)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="50.2754"
            r="1.42021"
            transform="rotate(180 1.41963 50.2754)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="26.1319"
            r="1.42021"
            transform="rotate(180 1.41963 26.1319)"
            fill="#3056D3"
          />
          <circle
            cx="1.41963"
            cy="1.4202"
            r="1.42021"
            transform="rotate(180 1.41963 1.4202)"
            fill="#3056D3"
          />
        </svg>
      </span>
    </div>
  )
}
