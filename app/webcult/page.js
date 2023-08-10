import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <h1 className='pageTitle'>Welcome to the update your site needs</h1>
      <section>
        <p className='text'>Empowering small businesses with fast digital transformations, I specialize in making stunning website makeovers.</p>
        <p className='text'>With 9+ years of expertise in frontend web development, e-commerce and responsive design across the Nordics and UK, I offer tailored solutions. From revitalizing UI/UX to optimizing performance, my services promise seamless, eye-catching, and user-friendly digital enhancements.</p>
        <p className='text'>Let&apos;s illuminate your online presence efficiently.</p>
      </section>
      <a className="email-link" title='email' href='mailto:mywebglowup@gmail.com'>Ready to glow up?</a>
      <section>
        <h1 className='pageTitle'>Some of the projects I worked on:</h1>
        <div className='content-3'>
          <Link className='content' href='https://www.marimekko.com/se_en/'>
            <h2>Marimekko.com</h2>
            <Image src="/img/examples/__marimekko.png" width={1180} height={800} />
          </Link>
          <Link className='content' href='https://se.aarke.com/'>
            <h2>Aarke.com</h2>
            <Image src="/img/examples/__aarke.png" width={1180} height={800} />
          </Link>
          <Link className='content' href='https://www.flygbussarna.se/'>
            <h2>Flygbussarna.se</h2>
            <Image src="/img/examples/__flyg.png" width={1180} height={800} />
          </Link>
        </div>
      </section>
      <a className="email-link" title='email' href='mailto:mywebglowup@gmail.com'>Click me! mywebglowup@gmail.com</a>
    </main>
  )
}
