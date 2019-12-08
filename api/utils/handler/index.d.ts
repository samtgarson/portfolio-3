import { NowRequest } from '@now/node'

interface ServiceResponse {
  body?: string | number | { [key: string]: any };
  status?: number;
}

type Service = (req: NowRequest) => Promise<ServiceResponse | void>;

declare function Handler (service: Service): void;

export = Handler;
