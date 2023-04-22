import { IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator"
import { NOT_EMPTY_ERROR, NOT_STRING_ERROR } from "src/common/errors"
import { Skill, User } from "../../entities"

export class createCvDto {

    @IsString()
    name: string

    @IsNotEmpty({ message: NOT_EMPTY_ERROR('name') })
    @IsString({ message: NOT_STRING_ERROR('name') })
    firstname: string

    @Max(99)
    @Min(0)
    @IsNumber({
        allowInfinity: false,
        allowNaN: false,
    })
    age: number

    @IsNotEmpty({ message: NOT_EMPTY_ERROR('cin') })
    @IsString({ message: NOT_STRING_ERROR('cin') })
    cin: string

    @IsNotEmpty({ message: NOT_EMPTY_ERROR('job') })
    @IsString({ message: NOT_STRING_ERROR('job') })
    job: string

    @IsNotEmpty({ message: NOT_EMPTY_ERROR('path') })
    @IsString({ message: NOT_STRING_ERROR('path') })
    path: string

    skills: Skill[]


    user: User

}