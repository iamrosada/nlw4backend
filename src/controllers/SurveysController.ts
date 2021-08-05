import { Response, Request } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

class SurveyController{
    async create(request :Request , response:Response){
        const {title, description} = request.body;

        const surveyRepository = getCustomRepository(SurveysRepository);

        //realizou a pesquisa 
        const servey = surveyRepository.create({
            title,
            description                                             
        })
        //guardar os dados da pesquisa
        await surveyRepository.save(servey);

        //retornar a pesquisa que ele criou 
        return response.status(201).json(servey);
    }

    //mostrar todas as pesquisas criadas
    async show(request:Request, response:Response){
        const surveyRepository = getCustomRepository(SurveysRepository); 
        
        const all = await surveyRepository.find();

        return response.json(all)
    }


}

export {SurveyController}