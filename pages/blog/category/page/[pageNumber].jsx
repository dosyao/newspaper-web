import { loadCategories } from "../../../../api/blog";
import { loadPosts } from "../../../api/blog";
import BlogPage from "../index";
export { getStaticProps } from "../index";
export default BlogPage;

export const getStaticPaths = async () => {
    const paths = [];
    const categories = await loadCategories();
   
    for (const category of categories) {
        const data = await loadPosts(1, 1, category.id);

        for (let page = 1; page <= data.total; page++) {
            paths.push({ params: { categorySlug: category.slug, pageNumber: page.toString() } });
        }
    }

    return {
        paths,
        fallback: "blocking"
    }
}