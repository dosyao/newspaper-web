import { loadCategories } from "../../../api/blog";
import BlogPage from "../index";
export { getStaticProps } from "../index";
export default BlogPage;

export const getStaticPaths = async () => {
    const categories = await loadCategories();
    const paths = categories.map(cat => ({ params: { categorySlug: cat.slug } }));

    return {
        paths,
        fallback: "blocking"
    }
}