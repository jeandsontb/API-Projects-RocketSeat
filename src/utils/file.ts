import fs from "fs";

export const deleteFile = async (fileName: string): Promise<null> => {
  try {
    await fs.promises.stat(fileName);
  } catch {
    return;
  }

  await fs.promises.unlink(fileName);
};
