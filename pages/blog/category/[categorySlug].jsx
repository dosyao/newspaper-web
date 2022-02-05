import BlogPage from "../index";
export { getStaticProps } from "../index";
export default BlogPage;
import { categories } from "../index";
export const getStaticPaths = () => {
    const paths = categories.map(cat => ({ params: { categorySlug: cat.slug } }));

    return {
        paths,
        fallback: "blocking"
    }
}