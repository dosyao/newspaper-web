import { CheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BLOG } from "../../constants/routes";
import useBlog from "../../hooks/useBlog";
import useDisplay from "../../hooks/useDisplay";

const Link = dynamic(() => import("next/link"));

const CategoriesBar = () => {
    const { events } = useRouter();
    const { categories, selectedCategory } = useBlog();
    const { lg } = useDisplay();
    const [isOpenCategories, setOpenCategories] = useState(false);

    useEffect(() => {
        events.on("routeChangeComplete", setOpenCategories.bind(null, false));
        return () => {
            events.off("routeChangeComplete", setOpenCategories.bind(null, false));
        }
    }, [events]);

    const handleOpenCategories = () => {
        console.log('open');
        setOpenCategories(true);
    }

    return (
        <div className="w-full bg-black text-white min-h-[50px]">
            <div className="flex px-5 py-3 justify-between w-full max-w-7xl mx-auto relative">
                {!lg && (
                    <span className="text-md font-semibold flex items-center cursor-pointer" onClick={handleOpenCategories}>
                        {selectedCategory?.name ?? "All"}
                        <ChevronDownIcon className="w-5 h-5 lg:hidden" />
                    </span>
                )}
                {(isOpenCategories || lg) && (
                    <div className="flex flex-col space-y-3 absolute top-0 left-0 py-3 px-5 w-full bg-black transition-all lg:flex-row lg:space-y-0 lg:space-x-3">
                        <Link href={BLOG}>
                            <a className={`text-md font-semibold flex w-full justify-between lg:justify-start lg:w-auto ${!selectedCategory && "lg:border-b-2 lg:border-b-white"}`}>
                                <span>All</span>
                                <CheckIcon className={`w-5 h-5 ${selectedCategory && "hidden"} lg:hidden`} />
                            </a>
                        </Link>
                        {categories.map(cat => (
                            <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
                                <a className={`text-md font-semibold flex w-full justify-between lg:justify-start lg:w-auto ${selectedCategory?.id === cat.id && "lg:border-b-2 lg:border-b-white"}`}>
                                    <span>{cat.name}</span> <CheckIcon className="w-5 h-5 lg:hidden" style={{ display: selectedCategory?.id !== cat.id && "none" }} />
                                </a>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CategoriesBar;
