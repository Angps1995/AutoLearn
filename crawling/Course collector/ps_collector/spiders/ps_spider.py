import scrapy
import datetime
import json
from scrapy_splash import SplashRequest
import os
import re

class ps_collector(scrapy.Spider):
    name = "ps_collector"
    
    TOPICS_TO_CRAWL = [
        "Web Development",
        "Mobile Development",
        "JavaScript",
        "c#",
        "Python",
        "Node.js",
        "C++",
        "Ruby on Rails",
        "Java",
        "React"
    ]

    # NO_DAYS_TO_CRAWL = 4
    urls = [
            "https://www.pluralsight.com/search?q={}&categories=course"
    ]
    
    current_timestamp = datetime.datetime.now()

    def start_requests(self):
        # self.log("Spider commenced at: " + str(self.current_timestamp))
        
        for i in range (0, len(self.TOPICS_TO_CRAWL)):
            script = """
            function main(splash)
                local url = splash.args.url
                assert(splash:go(url))
                assert(splash:wait(1))
                return {
                    html = splash.html(),
                }
            end
            """

            yield SplashRequest(
                self.urls[0].format(self.TOPICS_TO_CRAWL[i]), 
                self.parse,
                endpoint='execute',
                args={'lua_source':script}
            )
        self.log("End of crawl")

    def parse(self, response):
        with open('ps_collector/ps_data/ps_data.json','a') as f:

            course_arr = []
            courses = response.xpath('//div[h4 = "courses"]').css("div.search-result")

            for course in courses:
                course_dict = {
                    "name": "",
                    "votes": 0,
                    "link": "",
                    "description": "",
                    "difficulty": "Beginner",
                    "tags": [],
                    "topic": ""
                }

                course_dict["name"] = course.css("div.search-result__title a::text").get()
                print(course_dict["name"])
                vote_result = re.findall(r'\d+',''.join(course.css("div.search-result__rating::text").getall()))
                if (len(vote_result) > 0):
                    course_dict["votes"] = vote_result[0]
                course_dict["link"] = "https://www.pluralsight.com" + course.css("div.search-result__title").xpath('./a/@href').extract()[0]
                course_dict["difficulty"] = course.css("div.search-result__level::text").get()

                course_dict["topic"] = re.findall(r'(?<=\?q=)(.*)(?=\&)',response.url)[0]
                course_arr.append(course_dict)
              
                
            f.write(json.dumps(json.load(f).append(course_arr), indent= 4, sort_keys=True))