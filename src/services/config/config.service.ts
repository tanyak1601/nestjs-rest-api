import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class ConfigService {
  constructor() {}

  getAppConfig() {
    return {
      env: process.env.NODE_ENV,
    }
  }
}
