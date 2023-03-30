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

// UPDATE


// DELETE

