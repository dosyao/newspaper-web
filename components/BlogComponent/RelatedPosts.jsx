import dynamic from "next/dynamic";
import useBlog from "../../hooks/useBlog";

const Card = dynamic(() => import("../UI/Card"));

const RelatedPosts = () => {
    const { relatedPosts } = useBlog();

    if (!relatedPosts?.length) return null;

    return (
        <div className="p-5 mx-auto my-5 lg:my-10 flex flex-wrap gap-5 max-w-7 w-full border-t-2">
            {relatedPosts.map(post => (
                <Card key={post.id} card={post} />
            ))}
        </div>
    );
}

export default RelatedPosts;
