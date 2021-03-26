import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://${window.location.hostname}/server.php`
});


export const orderApi = {
    makeOrder(formData){
        let name = formData.name;
        let phone = formData.phone;
        let email = formData.email;
        let auto = formData.auto;

        let date = formData.date ? formData.date : "Не указано";
        let time = formData.time ? formData.time : "Не указано";
        let service = formData.service ? formData.service : "Не указано";

        return instance.post('',{name, phone, email, auto, date, time, service})
        .then(response => response.data);
    }
}