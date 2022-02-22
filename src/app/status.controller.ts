import { Controller, Get } from '@nestjs/common';

@Controller('api/ping')
export default class StatusController {
	@Get()
	status() {
		return { statusCode: 200, message: 'Ok' };
	}
}
