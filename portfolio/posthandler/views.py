from django.shortcuts import render
import calendar
from django.http import HttpResponse
from django.views.generic import View
from django.template import RequestContext
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
import random
from collections import defaultdict
import json
from datetime import date



# Create your views here.

class graph(View):
	def post(self, request):
		today = date.today()
		year = date.today().year
		min = int(request.POST.get("min", ""))
		max = int(request.POST.get("max", ""))
		nos = int(request.POST.get("nos", ""))
		def scatter(min, max, nos):
			cal = calendar.Calendar()
			data = []
			final = {}
			serie = {}
			for z in range(nos):
				final[z] = []
				serie['data'] = []
				for x in range(1, 13):
					month = x
					partial = []
					for y in cal.itermonthdates(year, month):
						item = random.uniform(min,max)
						date = y.strftime('%Y-%m-%d')
						partial.append([date, float("%.2f" % item)])
					serie['data'].append(partial)
				final[z] = serie
			return final
		return HttpResponse(json.dumps(scatter(min, max, nos)))

def home(request):
	return render(request, "home.html", {})		

def scatter(request):
	return render(request, "scatter.html", {})

def line(request):
	return render(request, "line.html", {})