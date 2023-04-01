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
      url: `${baseUrl}/users/`,
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
    const response = await axios.get(`${baseUrl}/users/`)

    return response.data

  } catch (error) {
    console.log(error)
  }
}

// UPDATE
export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(
      `${baseUrl}/users/${id}`,
      data
    )

    return response.data

  } catch (err) {
    console.log(err)
  }
}

// DELETE
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(
      `${baseUrl}/users/${id}`
    )

    return response.data
  } catch (err) {
    console.log(err)
  }
}
