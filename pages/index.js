import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
         <a href="itms-services://?action=download-manifest&url=https://txdsos.blob.core.windows.net/txd-sos-cl/sos.plistt">Descargar-SOS</a> </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
