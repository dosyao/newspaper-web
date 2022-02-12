import { loadCategories } from "../../api/blog";
import BlogPage from "./index";
import { postsData } from "./index";

export const getStaticProps = async ({ params }) => {
    const slug = params.postSlug;
    const categories = await loadCategories();
    const post = postsData.posts.find(post => post.slug === slug);
    const selectedCategory = categories?.find?.(cat => cat.id === post.category);

    if (!post || !categories?.length) return {
        notFound: true
    }

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
