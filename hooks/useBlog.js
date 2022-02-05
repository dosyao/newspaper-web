import { useContext } from "react";
import { BlogStore } from "../pages/blog";

const useBlog = () => {
    const blog = useContext(BlogStore);

    return blog;
}

export default useBlog;
