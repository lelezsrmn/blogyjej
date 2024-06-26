import 'tailwindcss/tailwind.css';
import HeaderNoco from "@/src/components/header/Header-noco";
import Hero from "@/src/components/main/Hero";
import Contact  from "@/src/components/footer/Contact";
import ContenueAddHorizontal from "@/src/components/main/ContenueAdd-horizontal";

export default function home() {
    return (
        <div className={'bg-gray-900'}>
            <HeaderNoco/>
            <main className={"container max-w-6xl mx-auto space-y-8 pb-20"}>
                <Hero/>
                <ContenueAddHorizontal/>
            </main>
            <Contact/>
        </div>
    );
}
