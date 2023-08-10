import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (<>
    <header>
      <div className="header-container">
        <div className="header-background"></div>
        <div className="header-text"><Image alt="bun from the void" src="/img/buncult.svg" width={300} height={50} /></div>
        <div className="header-bun"><Image alt="bun from the void" src="/img/bun.png" width={300} height={300} /></div>
      </div>
      <div className='benny'><Image alt="benny drinking coffee" src="/img/_cafe.webp" width={256} height={293} /></div>
      <nav>
        <Link className="navItem" href="https://twitter.com/bennyraccoon">twitter</Link>
        <Link className="navItem" href="https://www.instagram.com/bennyraccoon/">instagram</Link>
        <Link className="navItem" href="https://www.youtube.com/c/bennyraccoon">youtube</Link>
        <Link className="navItem" href="https://www.tiktok.com/@bennyraccoon">tiktok</Link>
      </nav>
    </header>
    <main>
      <Link className="store-link" title='store' href='https://www.etsy.com/se-en/shop/TheBunCult'>Check my the store!</Link>
      <section className='two-content'>
        <div className='content'>
          <h2>A videogame!</h2>
          <span>I am forging Benny the Raccoon&apos;s videogame! Ride along this adventure and get access to the secret content!</span>
        </div>
        <div className='content'>
          <h2>Dungeons and dragons</h2>
          <span>Jump into the world of Galluvinchia and check the custom material! Character sheets, locations and exclusive adventures!</span>
        </div>
      </section>
      <section>
        <div className='last-ctas'>
          <Link className='button-inverse' href="https://discord.gg/94khqNMdzT">Hop into our Discord, we have memes!</Link>
          <Link className='button' href="https://www.patreon.com/buncult/membership">Support me on Patreon</Link>
        </div>
      </section>
    </main>
  </>
  )
}
