import dbConnect from "../../../dbConnect";
import Blog from "../../../models/Blog";

export default async function handlePost(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET":
      try {
        const post = await Blog.findById(req.query.id);
        res.status(200).json(post);
      } catch (error) {
        console.log(error);
      }
    default:
      res.status(200).json("Hello, Next.js!\nBlog post");
  }
}
