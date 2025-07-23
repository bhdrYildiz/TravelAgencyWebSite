export default function ContactSection() {
    return (
        <section className="w-[80%] mx-auto py-16 grid md:grid-cols-2 gap-10">
            {/* Sol taraf */}
            <div>
                <h2 className="text-2xl font-bold text-rose-600 mb-4">Şimdi Yerinizi Ayırtın!</h2>
                <p className="text-gray-700 mb-6">
                    Sizleri müşteri olarak değil misafirimiz olarak görüyoruz. Bu yaklaşımımızla sizlere mutluluk, huzur, konfor ve rahatlığınız için üst düzey hizmet anlayışı sunuyoruz.
                </p>
                <p className="text-gray-700 mb-6">
                    Kapadokya’yı bizimle keşfetmek için şimdi rezervasyon yaptırabilirsiniz.
                </p>

                <div className="space-y-3 text-gray-800 text-sm">
                    <p><strong>Adres:</strong> Yıldız Otel Ürgüp</p>
                    <p><strong>Eposta:</strong> info@yildizhotel.com</p>
                    <p><strong>Telefon:</strong> +90 530 389 71 63</p>
                    <p><strong>Whatsapp:</strong> 0 (384) 341 46 10</p>
                </div>
            </div>

            {/* Sağ taraf (Harita) */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Google Map Embed */}
                <div className="w-[550px] h-[400px]">
                    <iframe
                        title="Yıldız Hotel Konumu"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.67950900664!2d34.91486377633296!3d38.63261497177908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152a5cdd1a34f68b%3A0xfba04847217ba7b8!2sY%C4%B1ld%C4%B1z%20Hotel!5e0!3m2!1str!2str!4v1718123456789!5m2!1str!2str"
                        width="100%"
                        height="100%"
                        className="shadow"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}
