import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage!</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas temporibus nemo commodi tempora nostrum odio eligendi cum, laboriosam aut sunt at quisquam porro unde eum soluta dolore fuga? Tempore, aperiam!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas temporibus nemo commodi tempora nostrum odio eligendi cum, laboriosam aut sunt at quisquam porro unde eum soluta dolore fuga? Tempore, aperiam!</p>
        <Link
          href="/ninjas"
        >
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
