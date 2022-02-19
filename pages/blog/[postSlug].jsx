import { serialize } from "next-mdx-remote/serialize";
import { loadCategories, loadPostBySlug, loadPosts } from "../../api/blog";
import BlogPage from "./index";

export const getStaticProps = async ({ params }) => {
    const slug = params.postSlug;
    const categories = await loadCategories();
    const post = await loadPostBySlug(slug);
    const selectedCategory = categories?.find?.(cat => cat.id === post.categoryId);

    if (!post || !categories?.length) return {
        notFound: true
    }

    const mdxSource = await serialize(post.content);

    post.content = mdxSource;

    const blogState = {
        categories: categories ?? null,
        selectedCategory: selectedCategory ?? null,
        post: post ?? null
    }

    return {
        revalidate: 3600,
        props: {
            blogState
        }
    }
}

export const getStaticPaths = async () => {
    const posts = await loadPosts();
    const paths = posts.map(post => ({
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
