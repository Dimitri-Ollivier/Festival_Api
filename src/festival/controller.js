const pool = require("../../db");
const queries = require('./queries');

// Controller for Events
const getEvents = (req, res) => {
    pool.query(queries.getEvents, (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const getEventById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getEventById, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const addEvent = (req, res) => {
    const { name, description, date_start, date_end, capacity, place } = req.body;

    pool.query(queries.addEvent, [name, description, date_start, date_end, capacity, place], (error, results) => {
        if (error) throw error;
        res.status(201).send("Event Created Successfully!");
    });
};

const updateEvent = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, date_start, date_end, capacity, place } = req.body;
    pool.query(queries.getEventById, [id], (error, results) => {
        if (error) throw error;
        const noPicturesFound = !results.rows.length;
        if (noPicturesFound) {
            res.send("Events does not exist in the database.");
        }

        pool.query(queries.updateEvent, [name, description, date_start, date_end, capacity, place, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Event Deleted Successfully!");
        });
    });
};

const deleteEvent = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEventById, [id], (error, results) => {
        if (error) throw error;
        const noPicturesFound = !results.rows.length;
        if (noPicturesFound) {
            res.send("Event does not exist in the database.");
        }

        pool.query(queries.deleteEvent, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("Event Deleted Successfully!");
        });
    });
};

// Controller for Users
const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;

        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { name, email, statut, password, picture } = req.body;

    pool.query(queries.addUser, [name, email, statut, password, picture], (error, results) => {
        if (error) throw error;
        res.status(201).send("User Created Successfully!");
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email, statut, password, picture } = req.body;
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        const noUsersFound = !results.rows.length;
        if (noUsersFound) {
            res.send("User does not exist in the database.");
        }

        pool.query(queries.updateUser, [name, email, statut, password, picture, id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User Deleted Successfully!");
        });
    });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        const noUsersFound = !results.rows.length;
        if (noUsersFound) {
            res.send("Users does not exist in the database.");
        }

        pool.query(queries.deleteUser, [id], (error, results) => {
            if (error) throw error;
            res.status(200).send("User Deleted Successfully!");
        });
    });
};

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