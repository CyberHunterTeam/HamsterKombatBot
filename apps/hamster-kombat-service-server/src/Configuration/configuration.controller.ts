import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ConfigurationService } from "./configuration.service";

@swagger.ApiTags("configurations")
@common.Controller("configurations")
export class ConfigurationController {
  constructor(protected readonly service: ConfigurationService) {}

  @common.Post("/create-config")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateConfigFile(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateConfigFile(body);
      }
}
