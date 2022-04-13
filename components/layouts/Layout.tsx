import Head from 'next/head'
import { FC } from 'react'

interface Props {
  title?: string;
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title}) => {
  return (
    <>
    <Head>
        <title>{ title || 'Pokemon App'}</title>
        <meta name="author" content="Alexander Rosas" />
        <meta name="description" content={`información sobre el pokémon ${ title }`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        <meta property="og:title" content={`Información sobre ${ title }`} />
        <meta property="og:description" content={`Esta es la información sobre ${ title }`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
    </Head>

    
    <main style={{
      padding: '0px 20px'
    }}>
      { children }
    </main>
    </>
  )
}

