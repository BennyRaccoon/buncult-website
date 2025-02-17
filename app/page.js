import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (<>
    <header>
      <div className="header-container">
        <div className="header-background"></div>
        <div className="header-text"><Image alt="bun from the void" src="/img/buncult.svg" width={300} height={50} /></div>
      </div>
      <nav>
        <Link className="navItem" href="https://twitter.com/bennyraccoon">twitter</Link>
        <Link className="navItem" href="https://www.instagram.com/bennyraccoon/">instagram</Link>
        <Link className="navItem" href="https://www.youtube.com/c/bennyraccoon">youtube</Link>
        <Link className="navItem" href="https://www.tiktok.com/@bennyraccoon">tiktok</Link>
      </nav>
    </header>
    <main>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/fIxz587N4RM?si=qE3xivihNlFzZs5f" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Link className="store-link" title='store' href='https://www.etsy.com/se-en/shop/TheBunCult'>Check my the store!</Link>
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
