import { Injectable } from '@nestjs/common';

@Injectable()
export default class LoggerService {
	make(message: string, context?: Array<any>) {
		console.log(message, context || []);
	}
}
