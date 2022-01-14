// Queries for Events
const getEvents = "SELECT * FROM events";
const getEventById = "SELECT * FROM events WHERE ID = $1";
const addEvent = "INSERT INTO events (NAME, DESCRIPTION, DATE_START, DATE_END, CAPACITY, PLACE) VALUES ($1, $2, $3, $4, $5, $6)";
const updateEvent = "UPDATE events SET NAME = $1, DESCRIPTION = $2, DATE_START = $3, DATE_END = $4, CAPACITY = $5, PLACE = $6 WHERE ID = $7";
const deleteEvent = "DELETE FROM events WHERE ID = $1";

// Queries for Users
const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE ID = $1";
const addUser = "INSERT INTO users (NAME, EMAIL, STATUT, PASSWORD, PICTURE) VALUES ($1, $2, $3, $4, $5)";
const updateUser = "UPDATE users SET NAME = $1, EMAIL = $2, STATUT = $3, PASSWORD = $4, PICTURE = $5 WHERE ID = $6";
const deleteUser = "DELETE FROM users WHERE ID = $1";

module.exports = {
    getEvents,
    getEventById,
    addEvent,
    updateEvent,
    deleteEvent,
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
};