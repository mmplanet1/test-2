from django.conf.urls import patterns, url

from posthandler import views

urlpatterns = patterns('',
    url(r'^graph/generate/data$', posthandler.as_view(), name='posthandler'),
)