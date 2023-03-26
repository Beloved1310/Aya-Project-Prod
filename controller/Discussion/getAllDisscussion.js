import Discussion from '../../model/Discussion.js'

export const getAllDiscussion = async (req, res) => {
  const result = await Discussion.find().populate('comments')
  return res.status(200).json(result)
}
