import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const MissionSection = props => {
  const data = useStaticQuery(graphql`
    query {
      impressumbg: file(relativePath: { eq: "Impressum-Background.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      fluid={data.impressumbg.childImageSharp.fluid}
      backgroundColor={`#040e18`}
    >
      <div
        id="mission"
        className="p-3 d-flex align-items-center two-thirds-height "
      >
        <div className="container-sm text-center white-container mission">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center">
                <h1>Impressum</h1>
                <hr className="green-divider mt-3 mb-md-4 "></hr>
              </div>

              <h3 className="p-1">Angaben gemäß § 5 TMG </h3>
              <p className="p-1">
                Artur Kos - Flämingo Kollektiv <br />
                Fröhdener Mühlenstrasse 2 <br />
                14913 Jüterbog, Deutschland <br />
                Steuernummer 05024011439 <br />
              </p>

              <h3 className="p-1">Kontakt </h3>
              <p className="p-1">
                Telefon: +49 (0)15779353935 <br />
                Email: flaemingo@posteo.net
              </p>

              <h3 className="p-1">EU-Streitschlichtung </h3>
              <p className="p-1">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://
                ec.europa.eu/consumers/odr"
                >
                  https:// ec.europa.eu/consumers/odr.
                </a>{" "}
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h3 className="p-1">
                Verbraucherstreitbeilegung/<br/>Universalschlichtungsstelle
              </h3>
              <p className="p-1">
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen
              </p>

                <h4 className="p-1">
                Haftung für Inhalte
                </h4>
                <p className="p-1">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab
dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h4 className="p-1">
                Haftung für Links
                </h4>
                <p className="p-1">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
erkennbar.
Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
derartige Links umgehend entfernen.
                </p>

                <h4 className="p-1">
                Urheberrecht
                </h4>
                <p className="p-1">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
nicht kommerziellen Gebrauch gestattet.
Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
umgehend entfernen.
                </p>



              {/*<p><b>Now go build something great.</b></p>*/}
            </div>
          </div>
        </div>
        <a id="about"></a>
      </div>
    </BackgroundImage>
  )
}

export default MissionSection
