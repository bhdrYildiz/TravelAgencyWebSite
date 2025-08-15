"use client";
import { useState } from "react";
import Select from "react-select";
import { activitiesData } from "@/data/data";
import ActivityCard from "./ActivityCard";
import Link from "next/link";

export default function ActivitiesPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [searchTerm, setSearchTerm] = useState("");
    const [minPrice, setMinPrice] = useState<number | "">("");
    const [maxPrice, setMaxPrice] = useState<number | "">("");
    const [selectedDuration, setSelectedDuration] = useState<string>("all");
    const [sortOption, setSortOption] = useState<string>("none");

    const categories = ["all", "kapadokya", "kibris", "fethiye", "istanbul"];
    const durations = ["all", "1", "2", "3", "4+"];

    const categoryOptions = categories.map((cat) => ({
        value: cat,
        label: cat === "all" ? "Tümü" : cat.charAt(0).toUpperCase() + cat.slice(1),
    }));

    const durationOptions = durations.map((d) => ({
        value: d,
        label:
            d === "all"
                ? "Tüm süreler"
                : d === "4+"
                    ? "4 saat ve üzeri"
                    : `${d} saat`,
    }));

    const sortOptions = [
        { value: "none", label: "Sıralama Yok" },
        { value: "price-asc", label: "Fiyat (Artan)" },
        { value: "price-desc", label: "Fiyat (Azalan)" },
        { value: "title-asc", label: "Başlık (A-Z)" },
        { value: "title-desc", label: "Başlık (Z-A)" },
    ];

    const resetFilters = () => {
        setSelectedCategory("all");
        setSearchTerm("");
        setMinPrice("");
        setMaxPrice("");
        setSelectedDuration("all");
        setSortOption("none");
    };

    const filteredActivities = activitiesData
        .filter((activity) => {
            const matchesCategory =
                selectedCategory === "all" || activity.category === selectedCategory;

            const matchesSearch =
                activity.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                activity.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesPrice =
                (minPrice === "" || activity.price >= minPrice) &&
                (maxPrice === "" || activity.price <= maxPrice);

            const durationValue = parseInt(activity.duration);
            const matchesDuration =
                selectedDuration === "all" ||
                (selectedDuration === "4+" ? durationValue >= 4 : durationValue === Number(selectedDuration));

            return matchesCategory && matchesSearch && matchesPrice && matchesDuration;
        })
        .sort((a, b) => {
            if (sortOption === "price-asc") return a.price - b.price;
            if (sortOption === "price-desc") return b.price - a.price;
            if (sortOption === "title-asc") return a.title.localeCompare(b.title);
            if (sortOption === "title-desc") return b.title.localeCompare(a.title);
            return 0;
        });

    return (
        <>
            <section className="activities-section">
                {/* Hero */}
                <div
                    className="relative w-full h-[45vh] bg-fixed bg-center bg-cover flex items-center justify-center"
                    style={{ backgroundImage: "url('/images/tur40.jpg')" }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <h1 className="relative z-10 text-white text-4xl sm:text-4xl font-bold tracking-widest mt-10">
                        AKTİVİTELER
                    </h1>
                </div>

                {/* Breadcrumb */}
                <nav
                    className="w-[80%] mx-auto py-8 px-2 text-gray-600 text-sm"
                    aria-label="Breadcrumb"
                >
                    <ol className="list-none p-0 inline-flex">
                        <li className="flex items-center">
                            <Link href="/" className="hover:text-rose-600">
                                Ana Sayfa
                            </Link>
                            <span className="mx-2">/</span>
                        </li>
                        <li className="flex items-center">
                            <Link href="/activities" className="hover:text-rose-600">
                                Aktiviteler
                            </Link>
                        </li>
                    </ol>
                </nav>

                {/* Filtreler */}
                <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 mb-6">
                    <Select
                        value={categoryOptions.find(opt => opt.value === selectedCategory)}
                        onChange={(option) => setSelectedCategory(option?.value || "all")}
                        options={categoryOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                    />

                    <Select
                        value={durationOptions.find(opt => opt.value === selectedDuration)}
                        onChange={(option) => setSelectedDuration(option?.value || "all")}
                        options={durationOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                    />

                    <input
                        type="number"
                        placeholder="Min ₺"
                        value={minPrice}
                        onChange={(e) =>
                            setMinPrice(e.target.value === "" ? "" : Number(e.target.value))
                        }
                        className="border px-2 py-2 rounded"
                    />

                    <input
                        type="number"
                        placeholder="Max ₺"
                        value={maxPrice}
                        onChange={(e) =>
                            setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
                        }
                        className="border px-3 py-2 rounded"
                    />

                    <Select
                        value={sortOptions.find(opt => opt.value === sortOption)}
                        onChange={(option) => setSortOption(option?.value || "none")}
                        options={sortOptions}
                        className="react-select-container"
                        classNamePrefix="react-select"
                    />

                    <input
                        type="text"
                        placeholder="Aktivite ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border px-3 py-2 rounded"
                    />

                    {/* Filtreleri Temizle Butonu */}
                    <button
                        onClick={resetFilters}
                        className="bg-rose-600 hover:bg-rose-800 text-white px-4 py-2 rounded transition cursor-pointer text-sm"
                    >
                        Filtreyi Temizle
                    </button>
                </div>

                {/* Activities List */}
                <section className="w-[80%] mx-auto py-2 mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredActivities.length > 0 ? (
                        filteredActivities.map((activity) => (
                            <ActivityCard key={activity.id} activity={activity} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">
                            Sonuç bulunamadı.
                        </p>
                    )}
                </section>
            </section>
        </>
    );
}
