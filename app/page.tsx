import AnimatedBlock from '@/components/AnimatedBlock'
import { DropFigures } from '@/components/DropFigures'
import Process from '@/components/Process'


export default function Home() {
  return (
    <main className="w-[1440px] mx-auto pl-[288px]">
      <AnimatedBlock>
        <section id='#home' className="relative h-[600px] pt-16 mb-20">
          <div className='relative z-10 pointer-events-none'>
            <h1 className="w-3/5 mb-8 text-4xl font-semibold">We’ll create an award winning website for you through our carefully crafted process.</h1>
            <span className="text-xs uppercase text-white/75">making meaningful experiences</span>
          </div>
          <DropFigures />
        </section>
      </AnimatedBlock>
      <Process />
    </main>
  )
}
