import Discussion  from '../../model/Discussion.js'

export const getOneComment = async (req, res) => {
  const { postId, commentId } = req.params

  const post = await Discussion.findById(postId).populate('comments')
  if (!post) res.send({ message: 'Invalid id' })

  const data = post.comments.find((a) => a._id == commentId)

  const getOnedata = {
    data,
  }

  return res.status(200).send(getOnedata)
}
