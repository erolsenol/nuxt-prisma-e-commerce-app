
import questions from "../../data/questions";

export default defineEventHandler(async (event) => {
  let response = {
    status: false
  }
  const body = await readBody(event)

  if (!body.userId || !body.productId || !body.title || !body.content) {
    response.error = "cannot be empty"
    return response
  }

  const oldQuestion = await questions.getWhere({ userId: body.userId, productId: body.productId })

  const question = await questions.post(body)

  if (!oldQuestion && question.id) {
    response.data = question
    response.status = true
  } else {
    response.error = "failed to save likes"
  }

  return response
});
