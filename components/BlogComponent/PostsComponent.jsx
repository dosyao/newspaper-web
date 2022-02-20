import useBlog from "../../hooks/useBlog";
import dynamic from "next/dynamic";
import Card from "../UI/Card";
import Head from "next/head";
import { useRouter } from "next/router";

const Pagination = dynamic(() => import("../UI/Pagination"));

const hrefBuilder = (slug = null) => {
    return (page) => {
        let path = `/blog`;

        if (slug) path += `/category/${slug}`;
        if (page > 1) path += `/page/${page}`;

        return path;
    }
}

const PostsComponent = () => {
    const router = useRouter();
    const { postsData, selectedCategory } = useBlog();

    if (!postsData) return null;

    const handleClick = (slug = null) => {
        return (data) => {
            const nextPage = data.selected + 1;
            let path = `/blog`;

            if (slug) path += `/category/${slug}`;
            if (nextPage > 1) path += `/page/${nextPage}`;

            router.push(path);
        }
    }

    return (
        <main className="w-full max-w-7xl mx-auto" style={{ minHeight: "calc(100vh - 230px)" }}>
            <Head>
                <title>{selectedCategory?.name ?? "Blog"} | Newspaper</title>
            </Head>
            <div className="w-full flex flex-wrap gap-5 p-5 mx-auto items-start">
                {postsData?.total && postsData?.posts.map((post, idx) => (
                    <Card key={post.id} card={post} priority={idx < 3} />
                ))}
            </div>
            {postsData?.total > 6 && (
                <Pagination
                    totalPages={postsData.total_pages}
                    page={postsData.page}
                    hrefBuilder={hrefBuilder(selectedCategory?.slug)}
                    onClick={handleClick(selectedCategory?.slug)}
                />
            )}
        </main>
    );
}

export default PostsComponent;