import { api } from '../api/AxiosCreate';
import { ClockInterface } from '../interfaces/ApiRequestInterface';

export const request = async() => {
        const url = 'https://worldtimeapi.org/api/timezone/America/Santiago';
        try {
            const resp = await api.get<ClockInterface>(url);
            const { datetime, day_of_week, day_of_year, timezone } = resp.data;

            //convierto la fecha a formato de 12 horas

            const date = new Date(datetime);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const ampm = hours >= 12 ? 'pm' : 'am';
            const hours12 = hours % 12 || 12;
            const time12 = `${hours12}:${minutes}:${seconds} ${ampm}`;

            if(resp.data) {
                return {
                    time12,
                    day_of_week,
                    day_of_year,
                    timezone,
                } ;
            }
        } catch (error) {
            console.log(error);
        }
    };

