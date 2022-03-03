import { CanActivate, createParamDecorator, ExecutionContext, Injectable } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";
// import any = jasmine.any;

// @Injectable()
export const Me = createParamDecorator((data: any, context: ExecutionContextHost) => {
  const request = context.switchToHttp().getRequest()
  return request.user
})