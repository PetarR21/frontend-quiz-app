import axios from 'axios'

const baseUrl = 'https://quiz-app-backend-blush.vercel.app/api/quizzes'

const getQuizzes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getQuizzes,
}
