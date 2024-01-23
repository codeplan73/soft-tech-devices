import Image from 'next/image'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div className="flex flex-col gap-6 px-5 md:px-20 py-5  bg-slate-100">
      <HeroSection />
      <h1>Index page this is cool</h1>
    </div>
  )
}
