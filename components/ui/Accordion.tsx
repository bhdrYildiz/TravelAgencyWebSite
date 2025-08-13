"use client";
import { useState, ReactNode } from "react";

interface AccordionItemProps {
    title: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

export function Accordion({ children }: { children: ReactNode }) {
    return <div className="space-y-2">{children}</div>;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-gray-300 rounded-md overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center px-4 py-3 font-semibold bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
            >
                <span>{title}</span>
                <svg
                    className={`w-5 h-5 text-rose-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && <div className="p-4 text-gray-700">{children}</div>}
        </div>
    );
}
