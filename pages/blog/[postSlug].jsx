import { serialize } from "next-mdx-remote/serialize";
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

    const source = `
        # The largest heading

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        ![The San Juan Mountains are beautiful](https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg)

        ## Why do we use it?

        It is a long established fact that [Duck Duck Go](https://duckduckgo.com) a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. **Various versions** have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    `;

    const mdxSource = await serialize(source);

    post.data.content = mdxSource;

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
