export const getByFilters = async (req, res, next) => {
    const query = req.query.q;
    try {
        const post = await Post.find({
            filter: { $regex: query, $options: "i" },
        });
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
}