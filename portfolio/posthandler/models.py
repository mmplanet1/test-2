from django.db import models
from django.conf.urls import patterns, url


# Create your models here.

	
class posthandler(models.Model):
	def posthandler(self, request, min, max, number_of_series):
		return ('cacat' + number_of_series)
		#return render_to_response('graph/generate/data', {'form': c['UploadFileForm']},  RequestContext(request))
