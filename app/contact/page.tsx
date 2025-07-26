import ContactSection from './ContactSection';

export default function ContactPage() {
    return (
        <>
            <section className="contact-section">
                {/* Hero */}
                <div
                    className="relative w-full h-[45vh] bg-fixed bg-center bg-cover flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/tur7.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <h1 className="relative z-10 text-white text-4xl sm:text-4xl font-bold tracking-widest mt-10">
                        İLETİŞİM
                    </h1>
                </div>
                <ContactSection />
            </section>
        </>
    );
}
