import { createContext } from "react";
import BlogComponent from "../../components/BlogComponent";
import { loadCategories } from "../../api/blog";

export const postsData = {
    total: 9,
    totalPages: 1,
    page: 1,
    posts: [{
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card",
        "data": {
            image: {
                src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
                width: 1920,
                height: 1080,
                alt: "post"
            },
            content: [
                { tag: "h1", content: "What is Lorem Ipsum?" },
                { tag: "p", content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { tag: "h2", content: "Why do we use it?" },
                { tag: "img", image: {
                    src: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
                    width: 1920,
                    height: 1080,
                    alt: "post"
                }, },
                { tag: "p", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." }
            ]
        }
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }, {
        "title": "New card",
        "description": "Some text for card and nothing else",
        "image": {
            "src": "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg",
            "width": 384,
            "height": 160,
            "alt": "new card"
        },
        "category": 1,
        "slug": "new-card"
    }]
};

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

    if (categorySlug && !selectedCategory  || !categories?.length) return {
        notFound: true
    }

    const blogState = {
        categories: categories ?? null,
        selectedCategory: selectedCategory ?? null,
        postsData: postsData
    }

    return {
        revalidate: 3600,
        props: {
            blogState
        }
    }
}
