import * as grpcWeb from 'grpc-web';

import * as caseylucas_second_v1_widget_pb from '../../../caseylucas/second/v1/widget_pb';

import {
  AddWidgetRequest,
  AddWidgetResponse} from './second_api_pb';

export class SecondAPIClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  addWidget(
    request: AddWidgetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: AddWidgetResponse) => void
  ): grpcWeb.ClientReadableStream<AddWidgetResponse>;

}

export class SecondAPIPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  addWidget(
    request: AddWidgetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<AddWidgetResponse>;

}

