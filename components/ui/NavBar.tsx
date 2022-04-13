import { Link, Text } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const NavBar = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/`);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "0px 20px",
        backgroundColor: "#010a13",
      }}
    >
      <Image
        src={
          "https://cdn.communitydragon.org/12.6.1/champion/generic/square.png"
        }
        alt="Icono de la App"
        width={70}
        height={70}
        onClick={onClick}
      />
      <NextLink href="/" passHref>
        <Link>
          <Text color="white" h2>
            W
          </Text>
          <Text color="white" h3>
            heel of Pain
          </Text>
        </Link>
      </NextLink>
    </div>
  );
};
