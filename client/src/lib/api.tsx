import axios from "axios"

export const checkToken = async (token : string) => {
    return await axios.get("http://localhost:4000/api/users/check-token", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getMyBooks = async (token : string) => {
    return await axios.get("http://localhost:4000/api/books/my-books", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getBook = async (params : string) => {
    return await axios.get(`http://localhost:4000/api/books/${params}`)
}

export const getBooksByPage = async (page : any) => {
    if(!page) {
        return await axios.get(`http://localhost:4000/api/books`)
    }
    else {
        return await axios.get(`http://localhost:4000/api/books/?page=${page}`)
    }
}

export const getBookByLink = async (link : any) => {
    return await axios.get(`http://localhost:4000/api/books/get-by-link/${link}`)
}