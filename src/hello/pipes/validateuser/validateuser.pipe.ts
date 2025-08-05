import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Validating user data:', value);

    const ageNumber = parseInt(value.age, 10); // Ensure age is a number

    if (isNaN(ageNumber) || ageNumber < 0) {
      throw new HttpException('Invalid age provided', HttpStatus.BAD_REQUEST);

    }

    return {
      ...value,
      age: ageNumber
    }
  }
}
