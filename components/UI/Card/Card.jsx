import Image from "next/image";
import Link from "next/link";

const Card = ({ card, priority }) => {
    const { title, description, image, slug, createdDateTime } = card;
    const formattedDate = Intl.DateTimeFormat('en-US', {
        year  : 'numeric',
        day   : '2-digit',
        month : 'short'
    }).format(new Date(createdDateTime));

    return (
        <Link href={`/blog/${slug}`}>
            <a className="flex flex-col max-w-sm w-full rounded-2xl bg-white shadow-2xl">
                {image?.includes('http') && (
                    <div className="w-full rounded-t-2xl">
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
                )}
                <div className="flex-1 px-4 py-6 space-y-3">
                    <h3 className="text-xl font-black">
                        {title}
                    </h3>
                    <p className="text-base text-justify">
                        {description}
                    </p>
                    <p className="text-base text-gray-500">
                        {formattedDate}
                    </p>
                </div>
            </a>
        </Link>
    );
}

export default Card;
