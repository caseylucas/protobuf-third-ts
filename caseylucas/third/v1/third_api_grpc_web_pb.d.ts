import * as grpcWeb from 'grpc-web';

import * as caseylucas_second_v1_widget_pb from '../../../caseylucas/second/v1/widget_pb';

import {
  GetPopularWidgetsRequest,
  GetPopularWidgetsResponse} from './third_api_pb';

export class ThirdAPIClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getPopularWidgets(
    request: GetPopularWidgetsRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GetPopularWidgetsResponse) => void
  ): grpcWeb.ClientReadableStream<GetPopularWidgetsResponse>;

}

export class ThirdAPIPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  getPopularWidgets(
    request: GetPopularWidgetsRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GetPopularWidgetsResponse>;

}

