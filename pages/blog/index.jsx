import { createContext } from "react";
import BlogComponent from "../../components/BlogComponent";
import { loadCategories } from "../../api/blog";

export const categories = [{
    id: 1,
    title: "title1",
    slug: "title-1"
}, {
    id: 2,
    title: "title2",
    slug: "title-2"
}, {
    id: 3,
    title: "title3",
    slug: "title-3"
}, {
    id: 4,
    title: "title4",
    slug: "title-4"
}];

export const posts = [{
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
}];

export const BlogStore = createContext();

const BlogPage = (props) => (
    <BlogStore.Provider value={props}>
        <BlogComponent />
    </BlogStore.Provider>
);

export default BlogPage;

export const getStaticProps = async ({ params }) => {
    const categorySlug = params?.categorySlug;
    const selectedCategory = categories?.find(cat => cat.slug === categorySlug);

    if (categorySlug && !selectedCategory) return {
        notFound: true
    }

    return {
        revalidate: 3600,
        props: {
            categories,
            posts,
            selectedCategory: selectedCategory ?? null
        }
    }
}
