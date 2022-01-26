export const TO_MANY_FILES_ERROR = new Error('TO_MANY_FILES');

export class HAVE_REJECTED_FILES_ERROR extends Error {
  constructor(rejectedFiles: File[]) {
    const newMessage = `올라가지 않은 파일이 있습니다. : ${rejectedFiles.map((file: File) => file.name)}`;
    super(newMessage);
    this.name = 'HAVE_REJECTED_FILES';
  }
}

export const NO_DROP_CALLBACK_ERROR = new Error('NO_DROP_CALLBACK');

export const INVALID_EVENT_ERROR = new Error('INVALID_EVENT');
