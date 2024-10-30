import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowBlog from "./components/useContext/blog/ShowBlog";
import AddBlog from "./components/useContext/blog/AddBlog";
import BlogContext from "./components/useContext/blog/BlogContext";
import UniqueBlog from "./components/useContext/blog/UniqueBlog";
import EditBlog from "./components/useContext/blog/EditBlog";

function App() {
    return (
        <BlogContext>
            <Router>
                <Routes>
                    <Route path="/" element={<ShowBlog />} />
                    <Route path="/addblog" element={<AddBlog />} />
                    <Route path="/blogDetails/:id" element={<UniqueBlog />} />
                    <Route path="/editData/:id" element={<EditBlog />} />
                </Routes>
            </Router>
        </BlogContext>
    );
}

export default App;
