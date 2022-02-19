import { createContext } from "react";
import BlogComponent from "../../components/BlogComponent";
import { loadCategories, loadPosts } from "../../api/blog";

export const BlogStore = createContext();

const BlogPage = ({ blogState }) => (
    <BlogStore.Provider value={blogState}>
        <BlogComponent />
    </BlogStore.Provider>
);

export default BlogPage;

export const getStaticProps = async ({ params }) => {
    const categorySlug = params?.categorySlug;
    const categories = await loadCategories();
    const selectedCategory = categories?.find?.(cat => cat.slug === categorySlug);
    const posts = await loadPosts();
    const notFound = categorySlug && !selectedCategory  || !categories?.length || !posts?.length;

    if (notFound) return {
        notFound: true
    }

    const blogState = {
        categories: categories ?? null,
        selectedCategory: selectedCategory ?? null,
        postsData: {
            total: 1,
            totalPages: 1,
            page: 1,
            posts
        }
    }

    return {
        revalidate: 3600,
        props: {
            blogState
        }
    }
}
