import { useEffect, useState } from "react";
import callFetch from "../api/API";

export default function MyBookings() {
    // Initialisation ---------
    const loggedinUserID = 9;
    const endpoint = `/bookings/sales/${loggedinUserID}`;
    // States ---------
    const [bookings, setBookings] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState('Loading Bookings...');
    // Context ---------
    // Methods ---------
    const apiCall = async (endpoint) => {
        const response = await callFetch(endpoint, 'GET');
        response.isSuccess
        ? setBookings(response.result)
        : setLoadingMessage(response.message)
        
    }

    useEffect(() => {apiCall(endpoint)}, [endpoint]);

    // View ---------
    return (

        <section>
        <h1>My Bookings</h1>
        {
        !bookings
            ? <p>{loadingMessage}</p>
            : bookings.length ===0
                ? <p>You have no booking</p>
                : bookings.map ((booking) => 
                    <p key={booking.BookingID}>{booking.BookingID} {booking.VehicleMake} {booking.VehicleModel} {booking.VehicleYear}</p>
                 )
        }

        </section>
    )

}