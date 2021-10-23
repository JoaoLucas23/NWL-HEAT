import { Router } from "express";
import { AuthenticateUserControler } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessageController } from "./controller/Get3LastMessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticate";

const router = Router();

router.post("/authenticate", new AuthenticateUserControler().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessageController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle)

export { router };
