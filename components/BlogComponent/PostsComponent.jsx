import useBlog from "../../hooks/useBlog";
import Card from "../UI/Card";

const PostsComponent = () => {
    const { postsData } = useBlog();

    return (
        <main className="w-full max-w-7xl mx-auto">
            <div className="w-full flex flex-wrap gap-5 p-5 mx-auto">
                {postsData?.total && postsData?.posts.map(post => (
                    <Card key={post.id} card={post} />
                ))}
            </div>
        </main>
    )
}

export default PostsComponent;