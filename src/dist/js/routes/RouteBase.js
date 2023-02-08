import bodyParser from 'body-parser';
import { ArticleRouter } from './articleRoutes.js';
function Routes(app) {
    app.use(bodyParser.json(), ArticleRouter);
}
;
export default Routes;
