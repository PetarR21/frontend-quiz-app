import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/quizzes'

const getQuizzes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getQuizzes,
}
