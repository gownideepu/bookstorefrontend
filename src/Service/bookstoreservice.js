import axios from "axios";
class bookstoreservice{
    baseUrl = "http://localhost:8080";

    addUser(data) {
        return axios.post( `http://localhost:8080/register`,data);
    }
    verifyOtp(data) {
        return axios.post( `http://localhost:8080/Verify`,data);
    }
}
export default new bookstoreservice();