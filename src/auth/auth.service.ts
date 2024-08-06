import { Injectable } from '@nestjs/common';
import {
  CognitoIdentityProviderClient,
  InitiateAuthCommand,
  InitiateAuthCommandInput,
} from '@aws-sdk/client-cognito-identity-provider';
import { AuthLoginDto } from './auth-login.dto';
import { ConfigService } from '@nestjs/config';

interface ICognitoClient {
  region: string;
}

export const CognitoClient = ({ region }: ICognitoClient) =>
  new CognitoIdentityProviderClient({
    region,
  });

@Injectable()
export class AuthService {
  private readonly cognitoClient: CognitoIdentityProviderClient;

  constructor(private readonly configService: ConfigService) {
    // Initialize AWS Cognito SDK client
    this.cognitoClient = CognitoClient({
      region: configService.get('COGNITO_REGION') as string,
    });
  }

  // Prerequisite: ensure the user is confirmed (see https://stackoverflow.com/questions/40287012/how-to-change-user-status-force-change-password)
  async authenticateUser(authLoginUserDto: AuthLoginDto) {
    const { email, password } = authLoginUserDto;

    const params: InitiateAuthCommandInput = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: this.configService.get('COGNITO_CLIENT_ID') as string,
      AuthParameters: {
        USERNAME: email,
        PASSWORD: password,
      },
    };

    return await this.cognitoClient.send(
      new InitiateAuthCommand({ ...params }),
    );
  }
}
