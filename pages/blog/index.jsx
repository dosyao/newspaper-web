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
    const pageNumber = params?.pageNumber;
    const categories = await loadCategories();
    const selectedCategory = categories?.find?.(cat => cat.slug === categorySlug);
    const postsData = await loadPosts(pageNumber ?? 1, 6, selectedCategory?.id);
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
        revalidate: 200,
        props: {
            blogState
        }
    }
}
