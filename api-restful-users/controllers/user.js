'use strict'

var User = require('../models/user');
// RLCS API
var rls = require('rls-api');

var client = new rls.Client({
    token: "9G9R34G3JFVWI9FUTWDRDQD8KZ1AUC2L"
});



function getPlatformsData(req, res) {

    client.getPlatformsData(function (status, data) {
        console.log("pidiendo")
        if (status === 200) {
            console.log("-- Platforms data:");
            console.log(data);
            res.status(200).send({
                data
            });
        }
    });


}

function getSeasonsData(req, res) {
    client.getSeasonsData(function (status, data) {
        if (status === 200) {
            console.log("-- Seasons data:");
            console.log(data);
            res.status(200).send({
                message: "--- Seasons Data",
                data
            })

        }
    });
}

function getPlaylistsData(req, res) {
    client.getPlaylistsData(function (status, data) {
        if (status === 200) {
            console.log("-- Playlists data:");
            console.log(data);
        }
    });
}

function getTiersData(req, res) {
    client.getTiersData(function (status, data) {
        if (status === 200) {
            console.log("-- Tiers data:");
            console.log(data);
        }
    });
}

function getPlayer(req, res) {
    client.getPlayer("76561198033338223", rls.platforms.STEAM, function (status, data) {
        if (status === 200) {
            console.log("-- Player Data:");
            console.log("   Display name: " + data.displayName);
            console.log("   Goals: " + data.stats.goals);
        }
    });
}

function searchPlayers(req, res) {
    client.searchPlayers("Jhzer", function (status, data) {
        if (status === 200) {
            console.log("-- Player Search Data:");
            console.log("   Results: " + data.results);
            console.log("   Total Results: " + data.totalResults);
            res.status(200).send({
                data
            });
        }
    });
}

function getRankedLeaderboard(req, res) {
    client.getRankedLeaderboard(rls.rankedPlaylists.DUEL, function (status, data) {
        if (status === 200) {
            console.log("-- Ranked Leaderboard:");
            console.log("   Leaderboard count: " + data.length);
            console.log("   Duel Number #1 Player: " + data[0].displayName);
        }
    });
}

function getStatLeaderboard(req, res) {
    client.getStatLeaderboard(rls.statType.GOALS, function (status, data) {
        if (status === 200) {
            console.log("-- Stat Goals Leaderboard:");
            console.log("   Leaderboard count: " + data.length);
            console.log("   Goals #1 Player: " + data[0].displayName);
        }
    });
}

function getUserRL(req, res) {
    var user = req.params.userName;
    var name = "Pitufo0";
    client.searchPlayers(name, function (status, data) {
        if (status === 200) {
            console.log(name);
            console.log("-- Player Search Data:");
            console.log("   Results: " + data.results);
            console.log("   Total Results: " + data.totalResults);
            res.status(200).send({
                data
            });
        }
    });
}

function getUser(req, res) {
    var userId = req.params.id;

    User.findById(userId, function (err, user) {
        if (err) {
            res.status(500).send({
                message: 'Error al devolver el marcador.'
            });
        } else {
            if (!user) {
                res.status(404).send({
                    message: ' No hay marcadores'
                });
            } else {
                res.status(200).send({
                    user
                });
            }
        }

    });

}

function getUsers(req, res) {
    User.find({}, (err, user) => {
        if (err) {
            res.status(500).send({
                message: 'Error al devolver los marcadores'
            });
        }
        if (!user) {
            res.status(404).send({
                message: 'No hay marcadores'
            });

        } else {
            res.status(200).send({
                user
            });
        }


    });

}

function saveUser(req, res) {
    var user = new User();

    var params = req.body;
    user.userName = params.userName;
    user.wins = params.wins;
    user.totalGames = params.totalGames;
    user.pass = params.pass;

    user.save((err, userStored) => {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el marcador'
            });
        } else {
            res.status(200).send({
                user: userStored
            });
        }
        //console.log("favorito guardado"+favoritoStored);
    });
    //var promise = favorito.save();


}

function updateUser(req, res) {
    var userId = req.params.id;
    var update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdated) => {
        if (err) {
            res.status(500).send({
                message: 'Error al guardar el marcador'
            });
        } else {
            res.status(200).send({
                userUpdated: userUpdated
            });
        }

    });

}

function deleteUser(req, res) {
    var userId = req.params.id;
    User.findById(userId, function (err, user) {

        if (err) {
            res.status(500).send({
                message: 'Error al devolver el marcador'
            });
        }
        if (!user) {
            res.status(200).send({
                message: 'No hay marcador'
            });
        } else {
            user.remove(err => {

                if (err) {

                    res.status(500).send({
                        message: 'El marcador no se ha borrado'
                    });
                } else {
                    res.status(200).send({
                        message: 'El marcador se ha eliminado!'
                    });
                }
            });

        }
    });
}

function deleteUsers(req, res) {
    User.find({}, (err, user) => {
        if (err) {
            res.status(500).send({
                message: 'Error al devolver los marcadores'
            });
        }
        if (!user) {
            res.status(404).send({
                message: 'No hay marcadores'
            });

        }
        var errNum = 0;
        user.forEach((user) => {
            user.remove(err => {
                if (err) {
                    errNum++;
                }
            });

        });
        if (errNum != 0) {

            res.status(500).send({
                message: 'Los marcadores no se han borrado'
            });
        } else {
            res.status(200).send({
                message: 'Los marcadores se han eliminado!'
            });
        }
    });
}


function checkPass(req, res) {
    var user = new User();
    var passStored = "";
    var params = req.body;
    user.userName = params.userName;
    user.wins = params.wins;
    user.totalGames = params.totalGames;
    user.pass = params.pass;

    console.log(req.params.userName);
    User.findOne({userName:req.params.userName},'userName',function(err,user){
        if (err)  console.log("Is not!");
        

        console.log("%s is in database.", user.userName);
        passStored = user.pass;
        res.status(200).send({message:"Its here", user});
    });
    if (passStored == user.pass) {
        res.status(200).send({
            message: 'Contraseña Correcta'
        });


        user.save((err, userStored) => {
            if (err) {
                res.status(500).send({
                    message: 'Error al guardar el marcador'
                });
            } else {
                res.status(200).send({
                    user: userStored
                });
            }
            //console.log("favorito guardado"+favoritoStored);
        });
    }
}


module.exports = {

    getUser,
    getUserRL,
    saveUser,
    updateUser,
    deleteUser,
    deleteUser,
    getUsers,
    getPlatformsData,
    getSeasonsData,
    getPlaylistsData,
    getTiersData,
    getPlayer,
    searchPlayers,
    getRankedLeaderboard,
    getStatLeaderboard,
    checkPass
}
