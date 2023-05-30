const api_Key = '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';
const org_id = 'org-X7RWD6vA16b3nNqI27WpWuTW';

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization:org_id,
  apiKey: api_Key,
});
const openai = new OpenAIApi(configuration);


module.exports.sendToChatGpt = async(req,res)=>
{
    const {owner,msg} = req.body;

    try 
    {
        console.log(`[sendToChatGpt.controller.js (sendToChatGpt)]::::: owner "${owner}" msg "${msg}"`);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: msg}],
          });
          return  res.status(200).json(response.data.choices[0].message);
         
    } 
    catch (error) 
    {
        console.log('error while sending msg to chat GPT ',error);
        
        setTimeout (()=>
        {
            return res.status(200).json({
                content: `its Fake Test Response Since ChatGpt Sending error Response: \n StatusCode:${error.response.status} \n StatusText:${error.response.statusText}`
            
         });
        },1000);
    }
   
}



