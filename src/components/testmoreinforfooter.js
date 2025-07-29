import Fb from "@/assets/Facebook.png";
import Ins from "@/assets/Instagram_GLYPH_2500px.png";
import Sop from "@/assets/Shopee.png";
import Tik from "@/assets/TikTok.png";
import Image from "next/image";

export default function Sda() {
  return (
    <>
      {/* Footer CTA */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8">
        {/* Nút mua hàng */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-700 dark:text-gray-300">
            Mua hàng
          </span>
          <a
            href="https://shopee.vn/your-shop-link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center"
          >
            <Image
              src={Sop}
              alt="Shopee"
              width={24}
              height={24}
              className="object-contain"
            />
          </a>
        </div>

        {/* Social media */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-700 dark:text-gray-300">
            Theo dõi chúng tôi
          </span>
          <div className="flex gap-3">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Fb} alt="Facebook" width={28} height={28} />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Ins} alt="Instagram" width={28} height={28} />
            </a>
            <a
              href="https://tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Tik} alt="Tiktok" width={28} height={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
