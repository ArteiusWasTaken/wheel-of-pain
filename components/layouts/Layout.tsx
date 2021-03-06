import Head from "next/head";
import { FC } from "react";
import { NavBar } from "../ui/NavBar";

interface Props {
  title?: string;
}
const origin = typeof window === "undefined" ? "" : window.location.origin;

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
        <meta property="og:image" content={`${origin}/img/banner.png`} />

        <link rel="shortcut icon" href="/square.ico" />
      </Head>

      <NavBar />

      <main
        style={{
          padding: "1rem 0",
          minHeight: "80vh",
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
