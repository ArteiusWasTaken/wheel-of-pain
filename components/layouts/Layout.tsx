import Head from 'next/head'
import { FC } from 'react'

interface Props {
  title?: string;
}

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
    </Head>

    
    <main style={{
      padding: '0px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: ''
    }}>
      { children }
    </main>
    </>
  )
}

