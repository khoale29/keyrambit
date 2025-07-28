import Image from "next/image";
import Logo from "@/assets/Logo_header.webp";
export const Header = () => {
  return (
    <header className="pt-[20px]">
      <Image
        src={Logo}
        alt="Keyrambit Logo"
        className="h-[43px] w-auto block mx-auto "
      />
    </header>
  );
};
