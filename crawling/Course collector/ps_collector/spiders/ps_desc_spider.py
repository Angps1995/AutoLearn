import scrapy
import datetime
import json
from scrapy_splash import SplashRequest
import os
import re

class ps_desc_collector(scrapy.Spider):
    name = "ps_desc_collector"

    with open('ps_collector/ps_data/ps_data.json', 'r') as f:
        URLS_OBJECT = json.load(f)
    
    current_timestamp = datetime.datetime.now()

    def start_requests(self):
        # self.log("Spider commenced at: " + str(self.current_timestamp))
        
        for i in range (0, len(self.URLS_OBJECT)):
            script = """
            function main(splash)
                local url = splash.args.url
                assert(splash:go(url))
                assert(splash:wait(1))
                return {
                    html = splash.html(),
                    index = %d
                }
            end
            """ % (i)

            yield SplashRequest(
                self.URLS_OBJECT[i]["link"], 
                self.parse,
                endpoint='execute',
                args={'lua_source':script}
            )
        self.log("End of crawl")
 


    def parse(self, response):
        # dt = (self.current_timestamp + datetime.timedelta(days=response.data['date'])).strftime("%Y-%m-%d")
        with open('ps_collector/ps_data/ps_data_final.json','w') as f:
            index = response.data["index"]

            description = response.css("div.text-component::text").get()
            self.URLS_OBJECT[index]['description'] = description

            print(self.URLS_OBJECT[index])              
                
            f.write(json.dumps(self.URLS_OBJECT, indent= 4, sort_keys=True))