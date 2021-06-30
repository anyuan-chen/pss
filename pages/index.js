import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <h1> hello from the head </h1>
      </Head>

      <main>
        <h1> hello from the main</h1>
      </main>

      <footer>
        <h1> hello from the footer</h1>
      </footer>
    </div>
  )
}
