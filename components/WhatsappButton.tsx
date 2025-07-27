import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
    return (
        <Link
            href="https://wa.me/905303897163"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp üzerinden bizimle iletişime geçin"
            className="fixed bottom-6 left-6 z-[1001] bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
            <FaWhatsapp size={24} />
        </Link>

    );
};

export default WhatsappButton;