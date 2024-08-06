import { Controller, Get } from '@nestjs/common';
import { Authentication } from '@nestjs-cognito/auth';
// import { ApiBearerAuth } from '@nestjs/swagger';

// @ApiBearerAuth()
@Controller('v1/policies')
@Authentication()
export class PoliciesController {
  @Get()
  findAll(): string {
    return 'This action returns all policies';
  }
}
