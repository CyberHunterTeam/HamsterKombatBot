import { Injectable } from "@nestjs/common";

@Injectable()
export class ConfigurationService {
  constructor() {}
  async CreateConfigFile(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
