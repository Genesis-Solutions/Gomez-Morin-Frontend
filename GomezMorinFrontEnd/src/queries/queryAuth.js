import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

export const postUser = async (data) => { 
    const { isMoralRegister, userRegister, mailRegister, passwordRegister, password2Register } = data;
    const formData = new FormData();

    formData.append('isMoralRegister', isMoralRegister);
    formData.append('userRegister', userRegister);
    formData.append('mailRegister', mailRegister);
    formData.append('passwordRegister', passwordRegister);
    formData.append('password2Register', password2Register);

    try {
        const response = await axios({
            url: '${baseUrl}/signup/postUser',
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })
        
        return response.data;
    }
    catch(err) {
        console.log(err.message);
    }
}