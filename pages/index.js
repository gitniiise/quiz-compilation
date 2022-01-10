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
        <Header title="Willkommen zu deiner Quiz-Sammlung XXL!" />
        <p className="description">
          Hier steht ein cooler Text zu unserem Quiz für di Spieleleiter (dich)!
        </p>
        <div class="box1">Quiz 1</div>
        <div class="box2">Quiz 2</div>
        <div class="box3">Quiz 3</div>
      </main>

      <Footer />
    </div>
  )
}
