import {PartialType} from '@nestjs/swagger';
import {CreateSurveyAnswerDto} from './create-surveyAnswer.dto';

export class UpdateSurveyAnswerDto extends PartialType(CreateSurveyAnswerDto) {}
