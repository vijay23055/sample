const rooms = [
    {id:1, name:"Confarence Room", seat:50, amminities:"projector,Ac,wifi", priceperhour:1200},
    {id:2, name:"meeting Room", seat:20, amminities:"whiteboard,projector,Ac,wifi", priceperhour:1200},
    
];

const booking = [
    { roomId: 1, customerName: 'John Doe', date: '2024-08-26', startTime: '10:00', endTime: '12:00' },
    { roomId: 2, customerName: 'Pechi Muthu', date: '2024-08-26', startTime: '12:00', endTime: '14:00' },
]

const bookingData = (req,res)=>{
    const roomData = rooms.map(rooms=>{
        const roombooking = booking.find(booking=>booking.roomId === rooms.id);

        return{
            roomName:rooms.name,
            isBooked:!!roombooking,
            customerName:roombooking?roombooking.customerName:null,
            date:roombooking?roombooking.date:null,
            startTime:roombooking?roombooking.startTime:null,
            endTime:roombooking?roombooking.endTime:null
        };
    })

    res.send(roomData)
}

const customerData = (req,res)=>{
    const customerBooking = booking.map(booking=>{
        const room = rooms.find(room=>room.id = booking.roomId);

        return{
            customerName:booking.customerName,
            roomname:room?room.name:null,
            date:booking.date,
            startDatate:booking.startTime,
            endDatate:booking.endTime
        };

        
    })
    res.send(customerBooking)
}
const createRoom = (req,res)=>{
    const { roomId, customerName, date, startTime, endTime } = req.body;

    // Check if the room exists
    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }

    // Check if the room is already booked for the specified time
    const conflictingBooking = booking.find(booking =>
        booking.roomId === roomId &&
        booking.date === date &&
        ((startTime >= booking.startTime && startTime < booking.endTime) ||
         (endTime > booking.startTime && endTime <= booking.endTime))
    );

    if (conflictingBooking) {
        return res.status(400).json({ error: 'Room is already booked for the selected time' });
    }

    // Book the room
    const newBooking = { roomId, customerName, date, startTime, endTime };
    booking.push(newBooking);

    // Mark the room as booked
    room.isBooked = true;

    res.status(201).json({ message: 'Room booked successfully', booking: newBooking });
}
const roomBooking = (req,res)=>{
    try {
        req.body.id = rooms.length ? rooms[rooms.length-1].id+1 : 1

        rooms.push(req.body)
        res.status(201).send({
            message:"Rooom create successfully"
        })
        
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error",
            error
        })
    }
}
const getcustomerBooking = (req, res) => {
    const { roomId, customerName } = req.params;

    const customerBookings = booking.filter(booking =>
        booking.roomId == roomId && booking.customerName === customerName
    );

    if (customerBookings.length === 0) {
        return res.status(404).json({ message: 'No bookings found for this customer in the specified room.' });
    }

    const room = rooms.find(r => r.id == roomId);

    res.json({
        customerName: customerName,
        roomName: room.name,
        bookingDetails: customerBookings.map(booking => ({
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookingId: booking.bookingId,
            bookingDate: booking.date,
            bookingStatus: booking.bookingStatus
        }))
    });
};

export default{
    bookingData,
    customerData,
    createRoom,
    roomBooking,
    getcustomerBooking
}