import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    TelegramShareButton,
    ViberShareButton,
    FacebookShareButton,
    TelegramIcon,
    ViberIcon,
    FacebookIcon
} from "react-share";
import useBlog from "../../hooks/useBlog";
import styles from "./PostComponent.module.css";

const PostComponent = () => {
    const { query } = useRouter();
    const { post } = useBlog();
    const { image, content } = post.data;

    const prepareLink = (title) => {
        return title.toLowerCase().trim().replaceAll(" ", "-");
    }

    return (
        <main className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center py-5 lg:py-10">
                <ul className="p-0 space-y-2 hidden flex-col lg:flex">
                    {content.map(el => {
                        if (el.tag === "h1" || el.tag === "h2") return (
                            <Link href={`/blog/${query.postSlug}#${prepareLink(el.content)}`}>
                                <a
                                    key={el.content}
                                    className="text-blue-400 font-semibold text-md"
                                >
                                    {el.content}
                                </a>
                            </Link>
                        );

                        return null;
                    })}
                </ul>
                <section className="px-5 max-w-2xl">
                    <div className="relative mb-6 rounded-xl mx-auto">
                        <Image
                            className="rounded-xl"
                            key={image.src}
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            alt={image.alt}
                            priority
                        />
                    </div>
                    {content.map(el => {
                        if (el.tag === "img") return (
                            <div className="relative rounded-xl my-6 mx-auto" key={el.image.src}>
                                <Image
                                    className="rounded-xl"
                                    src={image.src}
                                    width={image.width}
                                    height={image.height}
                                    alt={image.alt}
                                />
                            </div>
                        );

                        return (
                            <el.tag
                                className={styles[el.tag]}
                                key={el.content}
                                id={el.tag === "h1" || el.tag === "h2" ? el.content.toLowerCase().trim().replaceAll(" ", "-") : null}
                                dangerouslySetInnerHTML={{ __html: el.content }}
                            />
                        );
                    })}
                </section>
                <div className="flex lg:flex-col space-y-3">
                    <FacebookShareButton
                        url={typeof window !== 'undefined' ? window.location.href : null}
                    >
                        <FacebookIcon className="w-10 h-10 text-white bg-blue-500 rounded-full" />
                    </FacebookShareButton>
                    <ViberShareButton
                        title={post.title}
                        url={typeof window !== 'undefined' ? window.location.href : null}
                    >
                        <ViberIcon className="w-10 h-10 text-white bg-purple-600 rounded-full" />
                    </ViberShareButton>
                    <TelegramShareButton
                        title={post.title}
                        url={typeof window !== 'undefined' ? window.location.href : null}
                    >
                        <TelegramIcon className="w-10 h-10 text-white bg-blue-400 rounded-full" />
                    </TelegramShareButton>
                </div>
            </div>
        </main>
    );
}

export default PostComponent;
