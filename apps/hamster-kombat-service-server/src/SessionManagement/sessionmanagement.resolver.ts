import * as graphql from "@nestjs/graphql";
import { CreateSessionInput } from "../sessionManagement/CreateSessionInput";
import { SessionOutput } from "../sessionManagement/SessionOutput";
import { UpdateSessionInput } from "../sessionManagement/UpdateSessionInput";
import { SessionManagementService } from "./sessionmanagement.service";

export class SessionManagementResolver {
  constructor(protected readonly service: SessionManagementService) {}

  @graphql.Mutation(() => SessionOutput)
  async CreateSession(
    @graphql.Args()
    args: CreateSessionInput
  ): Promise<SessionOutput> {
    return this.service.CreateSession(args);
  }

  @graphql.Mutation(() => SessionOutput)
  async DeleteSession(
    @graphql.Args()
    args: SessionOutput
  ): Promise<SessionOutput> {
    return this.service.DeleteSession(args);
  }

  @graphql.Query(() => [SessionOutput])
  async GetSessions(
    @graphql.Args()
    args: SessionOutput
  ): Promise<SessionOutput[]> {
    return this.service.GetSessions(args);
  }

  @graphql.Mutation(() => SessionOutput)
  async UpdateSession(
    @graphql.Args()
    args: UpdateSessionInput
  ): Promise<SessionOutput> {
    return this.service.UpdateSession(args);
  }
}
