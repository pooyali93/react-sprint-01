import { useState } from "react";

export default function MyBookings() {
    // Initialisation ---------
    const loggedinUserID = 4;
    const endpoint = `/bookings/${loggedinUserID}`;
    // States ---------
    const [bookings, setBookins] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState("Loading Bookings...");
    // Context ---------
    // Methods ---------
    const URL = 'http://localhost:5000/api';
    const endpointAddress = URL + endpoint;
    fetch(endpointAddress);
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
                    <p>{booking.bookngsId} {booking.DateBooked}</p>
                 )
        }

        </section>
    )

}