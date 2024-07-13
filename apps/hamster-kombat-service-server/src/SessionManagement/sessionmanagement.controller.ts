import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SessionManagementService } from "./sessionmanagement.service";
import { UpdateSessionInput } from "../sessionManagement/UpdateSessionInput";
import { SessionOutput } from "../sessionManagement/SessionOutput";

@swagger.ApiTags("sessionManagements")
@common.Controller("sessionManagements")
export class SessionManagementController {
  constructor(protected readonly service: SessionManagementService) {}

  @common.Post("/sessions")
  @swagger.ApiOkResponse({
    type: SessionOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSession(
    @common.Body()
    body: UpdateSessionInput
  ): Promise<SessionOutput> {
        return this.service.CreateSession(body);
      }

  @common.Delete("/sessions/:id")
  @swagger.ApiOkResponse({
    type: SessionOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteSession(
    @common.Body()
    body: UpdateSessionInput
  ): Promise<SessionOutput> {
        return this.service.DeleteSession(body);
      }

  @common.Get("/sessions")
  @swagger.ApiOkResponse({
    type: SessionOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSessions(
    @common.Body()
    body: UpdateSessionInput
  ): Promise<SessionOutput[]> {
        return this.service.GetSessions(body);
      }

  @common.Patch("/sessions/:id")
  @swagger.ApiOkResponse({
    type: SessionOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateSession(
    @common.Body()
    body: UpdateSessionInput
  ): Promise<SessionOutput> {
        return this.service.UpdateSession(body);
      }
}
