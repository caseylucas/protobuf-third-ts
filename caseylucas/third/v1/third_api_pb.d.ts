import * as jspb from "google-protobuf"

import * as caseylucas_second_v1_widget_pb from '../../../caseylucas/second/v1/widget_pb';

export class GetPopularWidgetsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPopularWidgetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPopularWidgetsRequest): GetPopularWidgetsRequest.AsObject;
  static serializeBinaryToWriter(message: GetPopularWidgetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPopularWidgetsRequest;
  static deserializeBinaryFromReader(message: GetPopularWidgetsRequest, reader: jspb.BinaryReader): GetPopularWidgetsRequest;
}

export namespace GetPopularWidgetsRequest {
  export type AsObject = {
  }
}

export class GetPopularWidgetsResponse extends jspb.Message {
  getWidgetsList(): Array<caseylucas_second_v1_widget_pb.Widget>;
  setWidgetsList(value: Array<caseylucas_second_v1_widget_pb.Widget>): void;
  clearWidgetsList(): void;
  addWidgets(value?: caseylucas_second_v1_widget_pb.Widget, index?: number): caseylucas_second_v1_widget_pb.Widget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPopularWidgetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPopularWidgetsResponse): GetPopularWidgetsResponse.AsObject;
  static serializeBinaryToWriter(message: GetPopularWidgetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPopularWidgetsResponse;
  static deserializeBinaryFromReader(message: GetPopularWidgetsResponse, reader: jspb.BinaryReader): GetPopularWidgetsResponse;
}

export namespace GetPopularWidgetsResponse {
  export type AsObject = {
    widgetsList: Array<caseylucas_second_v1_widget_pb.Widget.AsObject>,
  }
}

