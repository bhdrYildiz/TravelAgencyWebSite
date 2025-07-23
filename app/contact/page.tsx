import ContactSection from './ContactSection';
import Nav from '@/components/Home/Navbar/Nav';

export default function ContactPage() {
    return (
        <>
            <Nav fixed />

            <div className="pt-[6vh]">
                {/* Hero */}
                <div className="relative w-full h-[40vh]">
                    <img
                        src="/images/tur11.jpg"
                        alt="İletişim Arka Plan"
                        className="w-full h-full object-cover brightness-50"
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <h1 className="text-white text-4xl sm:text-4xl font-bold tracking-widest">İLETİŞİM</h1>
                    </div>
                </div>

                <ContactSection />
            </div>
        </>
    );
}
