import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import useDisplay from "../../hooks/useDisplay";

const Titles = () => {
    const { lg } = useDisplay();
    const { asPath, query } = useRouter();
    const [titles, setTitles] = useState([]);
    
    useEffect(() => {
        const titles = document.querySelectorAll(["h2", "h3"]);
        setTitles(titles);
    }, []);

    if (!lg || !titles?.length) return null;

    return (
        <div className="p-0 space-y-2 hidden flex-col lg:flex">
            <h4 className="text-lg font-bold mb-1">Contents</h4>
            {[ ...titles ].map(el => (
                <Link key={el.id} href={`/blog/${query.postSlug}#${el.id}`}>
                    <a className={`max-w-[200px] text-cyan-500 ${asPath.includes(`#${el.id}`) && "font-bold"}`}>
                        {el.innerHTML}
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Titles;
