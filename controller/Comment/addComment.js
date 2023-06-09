import Discussion  from '../../model/Discussion.js'
import Comment  from'../../model/Comments.js'

export const addComment = async (req, res) => {
  const comment = new Comment({
    text: req.body.text,
    post: req.params.id,
    // postedBy: req.user.fullname,
  })

  const savedComment = await comment.save()
  const data = {
    text: savedComment.text,
    // postedBy: savedComment.postedBy,
  }

  await Discussion.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: savedComment } },
  )

  return res.status(200).json({ message: 'comment added', data })
}
