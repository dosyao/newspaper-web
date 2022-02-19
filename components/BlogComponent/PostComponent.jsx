import Image from "next/image";
import {
    TelegramShareButton,
    ViberShareButton,
    FacebookShareButton,
    TelegramIcon,
    ViberIcon,
    FacebookIcon
} from "react-share";
import useBlog from "../../hooks/useBlog";
import TextBox from "../UI/TextBox";

const PostComponent = () => {
    const { post } = useBlog();
    const { image, content, title } = post;
    return (
        <main className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-center py-5 lg:py-10">
                <section className="px-5 max-w-2xl">
                    <div className="relative mb-6 rounded-xl mx-auto">
                        <Image
                            className="rounded-xl"
                            key={image}
                            src={image}
                            width={632}
                            height={356}
                            alt={title}
                            layout='responsive'
                            sizes='(max-width: 576px) 100vw, (max-width: 1024px) 75vw, 632px'
                            priority
                        />
                    </div>
                    <TextBox source={content} />
                </section>
                <div className="flex lg:flex-col p-5 lg:p-0 lg:space-y-3 lg:space-x-0 space-x-3 flex-wrap items-center">
                    <h4 className="w-screen lg:w-auto text-lg font-bold mb-5 lg:mb-1">Share</h4>
                    <FacebookShareButton
                        url={typeof window !== 'undefined' ? window.location.href : null}
                    >
                        <FacebookIcon className="w-10 h-10 text-white rounded-full" />
                    </FacebookShareButton>
                    <ViberShareButton
                        title={post.title}
                        url={typeof window !== 'undefined' ? window.location.href : null}
                    >
                        <ViberIcon className="w-10 h-10 text-white rounded-full" />
                    </ViberShareButton>
                    <TelegramShareButton
                        title={post.title}
                        url={typeof window !== 'undefined' ? window.location.href : null}
                    >
                        <TelegramIcon className="w-10 h-10 rounded-full" />
                    </TelegramShareButton>
                </div>
            </div>
        </main>
    );
}

export default PostComponent;
