import { errorMiddleware } from './error.middleware';
import { verifyJWT as verifyJwtMiddleware } from './verifyJwt.middleware';
import { validationMiddleware } from './validation.middleware';
import { hasRoleMiddleware, isAdminMiddleware } from './verifyRole.middleware';
import { hasMongoIdOrCollection, hasFile } from './customValidator.middleware';

export {
   errorMiddleware,
   verifyJwtMiddleware,
   validationMiddleware,
   hasRoleMiddleware,
   isAdminMiddleware,
   hasMongoIdOrCollection,
   hasFile,
};
