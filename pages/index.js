import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      </Head>

      <main>
        <Header title="Willkommen zu deiner Quiz-Sammlung XXL!" />
        <p className="description">
          Hier steht ein cooler Text zu unserem Quiz für di Spieleleiter (dich)!
        </p>
        <div class="box2" style="
    float: left;
    width: 32%;
    margin-right: 2%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
">Quiz 2</div>
  <div class="box2" style="
    float: left;
    width: 32%;
    margin-right: 2%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
">Quiz 2</div>
        
        <div class="w3-container w3-red w3-cell">
          <p>Hello W3.CSS Layout.</p>
        </div>

        <div class="w3-container w3-green w3-cell">
          <p>Hello W3.CSS Layout.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
