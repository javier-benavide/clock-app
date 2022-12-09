import axios from "axios";
import { useEffect, useState } from "react";

// custom hook to get the timezone from the browser
export const useTimeZone = () => {
    const [timeZone, setTimeZone] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [localTimezone, setLocalTimezone] = useState<string>(Intl.DateTimeFormat().resolvedOptions().timeZone);
    const [hour, setHour] = useState<string>('');
    const [minute, setMinute] = useState<string>('');
    const [timeZoneArray, setTimeZoneArray] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (timeZoneArray.length === 0)
            fetchTimeZone();
    }, []);

    const fetchTime = async () => {
        try {
            // Make the API request
            const response = await axios.get(
                `http://worldtimeapi.org/api/timezone/${timeZone}`
            );

            // Convert the response to JSON
            const data = await response.data;

            // Get the current time from the JSON data
            const currentTime = new Date(data.datetime);
            // Update the time in state with the current time
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
            const currentSecond = currentTime.getSeconds();
            const nextUpdate = (60 - currentSecond) * 1000;
            setHour(currentHour.toString());
            setMinute(currentMinute.toString());
            setLoading(false);
            initInterval(nextUpdate);

        } catch (error) {
            // If there was an error, log it to the console
            console.error(error);
        }
    };


    useEffect(() => {
        fetchTime();
    }, [timeZone]);

    const initInterval = (miliseconds = 2000) => {
        setTimeout(() => {
            fetchTime();
        }, miliseconds);
    };

    const fetchTimeZone = async () => {
        try {
            const response = await axios.get(
                "http://worldtimeapi.org/api/timezone"
            );
            setTimeZoneArray(response.data);
        } catch (error) {
        }
    };

    const setTimeZoneFromSelect = (customtimeZone: string) => {
        setTimeZone(customtimeZone);
        setHour('');
        setMinute('');
        setLoading(true);
    };

    const setLocalTimeZone = () => {
        setTimeZone(localTimezone);
        setHour('');
        setMinute('');
        setLoading(true);
    };



    return {
        timeZone,
        localTimezone,
        hour,
        minute,
        timeZoneArray,
        loading,
        setTimeZoneFromSelect,
        setLocalTimeZone
    };
};