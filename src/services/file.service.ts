import S3Helper from "@/helpers/s3.helper";


class FileService {
    private s3Helper: S3Helper = new S3Helper();

    public async upload(file): Promise<any> {
        const result = await this.s3Helper.upload(file);
        return result;

    }
}
export default FileService;