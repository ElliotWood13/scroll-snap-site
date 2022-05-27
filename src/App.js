import React, { useRef } from 'react'
// import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
import { RegularLayout } from './components/layouts/regularLayout'
import { Header } from './components/organisms/header'
import { BrandSection } from './components/organisms/brandSection/brandSection'
import { CountdownSection } from './components/organisms/countdownSection/countdownSection'
import { DefiSection } from './components/organisms/defiSection'
import { FeaturesSection } from './components/organisms/featuresSection'
import { KpiSection } from './components/organisms/kpiSection/kpiSection'
import { TeamSection } from './components/organisms/teamSection'
import { Navigation } from './components/organisms/navigation'

// TODO: Think about how to space sections
// TODO: Change scroll to section to use useRef instead of ID's - make sure mobile menu works
// TODO: Update logo192 and logo512 in index.html
// TODO: Uninstall scrollSnapPolyfill package if not used
// TODO: Better menu styles (inc Hover)

function App() {
  const brandSectionRef = useRef(null)
  const uspSectionRef = useRef(null)
  const featuresSectionRef = useRef(null)
  const teamSectionRef = useRef(null)
  const targetsSectionRef = useRef(null)
  const countdownSectionRef = useRef(null)
  const refs = useRef({
    brandSectionRef,
    uspSectionRef,
    featuresSectionRef,
    teamSectionRef,
    targetsSectionRef,
    countdownSectionRef,
  })
  return (
    <>
      <Header>
        <Navigation ref={refs} />
      </Header>
      <RegularLayout>
        <BrandSection ref={brandSectionRef} />
        <DefiSection ref={uspSectionRef} />
        <FeaturesSection ref={featuresSectionRef} />
        <TeamSection ref={teamSectionRef} />
        <KpiSection ref={targetsSectionRef} />
        <CountdownSection ref={countdownSectionRef} />
      </RegularLayout>
    </>
  )
}

export default App
