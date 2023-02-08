import bodyparser from 'body-parser';
import {ArticleRouter} from './ArticleRouter.js';

function Routes(app) {
    app.use(
        bodyparser.json(),
        ArticleRouter
    );
};

export default Routes;