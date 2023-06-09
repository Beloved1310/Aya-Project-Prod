import Discussion  from '../../model/Discussion.js'

export const getAllComment = async (req, res) => {
  const result = await Discussion.findById(req.params.id).populate('comments')
  const data = { data: result.comments }
  return res.status(200).json(data)
}
