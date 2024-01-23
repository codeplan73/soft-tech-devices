import Image from 'next/image'
import HeroSection from '../components/landingPage/HeroSection'
import CategoryCard from '../components/landingPage/CategoryCard'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-5 md:px-20 py-5  bg-slate-100">
      <HeroSection />
      <div className="grid place-content-center grid-cols-1 md:grid-cols-3 xl:grid-cols-6 md:justify-start  items-start drop-shadow-sm">
        <CategoryCard
          image="/img/watch.png"
          text="Smart watches"
          discount="-25%"
        />

        <CategoryCard image="/img/laptop.png" text="Laptops" discount="-25%" />
        <CategoryCard
          image="/img/camera.png"
          text="GoPro camera"
          discount="-25%"
        />
        <CategoryCard
          image="/img/headset.png"
          text="Headphones"
          discount="-25%"
        />
        <CategoryCard
          image="/img/iphone-14-pro-max.jpeg"
          text="Phones"
          discount="-25%"
        />
        <CategoryCard image="/img/phone.png" text="Speakers" discount="-25%" />
      </div>
      <h1>Index page this is cool</h1>
    </div>
  )
}
