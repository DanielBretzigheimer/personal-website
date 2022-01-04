import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Imprint() {
  const { t } = useTranslation();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [open, setOpen] = useState(false);

  return (
    <>
      <Link style={{ cursor: "pointer" }} onClick={() => setOpen(true)}>
        {t("imprint")}
      </Link>
      <Dialog open={open} fullScreen={fullScreen} onClose={() => setOpen(false)}>
        <DialogTitle>{t("imprint")}</DialogTitle>
        <DialogContent>
          <p>Angaben gemäß § 5 TMG</p>
          <p>
            Daniel Bretzigheimer<br></br>
            Bergstraße 26<br></br>
            63785 Obernburg am Main<br></br>
          </p>
          <p>
            <strong>Kontakt:</strong>
            <br></br>
            Telefon: +49 151 14446626<br></br>
            E-Mail: <Link href="mailto:dbretzigheimer95@gmail.com">dbretzigheimer95@gmail.com</Link>
            <br></br>
          </p>
          <p>
            <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
            <br></br>
            Daniel Bretzigheimer<br></br>
            Bergstraße 26<br></br>
            63785 Obernburg am Main<br></br>
          </p>
          <p>
            <strong>Haftungsausschluss:</strong>
            <br></br>
            <br></br>
            <strong>Haftung für Inhalte</strong>
            <br></br>
            <br></br>
            Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.<br></br>
            <br></br>
            <strong>Haftung für Links</strong>
            <br></br>
            <br></br>
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
            entfernen.<br></br>
            <br></br>
            <strong>Urheberrecht</strong>
            <br></br>
            <br></br>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
            dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
            Inhalte umgehend entfernen.<br></br>
            <br></br>
            <strong>Datenschutz</strong>
            <br></br>
            <br></br>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten
            möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
            Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
            freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
            Dritte weitergegeben. <br></br>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
            per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
            Zugriff durch Dritte ist nicht möglich. <br></br>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch
            Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und
            Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der
            Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten
            Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.<br></br>
            <br></br>
            <br></br>
            <strong>Google Analytics</strong>
            <br></br>
            <br></br>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc.
            (&apos;&apos;Google&apos;&apos;). Google Analytics verwendet sog.
            &apos;&apos;Cookies&apos;&apos;, Textdateien, die auf Ihrem Computer gespeichert werden
            und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den
            Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer
            IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert.
            Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um
            Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um
            weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu
            erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen,
            sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von
            Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der
            Google in Verbindung bringen. Sie können die Installation der Cookies durch eine
            entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser
            Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie
            sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
            beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.
          </p>
          <br></br>
          Impressum vom <Link href="https://www.impressum-generator.de">
            Impressum Generator
          </Link>{" "}
          der{" "}
          <Link href="https://www.kanzlei-hasselbach.de/">
            Kanzlei Hasselbach, Rechtsanwälte für Arbeitsrecht und Familienrecht
          </Link>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
