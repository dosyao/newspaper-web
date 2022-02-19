import Image from "next/image";
import Link from "next/link";

const Card = ({ card, priority }) => {
    const { title, description, image, slug } = card;

    return (
        <Link href={`/blog/${slug}`}>
            <a className="flex flex-col max-w-sm w-full rounded-2xl bg-white shadow-2xl">
                <div className="w-full h-40 rounded-t-2xl">
                    <Image
                        className="rounded-t-2xl"
                        width={384}
                        height={216}
                        alt="blog card"
                        src={image}
                        layout="responsive"
                        sizes="(max-width: 576px) calc(100vw - 40px), (max-width: 1024px) 50vw, 384px"
                        priority={priority}
                    />
                </div>
                <div className="flex-1 px-4 py-6 space-y-3">
                    <h4 className="text-xl font-bold">
                        {title}
                    </h4>
                    <p className="text-base text-justify">
                        {description}
                    </p>
                </div>
            </a>
        </Link>
    );
}

export default Card;
