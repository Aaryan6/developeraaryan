import dbConnect from "../../../dbConnect";
import Blog from "../../../models/Blog";

export default async function handleBlog(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const blogs = await Blog.find();
      res.status(200).json(blogs);
    } catch (error) {
      console.log(error);
    }
  } else if (req.method === "POST") {
    try {
      const postBlog = await new Blog(req.body);
      await postBlog.save();
      res.status(201).json(postBlog);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(200).json("Hello, Next.js!\nBlog post");
  }
}
