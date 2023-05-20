import Image from "next/image";
import LogoImageOutline from "./logoOutline.svg";
import LogoImageFilled from "./logoFilled.svg";

export const Logo = ({ logoStyle = "outline", size = 32 }) => {
  let logoImage;

  switch (logoStyle) {
    case "filled":
      logoImage = LogoImageFilled;
      break;
    default:
      logoImage = LogoImageOutline;
  }

  return <Image src={logoImage} alt="Logo" width={size} height={size} />;
};
