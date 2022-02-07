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
        "author": "",
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
        "author": "",
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
        "author": "",
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
        "author": "",
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
        "author": "",
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
        "author": "",
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
        "author": "",
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
        "author": "",
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
        "author": "",
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
    const selectedCategory = categories?.find(cat => cat.slug === categorySlug);
    

    if (categorySlug && !selectedCategory) return {
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
