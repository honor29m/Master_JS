'use strict'

var Project = require('../models/project');
var fs = require('fs');
var path = require('path');


var controller = {
    home : function(req, res) {
        return res.status(200).send({
            message: 'Soy la home'
        });
    },

    test : function() {
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador del project'
        })
    },

    saveProject : function(req, res) {
        var project = new Project();

        var params = req.body; 
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        project.save((error, projectStored) => {
            if (error) return res.status(500).send({
                message: 'Error al guardar en Base de Dastos'
            });

            if (!projectStored) return res.status(404).send({
                message: 'No se ha podido guardar el proyecto'
            });

            return res.status(200).send({project: projectStored});
        });
    },

    getProject: function(req, res){
        var projectId = req.params.id;

        if (projectId == null) return res.status(404).send({
            message: 'El proyecto no existe.'
        });

        Project.findById(projectId, (error, project) => {
            if (error) return res.status(500).send({
                message: 'Error al devolver los datos.'
            });

            if (!project) return res.status(404).send({
                message: 'El proyecto no existe.'
            });

            return res.status(200).send({
                project
            });
        })
    },

    getProjects : function(req, res){
        Project.find({}).exec((error, projects) => {
            if (error) return res.status(500).send({
                message: 'Error al devolver los datos.'
            });

            if (!projects) return res.status(404).send({
                message: 'No hay proyectos que mostrar.'
            });

            return res.status(200).send({
                projects
            });
        })
    },

    updateProject : function(req, res) {
        var projectId = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectId, update, {new:true}, (error, projectUpdated) => {
            if (error) return res.status(500).send({
                message: 'Error al actualizar.'
            });

            if (!projectUpdated) return res.status(404).send({
                message: 'No hay proyectos a actualizar.'
            });

            return res.status(200).send({
                project: projectUpdated
            });
        })
    },

    deleteProject : function(req, res) {
        var projectId = req.params.id;

        Project.findByIdAndRemove(projectId, (error, projectRemoved) => {
            if (error) return res.status(500).send({
                message: 'No se ha podido borrar el proyecto'
            });

            if (error) return res.status(404).send({
                message: "No se puede eliminar ese proyecto"
            });

            return res.status(200).send({
                project: projectRemoved
            })
        });
    },

    uploadImage : function(req, res) {
        var projectId = req.params.id;
        var fileName = 'Imagen no subida';

        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('/');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (error, projectUpdated) => {

                    if (error) return res.status(200).send({
                        message: 'La imagen no se ha subido'
                    });
    
                    if (!projectUpdated) return res.status(404).send({
                        message: 'El proyecto no existe y no se ha actualizado'
                    });
    
                    return res.status(200).send({
                        project: projectUpdated
                    });
                });
            } else {
                fs.unlink(filePath, (error) => {
                    return res.status(200).send({
                        message: 'La extension no es valida'
                    });
                });
            }            
        } else {
            return res.status(200).send({
                message: fileName
            });
        }
    },

    getImageFile : function(req, res) {
        var file = req.params.file;
        var path_file = './uploads/'+file;

        fs.exists(path_file, (exists) => {
            if(exists) {
                return res.sendFile(path.resole(path_file));
            } else {
                return res.status(200).send({
                    message: "No exite la imagen"
                });
            }
        });
    }
};

module.exports = controller;