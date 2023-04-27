import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL

export const postUser = async (data) => { 
    const { isMoralRegister, userRegister, mailRegister, passwordRegister, password2Register } = data;
    const formData = new FormData();

    // formData.append('ptrRol', isMoralRegister);
    formData.append('userName', userRegister);
    formData.append('email:', mailRegister);
    formData.append('password', passwordRegister);

    try {
        const response = await axios({
            url: '${baseUrl}/users/',
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        })

        if (data.isMoralRegister) {
            const ptrRol = 'hardcodeo';
            formData.append('ptrRol', ptrRol);
        } else {
            const ptrRol = '';
            formData.append('ptrRol', ptrRol);
        }
        return response.data;
    }
    catch(err) {
        console.log(err.message);
    }
}