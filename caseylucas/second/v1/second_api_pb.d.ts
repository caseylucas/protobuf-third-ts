import * as jspb from "google-protobuf"

import * as caseylucas_second_v1_widget_pb from '../../../caseylucas/second/v1/widget_pb';

export class AddWidgetRequest extends jspb.Message {
  getWidget(): caseylucas_second_v1_widget_pb.Widget | undefined;
  setWidget(value?: caseylucas_second_v1_widget_pb.Widget): void;
  hasWidget(): boolean;
  clearWidget(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWidgetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddWidgetRequest): AddWidgetRequest.AsObject;
  static serializeBinaryToWriter(message: AddWidgetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWidgetRequest;
  static deserializeBinaryFromReader(message: AddWidgetRequest, reader: jspb.BinaryReader): AddWidgetRequest;
}

export namespace AddWidgetRequest {
  export type AsObject = {
    widget?: caseylucas_second_v1_widget_pb.Widget.AsObject,
  }
}

export class AddWidgetResponse extends jspb.Message {
  getWidget(): caseylucas_second_v1_widget_pb.Widget | undefined;
  setWidget(value?: caseylucas_second_v1_widget_pb.Widget): void;
  hasWidget(): boolean;
  clearWidget(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddWidgetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddWidgetResponse): AddWidgetResponse.AsObject;
  static serializeBinaryToWriter(message: AddWidgetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddWidgetResponse;
  static deserializeBinaryFromReader(message: AddWidgetResponse, reader: jspb.BinaryReader): AddWidgetResponse;
}

export namespace AddWidgetResponse {
  export type AsObject = {
    widget?: caseylucas_second_v1_widget_pb.Widget.AsObject,
  }
}

