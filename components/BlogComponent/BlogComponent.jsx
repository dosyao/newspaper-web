import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { BLOG_POST } from "../../constants/routes";
import MainLayout from "../../layouts/MainLayout";
import CategoriesBar from "./CategoriesBar";

const PostsComponent = dynamic(() => import("./PostsComponent"));
const PostComponent = dynamic(() => import("./PostComponent"));

const BlogComponent = () => {
    const { pathname } = useRouter();
    
    return (
        <MainLayout>
            <CategoriesBar />
            {pathname === BLOG_POST ? <PostComponent /> : <PostsComponent />}
        </MainLayout>
    )
}

export default BlogComponent;
