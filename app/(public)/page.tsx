import Image from 'next/image'
import HeroSection from '../components/landingPage/HeroSection'
import CategoryCard from '../components/landingPage/CategoryCard'
import Link from 'next/link'
import ProductCard from '../components/landingPage/ProductCard'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 px-5 md:px-20 py-5  bg-slate-100">
      {/* Hero section */}
      <HeroSection />
      {/* end hero section */}

      {/*  */}
      <div className="grid place-content-center grid-cols-2 md:grid-cols-3 xl:grid-cols-6 md:justify-start  items-start drop-shadow-sm">
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

      <div className="grid grid-cols-1 md:grid-cols-4">
        <div
          className="hidden col-span-1 md:hidden lg:flex flex-col gap-4 bg-contain rounded-tl-md rounded-bl-md inset-4 p-4 h-full"
          style={{ backgroundImage: "url('/img/items-banner.png')" }}
        >
          <h4 className="text-xl md:text-2xl font-semibold line-clamp-4 mb-4">
            Home items and <br /> Outdoors
          </h4>
          <Link
            href="/products?items=outdoors"
            className="bg-white text-sm font-semibold rounded-md px-4 py-2 max-w-max"
          >
            View All
          </Link>
        </div>

        <div className="w-full col-span-1 md:col-span-4 lg:col-span-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
          <ProductCard
            price="5000"
            title="Smart Watches"
            image="/img/watch.png"
          />
        </div>
      </div>
    </div>
  )
}
