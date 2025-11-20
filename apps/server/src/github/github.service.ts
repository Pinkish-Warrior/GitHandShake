import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Octokit } from '@octokit/rest';
import { App } from '@octokit/app';

@Injectable()
export class GithubService {
  private octokit: Octokit;
  private app: App;

  constructor(private readonly configService: ConfigService) {
    const appId = this.configService.get<number>('GITHUB_APP_ID');
    const privateKey = this.configService.get<string>('GITHUB_PRIVATE_KEY');
    const clientId = this.configService.get<string>('GITHUB_CLIENT_ID');
    const clientSecret = this.configService.get<string>('GITHUB_CLIENT_SECRET');

    if (!appId || !privateKey || !clientId || !clientSecret) {
      throw new InternalServerErrorException('Missing GitHub App configuration environment variables.');
    }

    this.app = new App({
      appId,
      privateKey,
      oauth: {
        clientId,
        clientSecret,
      },
    });

    this.octokit = new Octokit(); // Initialize without auth for now, will use installation token later
  }

  getGithubAppId(): number {
    return this.configService.get<number>('GITHUB_APP_ID');
  }

  private async getInstallationAccessToken(owner: string, repo: string): Promise<string> {
    const installation = await this.app.octokit.request('GET /repos/{owner}/{repo}/installation', {
      owner,
      repo,
    });

    const authentication = await this.app.getInstallationAccessToken({
      installationId: installation.data.id,
    });

    return authentication.token;
  }

  async findGoodFirstIssues(owner: string, repo: string): Promise<any[]> {
    const token = await this.getInstallationAccessToken(owner, repo);
    const octokit = new Octokit({ auth: token });

    const { data: issues } = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      state: 'open',
      labels: 'good first issue', // Filter by 'good first issue' label
    });

    return issues;
  }
}
