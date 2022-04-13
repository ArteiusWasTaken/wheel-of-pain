import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../ui/NavBar";

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title || "Wheel of Pain!"}</title>
        <meta name="author" content="Alexander Rosas" />
        <meta name="description" content={`League of Legends Wheel of Pain!`} />
        <meta
          name="keywords"
          content={`${title}, league, of, legends, wheel of pain,`}
        />
        <meta property="og:title" content={`Wheel of Pain!`} />
        <meta
          property="og:description"
          content={`Wheel of Pain! random champion, role and playstyle picker for League of legends`}
        />
        <link rel="shortcut icon" href="/square.ico" />
      </Head>

      <NavBar />

      <main
        style={{
          padding: "4rem 0",
          minHeight: "100vh",
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </div>
  );
};
