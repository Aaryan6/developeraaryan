import dbConnect from "../../../dbConnect";
import Blog from "../../../models/Blog";

export default async function handleBlog(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
      } catch (error) {
        console.log(error);
      }
    case "POST":
      try {
        const postBlog = await new Blog(req.body);
        await postBlog.save();
        res.status(201).json(postBlog);
      } catch (error) {
        console.log(error);
      }
    default:
      res.status(200).json("Hello, Next.js!\nBlog post");
  }
}
