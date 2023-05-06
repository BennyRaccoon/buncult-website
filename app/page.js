import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <section>
        <div className='newsletter-content'>
          <h3>Check our newsletter!</h3>
          <div id="mc_embed_signup">
            <form action="https://gmail.us3.list-manage.com/subscribe/post?u=6ef6c6b7c05521adfa37922e8&amp;id=c157169537&amp;f_id=002a47e2f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
              <div id="mc_embed_signup_scroll">
                <div className="mc-field-container">
                  <div className="mc-field-group">
                    <input type="email" placeholder='email@gmail.com' name="EMAIL" className="required email" id="mce-EMAIL" required/>
                    <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    <div style={{position: 'absolute', left: '-5000px', display: 'none'}} aria-hidden="true"><input type="text" name="b_6ef6c6b7c05521adfa37922e8_c157169537" tabIndex="-1" defaultValue=""/></div>
                  </div>
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>  
                <div className="optionalParent">
                  <div className="clear foot">
                    <p className="brandingLogo">
                      <Link href="http://eepurl.com/ioo50I" title="Mailchimp - email marketing made easy and fun">
                        <Image src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" width={0} height={0}/>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className='two-content'>
        <div className='content'>
          <h2>A videogame!</h2>
          <span>I am forging Benny the Raccoon&apos;s videogame! Ride along this adventure and get access to the secret content!</span>
        </div>
        <div className='content'>
          <h2>Dungeons and dragons</h2>
          <span>Jump into our original world and check the custom material! Character sheets, locations and exclusive adventures!</span>
        </div>
      </section>
      <section>
        <div className='last-ctas'>
          <Link className='button-inverse' href="https://discord.gg/94khqNMdzT">Hop into our Discord, we have memes!</Link>
          <Link className='button' href="https://www.patreon.com/buncult/membership">Support me on Patreon</Link>
        </div>
      </section>
    </main>
  )
}
