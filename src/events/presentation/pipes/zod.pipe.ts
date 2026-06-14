import { ZodSchema } from 'zod/v4';

import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ZodPipe implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}

  public transform(value: any) {
    const result = this.schema.safeParse(value);

    if (!result.success) {
      throw new BadRequestException(result.error.flatten());
    }

    return result.data;
  }
}
