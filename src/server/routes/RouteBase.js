import bodyparser from 'body-parser';
import {ArticleRouter} from './ArticleRouter.js';
import {EventRouter} from './EventRouter.js';
import {LaunchRouter} from './LaunchRouter.js';

function Routes(app) {
    app.use(
        bodyparser.json(),
        ArticleRouter,
        EventRouter,
        LaunchRouter
    );
};

export default Routes;