import { config, S3 } from 'aws-sdk';

class S3Helper {
    private s3: S3 = new S3();

    public async upload(file): Promise<any> {
        config.update({
            accessKeyId: process.env.AWS_SECRET_KEY,
            secretAccessKey: process.env.AWS_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });
        const fileContent = Buffer.from(file.data, "binary");
        try {
            const params = {
                Bucket: process.env.AWS_BUCKET,
                Key: `${new Date().getMilliseconds()}.jpg`,
                Body: fileContent,
            };
            const result = await this.s3.upload(params).promise();
            return result;
        } catch (error) {
            throw error;
        }

    }


}
export default S3Helper;