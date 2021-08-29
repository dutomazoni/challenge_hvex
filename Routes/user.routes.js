import { user_routes} from '../Controllers';
import { Router } from 'express';

let router = Router();

router.get(
    '/user/:userId',
    user_routes.get_user
);

router.delete(
    '/user/:userId',
    user_routes.delete_user
);
router.put(
    '/user/:userId',
    user_routes.put_user
);

router.post(
    '/user',
    user_routes.post_user
);

router.get(
    '/',
    user_routes.get_ok
);


export default router;
