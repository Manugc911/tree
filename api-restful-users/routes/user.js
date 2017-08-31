'use strict'

var express = require('express');
var UserController = require('../controllers/user');
var api = express.Router();


api.get('/user/:id',UserController.getUser);
api.get('/userRL/:userName',UserController.getUserRL);
api.get('/users/',UserController.getUsers);
api.post('/user',UserController.saveUser);
api.put('/user/:id',UserController.updateUser);
api.delete('/user/:id',UserController.deleteUser);

api.get('/PlatformsData',UserController.getPlatformsData);
api.get('/SeasonsData',UserController.getSeasonsData);
api.get('/PlaylistData',UserController.getPlaylistsData);
api.get('/TiersData',UserController.getTiersData);
api.get('/Player',UserController.getPlayer);
api.get('/SearchPlayer',UserController.searchPlayers);
api.get('/StatLeaderboard',UserController.getStatLeaderboard);
api.get('/RankedLeaderboard',UserController.getRankedLeaderboard);
api.get('/checkPass/:userName',UserController.checkPass);



        
module.exports = api;