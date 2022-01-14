const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// Routes for Events
router.get("/events/", controller.getEvents);
router.get("/events/:id", controller.getEventById);
router.put("/events/", controller.addEvent);
router.post("/events/:id", controller.updateEvent);
router.delete("/events/:id", controller.deleteEvent);

// Routes for Users
router.get("/users/", controller.getUsers);
router.get("/users/:id", controller.getUserById);
router.put("/users/", controller.addUser);
router.post("/users/:id", controller.updateUser);
router.delete("/users/:id", controller.deleteUser);

module.exports = router;
