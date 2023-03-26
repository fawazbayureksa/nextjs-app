import Layout from '@/components/template/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className='content'>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}
