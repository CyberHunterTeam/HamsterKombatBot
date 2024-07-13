import { Injectable } from "@nestjs/common";
import { CreateSessionInput } from "../sessionManagement/CreateSessionInput";
import { SessionOutput } from "../sessionManagement/SessionOutput";
import { UpdateSessionInput } from "../sessionManagement/UpdateSessionInput";

@Injectable()
export class SessionManagementService {
  constructor() {}
  async CreateSession(args: CreateSessionInput): Promise<SessionOutput> {
    throw new Error("Not implemented");
  }
  async DeleteSession(args: SessionOutput): Promise<SessionOutput> {
    throw new Error("Not implemented");
  }
  async GetSessions(args: SessionOutput): Promise<SessionOutput[]> {
    throw new Error("Not implemented");
  }
  async UpdateSession(args: UpdateSessionInput): Promise<SessionOutput> {
    throw new Error("Not implemented");
  }
}
