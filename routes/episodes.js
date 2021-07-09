var express = require('express');
var router = express.Router();
const episodeService = require('../services/episodeService')

router.get('/', async (req, res) => {
    try {
        const episodes = await episodeService.getAllEpisodes();
        res.status(200).json(episodes);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const episode = await episodeService.getEpisodeById(id);
        res.status(200).json(episode);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

});

router.post('/', async (req, res) => {
    try {
        const episode = await episodeService.createEpisode(req.body);
        res.status(200).json(episode);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const editedEpisdoe = await episodeService.editEpisode(id, req.body)
        res.status(200).json(editedEpisdoe)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const destroyedRow = await episodeService.removeEpisode(id)
        res.sendStatus(200);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

});

module.exports = router;