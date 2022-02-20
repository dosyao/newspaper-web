import { serialize } from "next-mdx-remote/serialize";
import { loadCategories, loadPostBySlug, loadPosts } from "../../api/blog";
import BlogPage from "./index";

export const getStaticProps = async ({ params }) => {
    const slug = params.postSlug;
    const categories = await loadCategories();
    const post = await loadPostBySlug(slug);
    const relatedResp = await loadPosts(1, 3, post?.categoryId, post?.id);
    const selectedCategory = categories?.find?.(cat => cat.id === post.categoryId);

    if (!post || !categories?.length) return {
        notFound: true
    }

    const mdxSource = await serialize(post.content);

    post.content = mdxSource;

    const blogState = {
        categories: categories ?? null,
        selectedCategory: selectedCategory ?? null,
        post: post ?? null,
        relatedPosts: relatedResp?.posts ?? null
    }

    return {
        revalidate: 3600,
        props: {
            blogState
        }
    }
}

export const getStaticPaths = async () => {
    const postsData = await loadPosts();
    const paths = postsData.posts.map(post => ({
        params: {
            postSlug: post.slug
        }
    }));

    return {
        paths,
        fallback: "blocking"
    }
}

export default BlogPage;
