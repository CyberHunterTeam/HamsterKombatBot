import * as graphql from "@nestjs/graphql";
import { ConfigurationService } from "./configuration.service";

export class ConfigurationResolver {
  constructor(protected readonly service: ConfigurationService) {}

  @graphql.Mutation(() => String)
  async CreateConfigFile(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateConfigFile(args);
  }
}
