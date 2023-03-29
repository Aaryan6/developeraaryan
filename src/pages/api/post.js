import dbConnect from "../../../dbConnect";
import Blog from "../../../models/Blog";

export default async function handlePost(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const post = await Blog.findById(req.query.id);
      res.status(200).json(post);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(200).json("Hello, Next.js!\nBlog post");
  }
}
