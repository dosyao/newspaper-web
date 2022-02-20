import { loadPosts } from "../../../api/blog";
import BlogPage from "../index";
export { getStaticProps } from "../index";
export default BlogPage;

export const getStaticPaths = async () => {
    const paths = [];
    const data = await loadPosts();
   
    for (let page = 1; page <= data.total; page++) {
        paths.push({ params: { pageNumber: page.toString() } });
    }

    return {
        paths,
        fallback: "blocking"
    }
}