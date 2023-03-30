import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

// CREATE
export const createUser = async (data) => {
  const formData = new FormData()
  const { username, urlImg } = data

  formData.append("username", username)
  formData.append("urlImg", urlImg[0])

  try {
    const response = await axios({
      url: `${baseUrl}/users/user`,
      method: "POST",
      data: formData,
      headers: {"Content-Type": "multipart/form-data" }
    })

    return response.data

  } catch (error) {
    console.log(error)
  }
}

// READ
export const readUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users/user`)

    console.log(response)

    return response.data

  } catch (error) {
    console.log(error)
  }
}

// UPDATE
export const updateUser = async (id, data) => {
  console.log(id)
  try {
    const response = await axios.put(
      `${baseUrl}/users/user/${id}`,
      data
    )

    return response.data

  } catch (err) {
    console.log(err)
  }
}

// DELETE

