import express from 'express';
import { StaticRouter, matchPath } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import React from 'react';
import path from 'path';

const render = (App, routes, fileLocation) => {
    // const statsFile = path.join(fileLocation, 'loadable-stats.json');
    // const extractor = new ChunkExtractor({ statsFile });
    const route = express.Router();
    route.get('/*', (req, response) => {
        console.log('At render req.url', req.url); // eslint-disable-line
        if (!App) {
            return response.render('index.ejs', {
                title: '', html: '', appData: {}, tags: '', links: ''
            });
        }
        // const context = {};
        return response.json({ rp: 'ok' });
    });
    return route;
};

export default render;
