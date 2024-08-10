import { Module } from "@nestjs/common";
import { SessionManagementService } from "./sessionmanagement.service";
import { SessionManagementController } from "./sessionmanagement.controller";
import { SessionManagementResolver } from "./sessionmanagement.resolver";

@Module({
  controllers: [SessionManagementController],
  providers: [SessionManagementService, SessionManagementResolver],
  exports: [SessionManagementService],
})
export class SessionManagementModule {}
