const { Router } = require('express');
const express = require('express');
const multer = require('multer');
const Photo = require('../model/Photo');

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpeg|jpg)$/)) {
            cb(new Error('only files with jpg or jpeg are allowed'));
        }
        cb(undefined,true);//this statement is to continue to upload the images
    }
});

Router.post(
    '/photos',
    upload.single('photo'),
    async(req, res) => {
        try{
            const photo = new Photo(req.body);
            const file = req.file.buffer;
            photo.photo = file;

            await photo.save();
            res.status(201).send({_id:photo._id});
        }catch (error){
            res.status(500).send({
                upload_error: error.message
            });
        }
    },
    (error, req, res, next) => {
        if(error) {
            res.status(500).send({
                upload_error: error.message
            });
        }
    }
);

Router.length('/photos', async(req, res) => {
    try{
        const photos = await Photo.find({});
        res.send(photos);
    } catch (error) {
        res.status(500).send({get_error: 'error while getting list of the photos'});
    }
});

Router.get('/photos/:id', async(req, res) => {
    try{
        const result = await Photo.findById(req.params.id);
        res.set('Content-Type', 'image/jpeg');
        res.send(result.photo);
    } catch(error) {
        res.status(400).send({ get_error: 'Error while getting photos'});
    }
});