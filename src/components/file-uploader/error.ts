export const TO_MANY_FILES = new Error('TO_MANY_FILES');

export class HAVE_REJECTED_FILES extends Error {
  constructor(rejectedFiles: File[]) {
    const newMessage = `올라가지 않은 파일이 있습니다. : ${rejectedFiles.map((file: File) => file.name)}`;
    super(newMessage);
    this.name = 'HAVE_REJECTED_FILES';
  }
}

export const NO_DROP_CALLBACK = new Error('NO_DROP_CALLBACK');
