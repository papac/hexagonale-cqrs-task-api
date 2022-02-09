import { Injectable } from "@nestjs/common";

@Injectable()
export default class LoggerService {
  make(message: string) {
    console.log(message);
  }
}