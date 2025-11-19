import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emmanuel Humphrey | Data Analyst Portfolio</title>
        <meta name="description" content="Portfolio of Emmanuel Humphrey, Data Analyst, Business Intelligence Expert, and Cloud Solutions Architect." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Emmanuel Humphrey | Data Analyst Portfolio" />
        <meta property="og:description" content="Portfolio of Emmanuel Humphrey, Data Analyst, Business Intelligence Expert, and Cloud Solutions Architect." />
        <meta property="og:image" content="/Kent.jpeg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Emmanuel Humphrey | Data Analyst Portfolio" />
        <meta name="twitter:description" content="Portfolio of Emmanuel Humphrey, Data Analyst, Business Intelligence Expert, and Cloud Solutions Architect." />
        <meta name="twitter:image" content="/Kent.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
