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
    const postsData = await loadPosts();
    const notFound = categorySlug && !selectedCategory  || !categories?.length || !postsData?.posts?.length;

    if (notFound) return {
        notFound: true
    }

    const blogState = {
        categories: categories ?? null,
        selectedCategory: selectedCategory ?? null,
        postsData
    }

    return {
        revalidate: 3600,
        props: {
            blogState
        }
    }
}
