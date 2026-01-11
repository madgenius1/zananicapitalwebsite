


import { HiArrowRight } from 'react-icons/hi';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8 lg:p-8 transition-colors duration-300">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                {/* Small Top Badge */}
                <Link href="/beta" className="inline-flex items-center gap-2 mb-8 group cursor-pointer">
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-300">
                        Zanari Capital • Pre-Launch Access
                    </span>
                    <HiArrowRight className="w-3 h-3 text-gray-400 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Headline */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 leading-[1.1]">
                    Invest in Kenyan Stocks <br className=" md:block" />
                    From Anywhere
                </h1>

                {/* Sub-headline */}
                <p className="max-w-2xl text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed mb-10">
                    Buy and Sell NSE stocks, buy Treasury Bonds, and invest in ETFs directly with the <strong>Zanari Capital Mobile App</strong>.
                </p>

                {/* Call to Action Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/beta" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold bg-gray-950 dark:bg-gray-50 text-white dark:text-gray-950 transform hover:scale-105 transition-transform duration-300 ease-in-out rounded-lg shadow-lg">
                        Join the Beta Waitlist
                        <HiArrowRight className="w-5 h-5" />
                    </Link>

                    {/* Secondary CTA for Dark Mode visibility 
                    <button className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                        Get Early Access
                    </button>
                    */}
                </div>

            </div>
        </section>
    );
}