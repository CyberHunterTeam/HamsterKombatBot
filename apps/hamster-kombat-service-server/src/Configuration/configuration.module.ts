import { Module } from "@nestjs/common";
import { ConfigurationService } from "./configuration.service";
import { ConfigurationController } from "./configuration.controller";
import { ConfigurationResolver } from "./configuration.resolver";

@Module({
  controllers: [ConfigurationController],
  providers: [ConfigurationService, ConfigurationResolver],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
