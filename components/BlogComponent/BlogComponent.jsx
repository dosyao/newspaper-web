import useBlog from "../../hooks/useBlog";
import MainLayout from "../../layouts/MainLayout";
import Card from "../UI/Card";
import CategoriesBar from "./CategoriesBar";

const BlogComponent = () => {
    const { posts } = useBlog();

    return (
        <MainLayout>
            <CategoriesBar />
            <main className="w-full max-w-7xl mx-auto">
                <div className="w-full flex flex-wrap gap-5 p-5 mx-auto">
                    {posts?.map(post => (
                        <Card key={post.id} card={post} />
                    ))}
                </div>
            </main>
        </MainLayout>
    )
}

export default BlogComponent;
