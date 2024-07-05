import * as mongoose from 'mongoose';
import ticketModel from '../models/daomodels/ticket';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class ticketDao {
    private ticket = ticketModel;

    

    constructor() { }
    
    public async GetEntityById(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GetEntityById');

    

    
    
    
    this.ticket.findById(ticketId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Delete(ticketId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: Delete');

    

    
    
    
    this.ticket.findByIdAndRemove(ticketId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: Update');

    

    
    
    
    this.ticket.findOneAndUpdate({ _id: ticketData._id }, ticketData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: Create');

    let temp = new ticketModel(ticketData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(ticketData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into ticketDao.ts: GetNounCreatedBy');

    

    
    
    
    this.ticket.aggregate(([
                        { $match: { $and: [{ created_by: ticketData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from ticketDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}