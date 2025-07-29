import Fb from "@/assets/Facebook.svg";
import Ins from "@/assets/Instagram.svg";
import Sop from "@/assets/Shopee.svg";
import Tik from "@/assets/TikTok.svg";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.facebook.com/p/Keyrambitvn-61557955756319/",
    src: Fb,
    alt: "Facebook",
    size: 28,
  },
  {
    href: "https://www.instagram.com/keyrambitvnhouse/",
    src: Ins,
    alt: "Instagram",
    size: 24,
  },
  {
    href: "https://www.tiktok.com/@keyrambitvn.company",
    src: Tik,
    alt: "Tiktok",
    size: 24,
  },
];

export default function Footer() {
  return (
    <footer className="flex-shrink-0 bg-black/5 px-6 py-4 dark:bg-black/20 md:px-12">
      <div className="flex items-start justify-end gap-8">
        {/* --- SECTION ORDER UPDATED --- */}

        {/* 1. Social Media Section (now appears on the left) */}
        <div
          className="flex flex-col items-center gap-2"
          aria-label="Ủng hộ Keyrambit Việt Nam tại đây"
        >
          <span className="text-xs text-gray-600 dark:text-gray-400">
            Mua hàng
          </span>
          <a
            href="https://shopee.vn/keyrambitvn.co"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:scale-105 dark:bg-gray-800 cursor-pointer"
          >
            <Image src={Sop} alt="Shopee" width={24} height={24} />
          </a>
        </div>

        <div
          className="flex flex-col items-center gap-2"
          aria-label="Theo dõi thông tin về Keyrambitvn tại dây"
        >
          <span className="text-xs text-gray-600 dark:text-gray-400">
            Theo dõi chúng tôi
          </span>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:scale-105 dark:bg-gray-800"
              >
                <Image
                  src={link.src}
                  alt={link.alt}
                  width={link.size}
                  height={link.size}
                />
              </a>
            ))}
          </div>
        </div>

        {/* 2. Mua hàng Section (now appears on the right) */}
      </div>
    </footer>
  );
}
