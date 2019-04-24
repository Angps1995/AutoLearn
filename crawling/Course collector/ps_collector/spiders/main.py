from .ps_spider import ps_collector
from .ps_desc_spider import ps_desc_collector

from scrapy.crawler import CrawlerProcess

process = CrawlerProcess()
process.crawl(ps_collector)
process.crawl(ps_desc_collector)
process.start()