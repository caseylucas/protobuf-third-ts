import * as jspb from "google-protobuf"

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';

export class Widget extends jspb.Message {
  getWidgetId(): number;
  setWidgetId(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreatedAtTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAtTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasCreatedAtTime(): boolean;
  clearCreatedAtTime(): void;

  getUpdatedAtTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAtTime(value?: google_protobuf_timestamp_pb.Timestamp): void;
  hasUpdatedAtTime(): boolean;
  clearUpdatedAtTime(): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Widget.AsObject;
  static toObject(includeInstance: boolean, msg: Widget): Widget.AsObject;
  static serializeBinaryToWriter(message: Widget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Widget;
  static deserializeBinaryFromReader(message: Widget, reader: jspb.BinaryReader): Widget;
}

export namespace Widget {
  export type AsObject = {
    widgetId: number,
    description: string,
    createdAtTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAtTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

